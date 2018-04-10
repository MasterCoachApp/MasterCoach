import {Routine} from "./routine";
import {ExerciseTable} from "../create-training/exercise-table";

export class RoutineBank {

    routineBank: Routine[] = [];



    constructor() {

    }

    addRoutine(routine: Routine) {
        this.routineBank.push(routine);
    }
}