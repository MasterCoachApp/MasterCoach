import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../../providers/users/users";
import {TabsPage} from "../../HomeTabs/tabs/tabs";
import {EntryProvider} from "../../../providers/users/entries";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Training} from "../../../models/logging/training";
import {Moods} from "../../../models/logging/moods/moods";
import {Qna} from "../../../models/logging/moods/qna";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public users: UsersProvider, public training: EntryProvider, public tools: ToolsProvider) {
        this.trainingExpanded = false;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;

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

    cancel() {
        this.navCtrl.pop();
    }

}
