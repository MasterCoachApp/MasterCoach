import {ITable} from "../interfaces/table-interface";
import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseTableTypes} from "../tables/exercise-table-types";
import {ExerciseSet} from "./exercise-set";
import {ExerciseTableColumn} from "./exercise-table-column";

export class ExerciseTable {
    // export class ExerciseTable implements ITable { // maybe replace with this later when I want to enforce an interface

    public labels: Label[];
    public exerciseName: string;
    public tableType: string;
    public tableHeaders: string[];
    public sets: ExerciseSet[]; // need to make this a Set[] - DONE
    public notes: string;
    public pinnedNotes: string;
    public columnMap: ExerciseTableColumn;
    public showNotes: boolean;

    public table: {};

    getTable(): {} {
        return this.table;
    };

    constructor() {
        this.labels = [];
        this.exerciseName = null;
        this.tableType = null;
        this.tableHeaders = ['#', 'Detail', 'Measure', 'Reps']; // hard coded for now
        this.sets = [];
        this.sets.push(new ExerciseSet(1));
        this.notes = null;
        this.pinnedNotes = null;
        this.columnMap = new ExerciseTableColumn();
        this.showNotes = false;

        this.table = this.makeTable();
    }

    makeTable() {
        let table = {
            labels: this.labels,
            tableType: this.tableType,
            exerciseName: this.exerciseName,
            sets: this.sets,
            notes: this.notes,
            pinnedNotes: this.pinnedNotes
        };

        return table;
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
