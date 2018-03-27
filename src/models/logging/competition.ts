import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";

export class Competition implements IEventsComponents {

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

    type = "Competition";

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

}