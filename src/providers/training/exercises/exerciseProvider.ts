import {Injectable} from '@angular/core';
import {ExerciseBank} from "../../../models/logging/exercises/exercise-bank";
import {ExerciseCategoryBank} from "../../../models/logging/create-training/exercise-category-bank";
import {ExerciseTableTypeBank} from "../../../models/logging/create-training/exercise-table-type-bank";
import {RoutineBank} from "../../../models/logging/routines/routine-bank";
import {Exercise} from "../../../models/logging/exercises/exercise";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {ExerciseTableType} from "../../../models/logging/create-training/exercise-table-type";

@Injectable()
export class ExerciseProvider {

    exerciseBank: ExerciseBank = new ExerciseBank();
    exerciseCategoryBank: ExerciseCategoryBank = new ExerciseCategoryBank();
    tableTypeBank: ExerciseTableTypeBank = new ExerciseTableTypeBank();
    routineBank: RoutineBank = new RoutineBank();

    constructor() {

        this.exerciseCategoryBank.exerciseCategoryBank = this.exerciseCategoryBank.exerciseCategoryBank.sort((a,b) => {
            if(a.category.name < b.category.name) return -1;
            if(a.category.name > b.category.name) return 1;
            return 0;
        });
        console.log('Exercise Provider CHECK', this.exerciseCategoryBank);

        this.exerciseBank.exerciseBank = this.sortAlphabetical(this.exerciseBank.exerciseBank, 'exerciseName');
        // this.sortAlphabetical(this.exerciseCategoryBank, 'exerciseName');
        this.tableTypeBank.exerciseTableTypeBank = this.sortAlphabetical(this.tableTypeBank.exerciseTableTypeBank, 'tableTypeName');

    }

    sortAlphabetical(arrayOfObjects: any[], property: any) {
        arrayOfObjects.sort((a,b) => {
            if(a.property < b.property) return -1;
            if(a.property > b.property) return 1;
            return 0;
        });
        return arrayOfObjects;
    }
}