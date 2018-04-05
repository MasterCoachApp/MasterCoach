import {Injectable} from '@angular/core';
import {ExerciseBank} from "../../../models/logging/exercises/exercise-bank";
import {ExerciseCategoryBank} from "../../../models/logging/create-training/exercise-category-bank";
import {ExerciseTableTypeBank} from "../../../models/logging/create-training/exercise-table-type-bank";
import {RoutineBank} from "../../../models/logging/routines/routine-bank";

@Injectable()
export class ExerciseProvider {

    exerciseBank: ExerciseBank = new ExerciseBank();
    exerciseCategoryBank: ExerciseCategoryBank = new ExerciseCategoryBank();
    tableTypeBank: ExerciseTableTypeBank = new ExerciseTableTypeBank();
    routineBank: RoutineBank = new RoutineBank();

    constructor() {
    }
}