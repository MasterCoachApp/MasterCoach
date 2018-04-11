import {Injectable} from '@angular/core';

@Injectable()
export class WomenPointsProvider {

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
        return (value == "hurdles" || value == "sp" || value == "hj" || value == "two" );
    }

    private isDayTwo(value: string) {
        return ( value == "lj" || value == "jt" || value == "eight");
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
                a = 0.188807;
                b = 210;
                c = 1.41;
                cm = score*100;
                return this.calculateField(cm,a,b,c);
            case "sp": //shot put
                a = 56.0211;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score,a,b,c);
            case "hj": //High jump
                a = 1.84523;
                b = 75;
                c = 1.348;
                cm = score*100;
                return this.calculateField(cm,a,b,c);
            case "two": //two
                a = 4.99087;
                b = 42.5;
                c = 1.81;
                return this.calculateRunning(score,a,b,c);
            case "hurdles": //110mH
                a = 9.23076;
                b = 26.7;
                c = 1.835;
                return this.calculateRunning(score,a,b,c);
            case "dt": //discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score,a,b,c);
            case "jt": //javelin
                a = 15.9803;
                b = 3.8;
                c = 1.04;
                return this.calculateField(score,a,b,c);
            case "eight": //1500
                a = 0.11193;
                b = 254;
                c = 1.88;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds,a,b,c);
            case "sixtyHurdles":
                a = 20.0479;
                b = 17;
                c = 1.835;
                return this.calculateRunning(score,a,b,c);
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