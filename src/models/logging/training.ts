import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";
import {Moods} from "./moods/moods";


export class Training implements IEventsComponents {

    preCalEvent: {
        mood: Moods,
        notes: string
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        overallRating: number,
        notes: string
        //add something to monitor post training pain
    };

    mainCalEvent: {
         activities: Activities,
         notes: string
    };

    constructor() {
        this.preCalEvent = {
            mood: null,
            notes: null,
            //add something to monitor pre-training pain
        };

        this.postCalEvent = {
            overallRating: null,
            notes: null,
            //add something to monitor post training pain
        };

        this.mainCalEvent = {
            activities: null,
            notes: null
        };
    }

    type = "Training";

    //-----
    //Accessors
    //-----

    public getPreCalEvent() {
        return this.preCalEvent;
    }
    public getPostCalEvent() {
        return this.postCalEvent;
    }
    public getMainCalEvent() {
        return this.mainCalEvent;
    }


    //-----
    //Mutators
    //------

    public setPreCalEvent(mood: Moods, notes: string) {
        this.preCalEvent = {
            mood: mood,
            notes: notes
        };
    }
    public setPostCalEvent(overallRating: number, notes: string) {
        this.postCalEvent = {
            overallRating: overallRating,
            notes: notes
        };
    }
    public setMainCalEvent(activities: Activities, notes: string) {
        this.mainCalEvent = {
            activities: activities,
            notes: notes
        };
    }

}