import {Injectable} from '@angular/core';
import {PreTraining} from "../../../models/custom-survey-components/trainings/pre-training";
import {PostTraining} from "../../../models/custom-survey-components/trainings/post-training";
import {User} from "../../../models/users/user";
import {AngularFireDatabase} from "angularfire2/database";
import {Training} from "../../../models/logging/training";
import {Activities} from "../../../models/logging/activities/activities";
import {WarmUp} from "../../../models/logging/activities/warm-up";
import {CoolDown} from "../../../models/logging/activities/cool-down";

@Injectable()
export class TrainingProvider {

    preTraining = new PreTraining();
    postTraining = new PostTraining();

    constructor(private db: AngularFireDatabase) {
        this.getCustomPostTraining();
        this.getCustomPreTraining();
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
                    activity.warmUp = new WarmUp(main.child("activities").child("warmup").val());
                    activity.coolDown = new CoolDown(main.child("activities").child("cooldown").val());

                    main.child("activities").child("exercises").forEach(exercise => {

                        return false;
                    });


                    return false;
                });
            });
        });
        return userPromise.then(response => {
            return response;
        }).catch(() => {
            return null;
        });
    }


}