import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {Facebook} from "@ionic-native/facebook";
import * as firebase from 'firebase';
import {Tools} from "../../../services/tools";
import {UserService} from "../../../services/users";

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

    password: string;
    repassword: string;
    email: string;
    firstName: string;
    lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authdb: AngularFireAuth, private facebook: Facebook, public tools: Tools,
              public users: UserService) {

  }

  createAccount() {
      //validate entry
      if(this.password == "" || this.password == null || this.email == "" || this.email == null || this.firstName == null || this.lastName == null) {
          this.tools.presentToast("bottom", "You cannot leave any fields empty");
          return;
      }
      if(this.password != this.repassword) {
          this.tools.presentToast("bottom", "Your passwords do not match");
          return;
      }

      let that = this;
      let promise = new Promise( (resolve, reject) => { //full create account process happening in the user service
          that.users.createAccountAuthentication(that.email, that.password, that.firstName, that.lastName).then(response =>{
              if(response != "Validated") {
                  reject(response);
              }
              else {
                  resolve(response);
              }
          }).catch(error => {
                that.tools.presentToast("bottom", "There was an error handling your request");
              console.log("error");
          });
      });

      promise.then(response => {
            this.navCtrl.pop();
      }).catch(error => { //handle errors that firebase may throw when attempting to create an account

          if (error == "auth/invalid-email")
              this.tools.presentToast("bottom", 'Sorry, that email is invalid');

          if (error == "auth/email-already-in-use")
              this.tools.presentToast("bottom", "Sorry, looks like that email is already registered");

          if (error == "auth/operation-not-allowed")
              this.tools.presentToast("bottom", "Sorry, that action cannot be performed at this time");

          if (error == "auth/weak-password")
              this.tools.presentToast("bottom", "Sorry, that password is too weak. Make sure it contains at least six characters");

          return;
      });


  }

//
//   createWithFacebook(): Promise<any> {
//         return this.facebook.login(['email'])
//             .then( response => {
//             const facebookCredential = firebase.auth.FacebookAuthProvider
//                 .credential(response.authResponse.accessToken);
// console.log(facebookCredential);
//                 this.authdb.auth.signInWithCredential(facebookCredential)
//                 .then( success => {
//                     console.log("Firebase success: " + JSON.stringify(success));
//                 });
//
//         }).catch((error) => { console.log(error) });
//   }

}
