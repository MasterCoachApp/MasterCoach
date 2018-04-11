webpackJsonp([36],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PentathlonMCalculatorPageModule", function() { return PentathlonMCalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pentathlon_m_calculator__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PentathlonMCalculatorPageModule = (function () {
    function PentathlonMCalculatorPageModule() {
    }
    PentathlonMCalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pentathlon_m_calculator__["a" /* PentathlonMCalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pentathlon_m_calculator__["a" /* PentathlonMCalculatorPage */]),
            ],
        })
    ], PentathlonMCalculatorPageModule);
    return PentathlonMCalculatorPageModule;
}());

//# sourceMappingURL=pentathlon-m-calculator.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PentathlonMCalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mens__ = __webpack_require__(450);
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
 * Generated class for the PentathlonMCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PentathlonMCalculatorPage = (function () {
    function PentathlonMCalculatorPage(navCtrl, navParams, calculator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calculator = calculator;
        this.inputs = {
            sixtyHurdles: "0.00",
            lj: "0.00",
            sp: "0.00",
            hj: "0.00",
            thousand: "0:00"
        };
        this.outputs = {
            sixtyHurdles: 0,
            lj: 0,
            sp: 0,
            hj: 0,
            thousand: 0,
            total: 0
        };
    }
    PentathlonMCalculatorPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    PentathlonMCalculatorPage.prototype.save = function () {
    };
    PentathlonMCalculatorPage.prototype.updateTextFocus = function (value) {
        if (value == "thousand") {
            if (this.inputs[value] == "0:00") {
                this.inputs[value] = "";
            }
        }
        else if (this.inputs[value] == "0.00") {
            this.inputs[value] = "";
        }
    };
    PentathlonMCalculatorPage.prototype.updateTextBlur = function (value) {
        if (value == "thousand") {
            if (this.inputs[value] == "") {
                this.inputs[value] = "0:00";
            }
        }
        else if (this.inputs[value] == "") {
            this.inputs[value] = "0.00";
        }
    };
    PentathlonMCalculatorPage.prototype.isNumber = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    PentathlonMCalculatorPage.prototype.isTime = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || key == 58 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    ;
    PentathlonMCalculatorPage.prototype.updateScore = function () {
        for (var key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                if (key != "thousand") {
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
                var total = this.calculator.getTotal(this.outputs);
                this.outputs.total = total;
            }
        }
    };
    PentathlonMCalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pentathlon-m-calculator',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/pentathlon-m-calculator/pentathlon-m-calculator.html"*/'<!--\n  Generated template for the DecathlonCalculatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left (click)="cancel()">\n      <button ion-button="arrow-back" color="primary">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Heptathlon</ion-title>\n    <ion-buttons right (click)="save()">\n      <button ion-button="arrow-back" color="primary">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <ion-label>60mH</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.sixtyHurdles" (ionFocus)="updateTextFocus(\'sixtyHurdles\')" (ionBlur)="updateTextBlur(\'sixtyHurdles\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.sixtyHurdles"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="row">\n      <ion-col>\n        <ion-label>Long Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.lj" (ionFocus)="updateTextFocus(\'lj\')" (ionBlur)="updateTextBlur(\'lj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" l class="output" [(ngModel)]="outputs.lj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Shot Put</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.sp" (ionFocus)="updateTextFocus(\'sp\')" (ionBlur)="updateTextBlur(\'sp\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.sp"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>High Jump</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="5" [(ngModel)]="inputs.hj" (ionFocus)="updateTextFocus(\'hj\')" (ionBlur)="updateTextBlur(\'hj\')" (ionChange)="updateScore()"  (keypress)="isNumber($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.hj"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>1000m</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input maxlength="8" [(ngModel)]="inputs.thousand" (ionFocus)="updateTextFocus(\'thousand\')" (ionBlur)="updateTextBlur(\'thousand\')" (ionChange)="updateScore()"  (keypress)="isTime($event)"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.thousand"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class="outputResult">\n      <ion-col col-4></ion-col>\n      <ion-col col-5>\n        <ion-label>Total Score:</ion-label>\n      </ion-col>\n      <ion-col col-2>\n        <ion-input [readonly]="true" class="output" [(ngModel)]="outputs.total"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/pentathlon-m-calculator/pentathlon-m-calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mens__["a" /* MenPointsProvider */]])
    ], PentathlonMCalculatorPage);
    return PentathlonMCalculatorPage;
}());

//# sourceMappingURL=pentathlon-m-calculator.js.map

/***/ })

});
//# sourceMappingURL=36.js.map