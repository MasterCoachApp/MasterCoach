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

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  // rootPage:any = 'LoginPage';
  //   rootPage:any = 'TabsPage';
   rootPage:any = 'CreateTrainingPage';
    // rootPage:any = 'CreateExercisePage'

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

}
