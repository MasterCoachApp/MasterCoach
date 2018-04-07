import {IExerciseTable} from "../interfaces/exercise-table-interface";
import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseSet} from "./exercise-set";
import {ExerciseTableColumn} from "./exercise-table-column";
import {ExerciseCategory} from "./exercise-category";
import {ExerciseTableType} from "./exercise-table-type";
import {Exercise} from "../exercises/exercise";

export class ExerciseTable extends Exercise implements IExerciseTable{

    labels: Label[];
    sets: ExerciseSet[];

    // exerciseName: string; // exercise.exerciseName
    // exerciseCategory: ExerciseCategory; // exercise.exerciseCategory
    // exerciseTableType: ExerciseTableType; // exercise.tableType
    // notes: string;
    // pinnedNotes: string;

    // tableHeaderList: string[];

    constructor(exercise: Exercise) {
        super(exercise.exerciseName, exercise.exerciseCategory, exercise.exerciseTableType);
        this.labels = [];
        this.sets = [new ExerciseSet(1)];
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
