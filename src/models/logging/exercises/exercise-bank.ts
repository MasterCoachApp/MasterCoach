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
            new Exercise('General Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Long Jump'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('General Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Triple Jump'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('General Runway',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Javelin'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Runway')
            ),
            new Exercise('Running',
                this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === 'Sprints'),
                this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == 'Running')
            )
            // new Exercise('General Runway', ExerciseCategoryBank['Long Jump'], ExerciseTableTypeBank['Runway']),
            // new Exercise('General Runway', ExerciseCategoryBank['Long Jump'], ExerciseTableTypeBank['Runway']),

        ];
    }

    addExercise(exerciseName: string, exerciseCat: ExerciseCategory, exerciseTableType: ExerciseTableType) {
        this.exerciseBank.push(
            new Exercise(exerciseName, exerciseCat, exerciseTableType)
        );
    }

    editExercise(exercise: Exercise, exerciseName: string, exerciseCat: ExerciseCategory, exerciseTableType: ExerciseTableType) {
        this.exerciseBank[this.exerciseBank.indexOf(exercise)] = exercise; // is this needed? Need to check dependencies and maybe only allow if no trainings with it!
    }

}