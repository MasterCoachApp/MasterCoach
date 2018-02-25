import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {TabsPage} from "../pages/HomeTabs/tabs/tabs";
import * as firebase from "firebase";
import {Facebook} from "@ionic-native/facebook";
import {Tools} from "./tools";
import {AlertController} from "ionic-angular";

@Injectable()
export class UserService {

    constructor(private dbAuth: AngularFireAuth, private db: AngularFireDatabase, private facebook: Facebook, public tools: Tools, public alertCtrl: AlertController) {

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



    advanceWithFacebook(entry: string) {
        let that = this;
        let promise = new Promise( (resolve, reject) => {
            that.facebook.login(['email'])
            .then( response => {
                if (response.status === 'connected') {
                    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

                    that.facebook.api('/me', ['email']).then(response => {
                        console.log(response);
                        console.log('Good to see you, ' + response.name);
                        console.log('Facebook Id: ' + response.id);
                        console.log('Email: ' + response.emailVerified);
                    });

                    that.dbAuth.auth.signInWithCredential(facebookCredential)
                        .then( success => {

                            if(entry == "create") {

                                let first_name = "";
                                let last_name = "";

                                let email = "";

                                //issues ==> we dont wait for the values to update with the alert

                                if (success.displayName == null || success.displayName == "" || success.displayName.split(" ").length != 2) {

                                        let prompt = this.alertCtrl.create({
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
                                                    first_name = data['first_name'];
                                                    last_name = data['last_name'];
                                                }
                                            }
                                        ]
                                    });
                                    prompt.present();

                                }
                                else {
                                    let name = success.displayName.split(" ");
                                    first_name = name[0];
                                    last_name = name[1];
                                }

                                if (success.email == null || success.email == "") {

                                    let prompt = this.alertCtrl.create({
                                        title: 'Please verify this information',
                                        message: "",
                                        enableBackdropDismiss: false,
                                        inputs: [
                                            {
                                                name: 'email',
                                                placeholder: 'Email'
                                            },
                                        ],
                                        buttons: [
                                            {
                                                text: 'Save',
                                                handler: data => {
                                                    email = data['email'];
                                                }
                                            }
                                        ]
                                    });
                                    prompt.present();

                                }
                                else {
                                    email = success.email;
                                }


                                let promise = new Promise((resolve, reject) => {
                                    that.createAccountDatabase(email, first_name, last_name, success.uid)
                                        .then(response => {
                                            resolve();
                                        }).catch(error => {
                                        reject();
                                        console.log(error); //do something better here? Not sure what would cause this
                                    });
                                });
                                promise.then(response => {
                                    resolve("Success");
                                }).catch(error => {
                                    reject(error);
                                    console.log(error); //do something better here? Not sure what would cause this
                                });
                            }
                            else {
                                resolve("Success");
                            }
                        });
                }
            }).catch((error) => {  console.log("error" + error) });

        });

        return promise.then(response => {
            return response;
        }).catch(error => {
            return error; //not sure what this would be
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
