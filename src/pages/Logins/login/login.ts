import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {UserService} from "../../../services/users";
import {Tools} from "../../../services/tools";
import {TabsPage} from "../../HomeTabs/tabs/tabs";
import {CreateAccountPage} from "../create-account/create-account";
import {Keyboard} from "@ionic-native/keyboard";
import {StatusBar} from "@ionic-native/status-bar";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  hasFocus: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public users: UserService, public tools: Tools, public keyboard: Keyboard, platform: Platform) {
    this.hasFocus = false; //boolean to determine when email/password has focus
      platform.ready().then(() => {
          keyboard.disableScroll(true) //preventing keyboard induced overflow on a page that doesnt need it
      });
    }

  login() {

    if (this.email == null || this.email == "" || this.password == null || this.password == "") {
        this.tools.presentToast("bottom", "Please enter an email and password.");
        return;
    }
    if(navigator.onLine) { //test for internet connection

        let that = this;
        let promise = new Promise((resolve, reject) => {
            that.users.authenticateUser(that.email, that.password).then(response => { //full authentication process gets done in the user service
                if (response != "Valid")
                  reject(response);
                else
                    resolve();
            }).catch(error => {
              console.log(1);
              reject(error);
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

    createAccount() {
      this.navCtrl.push(CreateAccountPage);
  }

  loginWithFacebook() {
      if(navigator.onLine) { //test for internet connection

          let that = this;
      let promise = new Promise((resolve, reject) => {

          that.users.advanceWithFacebook().then(response => {
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
