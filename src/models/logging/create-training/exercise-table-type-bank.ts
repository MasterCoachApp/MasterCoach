import {ExerciseTableType} from "./exercise-table-type";

export class ExerciseTableTypeBank {
    exerciseTableTypeBank: ExerciseTableType[];
    // exerciseTableTypeList: ['Running'];

    constructor() {
        this.exerciseTableTypeBank = [
            new ExerciseTableType('Running', ['Detail','Distance', 'Time']),
            new ExerciseTableType('Runway', ['Detail', 'Steps','Reps']), // this could replace horizontal and jav
            new ExerciseTableType('High Jump', ['Detail', 'Steps', 'Height','Clear']),
            new ExerciseTableType('Pole Vault', ['Detail', 'Steps', 'Height','Clear']), // Pole, Grip, Mark?
            new ExerciseTableType('Horizontal Jumps',['Detail', 'Steps', 'Reps']),
            new ExerciseTableType('Javelin',['Detail','Steps','Reps']),
            new ExerciseTableType('Rotation',['Detail','Weight', 'Reps']), // do they break these into sets?
            new ExerciseTableType('Hurdles',['Detail', 'Discount','Height','Hurdles']),
            new ExerciseTableType('Weights',['Detail', 'Weight', '%1RM', 'Reps']), // need to break into many categories here like strong
            new ExerciseTableType('Medicine Ball',['Detail', 'Weight', 'Reps']), // Detail to capture if single side or not, or exercise name
            new ExerciseTableType('Plyometrics', ['Detail', 'Weight','Box Height','Reps'])
        ];

    }
}