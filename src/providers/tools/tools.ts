import {Injectable} from '@angular/core';
import {Loading, LoadingController, ToastController} from "ionic-angular";
import {DatePicker} from "@ionic-native/date-picker";

@Injectable()
export class ToolsProvider {

    constructor(public toastCtrl: ToastController, public loadCtrl: LoadingController, public datePicker: DatePicker) {

    }


    presentToast(position: string, message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    }

    presentLoading(): Loading {
        return this.loadCtrl.create({
            dismissOnPageChange: true,
            showBackdrop: false
        });
    }

    showDatePicker() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => console.log('Got date: ', date),
            err => console.log('Error occurred while getting date: ', err)
        );
    }

}
