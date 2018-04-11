import {Injectable} from '@angular/core';
import {PreTraining} from "../../../models/custom-survey-components/trainings/pre-training";
import {PostTraining} from "../../../models/custom-survey-components/trainings/post-training";
import {Training} from "../../../models/logging/training";
import {UsersProvider} from "../../users/users";
import {AngularFireDatabase} from "angularfire2/database";
import {User} from "../../../models/users/user";
import {WarmUp} from "../../../models/logging/create-training/warm-up";
import {CoolDown} from "../../../models/logging/create-training/cool-down";
import {Exercise} from "../../../models/logging/exercises/exercise";
import {ExerciseTableType} from "../../../models/logging/create-training/exercise-table-type";
import {ExerciseTable} from "../../../models/logging/create-training/exercise-table";
import {ExerciseSet} from "../../../models/logging/create-training/exercise-set";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {CalendarMenu} from "../../menus/calendar-menu";

@Injectable()
export class TrainingProvider {

    preTraining = new PreTraining();
    postTraining = new PostTraining();
    listOfTrainings: Training[];

    constructor(public calMenu: CalendarMenu, private db: AngularFireDatabase, public users: UsersProvider)  {
        this.getCustomPostTraining();
        this.getCustomPreTraining();
    }

    getCustomPostTraining() {

    }

    getCustomPreTraining() {

    }


    createNewEntry(training: Training) {

        let filteredExerciseTableArray = [];

        training.mainCalEvent.exercises.forEach(data => {
            let exerciseTable = {
                sets: data.sets,
                labels: data.labels,
                exerciseName: data.exerciseName,
                category: data.exerciseCategory.category.name,
                exerciseTableType: data.exerciseTableType
            };
            filteredExerciseTableArray.push(exerciseTable);
        });

        let reformattedTraining = {
            preCalEvent: training.preCalEvent,
            postCalEvent: training.postCalEvent,
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

    getUserTrainings(user: User) {
        let listOfTrainings = [];
        let that = this;
        let userPromise: Promise<any>;
        userPromise = new Promise(function (resolve, reject) {
            let idRef = that.db.database.ref("Users/" + user.User_Id + "/Calendar");
            idRef.on('value', snapshot => {
                that.listOfTrainings = [];
                snapshot.forEach(snap => {
                    let training = new Training();
                    let post = snap.child("postCalEvent");
                    let pre = snap.child("preCalEvent");
                    let main = snap.child("mainCalEvent");

                    training.type = snap.child("type").val();
                    training.trainingDate = snap.child("trainingDate").val();
                    training.trainingTime = snap.child("trainingTime").val();
                    training.id = snap.key;

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
                        let headers = exercises.child("exerciseTableType").child("tableHeaderList");
                        let headerList: string[] = [];
                        headers.forEach(header => {
                            headerList.push(header.val());
                            return false;
                        });
                        let tableType = new ExerciseTableType(exercises.child("exerciseTableType").child("tableTypeName").val(), headerList);
                        let ex = new Exercise(exercises.child("exerciseName").val(), new ExerciseCategory(exercises.child("category").val()), tableType);
                        let table = new ExerciseTable(ex);
                        table.sets = [];
                        table.labels = [];

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