import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {LoginPage} from "../../Logins/login/login";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public app: App, public storage: Storage) {

  }

    signOut() {
    //not yet definable
        this.storage.remove("user-email");
        this.app.getRootNav().push(LoginPage);
    }

}
