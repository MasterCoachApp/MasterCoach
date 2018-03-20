import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {SettingsProvider} from "../../../providers/settings";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    selectedTheme: String;

    constructor(public navCtrl: NavController, private settings: SettingsProvider) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    }

    toggleAppTheme() {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        } else {
            this.settings.setActiveTheme('dark-theme');
        }
    }
}
