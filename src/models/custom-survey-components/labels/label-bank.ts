import {Label} from "./label";

export class LabelBank {

    labelBank: Label[] = [];

    constructor() {
        this.labelBank.push(new Label("100m"));
        this.labelBank.push(new Label("110mH"));
        this.labelBank.push(new Label("400m"));
        this.labelBank.push(new Label("1500m"));
        this.labelBank.push(new Label("Long Jump"));
        this.labelBank.push(new Label("High Jump"));
        this.labelBank.push(new Label("Pole Vault"));
        this.labelBank.push(new Label("Javelin"));
        this.labelBank.push(new Label("Shot Put"));
        this.labelBank.push(new Label("Discus"));
        this.labelBank.push(new Label("Decathlon"));
    }

    fillBankExternal() {
        //search for custom labels
    }



}