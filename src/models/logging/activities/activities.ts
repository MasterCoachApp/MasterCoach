import {WarmUp} from "./warm-up";
import {CoolDown} from "./cool-down";
import {TrackEvents} from "./track-events";
import {ExerciseTable} from "./exercise-table";

export class Activities {

    warmUp: WarmUp;
    coolDown: CoolDown;
    trackEvents: TrackEvents;
    exercises: ExerciseTable[];

    constructor() {
        this.warmUp = null;
        this.coolDown = null;
        this.trackEvents = new TrackEvents();
        this.exercises = [];
    }

    // addExercise()

    getEvents() {
        return this.trackEvents;
    }
    getCoolDown() {
        return this.coolDown;
    }
    getWarmUp() {
        return this.warmUp;
    }

    setCoolDown(coolDown: CoolDown) {
        this.coolDown = coolDown;
    }
    setWarmUp(warmUp: WarmUp) {
        this.warmUp = warmUp;
    }
    removeEvent(event: TrackEvents) {
        //this.trackEvents.splice(this.trackEvents.indexOf(event),1);
    }
    setEvents(trackEvents: TrackEvents) {
        this.trackEvents = trackEvents;
    }

    addExercises(exercises: string[]) {
        exercises.forEach( data => {
            let newExercise = new ExerciseTable();
            newExercise.setName(data);
            this.exercises.push(newExercise);
            console.log('Exercises :', exercises);
        })
    }

    removeExercise(exerciseToDelete: ExerciseTable) { // this will need to take a unique ID eventually to prevent weird behaviour when deleting an exercise from a training where you have the same exercise twice, I think?
        this.exercises.splice(this.exercises.indexOf(exerciseToDelete),1)
    }

}