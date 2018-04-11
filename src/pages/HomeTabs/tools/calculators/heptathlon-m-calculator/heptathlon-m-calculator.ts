import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenPointsProvider} from "../../../../../providers/tools/calculators/mens";

/**
 * Generated class for the HeptathlonMCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heptathlon-m-calculator',
  templateUrl: 'heptathlon-m-calculator.html',
})
export class HeptathlonMCalculatorPage {

    inputs: {
        sixty: string,
        lj: string,
        sp: string,
        hj: string,
        sixtyHurdles: string,
        pv: string,
        thousand: string
    };

    outputs: {
        sixty: number,
        lj: number,
        sp: number,
        hj: number,
        sixtyHurdles: number,
        pv: number,
        thousand: number,
        dayOne: number,
        dayTwo: number,
        total: number
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public calculator: MenPointsProvider) {
        this.inputs = {
            sixty: "0.00",
            lj: "0.00",
            sp: "0.00",
            hj: "0.00",
            sixtyHurdles: "0.00",
            pv: "0.00",
            thousand: "0:00"
        };

        this.outputs = {
            sixty: 0,
            lj: 0,
            sp: 0,
            hj: 0,
            sixtyHurdles: 0,
            pv: 0,
            thousand: 0,
            dayOne: 0,
            dayTwo: 0,
            total: 0
        };
    }

    cancel() {
        this.navCtrl.pop();
    }

    save() {

    }

    updateTextFocus(value: string) {
        if(value == "thousand") {
            if(this.inputs[value] == "0:00") {
                this.inputs[value] = "";
            }
        }
        else if(this.inputs[value] == "0.00") {
            this.inputs[value] = "";
        }
    }

    updateTextBlur(value: string) {
        if(value == "thousand") {
            if(this.inputs[value] == "") {
                this.inputs[value] = "0:00";
            }
        }
        else if(this.inputs[value] == "") {
            this.inputs[value] = "0.00";
        }
    }

    isNumber(event) {
        let key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else return !( key < 48 || key > 57);
    };

    isTime(event) {
        let key = window.event ? event.keyCode : event.which;
        if (key == 46 || key == 58 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else return !( key < 48 || key > 57);
    };

    updateScore() {
        for (let key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                if(key != "thousand") {
                    let parse = Number(this.inputs[key]);
                    if (isNaN(parse)) {
                        parse = 0.00;
                    }
                    if (parse != 0.00) {
                        let eventScore = this.calculator.getEventPoints(key, parse);
                        if (isNaN(eventScore)) {
                            eventScore = 0;
                        }
                        this.outputs[key] = eventScore;
                    }
                    else {
                        this.outputs[key] = 0;
                    }
                }
                else {
                    if(this.inputs[key] != "" && this.inputs[key] != "0:00") {
                        console.log(this.inputs[key]);
                        let eventScore = this.calculator.getEventPoints(key, this.inputs[key]);
                        if (isNaN(eventScore)) {
                            eventScore = 0;
                        }
                        this.outputs[key] = eventScore;
                    }
                    else {
                        this.outputs[key] = 0;
                    }
                }


                let dayOne = this.calculator.getDayOne(this.outputs);
                if(!isNaN(dayOne)) {
                    this.outputs.dayOne = dayOne;
                }
                let dayTwo = this.calculator.getDayTwo(this.outputs);
                if(!isNaN(dayOne)) {
                    this.outputs.dayTwo = dayTwo;
                }
                let total = this.calculator.getTotal(this.outputs);
                if(!isNaN(dayOne)) {
                    this.outputs.total = total;
                }
            }
        }
    }

}
