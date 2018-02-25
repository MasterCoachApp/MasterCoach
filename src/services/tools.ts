import {Injectable} from "@angular/core";
import {ToastController} from "ionic-angular";

@Injectable()
export class Tools {

    constructor(public toastCtrl: ToastController) {

    }


    presentToast(position: string, message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    }

}