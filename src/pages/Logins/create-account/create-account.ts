import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {Facebook} from "@ionic-native/facebook";
import * as firebase from 'firebase';
import {Tools} from "../../../services/tools";
import {UserService} from "../../../services/users";
import {TabsPage} from "../../HomeTabs/tabs/tabs";

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
              public users: UserService, public alertCtrl: AlertController) {

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
            this.navCtrl.push(TabsPage);
      }).catch(error => { //handle errors that firebase may throw when attempting to create an account
          this.users.firebaseAuthenticationError(error);

          return;
      });


  }


  createWithFacebook(){
      if(navigator.onLine) { //test for internet connection

          let that = this;
          let promise = new Promise((resolve, reject) => {

              that.users.advanceWithFacebook("create").then(response => {
                  if(response != "Success") {
                      reject(response);
                  }
                  else {
                      resolve();
                  }
              });

          });

          promise.then(() => {
              this.navCtrl.push(TabsPage); //allow entry if successful login
          }).catch(error => { //handle errors thrown by firebase
              this.users.firebaseAuthenticationError(error);
          });
      }
      else {
          this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
      }
  }

}
