import {Component} from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController} from 'ionic-angular';
import {AuthenticationProvider} from "../../../providers/users/authentication";
import {ToolsProvider} from "../../../providers/tools/tools";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  email: string;

  constructor(public navCtrl: NavController, public authProvider: AuthenticationProvider, public tools: ToolsProvider, public alertCtrl: AlertController, public menu: MenuController ) {
      menu.enable(false, 'mainCalendarMenu');
  }

    forgotPassword() {
        if (navigator.onLine) { //test for internet connection
            let loading = this.tools.presentLoading();

            loading.present().then(() => {
                let promise = new Promise((resolve, reject) => {
                    this.authProvider.forgotPassword(this.email).then(response => {
                        if(response == "Success") {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }).catch(error => {
                        reject();
                        console.log(error);
                    });
                });
                promise.then(() => {
                    loading.dismiss();
                    this.presentAlert("An email has been sent to you to reset your password", "Success");
                }).catch(error => { //handle errors thrown by firebase
                    loading.dismiss();
                    this.presentAlert("Oops, we were unable to reset your password.", "Oops");
                });
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    }

    presentAlert(message: string, title: string) {
        let prompt = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    }

}
