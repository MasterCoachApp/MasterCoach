
import {LabelProvider} from "../../providers/custom-survey-components/labels/labelProvider";

export class MenuEvents {
    listOfEvents: string[];

    constructor(public labels: LabelProvider) {
        labels.listOfLabels.forEach(label => {
           this.listOfEvents.push(label['value']);
        });
    }

    getFilterFromEvent(event: string): boolean {

        return true;
    }


    updateObject(event: string, property: string) {

    }
}