import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {User} from "../../models/users/user";

@Injectable()
export class UsersProvider {

    loggedIn: User;

    constructor(private db: AngularFireDatabase,) {

    }

    // -------------------------///
    //    Retrieve Users       ///
    //-------------------------///



    // -------------------------///
    //    Get User - Auto Login ///
    //-------------------------///

    retireveLoggedInUser(email: string) {
        //email is a unique key value pair in the database
        let that = this;
        let userPromise = new Promise(function(resolve, reject) {
            let idRef = that.db.database.ref("Users");
            idRef.once('value', snapshot => {
                snapshot.forEach(snap => {
                   if(snap.child("Email").val().toUpperCase() == email.toUpperCase()) {
                        let user = new User(snap.child("Email").val(), snap.child("First_name").val(), snap.child("Last_name").val(), snap.child("UserId").val());
                        resolve(user);
                        return true;
                   }
                   return false;
                });
                reject(null);
            });
       });
       return userPromise.then(response => {
           return response;
       }).catch(() => {
           return null;
       });
    }



}
