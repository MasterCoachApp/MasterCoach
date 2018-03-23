import {Label} from "./label";

export class LabelBank {

    labelBank: Label[];

    constructor() {
        this.labelBank = [
            new Label("100m"),
            new Label("110mH"),
            new Label("400m"),
            new Label("1500m")
        ];
    }

    fillBankExternal() {
        //search for custom labels
    }



}