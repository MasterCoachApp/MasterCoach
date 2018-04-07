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

        let filteredExerciseTableArray = []

        training.mainCalEvent.exercises.forEach(data => {
            let exerciseTable = {
                sets: data.sets,
                labels: data.labels,
                exerciseName: data.exercise.exerciseName,
                category: data.exercise.exerciseCategory.category.name,
                exerciseTableType: data.exercise.exerciseTableType
            };
            filteredExerciseTableArray.push(exerciseTable);
        });

        let reformattedTraining = {
            preCalEvent: training.mainCalEvent,
            postCalEvenet: training.postCalEvent,
            mainCalEvent: {
                warmUp: training.mainCalEvent.warmUp,
                coolDown: training.mainCalEvent.coolDown,
                exercises: filteredExerciseTableArray
            }
        };

        this.db.database.ref("Users/" + this.users.loggedIn.User_Id + "/Calendar").push(
            // training
            reformattedTraining
        ).then(() => {
            console.log("Success");
        });
    }
    filterTrainingDetails(training: Training) {

    }
}