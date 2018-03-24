webpackJsonp([6],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPageModule", function() { return ToolsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToolsPageModule = (function () {
    function ToolsPageModule() {
    }
    ToolsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tools__["a" /* ToolsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tools__["a" /* ToolsPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__tools__["a" /* ToolsPage */],
            ]
        })
    ], ToolsPageModule);
    return ToolsPageModule;
}());

//# sourceMappingURL=tools.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
 * Generated class for the ToolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToolsPage = (function () {
    function ToolsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ToolsPage.prototype.displayCalculator = function (type) {
        switch (type) {
            case 'decathlon':
                var profileModal = this.modalCtrl.create('DecathlonCalculatorPage');
                profileModal.present();
                break;
        }
    };
    ToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tools',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/tools-home/tools.html"*/'<!--\n  Generated template for the ToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title start>Tools</ion-title>\n    <ion-buttons end>\n      <button ion-button end>\n        <ion-icon style="font-size: 30px; margin-right: 15px;" color="primary" name="ios-archive-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list-header>Score Calculators</ion-list-header>\n\n  <ion-list>\n    <ion-note>Mercier</ion-note>\n    <ion-item class="listItem">\n      <ion-label>Indoor</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Outdoor</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MEN</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'decathlon\')" class="listItem">\n      <ion-label>Decathlon</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>Women</ion-note>\n    <ion-item class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Pentathlon (Indoor)</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list-header>Unit Converter</ion-list-header>\n  <ion-list>\n    <ion-item class="listItem">\n      Converter\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/tools-home/tools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ToolsPage);
    return ToolsPage;
}());

//# sourceMappingURL=tools.js.map

/***/ })

});
//# sourceMappingURL=6.js.map