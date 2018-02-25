import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserService {

    constructor(private dbAuth: AngularFireAuth, private db: AngularFireDatabase) {

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

        //push creates a unique key for the passed variable, although as of right now id like to try and make the key the userId.
           let ref = that.db.database.ref("Users").push(
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

}
