import {RoutineCategory} from "./routine-category";

export class RoutineCategoryBank {

    routineCategoryBank: RoutineCategory[] = [];

    constructor() {
        let routineCategoryList = ['Warm Up', 'Cool Down', 'Training', 'Rehab'];

        routineCategoryList.forEach(data => {
            this.routineCategoryBank.push(new RoutineCategory(data));
        });
    }

}