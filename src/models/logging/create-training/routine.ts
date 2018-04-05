import {RoutineCategory} from "./routine-category";
import {ExerciseTable} from "./exercise-table";

export class Routine {
    routineName: string;
    routineCategory: RoutineCategory;
    exercises: ExerciseTable[];

    constructor(routineName: string, routineCategory: RoutineCategory, exercises: ExerciseTable[]) {
        this.routineName = routineName;
        this.routineCategory = routineCategory;
        this.exercises = exercises;
    }
}