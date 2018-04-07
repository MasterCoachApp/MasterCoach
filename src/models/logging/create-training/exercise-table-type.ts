import {IExerciseTableType} from "../interfaces/exercise-table-type-interface";

export class ExerciseTableType implements IExerciseTableType {

    tableTypeName: string;
    tableHeaderList: string[];

    constructor(name: string, tableHeaders: string[]) {
        this.tableTypeName = name;
        this.tableHeaderList = tableHeaders;
    }
}