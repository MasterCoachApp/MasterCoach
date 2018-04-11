import {Injectable} from "@angular/core";

@Injectable()
export class MercierPointsProvider {

    constructor() {
    }

    calculateMercierScore(inputs: object) {
        let score = 0;
        let noConvert = 0;
        if (inputs['select'] == "100m") {
            score = 290.52712 * (100 / inputs['sec']) - 1953.2266;
        }
        if (inputs['select'] == "200m") {
            score = 267.75893 * (200 / inputs['sec']) - 1703.6447;
        }
        if (inputs['select'] == "400m") {
            if (inputs['min'] > 0 && inputs['min'] < 9) {
                alert("Please enter 400m performance in SECONDS only.");
            }
            else {
                score = 262.37121 * (400 / inputs['sec']) - 1402.7708;
            }
        }
        if (inputs['select'] == "800m") {
            score = 302.9089 * (800 / ((60 * inputs['min']) + inputs['sec'])) - 1377.5673;
        }
        if (inputs['select'] == "1500m") {
            score = 320.6038 * (1500 / ((60 * inputs['min']) + inputs['sec'])) - 1314.0045;
        }
        if (inputs['select'] == "5000m") {
            score = 342.8535 * (5000 / ((60 * inputs['min']) + inputs['sec'])) - 1234.1959;
        }
        if (inputs['select'] == "10000m") {
            score = 349.8535 * (10000 / ((60 * inputs['min']) + inputs['sec'])) - 1171.2847;
        }
        if (inputs['select'] == "Marathon") {
            score = 384.5408 * (42194.99 / ((((60 * inputs['hr']) + inputs['sec']) * 60) + inputs['sec'])) - 1161.8021;
        }
        if (inputs['select'] == "High Jump") {
            score = 2227.8560 * Math.sqrt(inputs['pts']) - 2447.9277;
        }
        if (inputs['select'] == "Long Jump") {
            score = 1065.6947 * Math.sqrt(inputs['pts']) - 2120.1067;
        }
        if (inputs['select'] == "Triple Jump") {
            score = 717.9505 * Math.sqrt(inputs['pts']) - 2042.6637;
        }
        if (inputs['select'] == "Pole Vault") {
            score = 839.81066 * Math.sqrt(inputs['pts']) - 1065.4477;
        }

        if (inputs['select'] == "Discus") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 163.07395 * Math.sqrt(inputs['pts']) - 361.92521;
            }
            else {
                score = 194.62465 * Math.sqrt(inputs['pts']) - 628.31962;
            }
        }

        if (inputs['select'] == "Javelin") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 170.11116 * Math.sqrt(inputs['pts']) - 417.375499;
            }
            else {
                score = 168.13381 * Math.sqrt(inputs['pts']) - 601.71996;
            }
        }

        if (inputs['select'] == "Shot Put") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 326.4432919 * Math.sqrt(inputs['pts']) - 474.3020648;
            }
            else {
                score = 363.768931 * Math.sqrt(inputs['pts']) - 701.8195151;
            }
        }

        if (inputs['select'] == "Hammer") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 155.50271 * Math.sqrt(inputs['pts']) - 364.68208;
            }
            else {
                score = 166.96750 * Math.sqrt(inputs['pts']) - 537.76945;
            }
        }

        if (inputs['select'] == "100mH") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 245.697911 * (100 / inputs['sec']) - 974.427319;
        }

        if (inputs['select'] == "110mH") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 232.393146 * (110 / inputs['sec']) - 977.72885;
        }

        if (inputs['select'] == "400mH") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 235.892182 * (400 / inputs['sec']) - 772.912406;
            }
            else {
                score = 234.92702 * (400 / inputs['sec']) - 990.21339;
            }
        }

        if (inputs['select'] == "Heptathlon") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.12948997 * inputs['pts'] + 133.9909428;
        }

        if (inputs['select'] == "Decathlon") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.1037911 * inputs['pts'] + 81.780218;
        }

        if (inputs['select'] == "3000m SC") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 308.3188307 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 700.8207684;
            }
            else {
                score = score = 317.0980312 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 977.0359001;
            }
        }

        if (inputs['select'] == "10km Walk") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0
            };
            score = 456.1325749 * (10000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 818.4565095;
        }

        if (inputs['select'] == "20km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0
            };
            score = 514.2338335 * (20000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1188.463045;
        }

        if (inputs['select'] == "50km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0
            }
            score = 578.7732604 * (50000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1157.14858;
        }

        if (inputs['select'] == "-------") {
            alert("Please select an event!");
            return;
        }
        if (inputs['select'] == "150m") {
            score = 265.3031224 * (150 / inputs['sec']) - 1720.7734;
        }
        if (inputs['select'] == "300m") {
            score = 251.7769577 * (300 / inputs['sec']) - 1414.90071;
        }
        if (inputs['select'] == "600m") {
            score = 285.7637 * (600 / ((60 * inputs['min']) + inputs['sec'])) - 1371.563558;
        }
        if (inputs['select'] == "1000m") {
            score = 313.6503268 * (1000 / ((60 * inputs['min']) + inputs['sec'])) - 1374.25166;
        }
        if (inputs['select'] == "Mile") {
            score = 321.7731201 * (1609.34 / ((60 * inputs['min']) + inputs['sec'])) - 1306.285127;
        }
        if (inputs['select'] == "2000m") {
            score = 328.2988442 * (2000 / ((60 * inputs['min']) + inputs['sec'])) - 1303.430804;
        }
        if (inputs['select'] == "3000m") {
            score = 331.264214 * (3000 / ((60 * inputs['min']) + inputs['sec'])) - 1240.294895;
        }

        return score;
    }


    manageScore(input: object, output: object, score: number) {
        let score_temp = score;
        let score_init = 0;
        if (input["gender"] == "women") {
            score_init = (score + 370.23683)/1.10218405;
        }
        else  {
            score_init = score;
        }

        if (input["gender"] == "women" && output["gender"] == "men") {
            score  = (score_temp + 370.23683)/1.10218405;
        }

        if (input["gender"] == "men" && output["gender"] == "women") {
            score = 1.10218405*score_temp - 370.23683;
        }

        this.comparePerformance(input, output, score, score_init);

    }



    comparePerformance(input: object, output: object, score: number, score_init: number) {

        let comp_perf_m1, comp_perf_s, comp_perf_s1;

        if (output["select"] == "100m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 100/(0.003439*score+6.72526);
        }
        if (output["select"] == "200m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 200/(0.003734*score+6.36315);
        }
        if (output["select"] == "400m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 400/(0.0038105*score+5.34719);
        }

        if (output["select"] == "800m") {
            output['hr'] = "";
            output['min'] = Math.floor(800/(0.003300*score+4.54844)/60);
            comp_perf_s1 = ((800/(0.003300*score+4.54844)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "1500m") {
            output['hr'] = "";
            output['min'] = Math.floor(1500/(0.003117*score+4.09988)/60);
            comp_perf_s1 = ((1500/(0.003117*score+4.09988)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "5000m") {
            output['hr'] = "";
            output['min'] = Math.floor(5000/(0.0029129*score+3.602496)/60);
            comp_perf_s1 = ((5000/(0.0029129*score+3.602496)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "10000m") {
            output['hr'] = "";
            output['min'] = Math.floor(10000/(0.002857*score+3.348169)/60);
            comp_perf_s1 = ((10000/(0.002857*score+3.348169)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                comp_perf_s = comp_perf_s1;}
            else {
                comp_perf_s = "0"+comp_perf_s1;}
        }

        if (output["select"] == "Marathon") {
            output['hr'] = Math.floor(42194.99/(0.0025989*score+3.022432)/3600);
            comp_perf_m1 = Math.floor(((42194.99/(0.0025989*score+3.022432)/3600)-output['hr'])*60);
            if (Math.floor(comp_perf_m1/10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0"+comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99/(0.0025989*score+3.022432)/3600)-output['hr'])*60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "High Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.00044878*score+1.098838,2);
        }

        if (output["select"] == "Long Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0009379*score+1.9897558,2);
        }

        if (output["select"] == "Triple Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0013899*score+2.8472750,2);
        }

        if (output["select"] == "Pole Vault") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0011566*score+1.293145,2);
        }

        if (output["select"] == "Discus") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0061301*score+2.220986,2);
            }
            else {
                output['pts'] = Math.pow(0.005136*score+3.2303518,2);
            }
        }

        if (output["select"] == "Javelin") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0058689*score+2.4609307,2);
            }
            else {
                output['pts'] = Math.pow(0.0059368*score+3.5872388,2);
            }
        }

        if (output["select"] == "Shot Put") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.003061312*score+1.454488154,2);
            }
            else {
                output['pts'] = Math.pow(0.002747525*score+1.930440381,2);
            }
        }

        if (output["select"] == "Hammer") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0064308*score+2.34518185,2);
            }
            else {
                output['pts'] = Math.pow(0.0059840*score+3.2248036,2);
            }
        }

        if (output["select"] == "100mH") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 100/(0.00406955*score+3.9663329) ;
        }

        if (output["select"] == "110mH") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 110/(0.00430147*score+4.2084435);
        }

        if (output["select"] == "400mH") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = 400/(0.0042374*score+3.2779819);
            }
            else {
                output['pts'] = 400/(0.00425567*score+4.2157351);
            }
        }

        if (output["select"] == "Heptathlon") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 7.71914876*score-1032.090149;
        }


        if (output["select"] == "Decathlon") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 9.6301981*score-784.4197095;
        }


        if (output["select"] == "3000m SC") {
            output['hr'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['min'] = Math.floor(3000/(0.003243381*score+2.273050417)/60);
                comp_perf_s1 = ((3000/(0.003243381*score+2.273050417)/60)-output['min'])*60;
                if (Math.floor(comp_perf_s1/10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0"+comp_perf_s1;
                }
            }
            else {
                output['min'] = Math.floor(3000/(0.003149187*score+3.084594697)/60);
                comp_perf_s1 = ((3000/(0.003149187*score+3.084594697)/60)-output['min'])*60;
                if (Math.floor(comp_perf_s1/10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0"+comp_perf_s1;
                }
            }
        }

        if (output["select"] == "10km Walk") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = Math.floor(10000/(0.00218465*score+1.80028029)/60);
            comp_perf_s1 = ((10000/(0.00218465*score+1.80028029)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "20km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(20000/(0.001937687*score+2.316516043)/3600);
            comp_perf_m1 = Math.floor(((20000/(0.001937687*score+2.316516043)/3600)-output['hr'])*60);
            if (Math.floor(comp_perf_m1/10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0"+comp_perf_m1;
            }
            comp_perf_s1 = ((((20000/(0.001937687*score+2.316516043)/3600)-output['hr'])*60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "50km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(50000/(0.001695422*score+2.024370694)/3600);
            comp_perf_m1 = Math.floor(((50000/(0.001695422*score+2.024370694)/3600)-output['hr'])*60);
            if (Math.floor(comp_perf_m1/10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0"+comp_perf_m1;
            }
            comp_perf_s1 = ((((50000/(0.001695422*score+2.024370694)/3600)-output['hr'])*60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "Indoor") {
            alert("Please select a comparison event!");
            return;
        }

        if (output["select"] == "150m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 150/(.003768768*score+6.486427968);
        }

        if (output["select"] == "300m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 300/(0.003970935*score+5.620258201);
        }

        if (output["select"] == "600m") {
            output['hr'] = "";
            output['min'] = Math.floor(600/(0.003499*score+4.80022)/60);
            comp_perf_s1 = ((600/(0.003499*score+4.80022)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "1000m") {
            output['hr'] = "";
            output['min'] = Math.floor(1000/(0.00318746*score+4.382052887)/60);
            comp_perf_s1 = ((1000/(0.00318746*score+4.382052887)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "Mile") {
            output['hr'] = "";
            output['min'] = Math.floor(1609.34/(0.0031062*score+4.060811045)/60);
            comp_perf_s1 = ((1609.34/(0.0031062*score+4.060811045)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "2000m") {
            output['hr'] = "";
            output['min'] = Math.floor(2000/(0.0030444*score+3.97139601)/60);
            comp_perf_s1 = ((2000/(0.0030444*score+3.97139601)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "3000m") {
            output['hr'] = "";
            output['min'] = Math.floor(3000/(0.0030147*score+3.74703401)/60);
            comp_perf_s1 = ((3000/(0.0030147*score+3.74703401)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "2 mile") {
            output['hr'] = "";
            output['min'] = Math.floor(2*1609.34/(0.0029949*score+3.726724)/60);
            comp_perf_s1 = ((2*1609.34/(0.0029949*score+3.726724)/60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }


        if (output["select"] == "20 km") {
            output['hr'] = Math.floor(20000/(0.0027370*score+3.205521)/3600);
            comp_perf_m1 = Math.floor(((20000/(0.0027370*score+3.205521)/3600)-output['hr'])*60);
            if (Math.floor(comp_perf_m1/10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0"+comp_perf_m1;
            }
            comp_perf_s1 = ((((20000/(0.0027370*score+3.205521)/3600)-output['hr'])*60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }

        if (output["select"] == "Half Marathon") {
            output['hr'] = Math.floor(42194.99/2/(0.00272793*score+3.1912339)/3600);
            comp_perf_m1 = Math.floor(((42194.99/2/(0.00272793*score+3.1912339)/3600)-output['hr'])*60);
            if (Math.floor(comp_perf_m1/10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0"+comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99/2/(0.00272793*score+3.1912339)/3600)-output['hr'])*60)-output['min'])*60;
            if (Math.floor(comp_perf_s1/10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0"+comp_perf_s1;
            }
        }
        output['score'] = score_init;
        input['score'] = score;
    }

}