import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {DecathlonCalculatorPage} from "../decathlon-calculator/decathlon-calculator";

/**
 * Generated class for the ToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

    displayCalculator(type: string) {
      switch(type) {
          case 'decathlon':
              let profileModal = this.modalCtrl.create('DecathlonCalculatorPage');
              profileModal.present();
              break;
      }
    }
}
