import {ITable} from "../interfaces/table-interface";
import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseTableTypes} from "../tables/exercise-table-types";

export class ExerciseTable {
    // export class ExerciseTable implements ITable { // maybe replace with this later when I want to enforce an interface

    public labels: Label[];
    public exerciseName: string;
    public tableType: string;
    public tableHeaders: string[];
    public sets: any[]; // need to make this a Set[]
    public notes: string;
    public pinnedNotes: string;

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
        this.notes = null;
        this.pinnedNotes = null;

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


}
