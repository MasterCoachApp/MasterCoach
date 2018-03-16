import {Qna} from "../moods/qna";

export interface ISurvey {

    surveyList: Qna[];

    getSurveyList(): Qna[];
}