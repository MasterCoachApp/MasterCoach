import {Activities} from "./activities/activities";
import {IEventsComponents} from "./interfaces/event-components";
import {Qna} from "./qna";
import {Notes} from "./notes";


export class Training implements IEventsComponents {

    preCalEvent: {
        survey: Qna[],
        notes: Notes[]
        //add something to monitor pre-training pain
    };

    postCalEvent: {
        overallRating: number,
        notes: Notes[]
        //add something to monitor post training pain
    };

    mainCalEvent: {
         activities: Activities,
         notes: Notes[]
    };

    constructor() {
        this.preCalEvent = {
            survey: null,
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

    public setPreCalEvent(qna: Qna[], notes: Notes[]) {
        this.preCalEvent = {
            survey: qna,
            notes: notes
        };
    }
    public setPostCalEvent(overallRating: number, notes: Notes[]) {
        this.postCalEvent = {
            overallRating: overallRating,
            notes: notes
        };
    }
    public setMainCalEvent(activities: Activities, notes: Notes[]) {
        this.mainCalEvent = {
            activities: activities,
            notes: notes
        };
    }

}