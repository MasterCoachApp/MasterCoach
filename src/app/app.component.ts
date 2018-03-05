import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/HomeTabs/tabs/tabs';
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {Events} from "../models/events";
import {CalendarEvents} from "../models/calendar-events";
import {LoginPage} from "../pages/Logins/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,keyboard: Keyboard, public calendarMenu: CalendarMenu) {
    platform.ready().then(() => {
        //Menu settings
        this.setBaseMenuSettings();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        keyboard.hideKeyboardAccessoryBar(false);
        statusBar.styleDefault();
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
      },
    };

    displayedYear: number;
    years: number[];
    listOfEvents: string[];
    events: CalendarEvents;

      setCalendarYear() {
          this.calendarMenu.setDisplayYear(this.displayedYear);
      }

      setBaseMenuSettings() {
          this.displayedYear = this.calendarMenu.getDisplayedYear();
          this.years = this.calendarMenu.getPossibleYears();
          this.events = this.calendarMenu.menuEvents;
          this.listOfEvents = this.events.getListOfEvents();
      }


    editEventsModel(event: string) {
          let eventObject = this.events.updateObeject(event, "filtered");
          this.calendarMenu.menuEvents = this.events;
    }

    getEventFilterModel(event: string) {
          return this.events.getFilterFromEvent(event);
    }


}
