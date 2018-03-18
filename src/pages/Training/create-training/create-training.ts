import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Note} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Training} from "../../../models/logging/training";
import {Qna} from "../../../models/logging/qna";
import {Activities} from "../../../models/logging/activities/activities";
import {TrackEvents} from "../../../models/logging/activities/track-events";
import {Notes} from "../../../models/logging/notes";

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

    overallThoughtsExpanded: boolean;

    activities: Activities;
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
        overallRating: 0
    };

    mainTraining = {
        mainTrainingNotes: {
            key: 'Notes',
            val: ''
        }
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public users: UsersProvider, public training: EntryProvider, public alertCtrl: AlertController, public tools: ToolsProvider) {
        this.trainingExpanded = false;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;

        this.overallThoughtsExpanded = false;
        this.activities = new Activities();
        this.listOfEvents = new TrackEvents().getListOfEvents();

    }

    createQnaArray(): Qna[] {
        let qna: Qna[] = [];
        let question = new Qna(this.preTraining.energy.key, this.preTraining.energy.val);
        qna.push(question);
        question = new Qna(this.preTraining.bodyState.key, this.preTraining.bodyState.val);
        qna.push(question);
        question = new Qna(this.preTraining.stress.key, this.preTraining.stress.val);
        qna.push(question);
        question = new Qna(this.preTraining.hunger.key, this.preTraining.hunger.val);
        qna.push(question);
        question = new Qna(this.preTraining.readiness.key, this.preTraining.readiness.val);
        qna.push(question);
        return qna;
    }


    createNewTraining() {

        let qna = this.createQnaArray();
        let preNotes: Notes[] = [];
        let postNotes: Notes[] = [];
        let mainNotes: Notes[] = [];

        let preNote = new Notes(this.preTraining.preThoughts.key, this.preTraining.preThoughts.val);
        preNotes.push(preNote);

        let postNote = new Notes(this.postTraining.postThoughts.key, this.postTraining.postThoughts.val);
        postNotes.push(postNote);

        let mainNote = new Notes(this.mainTraining.mainTrainingNotes.key, this.mainTraining.mainTrainingNotes.val);
        mainNotes.push(mainNote);

        let newTraining = new Training();
        newTraining.setPreCalEvent(qna, preNotes);
        newTraining.setPostCalEvent(this.postTraining.overallRating, postNotes);
        newTraining.setMainCalEvent(this.activities, mainNotes);



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
                        this.activities.addEvents(index);
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
            label: 'A',
            value: 'A',
            checked: false
        });
        alert.addInput( {
            type: 'radio',
            label: 'B',
            value: 'B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: data => {
                console.log('Checkbox data:', data);
                if (data != null) {
                    this.activities.setWarmUp(data);
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
            label: 'A',
            value: 'A',
            checked: false
        });
        alert.addInput( {
            type: 'radio',
            label: 'B',
            value: 'B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: data => {
                console.log('Checkbox data:', data);
                if (data != null) {
                    this.activities.setCoolDown(data);
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
