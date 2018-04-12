import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from "firebase";
import {Facebook} from "@ionic-native/facebook";
import {GooglePlus} from '@ionic-native/google-plus';
import {ToolsProvider} from "../tools/tools";
import {AlertController} from "ionic-angular";
import {ValidationProvider} from "../tools/validations";
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthenticationProvider {


    constructor(private dbAuth: AngularFireAuth, private db: AngularFireDatabase, private facebook: Facebook, private google: GooglePlus, public storage: Storage, public tools: ToolsProvider, public alertCtrl: AlertController, public validation: ValidationProvider) {

    }


    /*
    https://firebase.google.com/docs/auth/web/manage-users?authuser=0
     */
    forgotPassword(emailAddress: string) {
        let promise = new Promise((resolve, reject) => {

            let auth = firebase.auth();

            auth.sendPasswordResetEmail(emailAddress).then(function () {
                resolve("Success");
            }).catch(function (error) {
                reject(error);
            });
        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error;
        });

    }

    // Firebase Authentication error list

    firebaseAuthenticationError(error: string) {

        if (error == "auth/invalid-email")
            this.tools.presentToast("bottom", 'Sorry, we don\'t know that email...yet! U+1F61C');

        if (error == "auth/user-disabled")
            this.tools.presentToast("bottom", "Sorry, looks like your account has been disabled U+1F613");

        if (error == "auth/user-not-found")
            this.tools.presentToast("bottom", "Sorry, user not found!");

        if (error == "auth/wrong-password")
            this.tools.presentToast("bottom", "Sorry, that password is incorrect!");

        if (error == "auth/invalid-email")
            this.tools.presentToast("bottom", 'Sorry, that email is invalid');

        if (error == "auth/email-already-in-use")
            this.tools.presentToast("bottom", "Sorry, looks like that email is already registered");

        if(error == "auth/account-exists-with-different-credential")
            this.tools.presentToast("bottom", "Sorry, looks like that email is already registered. Please sign in with your original method");

        if (error == "auth/operation-not-allowed")
            this.tools.presentToast("bottom", "Sorry, that action cannot be performed at this time");

        if (error == "auth/weak-password")
            this.tools.presentToast("bottom", "Sorry, that password is too weak. Make sure it contains at least six characters");

    }

    // -------------------------///
    //    Authentication       ///
    //-------------------------///

    authenticateUser(email: string, password: string) {
        let promise = new Promise((resolve, reject) => {
            this.dbAuth.auth.signInWithEmailAndPassword(email, password).then(() => { //attempt to sign in with provided credentials
                resolve("Valid");
            }).catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                reject(errorCode);
                console.log("code:" + error.code);
                console.log(errorMessage);
            });
        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

    createAccountAuthentication(email: string, password: string, firstName: string, lastName: string) {
        let that = this;
        let promise = new Promise((resolve, reject) => {

            that.dbAuth.auth.createUserWithEmailAndPassword(email, password).then(response => { //create account with firebase Authentication
                let promise = new Promise((resolve, reject) => {
                    that.createAccountDatabase(email, firstName, lastName, response.uid, null).then(response => {
                        resolve();
                    }).catch(error => {
                        reject();
                        console.log(error); //do something better here? Not sure what would cause this
                    });
                });
                promise.then(response => {
                    resolve('Validated');
                }).catch(error => {
                    reject();
                    console.log(error); //do something better here? Not sure what would cause this
                });
            }).catch(error => {
                reject(error.code);
            });

        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }


    //attempt to add the created account to the real time database
    createAccountDatabase(email: string, firstName: string, lastName: string, userId: string, mediaId: string) {
        let that = this;
        let promise = new Promise((resolve, reject) => {
            let newUser = { //store values in temporary object => should be modeled after real user object model
                "Email": email,
                "Last_name": lastName,
                "First_name": firstName,
                "UserId": userId,
                "mediaId": mediaId
            };
            let ref = that.db.database.ref("Users/" + userId).set(
                newUser
            ).then(response => {
                //will fail if the user id already exists
                resolve();
            });
            reject();

        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error; //not sure what this would be
        });
    }


    // -------------------------///
    //   Media Authentication   ///
    //-------------------------///

    checkForAccessId(fbUserId: string) {
        let that = this;
        let promise = new Promise((resolve, reject) => {
            let ref = that.db.database.ref("Users");
            ref.once('value', snapshot => {
                let result = false;
                snapshot.forEach(snap => {
                    if (snap.child("facebookId").val() == fbUserId) {
                        result = true;
                    }
                    return false;
                });
                resolve(result);
                return false;
            });

        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

    advanceWithFacebook() {
        let that = this;
        let promise = new Promise((resolve, reject) => {
            that.facebook.login(['email'])
                .then(response => {
                    if (response.status === 'connected') {

                        let fbUserId = response.authResponse.userID;
                        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

                        that.facebook.api('me?fields=id,name,email,first_name,last_name', ['email']).then(apiResponse => {


                            that.checkForAccessId(fbUserId).then(response => {
                                this.tools.presentToast("bottom", response);

                                if (response == false) {
                                    //Creating a new profile
                                    if (apiResponse["first_name"] == "" || apiResponse["first_name"] == null || apiResponse["last_name"] == null || apiResponse["last_name"] == "") {
                                        that.validation.requestDisplayNameValidation().then(names => {
                                            that.signInWithExternalCredentials(facebookCredential, apiResponse.email, names.first_name, names.last_name, false, fbUserId).then(response => {
                                                resolve(response);
                                            }).catch(error => {
                                                reject(error);
                                            });
                                        });
                                    }
                                    else {
                                        that.signInWithExternalCredentials(facebookCredential, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"], false, fbUserId).then(response => {
                                            resolve(response);
                                        }).catch(error => {
                                            reject(error);
                                        });
                                    }
                                }

                                else {
                                    //Found the key so the user has signed in with facebook already
                                    that.signInWithExternalCredentials(facebookCredential, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"], true, fbUserId).then(response => {
                                        resolve(response);
                                    }).catch(error => {
                                        reject(error);
                                    });
                                }


                            });
                        });
                    }
                });
        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error; //not sure what this would be
        });
    }

    signInWithExternalCredentials(credential, email, first_name, last_name, continuing, mediaId) {
        let that = this;
        let promise = new Promise((resolve, reject) => {

            that.dbAuth.auth.signInWithCredential(credential)
                .then(success => {

                    if(success.error == null) {
                        if (!continuing) {

                            if (success.email == null) {

                                that.validation.requestEmailVerification().then(emailResponse => {

                                    success.updateEmail(emailResponse).then(() => {

                                        that.createAccountDatabase(emailResponse, first_name, last_name, success.uid, mediaId)
                                            .then(() => {
                                                resolve("Success");
                                            })
                                            .catch(error => {
                                                reject(error);
                                                console.log(error); //do something better here? Not sure what would cause this
                                            });

                                    }).catch(error => {
                                        console.log("Error updating email: " + error);
                                    });
                                });

                            }
                            else {

                                that.createAccountDatabase(email, first_name, last_name, success.uid, mediaId)
                                    .then(() => {
                                        resolve(email);
                                    })
                                    .catch(error => {
                                        reject(error);
                                        console.log(error); //do something better here? Not sure what would cause this
                                    });
                            }
                        }

                        else {

                            if (success) {
                                resolve(email);
                            }
                            else {
                                reject(success.error);
                            }
                        }
                    }
                    else {
                        reject(success.error);
                    }
                }).catch(error => {
                reject(error);
            });
        });
        return promise.then(response => {
            return response;
        }).catch(error => {
            return error; //not sure what this would be
        });
    }

    // slightly different from advance with FB
    advanceWithGoogle() {

        let that = this;
        let promise = new Promise((resolve, reject) => {
            that.google.login({webClientID: '736172868611-uo0ifja7fkisn2veblldbf1gj0veg9cd.apps.googleusercontent.com'})
                .then(response => {

                    const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken, response.accessToken);
                    that.checkForAccessId(response.idToken).then(check => {
                        if(check == false) {

                            if (response["familyName"] == "" || response["givenName"] == null || response["familyName"] == null || response["givenName"] == "") {

                                that.validation.requestDisplayNameValidation()
                                    .then(nameResponse => {
                                        that.signInWithExternalCredentials(googleCredential, response.email, nameResponse.first_name, nameResponse.last_name, false, response.idToken)
                                            .then(response => resolve(nameResponse.email))
                                            .catch(error => reject(error));
                                    });
                            }
                            else {
                                that.signInWithExternalCredentials(googleCredential, response["email"], response["givenName"], response["familyName"], false, response.idToken)
                                    .then(newResponse => resolve(newResponse))
                                    .catch(error => reject(null));
                            }
                        }
                        else {
                            that.signInWithExternalCredentials(googleCredential, response["email"], response["givenName"], response["familyName"], true, response.idToken)
                                .then(newResponse => resolve(newResponse))
                                .catch(error => reject(null));
                        }
                    });
                });
        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error; //not sure what this would be
        });
    }
}