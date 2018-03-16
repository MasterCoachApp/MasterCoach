import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CalendarDay} from "../../models/calendar-day";
import {CalendarModule} from "ionic3-calendar-en";

/**
 * Generated class for the CalendarPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar-popover',
  templateUrl: 'calendar-popover.html',
})
export class CalendarPopoverPage {

    currentEvents: any[];
    dateClicked: CalendarDay;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

      //The package takes events of this model as a passable object to determine what cells in the calendar get event blips
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPopoverPage');
  }
  x = 0;

    onDaySelect(event) {
      let date = new Date();
      date.setMonth(event.month);
      console.log(date.getMonth());
      date.setDate(event.date);
      this.dateClicked = new CalendarDay(date);
      if(this.x != 0) //This code gets ran on popover open because todays day gets selected, so the first one needs to be skipped.
        this.viewCtrl.dismiss(this.dateClicked);
      this.x++;
    }

    onMonthSelect(event) {

    }

    //When the popover experiences a swipe it changes the month. note that the method used is the only way to get a handle on the calendar object.
    swipe(event, calendar) {
        if(event.direction === 2) {
            calendar.forward();
        }
        if(event.direction === 4) {
            calendar.back();
        }
    }

}