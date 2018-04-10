import {Injectable} from '@angular/core';
import {LabelBank} from "../../../models/custom-survey-components/labels/label-bank";
import {Label} from "../../../models/custom-survey-components/labels/label";
import {Training} from "../../../models/logging/training";

@Injectable()
export class LabelProvider {

    listOfLabels: Label[];
    labelFilters: Label[] = [];

    filteredTrainingList: Training[] = [];

    constructor() {
        this.listOfLabels = new LabelBank().labelBank;
    }

    updateFilteredTrainingList(training) {
        this.filteredTrainingList = [];
        training.forEach(training => {
           training.mainCalEvent.exercises.forEach(exercise => {
               this.labelFilters.forEach(label => {
                   if(exercise.labels.indexOf(label.getValue()) > -1) {
                       this.filteredTrainingList.push(training);
                   }
              });
           });
        });
     }

}