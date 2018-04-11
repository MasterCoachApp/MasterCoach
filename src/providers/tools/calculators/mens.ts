import {Injectable} from '@angular/core';

@Injectable()
export class MenPointsProvider {

    constructor() {}

    getDayOne(outputs: object) {
        let dayOneScore = 0;
        for (let key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if(this.isDayOne(key)) {
                    dayOneScore += outputs[key];
                }
            }
        }
        return dayOneScore;
    }

    getDayTwo(outputs: object) {
        let dayTwoScore = 0;
        for (let key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if(this.isDayTwo(key)) {
                    dayTwoScore += outputs[key];
                }
            }
        }
        return dayTwoScore;
    }

    getTotal(outputs: object) {
        let dayOne = this.getDayOne(outputs);
        let dayTwo = this.getDayTwo(outputs);
        return dayOne + dayTwo;
    }

    private isDayOne(value: string) {
        return (value == "hundred" || value == "lj" || value == "sp" || value == "hj" || value == "four" || value == "sixty");
    }

    private isDayTwo(value: string) {
        return (value == "hurdles" || value == "dt" || value == "pv" || value == "jt" || value == "fifteen" || value == "sixtyHurdles" || value == "thousand");
    }

    getEventPoints(event: string, score: any) {
        let a= 0;
        let b = 0;
        let c = 0;
        let cm = 0;
        let seconds = 0;
        switch(event) {
            case "hundred": //100
                a = 25.4347;
                b = 18;
                c = 1.81;
                return this.calculateRunning(score,a,b,c);
            case "lj": //long jump
                a = 0.14354;
                b = 220;
                c = 1.40;
                cm = score*100;
                return this.calculateField(cm,a,b,c);
            case "sp": //shot put
                a = 51.39;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score,a,b,c);
            case "hj": //High jump
                a = 0.8465;
                b = 75;
                c = 1.42;
                cm = score*100;
                return this.calculateField(cm,a,b,c);
            case "four": //400
                a = 1.53775;
                b = 82;
                c = 1.81;
                return this.calculateRunning(score,a,b,c);
            case "hurdles": //110mH
                a = 5.74352;
                b = 28.5;
                c = 1.92;
                return this.calculateRunning(score,a,b,c);
            case "dt": //discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score,a,b,c);
            case "pv": //pole vault
                a = 0.2797;
                b = 100;
                c = 1.35;
                cm = score*100;
                return this.calculateField(cm,a,b,c);
            case "jt": //javelin
                a = 10.14;
                b = 7;
                c = 1.08;
                return this.calculateField(score,a,b,c);
            case "fifteen": //1500
                a = 0.03768;
                b = 480;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds,a,b,c);
            case "sixty":
                a = 58.0150;
                b = 11.5;
                c = 1.81;
                return this.calculateRunning(score,a,b,c);
            case "sixtyHurdles":
                a = 20.5173;
                b = 15.5;
                c = 1.92;
                return this.calculateRunning(score,a,b,c);
            case "thousand":
                a = 0.08713;
                b = 305.5;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds,a,b,c);
        }

    }

    private calculateRunning(score,a,b,c) {
        return Math.floor(a*Math.pow(b-score, c));
    }

    private calculateField(score,a,b,c){
        return Math.floor(a*Math.pow(score-b,c));
    }

    getSeconds(score){
        let time = score.split(":");
        let min = Number(time[0]);
        let sec = Number(time[1]);
        if(isNaN(min)) min = 0;
        if(isNaN(sec)) sec = 0;
        return (min*60 + sec);
    }


}