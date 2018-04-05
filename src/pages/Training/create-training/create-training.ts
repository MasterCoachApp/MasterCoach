import {Component} from '@angular/core';
import {
    AlertController, IonicPage, MenuController, ModalController, NavController, NavParams,
    PopoverController, ViewController
} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Activities} from "../../../models/logging/create-training/activities";
import {TextPopoverPage} from "../text-popover/text-popover";
import {LabelProvider} from "../../../providers/training/labels/labelProvider";
import {TrainingProvider} from "../../../providers/training/trainings/trainingProvider";
import {Label} from "../../../models/custom-survey-components/labels/label";
import {Training} from "../../../models/logging/training";
import {ExerciseTable} from "../../../models/logging/create-training/exercise-table";
import {ExerciseSet} from "../../../models/logging/create-training/exercise-set";
import {expressionChangedAfterItHasBeenCheckedError} from "@angular/core/src/view/errors";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {AddExercisePage} from "../../add-exercise/add-exercise";
import {Exercise} from "../../../models/logging/exercises/exercise";

/**
 * Generated class for the CreateTrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-training',
    templateUrl: 'create-training.html',
})


export class CreateTrainingPage {

    expandPostThoughts: boolean;

    listOfEvents: Label[];

    preTraining = this.trainings.preTraining.getPreTraining();
    postTraining = this.trainings.postTraining.getPostTraining();

    preTrainingDivide: {
        range: object[],
        notes: object[]
    };
    postTrainingDivide: {
        range: object[],
        notes: object[]
    };

    mainTraining = {
        activities: new Activities(),
        mainTrainingNotes: {
            key: 'Notes',
            val: ''
        }
    };

    trainingEventList: string[];

    trainingMorningAfternoonEvening: string;
    trainingDateHour: number;
    trainingDate: string;

    // exerciseKeys: string[];

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public menu: MenuController, public navParams: NavParams, public trainings: TrainingProvider, public labels: LabelProvider, public popoverCtrl: PopoverController, public users: UsersProvider, public alertCtrl: AlertController, public tools: ToolsProvider) {
        menu.enable(false, 'mainCalendarMenu');

        this.listOfEvents = labels.listOfLabels;
        this.trainingEventList = ["Long Jump", "High Jump", "Pole Vault"]; //should be empty out of development
        // this.exerciseKeys = [];

        this.expandPostThoughts = false;
        this.preTrainingDivide = {range: [], notes:[] };
        this.postTrainingDivide = {range: [], notes:[] };

        for (let key in this.preTraining) {
            if (this.preTraining.hasOwnProperty(key)) {
                    if(this.preTraining[key]['type'] == "range") {
                        this.preTrainingDivide.range.push(this.preTraining[key]);
                    }
                    if(this.preTraining[key]['type'] == "note") {
                        this.preTrainingDivide.notes.push(this.preTraining[key]);
                    }
            }
        }
        for (let key in this.postTraining) {
            if (this.postTraining.hasOwnProperty(key)) {
                if(this.postTraining[key]['type'] == "range") {
                    this.postTrainingDivide.range.push(this.postTraining[key]);
                }
                if(this.postTraining[key]['type'] == "note") {
                    this.postTrainingDivide.notes.push(this.postTraining[key]);
                }
            }
        }

        this.mainTraining.activities = new Activities();

        // this.trainingDate = new Date().toISOString();
        this.trainingDateHour = new Date().getHours(); // not UTC because we want the time zone localized
        if (this.trainingDateHour < 12) {
            this.trainingMorningAfternoonEvening = 'Morning';
        } else if (this.trainingDateHour < 5) {
            this.trainingMorningAfternoonEvening = 'Afternoon';
        } else {
            this.trainingMorningAfternoonEvening = 'Evening';
        }
    }

    toggleGroup = function(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };

    isGroupShown = function(group) {
        return this.shownGroup === group;
    };

    expandTextArea() {

        this.expandPostThoughts = !this.expandPostThoughts;

        let popover = this.popoverCtrl.create(TextPopoverPage, {},{cssClass: 'custom-popover'});
        popover.present({
            //ev: myEvent
        });

    }


    createNewTraining() {

        let newTraining = new Training();
        this.preTrainingDivide.notes.forEach(note =>{
            newTraining.addPreNote(note['key'], note['val']);
        });
        this.preTrainingDivide.range.forEach(range =>{
            newTraining.addPreRange(range['key'], range['val']);
        });

        this.postTrainingDivide.notes.forEach(note =>{
            newTraining.addPostNote(note['key'], note['val']);
        });
        this.postTrainingDivide.range.forEach(range =>{
            newTraining.addPostRange(range['key'], range['val']);
        });

       newTraining.setMainCalEvent(this.mainTraining.activities);

        if (navigator.onLine) {
            this.trainings.createNewEntry(newTraining);
            this.viewCtrl.dismiss();
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }

    }

    selectEventWorkout(value: string) {

    }

    removeLabel(label: Label, exercise: ExerciseTable) {
        //Remove label from UI
        this.mainTraining.activities.exercises[exercise.exerciseCategory.category.name][exercise.exerciseName].removeLabel(label);

    }


    addExercise() {
        let addExerciseModal = this.modalCtrl.create(
            'AddExercisePage',
            );


        addExerciseModal.onDidDismiss( data => {
            if (data) {
                this.mainTraining.activities.addExercises(data);
            }
        });

        addExerciseModal.present();





        // // alert placeholder to add trainings
        // let alert = this.alertCtrl.create({
        //     cssClass: 'alertCss'
        // });
        // alert.setTitle('Please select a training to add:');
        //
        // // alert.addInput( {
        // //     // add foreach of a list of exercises later
        // //     // add modal window that walks through creating the new table with its settings later
        // //     type: 'checkbox',
        // //     label: 'Sprint Hurdles',
        // //     value: 'Sprint Hurdles',
        // //     checked: false
        // // });
        // // ADDING with this list of track events for now until we get an exercise library up and running
        // this.listOfEvents.forEach( data => {
        //     alert.addInput({
        //         type: 'checkbox',
        //         label: data.label['value'],
        //         value: data.label['value'],
        //         checked: false
        //     });
        // });
        //
        // alert.addButton('Cancel');
        // alert.addButton({
        //     text: 'Add Exercise',
        //     handler: data => {
        //         console.log('Checkbox data [ADD EXERCISE]:', data);
        //         if (data != null) {
        //             this.mainTraining.activities.addExercises(data);
        //         }
        //     }
        // });
        //
        // alert.present();
    }

    addSet(exercise: ExerciseTable) {
        this.mainTraining.activities.exercises[exercise.exerciseCategory.category.name][exercise.exerciseName].addSet();
    }

    deleteSet(set: ExerciseSet, exercise: ExerciseTable) {
        this.mainTraining.activities.exercises[exercise.exerciseCategory.category.name][exercise.exerciseName].deleteSet(set);
    }

    addLabel(exercise: ExerciseTable) {
        let alert = this.alertCtrl.create({
            cssClass: 'alertCss'
        });
        alert.setTitle('Which event does this belong to?');

        this.listOfEvents.forEach( data => {
            alert.addInput({
                type: 'checkbox',
                label: data.label['value'],
                value: data.label['value'],
                checked: false
            });
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add Labels',
            handler: data => {
                console.log('Checkbox data [LABELS]:', data);
                if (data != null) {
                    // data.forEach ( index => {
                        this.mainTraining.activities.exercises[exercise.exerciseCategory.category.name][exercise.exerciseName].addLabels(data);
                    // });
                }
                // this.testCheckboxResult = data;
            }
        });

        alert.present();
    }

    addWarmUp() {
        let alert = this.alertCtrl.create({
            title: 'Warm Up',

        });
        alert.addInput( {
            type: 'radio',
            label: 'Warm up A',
            value: 'Warm up A',
            checked: false
        });
        alert.addInput( {
            type: 'radio',
            label: 'Warm up B',
            value: 'Warm up B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: data => {
                console.log('Checkbox data:', data);
                if (data != null) {
                    this.mainTraining.activities.setWarmUp(data);
                }
                // this.testCheckboxResult = data;
            }
        });
        alert.present();

    }

    addCoolDown() {
        let alert = this.alertCtrl.create({
            title: 'Cool Down',

        });
        alert.addInput( {
            type: 'radio',
            label: 'Cool down A',
            value: 'Cool down A',
            checked: false
        });
        alert.addInput( {
            type: 'radio',
            label: 'Cool down B',
            value: 'Cool down B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: data => {
                console.log('Checkbox data:', data);
                if (data != null) {
                    this.mainTraining.activities.setCoolDown(data);
                }
                // this.testCheckboxResult = data;
            }
        });
        alert.present();
    }

    cancel() {
        this.navCtrl.pop();
    }
    // adding for testing data on page DG 2018-03-18
    testConsole(data: any) {
        console.log(data);
    }
    tooltip(){
        this.tools.toastCtrl.create({
            message: 'One day this will be a popover tooltip',
            duration: 3000
        }).present();
    }
    objectKeys(obj) {
        return Object.keys(obj);
    }

}
