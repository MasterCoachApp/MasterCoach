import {Component} from '@angular/core';
import {App, IonicPage, MenuController, ModalController, NavController, Platform, ViewController} from 'ionic-angular';
import {CalendarDay} from "../../../models/calendar/calendar-day";
import {CalendarMenu} from "../../../providers/menus/calendar-menu";
import {Storage} from "@ionic/storage";
import {LoginPage} from "../../Logins/login/login";
import {UsersProvider} from "../../../providers/users/users";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    activeMenu: string;
    date = new Date();
    //I suspect hard-coding UTC time will cause problems for other time-zones
    //Without specifying it was putting the wrong date (+4:00)
    dateSelected: CalendarDay = new CalendarDay( new Date(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate(), this.date.getUTCHours(), this.date.getUTCMinutes(), this.date.getUTCSeconds()));
    monthInView: string = this.dateSelected.month;

    currentEvents: any[];
    dateClicked: CalendarDay;
    displayFullCalendar = false;
  constructor(public navCtrl: NavController, public app: App, public storage: Storage, public modalCtrl: ModalController, public user: UsersProvider, public menu: MenuController, public platform: Platform, public calMenu: CalendarMenu, public viewCtrl: ViewController) {

      this.storage.get('user-email').then(email => {
         if(email == null) {
             this.app.getRootNav().push('LoginPage');
         }
         else {
            user.retrievedLoggedInUser(email).then(response => {
               if(response == null) {
                   console.log("Auto login failed to find existing user in db");
                   this.app.getRootNav().push('LoginPage');
               }
               else {
                   user.loggedIn = response;
                   console.log(response);
               }
            }).catch(error=> {
                console.log("Auto login failed to find existing user in db");
                this.app.getRootNav().push('LoginPage');
            });
         }
      });

      this.activateMenu();

      this.currentEvents = [
          {
              year: 2018,
              month: 2,
              date: 4
          },
          {
              year: 2018,
              month: 2,
              date: 5
          },
          {
              year: 2018,
              month: 2,
              date: 8
          },
          {
              year: 2018,
              month: 2,
              date: 9
          }
      ];
  }
    activateMenu() {
        this.activeMenu = 'mainCalendarMenu';
        this.menu.enable(true, 'mainCalendarMenu');
    }


    createNewTraining(dateSelected: string) {
        let profileModal = this.modalCtrl.create('CreateTrainingPage', {date: dateSelected});
        profileModal.present();
    }

    //Full calendar
    x = 0;

    onDaySelect(event) {
        let date = new Date();
        date.setMonth(event.month);
        date.setDate(event.date);
        this.dateClicked = new CalendarDay(date);
        if(this.x != 0) {
            //this.updateHorizontalCalendar(this.dateClicked);
            this.displayFullCalendar = false;
        }
        this.x++;//fix dat for real
    }

    onMonthSelect(event) {

    }

    swipe(event, calendar) {
        if(event.direction === 2) {
            calendar.forward();
        }
        if(event.direction === 4) {
            calendar.back();
        }
    }


    //

    selectDate(date: CalendarDay) {
        this.dateSelected = date;
        this.monthInView = date.month;
    }




}
