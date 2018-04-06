import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ExerciseProvider} from "../../../providers/training/exercises/exerciseProvider";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";

/**
 * Generated class for the SelectExerciseCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-exercise-category',
  templateUrl: 'select-exercise-category.html',
})
export class SelectExerciseCategoryPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public banks: ExerciseProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectExerciseCategoryPage');
  }
  selectCategory(category: ExerciseCategory) {
    this.viewCtrl.dismiss(category);
  }
    cancel() {
        this.navCtrl.pop();
    }


}
