import {Injectable} from '@angular/core';
import {PreTraining} from "../../../models/custom-survey-components/trainings/pre-training";
import {PostTraining} from "../../../models/custom-survey-components/trainings/post-training";
import {User} from "../../../models/users/user";
import {AngularFireDatabase} from "angularfire2/database";
import {Training} from "../../../models/logging/training";
import {Activities} from "../../../models/logging/activities/activities";
import {WarmUp} from "../../../models/logging/activities/warm-up";
import {CoolDown} from "../../../models/logging/activities/cool-down";
import {ExerciseTable} from "../../../models/logging/activities/exercise-table";
import {ExerciseSet} from "../../../models/logging/activities/exercise-set";
import {Label} from "../../../models/custom-survey-components/labels/label";

@Injectable()
export class TrainingProvider {

    listOfTrainings: Training[];
    preTraining = new PreTraining();
    postTraining = new PostTraining();

    constructor(private db: AngularFireDatabase) {
        this.getCustomPostTraining();
        this.getCustomPreTraining();
        this.listOfTrainings = [];
    }

    getCustomPostTraining() {

    }

    getCustomPreTraining() {

    }

    /*
    I have yet to decide if its worth continuously observing
     */

    getUserTrainings(user: User) {
        let listOfTrainings = [];
        let that = this;
        let userPromise = new Promise(function (resolve, reject) {
            let idRef = that.db.database.ref("Users/" + user.User_Id + "/Calendar");
            idRef.on('value', snapshot => {
                snapshot.forEach(snap => {
                    let training = new Training();
                    let post = snap.child("postCalEvent");
                    let pre = snap.child("preCalEvent");
                    let main = snap.child("mainCalEvent");

                    training.type = snap.child("type").val();
                    training.date = snap.child("trainingDate").val();
                    training.time = snap.child("trainingTime").val();

                    post.child("notes").forEach(note => {
                        training.addPostNote(note.key, note.val());
                        return false;
                    });
                    post.child("range").forEach(value => {
                        training.addPostRange(value.key, value.val());
                        return false;
                    });
                    pre.child("notes").forEach(note => {
                        training.addPreNote(note.key, note.val());
                        return false;
                    });
                    pre.child("range").forEach(value => {
                        training.addPreRange(value.key, value.val());
                        return false;
                    });

                    main.child("notes").forEach(note => {
                        training.addMainCalNote(note.key, note.val());
                        return false;
                    });

                    let activity = new Activities();
                    activity.warmUp = new WarmUp(main.child("warmup").val());
                    activity.coolDown = new CoolDown(main.child("cooldown").val());
                    let exercises = {};
                    main.child("categories").forEach(categories => {
                        categories.forEach(exercise => {
                            exercises[categories.key][exercise.key]= new ExerciseTable();
                            exercises[categories.key][exercise.key].category = exercise.child("exercise").child("category").val();
                            exercises[categories.key][exercise.key].exerciseName = exercise.key;
                            exercises[categories.key][exercise.key].sets = [];
                            exercise.forEach(set => {
                                if (set.key != "labels" && set.key != "category") {
                                    let newSet = new ExerciseSet(set.child("setNumber").val());
                                    newSet.detail = set.child("detail").val();
                                    newSet.complete = set.child("complete").val();
                                    newSet.measure = set.child("measure").val();
                                    newSet.reps = set.child("reps").val();
                                    newSet.setNumber = set.child("setNumber").val();
                                    exercises[categories.key].tableSet.exercises[exercise.key].sets.push(newSet);
                                }
                                else if (set.key == "labels") {
                                    set.forEach(label => {
                                        exercises[categories.key].tableSet.exercises[exercise.key].labels.push(new Label(label.val()));
                                        return false;
                                    });
                                }
                                return false;
                            });
                            return false;
                        });
                        return false;
                    });
                    activity.exercises = exercises;
                    training.mainCalEvent.activities = activity;

                    listOfTrainings.push(training);
                    return false;
                });
                that.listOfTrainings = listOfTrainings;
                resolve('Success');
            });
        });
        return userPromise.then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        });
    }


}