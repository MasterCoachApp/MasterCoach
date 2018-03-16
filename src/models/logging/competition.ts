import {Activities} from "./activities";
import {IEventsComponents} from "./interfaces/event-components";
import {postMood, preMood} from '';

export class Competition implements IEventsComponents {

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

}