export class User {

    Email: string;
    First_name: string;
    Last_name: string;
    User_Id: string;


    constructor(email: string, first_name: string, last_name: string, user_id: string) {
        this.Email = email;
        this.First_name = first_name;
        this.Last_name = last_name;
        this.User_Id = user_id;
    }



}