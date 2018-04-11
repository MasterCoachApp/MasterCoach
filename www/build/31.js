webpackJsonp([31],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesPage; });
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


var UtilitiesPage = (function () {
    function UtilitiesPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    UtilitiesPage.prototype.displayCalculator = function (type) {
        switch (type) {
            case 'decathlon':
                this.modalCtrl.create('DecathlonCalculatorPage').present();
                break;
            case 'heptathlonM':
                this.modalCtrl.create('HeptathlonMCalculatorPage').present();
                break;
            case 'pentathlonM':
                this.modalCtrl.create('PentathlonMCalculatorPage').present();
                break;
            case 'heptathlonW':
                this.modalCtrl.create('HeptathlonWCalculatorPage').present();
                break;
            case 'pentathlonW':
                this.modalCtrl.create('PentathlonWCalculatorPage').present();
                break;
            case 'units':
                this.modalCtrl.create('UnitConverterPage').present();
                break;
            case 'gun':
                this.modalCtrl.create('StartingGunPage').present();
                break;
            case 'stopwatch':
                this.modalCtrl.create('StopwatchPage').present();
                break;
            case 'mercier':
                this.modalCtrl.create('MercierPage').present();
                break;
        }
    };
    UtilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'utilities-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/utilities/utilities.html"*/'<!--\n  Generated template for the ToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title start>Tools</ion-title>-->\n    <!--<ion-buttons end>-->\n      <!--<button ion-button end>-->\n        <!--<ion-icon style="font-size: 30px; margin-right: 15px;" color="primary" name="ios-archive-outline"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content>\n  <ion-list-header>Utilities</ion-list-header>\n\n  <ion-list>\n    <ion-note>TOOLS</ion-note>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'stopwatch\')">\n      <ion-label>Stopwatch</ion-label>\n    </ion-item>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'gun\')">\n      <ion-label>Starting Gun</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MERCIER</ion-note>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'mercier\')">\n      <ion-label>Outdoor / Indoor</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MEN</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'decathlon\')" class="listItem">\n      <ion-label>Decathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'heptathlonM\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'pentathlonM\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>WOMEN</ion-note>\n    <ion-item  tappable (click)="displayCalculator(\'heptathlonW\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item  tappable (click)="displayCalculator(\'pentathlonW\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>UNIT CONVERTER</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'units\')" class="listItem">\n      Converter\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/utilities/utilities.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _b || Object])
    ], UtilitiesPage);
    return UtilitiesPage;
    var _a, _b;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function() { return UtilitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilitiesModule = (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__utilities__["a" /* UtilitiesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__utilities__["a" /* UtilitiesPage */]),
            ]
        })
    ], UtilitiesModule);
    return UtilitiesModule;
}());

//# sourceMappingURL=utilities.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map