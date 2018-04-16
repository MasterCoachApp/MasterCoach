webpackJsonp([9],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConverterPageModule", function() { return UnitConverterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unit_converter__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnitConverterPageModule = (function () {
    function UnitConverterPageModule() {
    }
    UnitConverterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unit_converter__["a" /* UnitConverterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unit_converter__["a" /* UnitConverterPage */]),
            ],
        })
    ], UnitConverterPageModule);
    return UnitConverterPageModule;
}());

//# sourceMappingURL=unit-converter.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitConverterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the UnitConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnitConverterPage = (function () {
    function UnitConverterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    UnitConverterPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    UnitConverterPage.prototype.isNumber = function (event) {
        var key = window.event ? event.keyCode : event.which;
        if (key == 46 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            return true;
        }
        else
            return !(key < 48 || key > 57);
    };
    UnitConverterPage.prototype.updateTextFocus = function (value) {
        if (this.measurements[value] == "0.00" || this.measurements[value] == "0") {
            this.measurements[value] = "";
        }
    };
    UnitConverterPage.prototype.updateTextBlur = function (value) {
        if (this.measurements[value] == "") {
            this.measurements[value] = "0.00";
        }
    };
    UnitConverterPage.prototype.updateScoreImperial = function () {
        var feet = this.measurements.feet;
        var inches = this.measurements.inches;
        var feetToInches = Number(feet) * 12;
        if (isNaN(feetToInches)) {
            feetToInches = 0.00;
        }
        var numInches = Number(inches);
        if (isNaN(numInches)) {
            numInches = 0.00;
        }
        var totalInches = feetToInches + numInches;
        if (isNaN(totalInches)) {
            totalInches = 0.00;
        }
        this.outputs.metric = String(totalInches * 0.0254).substr(0, 7) + "m";
    };
    UnitConverterPage.prototype.updateScoreMetric = function () {
        var meters = Number(this.measurements.meters);
        if (!isNaN(meters)) {
            var conversionToFeet = String(meters * 3.28084);
            var remainder = conversionToFeet.split(".");
            var feet = Number(remainder[0]);
            var inches = Number(remainder[1]) * 12;
            if (!isNaN(feet)) {
                this.outputs.imperial = String(feet).substr(0, 3) + '\'';
            }
            else {
                this.outputs.imperial = "0'";
            }
            if (!isNaN(inches)) {
                this.outputs.imperial = this.outputs.imperial + String(inches).substr(0, 3) + '\"';
            }
            else {
                this.outputs.imperial = this.outputs.imperial + '0\"';
            }
        }
    };
    UnitConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-unit-converter',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/unit-converter/unit-converter.html"*/'<!--\n  Generated template for the UnitConverterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left (click)="cancel()">\n      <button ion-button="arrow-back" color="primary">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Unit Converter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <ion-label>Feet</ion-label>\n    </ion-col>\n    <ion-col col-4>\n      <ion-label>Inches</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-4>\n      <ion-input [(ngModel)]="measurements.feet" (keypress)="isNumber($event)" (ionChange)="updateScoreImperial()" (ionFocus)="updateTextFocus(\'feet\')" (ionBlur)="updateTextBlur(\'feet\')"></ion-input>\n    </ion-col>\n    <ion-col col-4>\n      <ion-input [(ngModel)]="measurements.inches" (keypress)="isNumber($event)" (ionChange)="updateScoreImperial()" (ionFocus)="updateTextFocus(\'inches\')" (ionBlur)="updateTextBlur(\'inches\')"></ion-input>\n    </ion-col>\n    <ion-col col-4>\n      <ion-input [(ngModel)]="outputs.metric" class="output" [readonly]="true" (keypress)="isNumber($event)" (ionFocus)="updateTextFocus(\'inches\')" (ionBlur)="updateTextBlur(\'inches\')"></ion-input>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n  <ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-label>Meters</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-8>\n      <ion-input [(ngModel)]="measurements.meters" (ionChange)="updateScoreMetric()" (keypress)="isNumber($event)" (ionFocus)="updateTextFocus(\'meters\')" (ionBlur)="updateTextBlur(\'meters\')"></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-input [(ngModel)]="outputs.imperial" class="output" [readonly]="true" (keypress)="isNumber($event)" (ionFocus)="updateTextFocus(\'inches\')" (ionBlur)="updateTextBlur(\'inches\')"></ion-input>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/unit-converter/unit-converter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UnitConverterPage);
    return UnitConverterPage;
}());

//# sourceMappingURL=unit-converter.js.map

/***/ })

});
//# sourceMappingURL=9.js.map