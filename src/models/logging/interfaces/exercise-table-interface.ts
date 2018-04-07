import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseSet} from "../create-training/exercise-set";
import {Exercise} from "../exercises/exercise";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export interface IExerciseTable {

    labels: Label[];
    sets: ExerciseSet[];
    // notes: string;
    // pinnedNotes: string;

}