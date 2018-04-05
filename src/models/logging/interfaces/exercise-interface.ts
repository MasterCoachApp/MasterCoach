import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export interface IExercise {
    exerciseName: string;
    exerciseCategory: ExerciseCategory;
    exerciseTableType: ExerciseTableType;
}