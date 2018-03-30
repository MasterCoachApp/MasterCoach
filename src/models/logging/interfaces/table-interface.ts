import {Label} from "../../custom-survey-components/labels/label";

export interface ITable {

    labels: Label[];
    tableType: string; // can replace this later with enumeration?
    sets: any[]
    notes: string;
    pinnedNotes: string;

    table: {
        [labels: string]: Label[]
    };

    getTable(): {};

}