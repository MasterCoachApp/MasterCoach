import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Routine} from "../../../models/logging/routines/routine";
import {ExerciseTable} from "../../../models/logging/create-training/exercise-table";
import {RoutineCategory} from "../../../models/logging/routines/routine-category";

/**
 * Generated class for the CreateRoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-routine',
  templateUrl: 'create-routine.html',
})
export class CreateRoutinePage {

  routine: Routine;
  routineName: string;
  routineCategory: RoutineCategory;
  routineExercises: ExerciseTable[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRoutinePage');
  }
  cancel() {
    this.navCtrl.pop();
  }
  createRoutine() {

  }

}
