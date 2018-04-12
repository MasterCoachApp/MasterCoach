import {RoutineCategory} from "./routine-category";
import {ExerciseTable} from "../create-training/exercise-table";

export class Routine {
    routineName: string;
    routineCategory: RoutineCategory;
    exercises: ExerciseTable[];

    constructor(routineName: string, routineCategory: RoutineCategory, exerciseTables: ExerciseTable[]) {
        this.routineName = routineName;
        this.routineCategory = routineCategory;
        this.exercises = exerciseTables;
    }
}