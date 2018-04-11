import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MercierPointsProvider} from "../../../../../providers/tools/calculators/mercier";

/**
 * Generated class for the MercierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mercier',
    templateUrl: 'mercier.html',
})
export class MercierPage {

    inputs: {
        group: string,
        gender: string,
        select: string,
        hr: string,
        min: string,
        sec: string,
        pts: string,
        score: string
    };
    outputs: {
        group: string,
        gender: string,
        select: string,
        hr: string,
        min: string,
        sec: string,
        pts: string,
        score: string
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public mercier: MercierPointsProvider) {
        this.inputs = {
            group: "senior",
            gender: "men",
            select: "100m",
            hr: "",
            min: "",
            sec: "",
            pts: "",
            score: ""
        };
        this.outputs = {
            group: "senior",
            gender: "men",
            select: "100m",
            hr: "",
            min: "",
            sec: "",
            pts: "",
            score: ""
        };
    }

    cancel() {
        this.navCtrl.pop();
    }

    calculateScore() {
        let sec = Number(this.inputs.sec);
        if(isNaN(sec)) sec = 0;
        let min = Number(this.inputs.min);
        if(isNaN(min)) min = 0;
        let hr = Number(this.inputs.hr);
        if(isNaN(hr)) hr = 0;
        let pts = Number(this.inputs.pts);
        if(isNaN(pts)) pts = 0;

        let score = this.mercier.calculateMercierScore(this.inputs);
        this.mercier.manageScore(this.inputs, this.outputs, score);
    }


}
