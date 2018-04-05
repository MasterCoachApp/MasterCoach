export class ExerciseTableColumn {
    public columnMap: {
        [key: string]: number;
    }
    constructor() {
        this.columnMap = {
            setNumber: 1,
            detail: 3,
            measure: 2,
            reps: 1,
            complete: 1
        };
    }
}