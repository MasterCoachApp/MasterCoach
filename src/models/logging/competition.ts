import {Activities} from "./create-training/activities";
import {IEventsComponents} from "./interfaces/event-components";
import {CoolDown} from "./create-training/cool-down";
import {WarmUp} from "./create-training/warm-up";

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
        warmUp: WarmUp,
        coolDown: CoolDown,
        events: TrackEvent[],
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
            warmUp: null,
            coolDown: null,
            events: [],
            notes: {},
        };
    }

}