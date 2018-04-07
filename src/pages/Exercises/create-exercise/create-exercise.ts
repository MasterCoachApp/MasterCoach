import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Exercise} from "../../../models/logging/exercises/exercise";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {ExerciseTableType} from "../../../models/logging/create-training/exercise-table-type";
import {ExerciseProvider} from "../../../providers/training/exercises/exerciseProvider";
import {SelectExerciseCategoryPage} from "../select-exercise-category/select-exercise-category";
import {SelectExerciseTableTypePage} from "../select-exercise-table-type/select-exercise-table-type";

/**
 * Generated class for the CreateExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-exercise',
  templateUrl: 'create-exercise.html',
})
export class CreateExercisePage {

  exercise: Exercise;
  exerciseName: string;
  exerciseCategory: ExerciseCategory;
  exerciseTableType: ExerciseTableType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public banks: ExerciseProvider, public modalCtrl: ModalController) {
    this.exerciseName = this.navParams.get('searchQuery');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateExercisePage');
  }
  createExerciseAndDismiss() {
    this.exercise = new Exercise(this.exerciseName, this.exerciseCategory, this.exerciseTableType);
    console.log(this.exercise);
    this.banks.exerciseBank.addExercise(this.exercise);
    console.log('EXERCISE BANK',this.banks.exerciseBank.exerciseBank);
    this.viewCtrl.dismiss(this.exercise);
  }
  presentExerciseCategoryModal() {
    let categoryModal = this.modalCtrl.create(
        'SelectExerciseCategoryPage'
    );
      categoryModal.onDidDismiss( data => {
          if (data) {
              this.exerciseCategory = data;
          }
      });
    categoryModal.present();
  }

  presentExerciseTableTypeModal() {
    let tableTypeModal = this.modalCtrl.create(
        'SelectExerciseTableTypePage'
    );
    tableTypeModal.onDidDismiss( data => {
        if (data) {
            this.exerciseTableType = data;
        }
    });
    tableTypeModal.present();
  }

  cancel() {
    this.navCtrl.pop();
  }

}
