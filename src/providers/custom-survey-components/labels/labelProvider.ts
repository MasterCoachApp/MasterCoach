import {Injectable} from '@angular/core';
import {LabelBank} from "../../../models/custom-survey-components/labels/label-bank";
import {Label} from "../../../models/custom-survey-components/labels/label";

@Injectable()
export class LabelProvider {

    listOfLabels: Label[];

    constructor() {
        this.listOfLabels = new LabelBank().labelBank;
    }
}