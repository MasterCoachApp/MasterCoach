import {Injectable} from "@angular/core";
import {ToolsProvider} from "../tools/tools";
import {AlertController} from "ionic-angular";
import {CalendarDay} from "../../models/calendar/calendar-day";
import {MenuEvents} from "../../models/calendar/menu-events";
import {LabelProvider} from "../custom-survey-components/labels/labelProvider";


@Injectable()
export class CalendarMenu {

    displayedYear: number;
    displayedMonth: string;
    menuEvents: MenuEvents;

    datesArray: {
        datesThisMonth: CalendarDay[],
        datesLastMonth: CalendarDay[],
        datesNextMonth: CalendarDay[],
        currentMonth: CalendarDay[];
    };

    monthsArray: {
        thisMonth: string,
        lastMonth: string,
        nextMonth: string,
        currentMonth: string,
    };

    constructor(public tools: ToolsProvider, public labels: LabelProvider) {

        this.datesArray = {
            datesThisMonth: [],
            datesLastMonth: [],
            datesNextMonth: [],
            currentMonth: []
        };

        this.monthsArray = {
            thisMonth: "",
            lastMonth: "",
            nextMonth: "",
            currentMonth: ""
        };

        this.displayedYear = (new Date()).getFullYear();
        this.menuEvents = new MenuEvents(labels.listOfLabels);

        this.setThisMonth(new Date());
        this.setLastMonth(new Date());
        this.setNextMonth(new Date());

        this.datesArray.currentMonth = this.datesArray.datesThisMonth;
        this.monthsArray.currentMonth = this.monthsArray.thisMonth;


        // console.log(this.monthsArray.lastMonth);
        // console.log(this.monthsArray.thisMonth);
        // console.log(this.monthsArray.nextMonth);
        //
        // console.log(this.datesArray.datesLastMonth);
        // console.log(this.datesArray.datesThisMonth);
        // console.log(this.datesArray.datesNextMonth);


    }

    setDisplayYear(year: number) {
        this.displayedYear = year;
    }

    getDisplayedYear(): number {
        return this.displayedYear;
    }

    getPossibleYears(): number[] {
        let years: number[] = [];
        for (let i = this.displayedYear + 5; i >= 1970; i--) {
            years.push(i);
        }
        return years;
    }

    setNextMonth(date: Date) {
        date.setMonth(date.getMonth() + 1);

        this.monthsArray.nextMonth = new CalendarDay(date).month;

        let month = date.getMonth();
        this.datesArray.datesNextMonth = this.getDatesInMonth(month, this.displayedYear);
    }

    setThisMonth(date: Date) {
        let calDay = new CalendarDay(date);
        this.displayedMonth = calDay.month;
        this.monthsArray.thisMonth = calDay.month;

        let month = date.getMonth();
        this.datesArray.datesThisMonth = this.getDatesInMonth(month, this.displayedYear);
    }

    setLastMonth(date: Date) {
        date.setMonth(date.getMonth() - 1);

        this.monthsArray.lastMonth = new CalendarDay(date).month;

        let month = date.getMonth();
        this.datesArray.datesLastMonth = this.getDatesInMonth(month, this.displayedYear);
    }

    getDatesInMonth(month, year) {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new CalendarDay(new Date(date)));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

}