import {CalendarEvent} from '../logging/calendar-event';

export class CalendarDay {

    public calendarEvent: CalendarEvent;

    public date: Date;
    public dayOfTheWeek: string;
    public month: string;
    public dateValue: string;

    public content: {
        planned: any[],
        executed: any[],
        [key: string]: any;
    };


    constructor(date: Date) {
        this.date = date;
      //  this.date.setDate(date.getUTCDate());
        this.dayOfTheWeek = this.getDayOfWeek(this.date);
        this.month = this.getMonth(this.date);
        this.dateValue = date.toISOString().slice(0, 10);

        this.content = {
            planned: [],
            executed: []
        };

        this.calendarEvent = null;

    }

    /*
        Private Getters
     */
    private getMonth(date: Date) {
        switch(date.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
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
    /*
        Public Setters
     */
    public setCalendarEvent(calendarEvent: CalendarEvent) {

        this.calendarEvent = calendarEvent;
    }


}