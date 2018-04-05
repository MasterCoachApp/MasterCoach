import {Label} from "../../custom-survey-components/labels/label";
import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseSet} from "../create-training/exercise-set";
import {Exercise} from "../exercises/exercise";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export interface IExerciseTable {

    labels: Label[];
    exercise: Exercise; // exercise should have category and table type > table headers
    exerciseName: string; // exercise.exerciseName
    exerciseCategory: ExerciseCategory; // exercise.exerciseCategory
    tableType: ExerciseTableType; // exercise.tableType
    sets: ExerciseSet[];
    notes: string;
    pinnedNotes: string;

}