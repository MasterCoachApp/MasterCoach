import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";


export class Training implements IEventsComponents {

    preCalEvent: {
        survey: {
            [key: string]: any
        },
        notes:{
            [key: string]: any
        }
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        survey: {
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
            survey: {},
            notes: {},
            //add something to monitor pre-training pain
        };

        this.postCalEvent = {
            survey: {},
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

    addPreSurveyQuestion(k: string, v: any) {
        this.preCalEvent.survey[k] = v;
    }

    addPostSurveyQuestion(k: string, v: any) {
        this.postCalEvent.survey[k] = v;
    }

    setMainCalEvent(activities: Activities) {
        this.mainCalEvent.activities = activities;
    }

    setMainCalNotes(k: string, v: string) {
        this.mainCalEvent.notes[k] = v;
    }

}