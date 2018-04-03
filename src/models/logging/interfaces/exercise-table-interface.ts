import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseCategory} from "../activities/exercise-category";
import {ExerciseSet} from "../activities/exercise-set";

export interface IExerciseTable {

    labels: Label[];
    exerciseCategory: any;
    tableType: string; // can replace this later with enumeration?
    sets: ExerciseSet[]
    notes: string;
    pinnedNotes: string;

    // getTable(): {};

}