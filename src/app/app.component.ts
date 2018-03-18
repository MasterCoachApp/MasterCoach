import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/HomeTabs/tabs/tabs';
import {Keyboard} from "@ionic-native/keyboard";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {MenuEvents} from "../models/calendar/menu-events";
import {SettingsProvider} from "../providers/settings";
import {CreateTrainingPage} from "../pages/Training/create-training/create-training";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage:any = LoginPage;
    rootPage:any = TabsPage;
   //rootPage:any = CreateTrainingPage;

    selectedTheme: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard, public calendarMenu: CalendarMenu, private settings: SettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
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
    listOfEvents: string[];
    listOfLabels: string[];
    events: MenuEvents;

      setCalendarYear() {
          this.calendarMenu.setDisplayYear(this.displayedYear);
      }

      setBaseMenuSettings() {
          this.displayedYear = this.calendarMenu.getDisplayedYear();
          this.years = this.calendarMenu.getPossibleYears();
          this.events = this.calendarMenu.menuEvents;
          this.listOfEvents = this.events.getListOfEvents();
          this.listOfLabels = this.calendarMenu.getLabels();
      }


    editEventsModel(event: string) {
          let eventObject = this.events.updateObject(event, "filtered");
          this.calendarMenu.menuEvents = this.events;
    }

    getEventFilterModel(event: string) {
          return this.events.getFilterFromEvent(event);
    }


}
