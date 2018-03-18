import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";
import {Qna} from "./qna";

export class Competition implements IEventsComponents {

    preCalEvent: {
        survey: Qna[];
        notes: string;
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        survey: Qna[];
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
            survey: null,
            notes: null,
            //add something to monitor pre-training pain
        };

        this.postCalEvent = {
            survey: null,
            notes: null,
            //add something to monitor post training pain
        };

        this.mainCalEvent = {
            activities: null,
            notes: null
        };
    }

}