import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Training} from "../../models/logging/training";
import {UsersProvider} from "./users";

@Injectable()
export class EntryProvider {

    constructor(private db: AngularFireDatabase, public users: UsersProvider) {

    }

    createNewEntry(training: Training) {
            this.db.database.ref("Users/" + this.users.loggedIn.User_Id + "/Calendar").push(
                training
            ).then(() => {
                console.log("Success");
            });
    }
}