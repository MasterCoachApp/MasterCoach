import {Component} from '@angular/core';
import {App, IonicPage, MenuController, NavController, Platform, ViewController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public app: App, public storage: Storage, public user: UsersProvider, public menu: MenuController, public platform: Platform, public calMenu: CalendarMenu, public viewCtrl: ViewController) {

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
        this.menu.enable(false, 'filtersCalendarMenu');
    }

    ionViewDidLoad() {
        this.platform.ready().then((readySource) => {
            let todayItem = document.getElementById(this.dateSelected.dateValue);
            let scroll = document.getElementById("calendarScroll");
            if (todayItem != null && scroll != null) {
                scroll.scrollLeft = todayItem.offsetLeft;
            }
            scroll.onscroll = () => {
                this.determineViewedMonth();
            };
        });
    }

    //Full calendar
    x = 0;

    onDaySelect(event) {
        let date = new Date();
        date.setMonth(event.month);
        date.setDate(event.date);
        this.dateClicked = new CalendarDay(date);
        if(this.x != 0) {
            this.updateHorizontalCalendar(this.dateClicked);
            this.displayFullCalendar = false;
        }
        this.x++;
    }

    updateHorizontalCalendar(data) {
        if(data != null) {
            this.dateSelected = data;
            let todayItem = document.getElementById(this.dateSelected.dateValue);
            let scroll = document.getElementById("calendarScroll");
            if (todayItem != null && scroll != null) {
                scroll.scrollLeft = todayItem.offsetLeft;
            }
            this.monthInView = this.dateSelected.month;
        }
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


    //by finding the current offset of the scroll bar, we can determine what month to display in the header

    determineViewedMonth() {
        let scroll = document.getElementById("calendarScroll");

        let jan = document.getElementById((new Date().getFullYear()).toString()+"-01-01");
        let feb = document.getElementById((new Date().getFullYear()).toString()+"-02-01");

        if(jan != null && feb != null && scroll.scrollLeft >= jan.offsetLeft && scroll.scrollLeft < feb.offsetLeft) {
            this.monthInView = "January";
            return;
        }

        let mar = document.getElementById((new Date().getFullYear()).toString()+"-03-01");
        if(feb != null && mar != null && scroll.scrollLeft >= feb.offsetLeft && scroll.scrollLeft < mar.offsetLeft) {
            this.monthInView = "February";
            return;
        }

        let apr = document.getElementById((new Date().getFullYear()).toString()+"-04-01");
        if(apr != null && mar != null && scroll.scrollLeft >= mar.offsetLeft && scroll.scrollLeft < apr.offsetLeft) {
            this.monthInView = "March";
            return;
        }

        let may = document.getElementById((new Date().getFullYear()).toString()+"-05-01");
        if(apr != null && may != null && scroll.scrollLeft >= apr.offsetLeft && scroll.scrollLeft < may.offsetLeft) {
            this.monthInView = "April";
            return;
        }

        let jun = document.getElementById((new Date().getFullYear()).toString()+"-06-01");
        if(jun != null && may != null && scroll.scrollLeft >= may.offsetLeft && scroll.scrollLeft < jun.offsetLeft) {
            this.monthInView = "May";
            return;
        }

        let jul = document.getElementById((new Date().getFullYear()).toString()+"-07-01");
        if(jun != null && jul != null && scroll.scrollLeft >= jun.offsetLeft && scroll.scrollLeft < jul.offsetLeft) {
            this.monthInView = "June";
            return;
        }

        let aug = document.getElementById((new Date().getFullYear()).toString()+"-08-01");
        if(aug != null && jul != null && scroll.scrollLeft >= jul.offsetLeft && scroll.scrollLeft < aug.offsetLeft) {
            this.monthInView = "July";
            return;
        }

        let sep = document.getElementById((new Date().getFullYear()).toString()+"-09-01");
        if(aug != null && sep != null && scroll.scrollLeft >= aug.offsetLeft && scroll.scrollLeft < sep.offsetLeft) {
            this.monthInView = "August";
            return;
        }

        let oct = document.getElementById((new Date().getFullYear()).toString()+"-10-01");
        if(oct != null && sep != null && scroll.scrollLeft >= sep.offsetLeft && scroll.scrollLeft < oct.offsetLeft) {
            this.monthInView = "September";
            return;
        }

        let nov = document.getElementById((new Date().getFullYear()).toString()+"-11-01");
        if(oct != null && nov != null && scroll.scrollLeft >= oct.offsetLeft && scroll.scrollLeft < nov.offsetLeft) {
            this.monthInView = "October";
            return;
        }

        let dec = document.getElementById((new Date().getFullYear()).toString()+"-12-01");
        if(dec != null && nov != null && scroll.scrollLeft >= nov.offsetLeft && scroll.scrollLeft < dec.offsetLeft) {
            this.monthInView = "November";
            return;
        }

        if(dec != null && scroll.scrollLeft >= dec.offsetLeft) {
            this.monthInView = "December";
            return;
        }
    }


}
