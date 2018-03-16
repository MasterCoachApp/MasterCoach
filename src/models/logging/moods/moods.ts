import {ISurvey} from "../interfaces/survey-interface";
import {Qna} from "./qna";

export class Moods implements ISurvey {

    surveyList: Qna[];

    constructor() {
        this.surveyList = null;
    }

    /*
        Public Getters
     */
    public getSurveyList () {
        return this.surveyList;
    }

    /*
        Public Setters
     */
    public addQuestion (question: Qna) {
        this.surveyList.push(question);
    }

}

