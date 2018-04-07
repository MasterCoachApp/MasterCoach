import {IEventsComponents} from "./interfaces/event-components";
import {CoolDown} from "./create-training/cool-down";
import {WarmUp} from "./create-training/warm-up";
import {ExerciseTable} from "./create-training/exercise-table";
import {Exercise} from "./exercises/exercise";


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
        warmUp: WarmUp,
        coolDown: CoolDown,
        exercises: ExerciseTable[],
        // categories: {
        //     [key: string] : { // exerciseCategory.category.name
        //         [key: string]: ExerciseTable
        //     }
        // },
        notes: {
            [key: string]: any
        }
    };
    trainingDate: string;
    trainingTime: string;


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
            warmUp: null,
            coolDown: null,
            exercises: [],
            notes: {}
        };
        let date = new Date();
        this.trainingDate = date.toISOString().slice(0, 10);
        this.trainingTime = date.toDateString().slice(20,21);
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

    addExercises(exercises: Exercise[]) {
        exercises.forEach( data => {
            let newExerciseTable = new ExerciseTable(data);
            this.mainCalEvent.exercises.push(newExerciseTable);
            console.log('Exercises :', exercises);
            console.log('this.main.exercises', this.mainCalEvent.exercises);
        });
    }

    removeExerciseTable(exerciseTable: ExerciseTable) {
        this.mainCalEvent.exercises.splice(this.mainCalEvent.exercises.indexOf(exerciseTable), 1);
    }

    setMainCalNotes(k: string, v: string) {
        this.mainCalEvent.notes[k] = v;
    }

    setCoolDown(coolDown: CoolDown) {
        this.mainCalEvent.coolDown = coolDown;
    }
    setWarmUp(warmUp: WarmUp) {
        this.mainCalEvent.warmUp = warmUp;
    }

}