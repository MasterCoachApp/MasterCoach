import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    activeMenu: string;

  constructor(public navCtrl: NavController, public menu: MenuController) {
      this.menu1Active();
  }
    menu1Active() {
        this.activeMenu = 'mainCalendarMenu';
        this.menu.enable(true, 'mainCalendarMenu');
        this.menu.enable(false, 'filtersCalendarMenu');
    }

    menu2Active() {
        this.activeMenu = 'filtersCalendarMenu';
        this.menu.enable(false, 'mainCalendarMenu');
        this.menu.enable(true, 'filtersCalendarMenu');
    }

}
