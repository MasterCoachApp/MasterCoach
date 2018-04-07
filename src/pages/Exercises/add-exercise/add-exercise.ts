import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Exercise} from "../../../models/logging/exercises/exercise";
import {ExerciseBank} from "../../../models/logging/exercises/exercise-bank";
import {ExerciseCategoryBank} from "../../../models/logging/create-training/exercise-category-bank";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {ExerciseProvider} from "../../../providers/training/exercises/exerciseProvider";

/**
 * Generated class for the AddExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {

  exerciseFilter: string;
  exercisesToAdd: Exercise[] = [];
  exerciseCategoryBank: ExerciseCategory[];
  // exerciseBank: Exercise[];
  exerciseBankSorted: Exercise[];
  exerciseRecentBank: Exercise[] = []; // currently will be empty
  searchQuery: string = '';
  filterIsCategory: boolean

  categoryShow: {
    [key: string]: boolean
  } = {};

  showAllCategories: boolean;

  exerciseCategoryBankFiltered: ExerciseCategory[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public banks: ExerciseProvider) {
    this.exerciseFilter = 'Category';
    this.exercisesToAdd = [];
    // this.exerciseBank = new ExerciseBank();
    // this.exerciseCategoryBankSorted = this.exerciseCategoryBank.sort((a,b) => {
    //     if(a.category.name < b.category.name) return -1;
    //     if(a.category.name > b.category.name) return 1;
    //     return 0;
    // });
    this.exerciseRecentBank = []; // to be completed

    this.initializeExerciseBankSorted();
    this.initializeExerciseCategoryBank();

    console.log('exerciseBankSorted',this.exerciseBankSorted);
    // console.log('exerciseBank',this.exerciseBank);
    console.log('CATEGORY BANK',this.exerciseCategoryBank); // sorted
    this.exerciseCategoryBank.forEach(data =>
        this.categoryShow[data.category.name] = false
    );
    console.log('categoryShow', this.categoryShow);

    this.showAllCategories = false;


  }

  initializeExerciseBankSorted() {
      // this.exerciseBankSorted = this.sortAlphabetical(this.banks.exerciseBank, 'exerciseName');
      this.exerciseBankSorted = this.banks.exerciseBank.exerciseBank;

  }

  initializeExerciseCategoryBank(){ // filtered and sorted
      // this.exerciseCategoryBankFiltered = this.retrieveFilteredCategories().sort((a,b) => {
      //     if(a.category.name < b.category.name) return -1;
      //     if(a.category.name > b.category.name) return 1;
      //     return 0;
      // });
      this.exerciseCategoryBank = this.banks.exerciseCategoryBank.exerciseCategoryBank;
      this.exerciseCategoryBankFiltered = this.retrieveFilteredCategories();
      console.log('FILTERED CAT BANK',this.exerciseCategoryBankFiltered);


      }

  filterItems(searchQuery: string) {
      // Reset items back to all of the items
      this.initializeExerciseBankSorted();

      // set val to the value of the searchbar
      let val = searchQuery;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
          this.exerciseBankSorted = this.exerciseBankSorted.filter((exercise) => {
              return (exercise.exerciseName.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
          this.initializeExerciseCategoryBank();
      }
      this.initializeExerciseCategoryBank();
  }

  retrieveFilteredCategories() {

      let tempCategoryBank = [];

      for (let i = 0; i < this.exerciseBankSorted.length; i++) {
          if (tempCategoryBank.indexOf(this.exerciseBankSorted[i].exerciseCategory) > -1) {
              continue;
          } else {
              tempCategoryBank.push(this.exerciseBankSorted[i].exerciseCategory);
          }
      }

      return tempCategoryBank;
  }

  sortAlphabetical(arrayOfObjects: any[], property: any) {
      arrayOfObjects.sort((a,b) => {
          if(a.property < b.property) return -1;
          if(a.property > b.property) return 1;
          return 0;
      });
    return arrayOfObjects;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddExercisePage');
  }

  toggleCategoryShow(exerciseCategory: ExerciseCategory) {
    this.categoryShow[exerciseCategory.category.name] = !this.categoryShow[exerciseCategory.category.name];
    console.log(this.categoryShow[exerciseCategory.category.name]);
  }

  toggleAllCategories() {
      this.showAllCategories = !this.showAllCategories;
      this.exerciseCategoryBank.forEach(data => {
          this.categoryShow[data.category.name] = this.showAllCategories;
          console.log(data.category.name);
          console.log(this.showAllCategories);
      });
  }

  toggleFilterIsCategory() {
      this.filterIsCategory = (this.exerciseFilter == 'Category');
  }

  createExercise(searchQuery: string) {
      let createExerciseModal = this.modalCtrl.create(
          'CreateExercisePage',
          {searchQuery: searchQuery}
      );
      createExerciseModal.onDidDismiss( data => {
          if (data) {
              this.selectExercise(data);
              this.filterItems(searchQuery);
          }
      });
      createExerciseModal.present();
  }

  selectExercise(exercise: Exercise) {

    let indexOfExercise = this.exercisesToAdd.indexOf(exercise);

    if (indexOfExercise == -1) {
        this.exercisesToAdd.push(exercise);
        console.log('Adding');
    } else {
        this.exercisesToAdd.splice(indexOfExercise, 1);
        console.log('Popped!');
    }
    console.log('exercisesToAdd',this.exercisesToAdd);
  }

  addExercisesAndDismiss() {
    this.viewCtrl.dismiss(this.exercisesToAdd);
  }

  cancel() {
      this.navCtrl.pop();
  }

}
