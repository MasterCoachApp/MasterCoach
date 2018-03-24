import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {LoginPage} from "../../Logins/login/login";
import {Storage} from "@ionic/storage";
import {User} from "../../../models/users/user";
import {UsersProvider} from "../../../providers/users/users";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    user: User;

  constructor(public navCtrl: NavController, public app: App, public storage: Storage, public users: UsersProvider) {
    this.user = users.loggedIn;
  }

    signOut() {
    //not yet definable
        this.storage.remove("user-email");
        this.app.getRootNav().push('LoginPage');
    }

}
