import {Component} from '@angular/core';
import {
    AlertController, IonicPage, NavController, NavParams, Note, PopoverController,
    ViewController
} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Training} from "../../../models/logging/training";
import {Activities} from "../../../models/logging/activities/activities";
import {TrackEvents} from "../../../models/logging/activities/track-events";
import {TextPopoverPage} from "../text-popover/text-popover";

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


    preTraining = {
        readiness: {
            key: "Readiness",
            val: 0
        },
        hunger: {
            key: "Hunger",
            val: 0
        },
        stress: {
            key: "Stress",
            val: 0
        },
        bodyState: {
            key: "Body State",
            val: 0
        },
        energy: {
            key: "Energy",
            val: 0
        },
        preThoughts: {
            key: "Thoughts",
            val: ''
        },

    };
    postTraining = {
        postThoughts: {
            key: 'Thoughts',
            val: ''
        },
        rating: {
          key: 'Overall',
          val: 0
        }
    };

    mainTraining = {
        activities: new Activities(),
        mainTrainingNotes: {
            key: 'Notes',
            val: ''
        }
    };

    trainingEventList: string[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public users: UsersProvider, public training: EntryProvider, public alertCtrl: AlertController, public tools: ToolsProvider) {
        this.trainingExpanded = true;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;

        this.listOfEvents = new TrackEvents().getListOfEvents();
        this.trainingEventList = [];

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

    addStandardPreTrainingSurveyQuestions(newTraining: Training){
        newTraining.addPreSurveyQuestion(this.preTraining.energy.key, this.preTraining.energy.val);
        newTraining.addPreSurveyQuestion(this.preTraining.bodyState.key, this.preTraining.bodyState.val);
        newTraining.addPreSurveyQuestion(this.preTraining.stress.key, this.preTraining.stress.val);
        newTraining.addPreSurveyQuestion(this.preTraining.hunger.key, this.preTraining.hunger.val);
        newTraining.addPreSurveyQuestion(this.preTraining.readiness.key, this.preTraining.readiness.val);
    }

    addStandardPostTrainingSurveyQuestions(newTraining: Training){
        newTraining.addPostSurveyQuestion(this.postTraining.rating.key, this.postTraining.rating.val);
    }


    createNewTraining() {
        // let mainNote = new Notes(this.mainTraining.mainTrainingNotes.key, this.mainTraining.mainTrainingNotes.val);
        // mainNotes.push(mainNote);

        let newTraining = new Training();
        newTraining.addPreNote(this.preTraining.preThoughts.key, this.preTraining.preThoughts.val);
        this.addStandardPreTrainingSurveyQuestions(newTraining);

        newTraining.addPostNote(this.postTraining.postThoughts.key, this.postTraining.postThoughts.val);
        this.addStandardPostTrainingSurveyQuestions(newTraining);


     //   newTraining.setMainCalEvent(this.mainTraining.activities, mainNotes);



        if (navigator.onLine) {
            this.training.createNewEntry(newTraining);
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }

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
