import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Routine} from "../../../models/logging/routines/routine";
import {ExerciseTable} from "../../../models/logging/create-training/exercise-table";
import {RoutineCategory} from "../../../models/logging/routines/routine-category";
import {ExerciseProvider} from "../../../providers/training/exercises/exerciseProvider";

/**
 * Generated class for the AddRoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-routine',
  templateUrl: 'add-routine.html',
})
export class AddRoutinePage {

  routines: Routine[];
  routineName: string;
  routineCategory: RoutineCategory;
  routineExercises: ExerciseTable[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public banks: ExerciseProvider) {


  }

  addRoutine(routine: Routine) {
    this.viewCtrl.dismiss(routine);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddRoutinePage');
  }
  cancel() {
      this.navCtrl.pop();
  }
}
