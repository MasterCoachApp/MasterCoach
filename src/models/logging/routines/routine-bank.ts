import {Routine} from "./routine";

export class RoutineBank {

    routineBank: Routine[] = [];

    constructor() {

    }

    addRoutine(routine: Routine) {
        this.routineBank.push(routine);
    }
}