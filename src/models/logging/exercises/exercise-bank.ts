import {Exercise} from "./exercise";
import {ExerciseCategoryBank} from "../create-training/exercise-category-bank";
import {ExerciseTableTypeBank} from "../create-training/exercise-table-type-bank";
import {ExerciseCategory} from "../create-training/exercise-category";
import {ExerciseTableType} from "../create-training/exercise-table-type";

export class ExerciseBank {

    exerciseBank: Exercise[] = [];
    exerciseCategoryBank: ExerciseCategoryBank = new ExerciseCategoryBank();
    exerciseTableTypeBank: ExerciseTableTypeBank = new ExerciseTableTypeBank();

    constructor() {

        this.addExercise(this.createExercise('Long Jump Runway','Long Jump','Runway'));
        this.addExercise(this.createExercise('Triple Runway','Triple Jump','Runway'));
        // Jav
        this.addExercise(this.createExercise('Javelin Runway','Javelin','Runway'));
        this.addExercise(this.createExercise('Javelin Ball Throws','Javelin','Runway'));
        this.addExercise(this.createExercise('Javelin Resistance Drills','Javelin','Runway'));

        // Sprints
        this.addExercise(this.createExercise('Running','Sprints','Running'));
        this.addExercise(this.createExercise('Block Starts','Sprints','Running'));

        // Plyo
        this.addExercise(this.createExercise('Hurdle Hops','Plyometrics','Plyometrics'));

        // Med Ball
        this.addExercise(this.createExercise('Overhead Throw','Medicine Ball','Weight & Reps'));
        this.addExercise(this.createExercise('Side Throw','Medicine Ball','Weight & Reps'));
        this.addExercise(this.createExercise('Front Heave','Medicine Ball','Weight & Reps'));

        // Warm Up Routine fill
        this.addExercise(this.createExercise('Walking A\'s','Activation','Reps Only'));
        this.addExercise(this.createExercise('Hurdle Drills','Activation','Hurdles'));
        this.addExercise(this.createExercise('High Knees','Activation','Reps Only'));
        this.addExercise(this.createExercise('Lunges','Activation','Reps Only'));
        this.addExercise(this.createExercise('Running Man','Stabilization','Reps Only'));

        // Cool Down Routine fill
        this.addExercise(this.createExercise('Plank','Core','Duration'));
        this.addExercise(this.createExercise('Push Up & Rotate','Stabilization','Reps Only'));
        this.addExercise(this.createExercise('Single Leg Hamstring Bridge','Stabilization','Reps Only'));
        this.addExercise(this.createExercise('Switch Stance Hops','Stabilization','Reps Only'));

    }

    addExercise(exercise: Exercise) {
        this.exerciseBank.push(exercise);
    }

    createExercise(exerciseName: string, categoryName: string, tableTypeName: string) {
        let exercise = new Exercise(exerciseName,
            this.exerciseCategoryBank.exerciseCategoryBank.find(x => x.category.name === categoryName),
            this.exerciseTableTypeBank.exerciseTableTypeBank.find(x => x.tableTypeName == tableTypeName)
        )
        return exercise;
    }

    editExercise(exercise: Exercise, exerciseName: string, exerciseCat: ExerciseCategory, exerciseTableType: ExerciseTableType) {
        this.exerciseBank[this.exerciseBank.indexOf(exercise)] = exercise; // is this needed? Need to check dependencies and maybe only allow if no trainings with it!
    }

}