import {Injectable} from '@angular/core';
import {PreTraining} from "../../../models/custom-survey-components/trainings/pre-training";
import {PostTraining} from "../../../models/custom-survey-components/trainings/post-training";
import {Training} from "../../../models/logging/training";
import {UsersProvider} from "../../users/users";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class TrainingProvider {

    preTraining = new PreTraining();
    postTraining = new PostTraining();

    constructor(private db: AngularFireDatabase, public users: UsersProvider) {
        this.getCustomPostTraining();
        this.getCustomPreTraining();
    }

    getCustomPostTraining() {

    }

    getCustomPreTraining() {

    }

    createNewEntry(training: Training) {

        // let tempTraining = {
        //     exerciseTables: training.mainCalEvent.activities.exercises,//filterTrainingDetails(training)
        // };
        //
        // let exerciseTable = {
        //     exercises: training.mainCalEvent.activities
        //     labels: training.mainCalEvent.activities.exercises
        // };

        this.db.database.ref("Users/" + this.users.loggedIn.User_Id + "/Calendar").push(
            training
        ).then(() => {
            console.log("Success");
        });
    }
    filterTrainingDetails(training: Training) {

    }
}