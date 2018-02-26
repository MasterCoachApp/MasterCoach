import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoadingController, ToastController} from "ionic-angular";

@Injectable()
export class ToolsProvider {

    constructor(public toastCtrl: ToastController, public loadCtrl: LoadingController) {

    }


    presentToast(position: string, message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    }

    presentLoading() {
        let loading = this.loadCtrl.create({
            dismissOnPageChange: true,
            showBackdrop: false
        });
        return loading;
    }

}
