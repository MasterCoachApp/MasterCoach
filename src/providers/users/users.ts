import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {TabsPage} from "../pages/HomeTabs/tabs/tabs";
import * as firebase from "firebase";
import {Facebook} from "@ionic-native/facebook";
import {ToolsProvider} from "../../providers/tools/tools";
import {AlertController} from "ionic-angular";

@Injectable()
export class UsersProvider {

    constructor(private dbAuth: AngularFireAuth, private db: AngularFireDatabase, private facebook: Facebook, public tools: ToolsProvider, public alertCtrl: AlertController) {

    }


    // -------------------------///
    //    Retrieve Users       ///
    //-------------------------///


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
        let promise = new Promise( (resolve, reject) => {

            that.dbAuth.auth.createUserWithEmailAndPassword(email, password).then(response => { //create account with firebase Authentication
                let promise = new Promise( (resolve, reject) => {
                    that.createAccountDatabase(email, firstName, lastName, response.uid).then(response =>{
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
            }).catch (error =>{
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
    createAccountDatabase(email: string, firstName: string, lastName: string, userId: string) {
        console.log(email,firstName,lastName,userId);
        let that = this;
        let promise = new Promise( (resolve, reject) => {
            let newUser = { //store values in temporary object => should be modeled after real user object model
                "Email": email,
                "Last_name": lastName,
                "First_name": firstName,
                "UserId": userId
            };
            let ref = that.db.database.ref("Users/"+userId).set(
                newUser
            ).then(response => {
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


    /*Facebook service seems to work on all accounts except for:
        When theres missing information returned and the user is prompted for it, the system doesn't wait before proceeding.
        Furthermore i dont believe the checks for additional info even belong there. They should be cause before the signIn with credentials occurs.
    */
    advanceWithFacebook() {
        let that = this;
        let promise = new Promise( (resolve, reject) => {
            that.facebook.login(['email'])
                .then( response => {
                    if (response.status === 'connected') {

                        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

                        that.facebook.api('me?fields=id,name,email,first_name,last_name', ['email']).then(apiResponse => {
                            console.log(response);
                            console.log('Good to see you, ' + apiResponse["first_name"] + " " + apiResponse["last_name"]);
                            console.log('Facebook Id: ' + apiResponse.id);
                            console.log('Email: ' + apiResponse.email);

                            if(apiResponse["first_name"] == "" || apiResponse["first_name"] == null || apiResponse["last_name"] == null || apiResponse["last_name"] == "") {
                                that.requestDisplayNameValidation().then(nameResponse => {
                                    that.signInWithFacebookCredentials(facebookCredential, apiResponse.email, nameResponse.first, nameResponse.last, ).then(response => {
                                        resolve("Success");
                                    }).catch(error =>{
                                        reject(error);
                                    });
                                });
                            }
                            else {
                                that.signInWithFacebookCredentials(facebookCredential, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"], ).then(response => {
                                    resolve("Success");
                                }).catch(error => {
                                    reject(error);
                                });
                            }
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

    signInWithFacebookCredentials(facebookCredential, email, first_name, last_name) {
        let that = this;
        let promise = new Promise( (resolve, reject) => {

            that.dbAuth.auth.signInWithCredential(facebookCredential)
                .then( success => {
                    if(success.email == null) {
                        that.requestEmailVerification().then(emailResponse => {
                            success.updateEmail(emailResponse).then(() => {
                                let innerPromise = new Promise((resolve, reject) => {
                                    that.createAccountDatabase(emailResponse, first_name, last_name, success.uid)
                                        .then(response => {
                                            resolve();
                                        }).catch(error => {
                                        reject();
                                        console.log(error); //do something better here? Not sure what would cause this
                                    });
                                });
                                innerPromise.then(response => {
                                    resolve("Success");
                                }).catch(error => {
                                    reject(error);
                                    console.log(error); //do something better here? Not sure what would cause this
                                });
                            }).catch(error => {
                                console.log("Error updating email: " + error);
                            });
                        });

                    }
                    else {
                        let innerPromise = new Promise((resolve, reject) => {
                            that.createAccountDatabase(email, first_name, last_name, success.uid)
                                .then(response => {
                                    resolve();
                                }).catch(error => {
                                reject();
                                console.log(error); //do something better here? Not sure what would cause this
                            });
                        });
                        innerPromise.then(response => {
                            resolve("Success");
                        }).catch(error => {
                            reject(error);
                            console.log(error); //do something better here? Not sure what would cause this
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


    requestEmailVerification()
    {
        let that = this;
        let email = "";
        let promise = new Promise( (resolve, reject) => {
            let prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'Email',
                        placeholder: 'Email'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: data => {
                            //validate email address properly and stop from being empty
                            console.log(data);
                            email = data["Email"];
                            resolve();
                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(() => {
            return email;
        });
    }

    requestDisplayNameValidation()
    {
        let nameObj = null;
        let that = this;
        let promise = new Promise( (resolve, reject) => {
            let prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'first_name',
                        placeholder: 'First name'
                    },
                    {
                        name: 'last_name',
                        placeholder: 'Last name'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: data => {
                            //validate (not empty)
                            nameObj = data;
                            resolve();

                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(() => {
            return nameObj;
        });
    }

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

        if (error == "auth/operation-not-allowed")
            this.tools.presentToast("bottom", "Sorry, that action cannot be performed at this time");

        if (error == "auth/weak-password")
            this.tools.presentToast("bottom", "Sorry, that password is too weak. Make sure it contains at least six characters");

    }
}
