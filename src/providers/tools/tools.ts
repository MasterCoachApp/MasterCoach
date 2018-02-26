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

     validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}
