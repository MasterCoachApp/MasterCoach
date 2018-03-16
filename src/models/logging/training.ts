import {postMood, preMood} from '';
import {Activities} from "./activities";
import {IEventsComponents} from "./interfaces/event-components";


export class Training implements IEventsComponents {

    preCalEvent: {
        mood: preMood;
        notes: string;
        //add something to monitor pre-training pain
    };

    postCalEvent: {
                mood: postMood;
                notes: string;
                //add something to monitor post training pain
    };

    mainCalEvent: {
              activities: Activities[];
              notes: string;
    };

    constructor() {
        this.preCalEvent = {
            mood: null,
            notes: null,
            //add something to monitor pre-training pain
        };

        this.postCalEvent = {
            mood: null,
            notes: null,
            //add something to monitor post training pain
        };

        this.mainCalEvent = {
            activities: null,
            notes: null
        };
    }

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

    public setPreCalEvent(mood: preMood, notes: string) {
        this.preCalEvent = {
            mood: mood,
            notes: notes
        };
    }
    public setPostCalEvent(mood: preMood, notes: string) {
        this.postCalEvent = {
            mood: mood,
            notes: notes
        };
    }
    public setMainCalEvent(activities: Activities[], notes: string) {
        this.mainCalEvent = {
            activities: activities,
            notes: notes
        };
    }

}