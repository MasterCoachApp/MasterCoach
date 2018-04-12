webpackJsonp([13],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeptathlonWCalculatorPageModule", function() { return HeptathlonWCalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heptathlon_w_calculator__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeptathlonWCalculatorPageModule = (function () {
    function HeptathlonWCalculatorPageModule() {
    }
    HeptathlonWCalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__heptathlon_w_calculator__["a" /* HeptathlonWCalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__heptathlon_w_calculator__["a" /* HeptathlonWCalculatorPage */]),
            ],
        })
    ], HeptathlonWCalculatorPageModule);
    return HeptathlonWCalculatorPageModule;
}());

//# sourceMappingURL=heptathlon-w-calculator.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeptathlonWCalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_womens__ = __webpack_require__(451);
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
 * Generated class for the HeptathlonWCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeptathlonWCalculatorPage = (function () {
    function HeptathlonWCalculatorPage(navCtrl, navParams, calculator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calculator = calculator;
        this.inputs = {
            hurdles: "0.00",
            lj: "0.00",
            sp: "0.00",
            hj: "0.00",
            two: "0.00",
            jt: "0.00",
            eight: "0:00"
        };
        this.outputs = {
            hurdles: 0,
            lj: 0,
            sp: 0,
            hj: 0,
            two: 0,
            jt: 0,
            eight: 0,
            dayOne: 0,
            dayTwo: 0,
            total: 0
        };
    }
    HeptathlonWCalculatorPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    HeptathlonWCalculatorPage.prototype.save = function () {
    };
    HeptathlonWCalculatorPage.prototype.updateTextFocus = function (value) {
        if (value == "eight") {
            if (this.inputs[value] == "0:00") {
                this.inputs[value] = "";
            }
        }
        else if (this.inputs[value] == "0.00") {
            this.inputs[value] = "";
        }
    };
    HeptathlonWCalculatorPage.prototype.updateTextBlur = function (value) {
        if (value == "eight") {
            if (this.inputs[value] == "") {
                this.inputs[value] = "0:00";
            }
        }
        else if (this.inputs[value] == "") {
            this.inputs[value] = "0.00";
        }
    };
    HeptathlonWCalculatorPage.prototype.isNumber = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    HeptathlonWCalculatorPage.prototype.isTime = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || key == 58 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    HeptathlonWCalculatorPage.prototype.updateScore = function () {
        for (var key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                if (key != "eight") {
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
    HeptathlonWCalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-heptathlon-w-calculator',template:/*ion-inline-start:"/workspace/MasterCoach/src/pages/HomeTabs/tools/calculators/heptathlon-w-calculator/heptathlon-w-calculator.html"*/'<!--\n  Generated template for the DecathlonCalculatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left (click)="cancel()">\n      <button ion-button="arrow-back" color="primary">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Heptathlon</ion-title>\n    <ion-buttons right (click)="save()">\n      <button ion-button="arrow-back" color="primary">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-label>100mH</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hurdles" (ionFocus)="updateTextFocus(\'hurdles\')" (ionBlur)="updateTextBlur(\'hurdles\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hurdles" (ionFocus)="false"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>High Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hj" (ionFocus)="updateTextFocus(\'hj\')" (ionBlur)="updateTextBlur(\'hj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Shot Put</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.sp" (ionFocus)="updateTextFocus(\'sp\')" (ionBlur)="updateTextBlur(\'sp\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.sp"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>200m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.two" (ionFocus)="updateTextFocus(\'two\')" (ionBlur)="updateTextBlur(\'two\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.two"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="row">\n      <ion-col>\n        <ion-label>Long Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.lj" (ionFocus)="updateTextFocus(\'lj\')" (ionBlur)="updateTextBlur(\'lj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" l class="output" [(ngModel)]="outputs.lj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Javelin Throw</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.jt" (ionFocus)="updateTextFocus(\'jt\')" (ionBlur)="updateTextBlur(\'jt\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.jt"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>800m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="8" [(ngModel)]="inputs.eight" (ionFocus)="updateTextFocus(\'eight\')" (ionBlur)="updateTextBlur(\'eight\')" (ionChange)="updateScore()"  (keypress)="isTime($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.eight"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Score Day 1:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.dayOne"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Score Day 2:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.dayTwo"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Total Score:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.total"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/workspace/MasterCoach/src/pages/HomeTabs/tools/calculators/heptathlon-w-calculator/heptathlon-w-calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_womens__["a" /* WomenPointsProvider */]])
    ], HeptathlonWCalculatorPage);
    return HeptathlonWCalculatorPage;
}());

//# sourceMappingURL=heptathlon-w-calculator.js.map

/***/ })

});
//# sourceMappingURL=13.js.map