import {Component} from '@angular/core';
import {IonicPage, LoadingController, MenuController, NavController, NavParams, Platform} from 'ionic-angular';

import {TabsPage} from "../../HomeTabs/tabs/tabs";
import {CreateAccountPage} from "../create-account/create-account";
import {Keyboard} from "@ionic-native/keyboard";
import {ToolsProvider} from "../../../providers/tools/tools";
import {AuthenticationProvider} from "../../../providers/users/authentication";
import {StandardLoginPage} from "../standard-login/standard-login";
import {Storage} from "@ionic/storage";

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


  constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public authProvider: AuthenticationProvider, public storage: Storage, public tools: ToolsProvider, public keyboard: Keyboard, platform: Platform, public loadCtrl: LoadingController) {
      platform.ready().then(() => {
          keyboard.disableScroll(true) //preventing keyboard induced overflow on a page that doesnt need it
      });
      menu.enable(false, 'mainCalendarMenu');
  }

    realLogin() {
      this.navCtrl.push('StandardLoginPage');
    }

    createAccount() {
      this.navCtrl.push('CreateAccountPage');
    }


  loginWithFacebook() {
      if(navigator.onLine) { //test for internet connection

          let that = this;
      let promise = new Promise((resolve, reject) => {

          that.authProvider.advanceWithFacebook().then(response => {
             if(response == null) {
                 reject(response);
             }
             else {
                 this.storage.set('user-email', response);
                 resolve();
             }
          });

      });

      promise.then(() => {
          this.navCtrl.push(TabsPage); //allow entry if successful login
      }).catch(error => { //handle errors thrown by firebase
          this.authProvider.firebaseAuthenticationError(error);
      });
      }
    else {
        this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
    }
  }
  // copied from above, likely to advance to same function after checking as separate function
    loginWithGoogle() {

        if(navigator.onLine) { //test for internet connection

            let that = this;
            let promise = new Promise((resolve, reject) => {

                that.authProvider.advanceWithGoogle().then(response => {
                    if(response == null) {
                        reject(response);
                    }
                    else {
                        this.storage.set('user-email', response);
                        resolve();
                    }
                });

            });

            promise.then(() => {
                console.log('BEFORE PUSH TABS');
                this.navCtrl.push(TabsPage); //allow entry if successful login
            }).catch(error => { //handle errors thrown by firebase
                this.authProvider.firebaseAuthenticationError(error);
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    }
}
