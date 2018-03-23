import {Injectable} from "@angular/core";
import {ToolsProvider} from "../tools/tools";
import {AlertController} from "ionic-angular";
import {CalendarDay} from "../../models/calendar/calendar-day";
import {MenuEvents} from "../../models/calendar/menu-events";
import {LabelProvider} from "../custom-survey-components/labels/labelProvider";


@Injectable()
export class CalendarMenu {

    displayedYear: number;
    menuEvents: MenuEvents;
    dateArray: CalendarDay[];


    constructor(public tools: ToolsProvider, public alertCtrl: AlertController, public labels: LabelProvider) {
        this.displayedYear = (new Date()).getFullYear();
        this.menuEvents = new MenuEvents(labels.listOfLabels);
        let currentYear = this.getDisplayedYear();
        this.dateArray = this.getDates(new Date(currentYear.toString()+'-01-01'),new Date(currentYear.toString()+'-12-31'));
    }

    setDisplayYear(year: number) {
        this.displayedYear = year;
        this.dateArray = this.getDates(new Date(this.getDisplayedYear()+"-01-01"), new Date(this.getDisplayedYear()+"-12-31"));
    }

    getDisplayedYear(): number {
        return this.displayedYear;
    }

    getPossibleYears(): number[] {
        let years: number[] = [];
        for(let i = this.displayedYear; i>= 1970; i--) {
            years.push(i);
        }
        return years;
    }

    getDates(startDate, endDate) {
        let dates = [],
            currentDate = startDate,
            addDays = function(days) {
                let date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        while (currentDate <= endDate) {
            let day = new CalendarDay(currentDate);
            dates.push(day);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };

}