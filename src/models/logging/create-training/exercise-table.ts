import {IExerciseTable} from "../interfaces/exercise-table-interface";
import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseSet} from "./exercise-set";
import {ExerciseTableColumn} from "./exercise-table-column";
import {ExerciseCategory} from "./exercise-category";
import {ExerciseTableType} from "./exercise-table-type";
import {Exercise} from "../exercises/exercise";

export class ExerciseTable implements IExerciseTable{

    labels: Label[];
    exercise: Exercise; // exercise should have category and table type > table headers
    // exerciseName: string; // exercise.exerciseName
    // exerciseCategory: ExerciseCategory; // exercise.exerciseCategory
    // tableType: ExerciseTableType; // exercise.tableType
    sets: ExerciseSet[];
    // notes: string;
    // pinnedNotes: string;

    // tableHeaderList: string[];


    constructor(exercise: Exercise) {
        this.labels = [];
        this.exercise = exercise;
        // this.exerciseCategory = exercise.exerciseCategory; // exercise.exerciseCategory
        // this.exerciseName = exercise.exerciseName; // exercise.exerciseName
        // this.tableType = exercise.exerciseTableType; // exercise.exerciseTableType
        // this.tableHeaderList = ['#', 'Detail', 'Measure', 'Reps']; // hard coded for now, switch to take form ExerciseTableType
        // this.tableHeaderList = exercise.exerciseTableType.tableHeaderList; // this is the way we will be going!
        this.sets = [new ExerciseSet(1)];
        // this.sets.push(new ExerciseSet(1));
        // this.notes = null;
        // this.pinnedNotes = null;
        // this.showNotes = false;
        // this.exerciseCategory = new ExerciseCategory().discus;

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
    //
    // setName(exerciseName: string) {
    //     this.exerciseName = exerciseName;
    //     console.log(this);
    //     // add first set here
    // }
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

    // showNotesTooltip() {
    //     this.showNotes = !this.showNotes;
    // }

}
