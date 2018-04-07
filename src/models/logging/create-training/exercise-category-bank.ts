import {ExerciseCategory} from "./exercise-category";
import {Exercise} from "../exercises/exercise";

export class ExerciseCategoryBank {

    exerciseCategoryBank: ExerciseCategory[] = [];

    exerciseCategoryBank2: {
        [key: string]: ExerciseCategory
    }

    exerciseCategoryList = ['Sprints', 'Long Sprints', 'Distance', 'Long Jump', 'High Jump', 'Pole Vault','Triple Jump', 'Sprint Hurdles', '400m Hurdles','Javelin','Weights','Plyometrics','Medicine Ball'];

    constructor() {
        for (let i = 0; i < this.exerciseCategoryList.length; i++) {
            this.exerciseCategoryBank.push(new ExerciseCategory(this.exerciseCategoryList[i]));
        }
    }
}