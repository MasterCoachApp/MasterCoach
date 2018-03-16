import {preMood} from 'training';
import {postMood} from 'training'
import {Activities} from "./activities";


export class Training {

    private pre_training: {
        mood: preMood;
        notes: string;
        //add something to monitor pre-training pain
    };

    private post_training: {
                mood: postMood;
                notes: string;
                //add something to monitor post training pain
    };

    private training: {
              activities: Activities[];
              notes: string;
    };

    constructor() {
        this.pre_training = {
            mood: null,
            notes: null,
            //add something to monitor pre-training pain
        };

        this.post_training = {
            mood: null,
            notes: null,
            //add something to monitor post training pain
        };

        this.training = {
            activities: null,
            notes: null
        };
    }

    //-----
    //Accessors
    //-----

    public getPreTraining() {
        return this.pre_training;
    }
    public getPostTraining() {
        return this.post_training;
    }
    public getTraining() {
        return this.training;
    }


    //-----
    //Mutators
    //------

    public setPreTraining(mood: preMood, notes: string) {
        this.pre_training = {
            mood: mood,
            notes: notes
        };
    }
    public setPostTraining(mood: preMood, notes: string) {
        this.post_training = {
            mood: mood,
            notes: notes
        };
    }
    public setTraining(activities: Activities, notes: string) {
        this.training = {
            activities: activities[],
            notes: notes
        };
    }

}