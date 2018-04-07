import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/HomeTabs/tabs/tabs';
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {MenuEvents} from "../models/calendar/menu-events";
import {LabelProvider} from "../providers/custom-survey-components/labels/labelProvider";
import {Label} from "../models/custom-survey-components/labels/label";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = LoginPage;
    rootPage:any = 'TabsPage';
   //rootPage:any = 'CreateTrainingPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard, public calendarMenu: CalendarMenu, private labels: LabelProvider) {
    platform.ready().then(() => {
        //Menu settings
        this.setBaseMenuSettings();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        keyboard.hideKeyboardAccessoryBar(false);
        statusBar.backgroundColorByName("white");
        splashScreen.hide();
    });
  }




  //----------------//
  //      Menu      //
  //---------------//

    collapsable = {
      filter: {
          main: true,
          eventFilterOpen: false,
          trainingResultFilterOpen: false,
          athleteFilterOpen: false,
          labelsFilterOpen: false
      },
    };

    displayedYear: number;
    years: number[];
    listOfLabels: Label[];

      setCalendarYear() {
          this.calendarMenu.setDisplayYear(this.displayedYear);
      }

      setBaseMenuSettings() {
          this.displayedYear = this.calendarMenu.getDisplayedYear();
          this.years = this.calendarMenu.getPossibleYears();
          this.listOfLabels = this.calendarMenu.menuEvents.labelList;
      }



    // ------------- Full calendar ---------------------
    // x = 0;
    // onDaySelect(event) {
    //     let date = new Date();
    //     date.setMonth(event.month);
    //     date.setDate(event.date);
    //     this.dateClicked = new CalendarDay(date);
    //     if(this.x != 0) {
    //         //this.updateHorizontalCalendar(this.dateClicked);
    //         this.displayFullCalendar = false;
    //     }
    //     this.x++;//fix dat for real
    // }
    //
    // onMonthSelect(event) {
    //
    // }
    //
    // swipe(event, calendar) {
    //     if(event.direction === 2) {
    //         calendar.forward();
    //     }
    //     if(event.direction === 4) {
    //         calendar.back();
    //     }
    // }
    //
    // selectDate(date: CalendarDay) {
    //     this.dateSelected = date;
    //     this.monthInView = date.month;
    // }
    //

    //-------------------

}
