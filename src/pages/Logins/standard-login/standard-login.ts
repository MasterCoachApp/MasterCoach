import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../../HomeTabs/tabs/tabs";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {AuthenticationProvider} from "../../../providers/users/authentication";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the StandardLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standard-login',
  templateUrl: 'standard-login.html',
})
export class StandardLoginPage {

    email: string;
    password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthenticationProvider, public tools: ToolsProvider, public storage: Storage) {
  }

    forgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

    login() {
        if (this.email == null || this.email == "" || this.password == null || this.password == "") {
            this.tools.presentToast("bottom", "Please enter an email and password.");
            return;
        }

        if(navigator.onLine) { //test for internet connection
            let that = this;
            let loading = this.tools.presentLoading();

            loading.present().then(()=> {
                let promise = new Promise((resolve, reject) => {
                    that.authProvider.authenticateUser(that.email, that.password).then(response => { //full authentication process gets done in the user service
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
                    loading.dismiss();
                    this.storage.set('user-email', this.email);
                    this.navCtrl.push(TabsPage); //allow entry if successful login
                }).catch(error => { //handle errors thrown by FireBase
                    loading.dismiss();
                    this.authProvider.firebaseAuthenticationError(error);
                    console.log('HELLO!');
                });
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    }

}
