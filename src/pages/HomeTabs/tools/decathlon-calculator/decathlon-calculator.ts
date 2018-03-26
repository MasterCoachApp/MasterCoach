import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenPointsProvider} from "../../../../providers/tools/calculators/mens";

/**
 * Generated class for the DecathlonCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decathlon-calculator',
  templateUrl: 'decathlon-calculator.html',
})
export class DecathlonCalculatorPage {

    inputs: {
       hundred: string,
       lj: string,
       sp: string,
       hj: string,
       four: string,
       hurdles: string,
       dt: string,
       pv: string,
       jt: string,
       fifteen: string
    };

    outputs: {
        hundred: number,
        lj: number,
        sp: number,
        hj: number,
        four: number,
        hurdles: number,
        dt: number,
        pv: number,
        jt: number,
        fifteen: number,
        dayOne: number,
        dayTwo: number,
        total: number
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculator: MenPointsProvider) {
      this.inputs = {
              hundred: "0.00",
              lj: "0.00",
              sp: "0.00",
              hj: "0.00",
              four: "0.00",
              hurdles: "0.00",
              dt: "0.00",
              pv: "0.00",
              jt: "0.00",
              fifteen: "0:00"
      };

      this.outputs = {
          hundred: 0,
              lj: 0,
              sp: 0,
              hj: 0,
              four: 0,
              hurdles: 0,
              dt: 0,
              pv: 0,
              jt: 0,
              fifteen: 0,
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
      if(value == "fifteen") {
          if(this.inputs[value] == "0:00") {
              this.inputs[value] = "";
          }
      }
      else if(this.inputs[value] == "0.00") {
          this.inputs[value] = "";
      }
    }

    updateTextBlur(value: string) {
        if(value == "fifteen") {
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
                if(key != "fifteen") {
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
