import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DecathlonCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decathlon-calculator',
  templateUrl: 'decathlon-calculator.html',
})
export class DecathlonCalculatorPage {

    inputs: {
       hundred: string,
    };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.inputs = {
          hundred: '0.00',
      };
  }

    updateText(value: string) {
      switch(value) {
          case '100m':
            if(this.inputs.hundred.length == 4) break;

      }
    }

}
