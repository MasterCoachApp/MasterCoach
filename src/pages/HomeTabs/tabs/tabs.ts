import {Component} from '@angular/core';

import {ProfilePage} from '../profile/profile';
import {HomePage} from '../home/home';
import {IonicPage, ModalController} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ToolsPage';
  tab2Root = 'HomePage';
  tab3Root = 'ProfilePage';
  tab4Root = '';

  constructor(public modalCtrl: ModalController) {

  }
}
