import {Component} from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Activities} from "../../../models/logging/activities/activities";
import {TextPopoverPage} from "../text-popover/text-popover";
import {LabelProvider} from "../../../providers/custom-survey-components/labels/labelProvider";
import {TrainingProvider} from "../../../providers/custom-survey-components/trainings/trainingProvider";
import {Label} from "../../../models/custom-survey-components/labels/label";
import {Training} from "../../../models/logging/training";

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

    constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public trainings: TrainingProvider, public labels: LabelProvider, public popoverCtrl: PopoverController, public users: UsersProvider, public training: EntryProvider, public alertCtrl: AlertController, public tools: ToolsProvider) {
        menu.enable(false, 'mainCalendarMenu');

        this.listOfEvents = labels.listOfLabels;
        this.trainingEventList = ["Long Jump", "High Jump", "Pole Vault"]; //should be empty out of development

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

     //   newTraining.setMainCalEvent(this.mainTraining.activities, mainNotes);

        if (navigator.onLine) {
            this.training.createNewEntry(newTraining);
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }

    }

    selectEventWorkout(value: string) {

    }

    removeLabel(event: string) {
        //Remove label from UI
        this.trainingEventList.splice(this.trainingEventList.indexOf(event),1);

    }


    addActivity() {
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
            text: 'Add Events',
            handler: data => {
                console.log('Checkbox data:', data);
                if (data != null) {
                    data.forEach ( index => {
                        this.trainingEventList.push(index);
                    });
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

}
