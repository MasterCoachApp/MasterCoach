import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UnitConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unit-converter',
  templateUrl: 'unit-converter.html',
})
export class UnitConverterPage {

  measurements: {
      feet: string,
      inches: string,
      meters: string,
  };
  outputs: {
      metric: string,
      imperial: string
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.measurements = {
          feet: "0.00",
          inches: "0.00",
          meters: "0.00",
      };
      this.outputs = {
          metric: "0.00m",
          imperial: "0'0\""
      };
  }

    cancel() {
        this.navCtrl.pop();
    }

    isNumber(event) {
        let key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else return !( key < 48 || key > 57);
    }


    updateTextFocus(value: string) {
      if(this.measurements[value] == "0.00" || this.measurements[value] == "0") {
          this.measurements[value] = "";
      }
    }

    updateTextBlur(value: string) {
        if(this.measurements[value] == "") {
            this.measurements[value] = "0.00";
        }
    }

    updateScoreImperial() {
          let feet = this.measurements.feet;
          let inches = this.measurements.inches;

          let feetToInches = Number(feet) * 12;
          if(isNaN(feetToInches)) {
              feetToInches = 0.00;
          }
          let numInches = Number(inches);
          if(isNaN(numInches)) {
              numInches = 0.00;
          }
          let totalInches = feetToInches + numInches;
          if(isNaN(totalInches)) {
              totalInches = 0.00;
          }
          this.outputs.metric = String(totalInches * 0.0254).substr(0,7) + "m";
    }


    updateScoreMetric() {
          let meters = Number(this.measurements.meters);
          if (!isNaN(meters)) {
              let conversionToFeet = String(meters * 3.28084);
              let remainder = conversionToFeet.split(".");
              let feet = Number(remainder[0]);
              let inches = Number(remainder[1]) * 12;

              if (!isNaN(feet)) {
                  this.outputs.imperial = String(feet).substr(0, 3) + '\'';
              }
              else {
                  this.outputs.imperial = "0'";
              }
              if (!isNaN(inches)) {
                  this.outputs.imperial = this.outputs.imperial +  String(inches).substr(0, 3) + '\"';
              }
              else {
                  this.outputs.imperial = this.outputs.imperial  + '0\"';
              }
          }
    }

}
