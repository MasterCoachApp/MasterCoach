webpackJsonp([15],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecathlonCalculatorPageModule", function() { return DecathlonCalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decathlon_calculator__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DecathlonCalculatorPageModule = (function () {
    function DecathlonCalculatorPageModule() {
    }
    DecathlonCalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__decathlon_calculator__["a" /* DecathlonCalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__decathlon_calculator__["a" /* DecathlonCalculatorPage */]),
            ],
        })
    ], DecathlonCalculatorPageModule);
    return DecathlonCalculatorPageModule;
}());

//# sourceMappingURL=decathlon-calculator.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecathlonCalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mens__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DecathlonCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DecathlonCalculatorPage = (function () {
    function DecathlonCalculatorPage(navCtrl, navParams, calculator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calculator = calculator;
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
    DecathlonCalculatorPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    DecathlonCalculatorPage.prototype.save = function () {
    };
    DecathlonCalculatorPage.prototype.updateTextFocus = function (value) {
        if (value == "fifteen") {
            if (this.inputs[value] == "0:00") {
                this.inputs[value] = "";
            }
        }
        else if (this.inputs[value] == "0.00") {
            this.inputs[value] = "";
        }
    };
    DecathlonCalculatorPage.prototype.updateTextBlur = function (value) {
        if (value == "fifteen") {
            if (this.inputs[value] == "") {
                this.inputs[value] = "0:00";
            }
        }
        else if (this.inputs[value] == "") {
            this.inputs[value] = "0.00";
        }
    };
    DecathlonCalculatorPage.prototype.isNumber = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    DecathlonCalculatorPage.prototype.isTime = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || key == 58 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    DecathlonCalculatorPage.prototype.updateScore = function () {
        for (var key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                if (key != "fifteen") {
                    var parse = Number(this.inputs[key]);
                    if (isNaN(parse)) {
                        parse = 0.00;
                    }
                    if (parse != 0.00) {
                        var eventScore = this.calculator.getEventPoints(key, parse);
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
                    if (this.inputs[key] != "" && this.inputs[key] != "0:00") {
                        console.log(this.inputs[key]);
                        var eventScore = this.calculator.getEventPoints(key, this.inputs[key]);
                        if (isNaN(eventScore)) {
                            eventScore = 0;
                        }
                        this.outputs[key] = eventScore;
                    }
                    else {
                        this.outputs[key] = 0;
                    }
                }
                var dayOne = this.calculator.getDayOne(this.outputs);
                if (!isNaN(dayOne)) {
                    this.outputs.dayOne = dayOne;
                }
                var dayTwo = this.calculator.getDayTwo(this.outputs);
                if (!isNaN(dayOne)) {
                    this.outputs.dayTwo = dayTwo;
                }
                var total = this.calculator.getTotal(this.outputs);
                if (!isNaN(dayOne)) {
                    this.outputs.total = total;
                }
            }
        }
    };
    DecathlonCalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-decathlon-calculator',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/decathlon-calculator/decathlon-calculator.html"*/'<!--\n  Generated template for the DecathlonCalculatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left (click)="cancel()">\n      <button ion-button="arrow-back" color="primary">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Decathlon</ion-title>\n    <ion-buttons right (click)="save()">\n      <button ion-button="arrow-back" color="primary">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-label>100m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hundred" (ionFocus)="updateTextFocus(\'hundred\')" (ionBlur)="updateTextBlur(\'hundred\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hundred" (ionFocus)="false"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="row">\n      <ion-col>\n        <ion-label>Long Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.lj" (ionFocus)="updateTextFocus(\'lj\')" (ionBlur)="updateTextBlur(\'lj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" l class="output" [(ngModel)]="outputs.lj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Shot Put</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.sp" (ionFocus)="updateTextFocus(\'sp\')" (ionBlur)="updateTextBlur(\'sp\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.sp"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>High Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hj" (ionFocus)="updateTextFocus(\'hj\')" (ionBlur)="updateTextBlur(\'hj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>400m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.four" (ionFocus)="updateTextFocus(\'four\')" (ionBlur)="updateTextBlur(\'four\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.four"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>110mH</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hurdles" (ionFocus)="updateTextFocus(\'hurdles\')" (ionBlur)="updateTextBlur(\'hurdles\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hurdles"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Discus Throw</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.dt" (ionFocus)="updateTextFocus(\'dt\')" (ionBlur)="updateTextBlur(\'dt\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.dt"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Pole Vault</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.pv" (ionFocus)="updateTextFocus(\'pv\')" (ionBlur)="updateTextBlur(\'pv\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.pv"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Javelin Throw</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.jt" (ionFocus)="updateTextFocus(\'jt\')" (ionBlur)="updateTextBlur(\'jt\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.jt"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>1500m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="8" [(ngModel)]="inputs.fifteen" (ionFocus)="updateTextFocus(\'fifteen\')" (ionBlur)="updateTextBlur(\'fifteen\')" (ionChange)="updateScore()"  (keypress)="isTime($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.fifteen"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Score Day 1:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.dayOne"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Score Day 2:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.dayTwo"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Total Score:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.total"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/decathlon-calculator/decathlon-calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mens__["a" /* MenPointsProvider */]])
    ], DecathlonCalculatorPage);
    return DecathlonCalculatorPage;
}());

//# sourceMappingURL=decathlon-calculator.js.map

/***/ })

});
//# sourceMappingURL=15.js.map