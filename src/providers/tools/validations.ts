import {Injectable} from "@angular/core";
import {ToolsProvider} from "./tools";
import {AlertController} from "ionic-angular";


@Injectable()
export class ValidationProvider {

    constructor( public tools: ToolsProvider, public alertCtrl: AlertController) {

    }

    validateEmail(email): boolean  {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    requestEmailVerification(): Promise<any>
    {
        let that = this;
        let email = "";
        let promise = new Promise( (resolve, reject) => {
            let prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'Email',
                        placeholder: 'Email'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: data => {
                            //validate email address properly and stop from being empty
                            if(data.Email == "" || !this.validateEmail(data.Email)) {
                                prompt.setMessage("Please enter a valid email address");
                                return false;
                            }
                            else {
                                email = data["Email"];
                                resolve();
                            }
                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(() => {
            return email;
        });
    }

    requestDisplayNameValidation(): Promise<any>
    {
        let nameObj = null;
        let that = this;
        let promise = new Promise( (resolve, reject) => {
            let prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'first_name',
                        placeholder: 'First name'
                    },
                    {
                        name: 'last_name',
                        placeholder: 'Last name'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: data => {
                            if(data.first_name == "" || data.last_name == "") {
                                prompt.setMessage("Please do not leave any fields empty");
                                return false;
                            }
                            nameObj = data;
                            resolve();

                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(() => {
            return nameObj;
        });
    }


}