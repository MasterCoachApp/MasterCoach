import {Component} from '@angular/core';
import {MenuController, NavController, Platform, PopoverController} from 'ionic-angular';
import {CalendarDay} from "../../../models/calendar-day";
import {CalendarPopoverPage} from "../../calendar-popover/calendar-popover";
import {CalendarMenu} from "../../../providers/menus/calendar-menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    activeMenu: string;
    date = new Date();
    yearPicked: number = new Date().getFullYear();
    //I suspect hard-coding UTC time will cause problems for other time-zones
    //Without specifying it was putting the wrong date (+4:00)
    dateSelected: CalendarDay = new CalendarDay( new Date(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate(), this.date.getUTCHours(), this.date.getUTCMinutes(), this.date.getUTCSeconds()));
    monthInView: string = this.dateSelected.month;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public menu: MenuController, public platform: Platform, public calMenu: CalendarMenu) {
      this.activateMenu();
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
                scroll.scrollLeft = todayItem.offsetLeft; //+3 to get the border of the element int he view
            }
            scroll.onscroll = () => {
                this.determineViewedMonth();
            };
        });
    }

    selectDate(date: CalendarDay) {
        this.dateSelected = date;
        this.monthInView = date.month;

    }

    showFullCalendar(myEvent) {
        let popover = this.popoverCtrl.create(CalendarPopoverPage, {dateSelected: this.dateSelected}, {
            cssClass: 'calendarPopover'
        });
        popover.present({
            ev: myEvent
        });

        popover.onDidDismiss(data => {
            if(data != null) {
                console.log(data);
                this.dateSelected = data;
                let todayItem = document.getElementById(this.dateSelected.dateValue);
                let scroll = document.getElementById("calendarScroll");
                if (todayItem != null && scroll != null) {
                    scroll.scrollLeft = todayItem.offsetLeft; //+3 to get the border of the element int he view
                }
                this.monthInView = this.dateSelected.month;
            }
        });
    }


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
