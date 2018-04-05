export class ExerciseSet {

    public setNumber: number;
    public detail: string;
    public measure: string;
    public reps: number;
    public complete: boolean;

    // could make this a dictionary that is set based on table type


    constructor(setNumber: number) {
        this.setNumber = setNumber; // this would need to be done in create training by looking at the current set # and incrementing
        this.detail = null;
        this.measure = null; // this could look at the last training saved and pull that info
        this.reps = null; // this could look at the last rep number from when the exercise was last done
        this.complete = false;
    }
}