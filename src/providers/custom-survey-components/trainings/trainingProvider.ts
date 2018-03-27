import {Injectable} from '@angular/core';
import {PreTraining} from "../../../models/custom-survey-components/trainings/pre-training";
import {PostTraining} from "../../../models/custom-survey-components/trainings/post-training";

@Injectable()
export class TrainingProvider {

    preTraining = new PreTraining();
    postTraining = new PostTraining();

    constructor() {
        this.getCustomPostTraining();
        this.getCustomPreTraining();
    }

    getCustomPostTraining() {

    }

    getCustomPreTraining() {

    }


}