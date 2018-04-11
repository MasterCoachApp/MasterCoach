import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {HeptathlonMCalculatorPage} from "../calculators/heptathlon-m-calculator/heptathlon-m-calculator";
import {PentathlonMCalculatorPage} from "../calculators/pentathlon-m-calculator/pentathlon-m-calculator";
import {HeptathlonWCalculatorPage} from "../calculators/heptathlon-w-calculator/heptathlon-w-calculator";
import {UnitConverterPage} from "../calculators/unit-converter/unit-converter";
import {StartingGunPage} from "../gadgets/starting-gun/starting-gun";
import {StopwatchPage} from "../gadgets/stopwatch/stopwatch";

@IonicPage()
@Component({
  selector: 'utilities-home',
  templateUrl: 'utilities.html'
})
export class UtilitiesPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  displayCalculator(type: string) {
    switch(type) {
      case 'decathlon':
        this.modalCtrl.create('DecathlonCalculatorPage').present();
        break;
      case 'heptathlonM':
         this.modalCtrl.create('HeptathlonMCalculatorPage').present();
         break;
      case 'pentathlonM':
         this.modalCtrl.create('PentathlonMCalculatorPage').present();
         break;
      case 'heptathlonW':
            this.modalCtrl.create('HeptathlonWCalculatorPage').present();
            break;
      case 'pentathlonW':
            this.modalCtrl.create('PentathlonWCalculatorPage').present();
            break;
      case 'units':
            this.modalCtrl.create('UnitConverterPage').present();
            break;
      case 'gun':
            this.modalCtrl.create('StartingGunPage').present();
            break;
      case 'stopwatch':
            this.modalCtrl.create('StopwatchPage').present();
            break;
        case 'mercier':
            this.modalCtrl.create('MercierPage').present();
            break;

    }
  }

}
