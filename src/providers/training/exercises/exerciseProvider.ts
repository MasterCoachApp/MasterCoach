import {Injectable} from '@angular/core';
import {ExerciseBank} from "../../../models/logging/exercises/exercise-bank";
import {ExerciseCategoryBank} from "../../../models/logging/create-training/exercise-category-bank";
import {ExerciseTableTypeBank} from "../../../models/logging/create-training/exercise-table-type-bank";
import {RoutineBank} from "../../../models/logging/routines/routine-bank";
import {Exercise} from "../../../models/logging/exercises/exercise";
import {ExerciseCategory} from "../../../models/logging/create-training/exercise-category";
import {ExerciseTableType} from "../../../models/logging/create-training/exercise-table-type";
import {Routine} from "../../../models/logging/routines/routine";
import {ExerciseTable} from "../../../models/logging/create-training/exercise-table";
import {RoutineCategoryBank} from "../../../models/logging/routines/routine-category-bank";

@Injectable()
export class ExerciseProvider {

    exerciseBank: ExerciseBank = new ExerciseBank();
    exerciseCategoryBank: ExerciseCategoryBank = new ExerciseCategoryBank();
    tableTypeBank: ExerciseTableTypeBank = new ExerciseTableTypeBank();
    routineBank: RoutineBank = new RoutineBank();
    routineCategoryBank: RoutineCategoryBank = new RoutineCategoryBank();


    constructor() {

        this.exerciseCategoryBank.exerciseCategoryBank = this.exerciseCategoryBank.exerciseCategoryBank.sort((a,b) => {
            if(a.category.name < b.category.name) return -1;
            if(a.category.name > b.category.name) return 1;
            return 0;
        });
        console.log('Exercise Provider CHECK', this.exerciseCategoryBank);

        this.exerciseBank.exerciseBank = this.sortAlphabetical(this.exerciseBank.exerciseBank, 'exerciseName');
        this.tableTypeBank.exerciseTableTypeBank = this.sortAlphabetical(this.tableTypeBank.exerciseTableTypeBank, 'tableTypeName');
        this.routineBank.routineBank = this.sortAlphabetical(this.routineBank.routineBank, 'routineName');

        this.populateRoutineBank(); // see below for populated bank, to be moved to a routine provider once structure beneath user is decided
    }

    populateRoutineBank() {
        let warmUpExerciseNames = ['Walking A\'s', 'Hurdle Drills','High Knees','Lunges','Running Man'];
        let warmUpExercises = this.createTables(this.createExerciseArray(warmUpExerciseNames));

        let coolDownExerciseNames = ['Plank','Push Up & Rotate','Single Leg Hamstring Bridge','Switch Stance Hops'];
        let coolDownExercises = this.createTables(this.createExerciseArray(coolDownExerciseNames));

        let sprintExerciseNames = ['Block Starts','Running'];
        let sprintExercises = this.createTables(this.createExerciseArray(sprintExerciseNames));

        let warmUpRoutine = new Routine('Warm Up A',
            this.routineCategoryBank.routineCategoryBank.find(x => x.routineCategory.name == 'Warm Up'),
            warmUpExercises);
        let coolDownRoutine = new Routine('Cool Down A',
            this.routineCategoryBank.routineCategoryBank.find(x => x.routineCategory.name == 'Cool Down'),
            coolDownExercises);
        let sprintsRoutine = new Routine('Blocks Starts and Hurdles',
            this.routineCategoryBank.routineCategoryBank.find(x => x.routineCategory.name == 'Training'),
            sprintExercises);

        this.routineBank.addRoutine(warmUpRoutine);
        this.routineBank.addRoutine(coolDownRoutine);
        this.routineBank.addRoutine(sprintsRoutine);

    }

    sortAlphabetical(arrayOfObjects: any[], property: string) {
        arrayOfObjects.sort((a,b) => {
            if(a.property < b.property) return -1;
            if(a.property > b.property) return 1;
            return 0;
        });
        return arrayOfObjects;
    }

    findExercise(exerciseName: string) {
        console.log('check FIND',this.exerciseBank.exerciseBank.find(x => x.exerciseName == exerciseName));
        return this.exerciseBank.exerciseBank.find(x => x.exerciseName == exerciseName);
    }
    createTables(exercises: Exercise[]) {
        let tables = [];
        exercises.forEach(data => {
            tables.push(new ExerciseTable(data));
        });
        return tables;
    }
    createExerciseArray(exerciseNames: string[]) {
        let exerciseArray = [];
        exerciseNames.forEach(exerciseName => {
            exerciseArray.push(this.findExercise(exerciseName));
        });
        return exerciseArray;
    }
}