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

    parseISOString(isoDate) {
        return new Date(isoDate);
    }


    public getMonth(date: Date) {
        switch(date.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    }

    public getDayOfWeek(date: Date) {
        switch(date.getDay()) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
        }
    }


}
