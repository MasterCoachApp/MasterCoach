import {IExercise} from "../interfaces/exercise-interface";
import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export class Exercise implements IExercise {
    exerciseName: string;
    exerciseCategory: ExerciseCategory;
    exerciseTableType: ExerciseTableType;

    constructor(exerciseName: string, exerciseCategory: ExerciseCategory, exerciseTableType: ExerciseTableType) {
        this.exerciseName = exerciseName;
        this.exerciseCategory = exerciseCategory;
        this.exerciseTableType = exerciseTableType;
    }
}