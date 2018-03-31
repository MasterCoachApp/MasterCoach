export class ExerciseSet {

    public setNumber: number;
    public detail: string;
    public measure: string;
    public reps: number;
    public complete: boolean;

    public setInfo: any[];


    constructor(setNumber: number) {
        this.setNumber = setNumber; // this would need to be done in create training by looking at the current set # and incrementing
        this.detail = null;
        this.measure = null; // this could look at the last
        this.reps = null; // this could look at the last rep number from when the exercise was last done
        this.complete = false;
        this.setInfo = [this.setNumber, this.detail, this.measure, this.reps, this.complete];
    }

    getSet() {

    }


}