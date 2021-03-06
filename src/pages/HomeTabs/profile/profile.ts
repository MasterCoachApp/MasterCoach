import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {LoginPage} from "../../Logins/login/login";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public app: App, public storage: Storage) {

  }

    signOut() {
    //not yet definable
        this.storage.remove("user-email");
        this.app.getRootNav().push('LoginPage');
    }

}
