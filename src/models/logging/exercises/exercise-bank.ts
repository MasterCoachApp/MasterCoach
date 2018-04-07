import {Exercise} from "./exercise";
import {ExerciseCategoryBank} from "../create-training/exercise-category-bank";
import {ExerciseTableTypeBank} from "../create-training/exercise-table-type-bank";
import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export class ExerciseBank {

    exerciseBank: Exercise[];
    // exerciseList: ['Runway','Running'];
    exerciseCategoryBank: ExerciseCategoryBank = new ExerciseCategoryBank();
    exerciseTableTypeBank: ExerciseTableTypeBank = new ExerciseTableTypeBank();
    exerciseBank2 : {
        [key: string]: Exercise
    };

    constructor() {
        this.exerciseBank = [
            new Exercise('Long Jump Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Long Jump'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('Triple Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Triple Jump'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('Javelin Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Javelin'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('Running',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Sprints'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Running')
            ),
            new Exercise('Hurdle Hops',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Plyometrics'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Running')
            ),
            new Exercise('Overhead Throw',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Medicine Ball'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Running')
            ),
            new Exercise('Running',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Sprints'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Running')
            ),

        ];
    }

    addExercise(exercise: Exercise) {
        this.exerciseBank.push(
            new Exercise(exercise.exerciseName, exercise.exerciseCategory, exercise.exerciseTableType)
        );
    }

    editExercise(exercise: Exercise, exerciseName: string, exerciseCat: ExerciseCategory, exerciseTableType: ExerciseTableType) {
        this.exerciseBank[this.exerciseBank.indexOf(exercise)] = exercise; // is this needed? Need to check dependencies and maybe only allow if no trainings with it!
    }

}