 import {Component, Pipe} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/HomeTabs/tabs/tabs';
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {MenuEvents} from "../models/calendar/menu-events";
import {LabelProvider} from "../providers/training/labels/labelProvider";
import {Label} from "../models/custom-survey-components/labels/label";
 import {LoginPage} from "../pages/Logins/login/login";
 import {TrainingProvider} from "../providers/training/trainings/trainingProvider";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  // rootPage:any = 'LoginPage';
    rootPage:any = 'TabsPage';
   // rootPage:any = 'CreateTrainingPage';
    // rootPage:any = 'CreateExercisePage'

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard, public calendarMenu: CalendarMenu, private labels: LabelProvider, public training: TrainingProvider) {
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
          athleteFilterOpen: false,
          labelsFilterOpen: true
      },
    };

    displayedYear: number;
    years: number[];
    listOfLabels: Label[] = [];
    labelFilters: Label[] = [];
      setCalendarYear() {
          this.calendarMenu.displayedYear = this.displayedYear;
         // this.calendarMenu.
      }

      setBaseMenuSettings() {
          this.displayedYear = this.calendarMenu.getDisplayedYear();
          this.years = this.calendarMenu.getPossibleYears();
          this.listOfLabels = this.labels.listOfLabels;
      }

    updateLabelFilters(filter: Label) {
       if(this.labelFilters.indexOf(filter) < 0) {
           this.labelFilters.push(filter);
       }
       else {
           this.labelFilters.splice(this.labelFilters.indexOf(filter), 1);
       }
       this.labels.labelFilters = this.labelFilters;
       this.labels.updateFilteredTrainingList(this.training.listOfTrainings);
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
