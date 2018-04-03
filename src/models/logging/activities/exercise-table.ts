import {IExerciseTable} from "../interfaces/exercise-table-interface";
import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseTableTypes} from "../tables/exercise-table-types";
import {ExerciseSet} from "./exercise-set";
import {ExerciseTableColumn} from "./exercise-table-column";
import {ExerciseCategory} from "./exercise-category";

export class ExerciseTable implements IExerciseTable{
    // export class ExerciseTable implements ITable { // maybe replace with this later when I want to enforce an interface

    public labels: Label[];
    public exerciseName: string;
    public exerciseCategory: any;
    public tableType: string;
    public tableHeaders: string[];
    public sets: ExerciseSet[]; // need to make this a Set[] - DONE
    public notes: string;
    public pinnedNotes: string;
    public showNotes: boolean;

    //public columnMap: columnMap;


    constructor() {
        this.labels = [];
        this.exerciseName = null;
        this.tableType = null;
        this.tableHeaders = ['#', 'Detail', 'Measure', 'Reps']; // hard coded for now
        this.sets = [];
        this.sets.push(new ExerciseSet(1));
        this.notes = null;
        this.pinnedNotes = null;
        this.showNotes = false;
        this.exerciseCategory = new ExerciseCategory().discus;

        // this.columnMap = new ExerciseTableColumn();
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
        this.showNotes = !this.showNotes;
    }

}
