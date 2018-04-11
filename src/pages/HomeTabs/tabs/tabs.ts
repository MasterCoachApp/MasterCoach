import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {IonicPage, ModalController} from "ionic-angular";
import {ProfilePage} from "../profile/profile";
import {UtilitiesPage} from "../tools/utilities/utilities";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ProfilePage';
  tab3Root = 'UtilitiesPage';
  tab4Root = 'ProfilePage';

  constructor(public modalCtrl: ModalController) {

  }
}
