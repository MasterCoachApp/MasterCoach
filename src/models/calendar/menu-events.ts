
import {LabelProvider} from "../../providers/custom-survey-components/labels/labelProvider";
import {Label} from "../custom-survey-components/labels/label";

export class MenuEvents {
    labelList: Label[];

    constructor(public labels: Label[]) {
        this.labelList = labels;
    }
}