import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";
import {Moods} from "./moods/moods";

export class Competition implements IEventsComponents {

    preCalEvent: {
        mood: Moods;
        notes: string;
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        mood: Moods;
        notes: string;
        //add something to monitor post training pain
    };

    mainCalEvent: {
        activities: Activities[];
        notes: string;
    };

    type = "Competition";

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

}