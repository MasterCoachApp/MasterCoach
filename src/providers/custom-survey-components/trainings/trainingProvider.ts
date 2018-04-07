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
import {CalendarMenu} from "../../menus/calendar-menu";

@Injectable()
export class TrainingProvider {

    listOfTrainings: Training[];
    preTraining = new PreTraining();
    postTraining = new PostTraining();

    constructor(private db: AngularFireDatabase, public calMenu: CalendarMenu) {
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
                    training.trainingDate = snap.child("trainingDate").val();
                    training.trainingTime = snap.child("trainingTime").val();

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

                    training.mainCalEvent.warmUp = new WarmUp(main.child("warmUp").val());
                    training.mainCalEvent.coolDown = new CoolDown(main.child("coolDown").val());
                    main.child("exercises").forEach(exercises => {
                            let table = new ExerciseTable();
                            table.sets = [];
                            table.labels = [];
                            table.exerciseName = exercises.child("exerciseName").val();
                            table.category = exercises.child("category").val();

                            exercises.child("labels").forEach(label => {
                                table.labels.push(label.val());
                                return false;
                            });

                            exercises.child("sets").forEach(set => {
                                let newSet = new ExerciseSet(set.child("setNumber").val());
                                newSet.detail = set.child("detail").val();
                                newSet.complete = set.child("complete").val();
                                newSet.measure = set.child("measure").val();
                                newSet.reps = set.child("reps").val();
                                newSet.setNumber = set.child("setNumber").val();
                                table.sets.push(newSet);
                                return false;
                            });
                            training.mainCalEvent.exercises.push(table);
                        return false;
                    });

                    listOfTrainings.push(training);
                    training.getCategories();
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


    setEventsNextMonth() {
        this.calMenu.datesArray.datesNextMonth.forEach(date => {
            date.content = [];
            this.listOfTrainings.forEach(training => {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    }

    setEventsLastMonth() {
        this.calMenu.datesArray.datesLastMonth.forEach(date => {
            date.content = [];
            this.listOfTrainings.forEach(training => {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    }

    setEventsCurrentMonth() {
        this.calMenu.datesArray.datesThisMonth.forEach(date => {
            date.content = [];
            this.listOfTrainings.forEach(training => {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    }


}