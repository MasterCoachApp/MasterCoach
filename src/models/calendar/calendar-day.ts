import {CalendarEvent} from '../logging/calendar-event';
import {TrainingProvider} from "../../providers/custom-survey-components/trainings/trainingProvider";
import {Training} from "../logging/training";

export class CalendarDay {

    public calendarEvent: CalendarEvent;

    public date: Date;
    public dayOfTheWeek: string;
    public month: string;
    public dateValue: string;
    public lastDay: string;

    public content: Training[];


    constructor(date: Date) {
        this.date = date;
        this.dayOfTheWeek = this.getDayOfWeek(this.date);
        this.month = this.getMonth(this.date);
        this.dateValue = date.toISOString().slice(0, 10);

        this.content = [];
        this.calendarEvent = null;
    }


    /*
        Private Getters
     */
    private getMonth(date: Date) {
        let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        newDate.setMonth(newDate.getMonth() + 1);
        newDate.setDate(0);
        this.lastDay = String(newDate.getDate());

        switch(date.getMonth()) {
            case 0:
                return "January";
            case 1:
                this.lastDay ="28";
                return "February";
            case 2:
                this.lastDay ="31";
                return "March";
            case 3:
                this.lastDay ="30";
                return "April";
            case 4:
                this.lastDay ="31";
                return "May";
            case 5:
                this.lastDay ="30";
                return "June";
            case 6:
                this.lastDay ="30";
                return "July";
            case 7:
                this.lastDay ="31";
                return "August";
            case 8:
                this.lastDay ="30";
                return "September";
            case 9:
                this.lastDay ="31";
                return "October";
            case 10:
                this.lastDay ="30";
                return "November";
            case 11:
                this.lastDay ="31";
                return "December";
        }
    }

    private getDayOfWeek(date: Date) {
        switch(date.getDay()) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
        }
    }

}