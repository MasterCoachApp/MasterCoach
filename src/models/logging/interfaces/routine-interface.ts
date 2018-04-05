import {RoutineCategory} from "../create-training/routine-category";
import {ExerciseTable} from "../create-training/exercise-table";

export interface IRoutine {
    routineName: string;
    routineCategory: RoutineCategory;
    exercises: ExerciseTable[];
}