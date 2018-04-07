import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseSet} from "./exercise-set";

export class ExerciseTable {

    public labels: Label[];
    public exerciseName: string;
    public category: string;
    public sets: ExerciseSet[];

    constructor() {
        this.labels = [];
        this.exerciseName = null;
        this.sets = [new ExerciseSet(1)];
        this.category = "";
    }

    addLabels(labelsToAdd: Label[]) {
        labelsToAdd.forEach( data =>
            this.labels.push(data)

        );
        console.log(this);
    }
    removeLabel(label: Label) {
        this.labels.splice(this.labels.indexOf(label),1);
    }

    // setTableHeaders(tableType: ExerciseTableTypes) {
    //
    // }

    setName(exerciseName: string) {
        this.exerciseName = exerciseName;
        console.log(this);
        // add first set here
    }
    addSet() {
        let lastSetNumber = this.sets[this.sets.length - 1]['setNumber'];

        this.sets.push(new ExerciseSet(lastSetNumber + 1));
    }

    deleteSet(set: ExerciseSet) {
        this.sets.splice(this.sets.indexOf(set),1);
    }

    toggleComplete(set: ExerciseSet) {
        this.sets[this.sets.indexOf(set)].complete = !this.sets[this.sets.indexOf(set)].complete;
    }

    showNotesTooltip() {
       // this.showNotes = !this.showNotes;
    }

}
