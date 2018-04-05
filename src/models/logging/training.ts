import {Activities} from "./create-training/activities";
import {IEventsComponents} from "./interfaces/event-components";


export class Training implements IEventsComponents {

    preCalEvent: {
        range: {
            [key: string]: any
        },
        notes:{
            [key: string]: any
        }
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        range: {
            [key: string]: any
        },
        notes: {
            [key: string]: any
        }
        //add something to monitor post training pain
    };

    mainCalEvent: {
         activities: Activities,
         notes: {
             [key: string]: any
         }
    };

    constructor() {
        this.preCalEvent = {
            range: {},
            notes: {},
            //add something to monitor pre-training pain
        };

        this.postCalEvent = {
            range: {},
            notes: {},
            //add something to monitor post training pain
        };

        this.mainCalEvent = {
            activities: null,
            notes: {},
        };
    }

    type = "Training";

    addPreNote(k: string, v: string) {
        this.preCalEvent.notes[k] = v;
    }

    addPostNote(k: string, v: string) {
        this.postCalEvent.notes[k] = v;
    }

    addPreRange(k: string, v: any) {
        this.preCalEvent.range[k] = v;
    }

    addPostRange(k: string, v: any) {
        this.postCalEvent.range[k] = v;
    }

    setMainCalEvent(activities: Activities) {
        this.mainCalEvent.activities = activities;
    }

    setMainCalNotes(k: string, v: string) {
        this.mainCalEvent.notes[k] = v;
    }

}