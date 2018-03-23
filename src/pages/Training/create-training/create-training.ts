import {Component} from '@angular/core';
import {AlertController, IonicPage, MenuController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Activities} from "../../../models/logging/activities/activities";
import {TextPopoverPage} from "../text-popover/text-popover";
import {LabelProvider} from "../../../providers/custom-survey-components/labels/labelProvider";
import {TrainingProvider} from "../../../providers/custom-survey-components/trainings/trainingProvider";

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

    trainingExpanded: boolean;
    preTrainingExpanded: boolean;
    postTrainingExpanded: boolean;

    expandPostThoughts: boolean;

    listOfEvents: string[];


    preTraining = this.trainings.preTraining;

    postTraining = this.trainings.postTraining;

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

        this.trainingExpanded = true;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;

        this.listOfEvents = labels.listOfLabels;
        this.trainingEventList = ["Long Jump", "High Jump", "Pole Vault"]; //should be empty out of development

        this.expandPostThoughts = false;
    }

    expandTextArea() {
        console.log(1);

        this.expandPostThoughts = !this.expandPostThoughts;

        let popover = this.popoverCtrl.create(TextPopoverPage, {},{cssClass: 'custom-popover'});
        popover.present({
            //ev: myEvent
        });

    }

    // addStandardPreTrainingSurveyQuestions(newTraining: Training){
    //     newTraining.addPreSurveyQuestion(this.preTraining.energy.key, this.preTraining.energy.val);
    //     newTraining.addPreSurveyQuestion(this.preTraining.bodyState.key, this.preTraining.bodyState.val);
    //     newTraining.addPreSurveyQuestion(this.preTraining.stress.key, this.preTraining.stress.val);
    //     newTraining.addPreSurveyQuestion(this.preTraining.hunger.key, this.preTraining.hunger.val);
    //     newTraining.addPreSurveyQuestion(this.preTraining.readiness.key, this.preTraining.readiness.val);
    // }
    //
    // addStandardPostTrainingSurveyQuestions(newTraining: Training){
    //     newTraining.addPostSurveyQuestion(this.postTraining.rating.key, this.postTraining.rating.val);
    // }


    createNewTraining() {
        // let mainNote = new Notes(this.mainTraining.mainTrainingNotes.key, this.mainTraining.mainTrainingNotes.val);
        // mainNotes.push(mainNote);

        console.log(this.preTraining.getPreTraining());

     //    let newTraining = new Training();
     //    newTraining.addPreNote(this.preTraining.preThoughts.key, this.preTraining.preThoughts.val);
     //    this.addStandardPreTrainingSurveyQuestions(newTraining);
     //
     //    newTraining.addPostNote(this.postTraining.postThoughts.key, this.postTraining.postThoughts.val);
     //    this.addStandardPostTrainingSurveyQuestions(newTraining);
     //
     //
     // //   newTraining.setMainCalEvent(this.mainTraining.activities, mainNotes);
     //
     //
     //
     //    if (navigator.onLine) {
     //        this.training.createNewEntry(newTraining);
     //    }
     //    else {
     //        this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
     //    }

    }

    expand(type: string) {
        switch (type) {
            case 'pre':
                this.preTrainingExpanded = !this.preTrainingExpanded;
                break;
            case 'post':
                this.postTrainingExpanded = !this.postTrainingExpanded;
                break;
            case 'training':
                this.trainingExpanded = !this.trainingExpanded;
                break;
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
                label: data,
                value: data,
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
