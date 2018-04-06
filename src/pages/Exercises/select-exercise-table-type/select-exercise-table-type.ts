import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {ExerciseTableType} from "../../../models/logging/create-training/exercise-table-type";
import {ExerciseProvider} from "../../../providers/training/exercises/exerciseProvider";

/**
 * Generated class for the SelectExerciseTableTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-exercise-table-type',
  templateUrl: 'select-exercise-table-type.html',
})
export class SelectExerciseTableTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public banks: ExerciseProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectExerciseTableTypePage');
  }
    selectTableType(tableType: ExerciseTableType) {
        this.viewCtrl.dismiss(tableType);
    }
    cancel() {
        this.navCtrl.pop();
    }


}
