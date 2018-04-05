import {RoutineCategory} from "./routine-category";

export class RoutineCategoryBank {
    routineCategoryBank: RoutineCategory[];

    routineCategoryList: ['Warm Up', 'Cool Down', 'Training', 'Rehab'];

    constructor() {
        for (let i = 0; i < this.routineCategoryList.length; i++) {
            this.routineCategoryBank.push(new RoutineCategory(this.routineCategoryList[i]));
        }
    }

}