import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {TabsPage} from "../../HomeTabs/tabs/tabs";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Training} from "../../../models/logging/training";
import {Moods} from "../../../models/logging/moods/moods";
import {Qna} from "../../../models/logging/moods/qna";
import {Activities} from "../../../models/logging/activities/activities";
import {TrackEvents} from "../../../models/logging/activities/track-events";

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

    postThoughts: string;
    overallRating: number;

    activities: Activities[];
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
        postThoughts: '',
        overallRating: 0
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public users: UsersProvider, public training: EntryProvider, public alertCtrl: AlertController, public tools: ToolsProvider) {
        this.trainingExpanded = false;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;

        this.overallThoughtsExpanded = false;
        this.activities = [];
        this.listOfEvents = new TrackEvents().getListOfEvents();

    }

    createMood(): Moods {
        let mood = new Moods();
        let question = new Qna(this.preTraining.energy.key, this.preTraining.energy.val);
        mood.addQuestion(question);
        question = new Qna(this.preTraining.bodyState.key, this.preTraining.bodyState.val);
        mood.addQuestion(question);
        question = new Qna(this.preTraining.stress.key, this.preTraining.stress.val);
        mood.addQuestion(question);
        question = new Qna(this.preTraining.hunger.key, this.preTraining.hunger.val);
        mood.addQuestion(question);
        question = new Qna(this.preTraining.readiness.key, this.preTraining.readiness.val);
        mood.addQuestion(question);
        return mood;
    }

    createNewTraining() {

        let mood = this.createMood();

        let newTraining = new Training();
        newTraining.setPreCalEvent(mood, this.preTraining.preThoughts.val);
        newTraining.setPostCalEvent(this.postTraining.overallRating, this.postTraining.postThoughts);

        console.log(newTraining.getPreCalEvent().mood.surveyList);

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

        let alert = this.alertCtrl.create();
        alert.setTitle('Which events would you like to add?');

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
                // this.activities;
                // this.testCheckboxResult = data;
            }
        });
        alert.present();
    }

    cancel() {
        this.navCtrl.pop();
    }

}
