import {Qna} from "../qna";

export interface ISurvey {

    surveyList: Qna[];

    getSurveyList(): Qna[];
}