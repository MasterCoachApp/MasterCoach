import {Label} from "./label";

export class LabelBank {

    labelBank: Label[];

    constructor() {
        this.labelBank = [
            new Label("100m"),
            new Label("110mH"),
            new Label("400m"),
            new Label("1500m"),
            new Label("Long Jump"),
            new Label("High Jump"),
            new Label("Pole Vault"),
            new Label("Javelin"),
            new Label("Shot Put"),
            new Label("Discus"),
            new Label("Decathlon"),
        ];
    }

    fillBankExternal() {
        //search for custom labels
    }



}