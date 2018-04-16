webpackJsonp([12],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercierPageModule", function() { return MercierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercier__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MercierPageModule = (function () {
    function MercierPageModule() {
    }
    MercierPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mercier__["a" /* MercierPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mercier__["a" /* MercierPage */]),
            ],
        })
    ], MercierPageModule);
    return MercierPageModule;
}());

//# sourceMappingURL=mercier.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mercier__ = __webpack_require__(457);
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
 * Generated class for the MercierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MercierPage = (function () {
    function MercierPage(navCtrl, navParams, mercier) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mercier = mercier;
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
    MercierPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    MercierPage.prototype.calculateScore = function () {
        var sec = Number(this.inputs.sec);
        if (isNaN(sec))
            sec = 0;
        var min = Number(this.inputs.min);
        if (isNaN(min))
            min = 0;
        var hr = Number(this.inputs.hr);
        if (isNaN(hr))
            hr = 0;
        var pts = Number(this.inputs.pts);
        if (isNaN(pts))
            pts = 0;
        var score = this.mercier.calculateMercierScore(this.inputs);
        this.mercier.manageScore(this.inputs, this.outputs, score);
    };
    MercierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mercier',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/mercier/mercier.html"*/'<!--\n  Generated template for the MercierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons left (click)="cancel()">\n            <button ion-button="arrow-back" color="primary">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Mercier</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\nMissing Indoor/Junior comparisons;\nForm Checking;\nPoint conversion\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-segment [(ngModel)]="inputs.gender">\n                    <ion-segment-button value="men">\n                        Men\n                    </ion-segment-button>\n                    <ion-segment-button value="women">\n                        Women\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-segment [(ngModel)]="inputs.group">\n                    <ion-segment-button value="senior">\n                        Senior\n                    </ion-segment-button>\n                    <ion-segment-button value="junior">\n                        Junior\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-7>\n                <ion-select [(ngModel)]="inputs.select">\n                    <ion-option value="100m">100m</ion-option>\n                    <ion-option value="200m">200m</ion-option>\n                    <ion-option value="400m">400m</ion-option>\n                    <ion-option value="800m">800m</ion-option>\n                    <ion-option value="1000m">1000m</ion-option>\n                    <ion-option value="1500m">1500m</ion-option>\n                    <ion-option value="Mile">Mile</ion-option>\n                    <ion-option value="3000m">3000m</ion-option>\n                    <ion-option value="5000m">5000m</ion-option>\n                    <ion-option value="10000m">10000m</ion-option>\n                    <ion-option value="Marathon">Marathon</ion-option>\n                    <ion-option value="High Jump">High Jump</ion-option>\n                    <ion-option value="Long Jump">Long Jump</ion-option>\n                    <ion-option value="Triple Jump">Triple Jump</ion-option>\n                    <ion-option value="Pole Vault">Pole Vault</ion-option>\n                    <ion-option value="Discus">Discus</ion-option>\n                    <ion-option value="Javelin">Javelin</ion-option>\n                    <ion-option value="Shot Put">Shot Put</ion-option>\n                    <ion-option value="Hammer">Hammer</ion-option>\n                    <ion-option value="100mH">100mH</ion-option>\n                    <ion-option value="110mH">110mH</ion-option>\n                    <ion-option value="400mH">400mH</ion-option>\n                    <ion-option value="Heptathlon">Heptathlon</ion-option>\n                    <ion-option value="Decathlon">Decathlon</ion-option>\n                    <ion-option value="3000m SC">3000m SC</ion-option>\n                    <ion-option value="10km Walk">10km Walk</ion-option>\n                    <ion-option value="20km Walk">20km Walk</ion-option>\n                    <ion-option value="50km Walk">50km Walk</ion-option>\n                    <ion-option value="Indoors">---Indoors---</ion-option>\n                    <ion-option value="150m">150m</ion-option>\n                    <ion-option value="300m">300m</ion-option>\n                    <ion-option value="600m">600m</ion-option>\n                    <ion-option value="1000mI">1000mI</ion-option>\n                    <ion-option value="1500mI">1500mI</ion-option>\n                    <ion-option value="3000mI">3000mI</ion-option>\n                    <ion-option value="60mH">60mH</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2>\n                <ion-label>Score:</ion-label>\n            </ion-col>\n            <ion-col col-3>\n                <ion-input [(ngModel)]="inputs.score"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-label>Hr</ion-label>\n                <ion-input [(ngModel)]="inputs.hr"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Min</ion-label>\n                <ion-input [(ngModel)]="inputs.min"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Sec</ion-label>\n                <ion-input [(ngModel)]="inputs.sec"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Pts/M</ion-label>\n                <ion-input [(ngModel)]="inputs.pts"></ion-input>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-segment [(ngModel)]="outputs.gender">\n                    <ion-segment-button value="men">\n                        Men\n                    </ion-segment-button>\n                    <ion-segment-button value="women">\n                        Women\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-segment [(ngModel)]="outputs.group">\n                    <ion-segment-button value="senior">\n                        Senior\n                    </ion-segment-button>\n                    <ion-segment-button value="junior">\n                        Junior\n                    </ion-segment-button>\n                </ion-segment>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-7>\n                <ion-select [(ngModel)]="outputs.select">\n                    <ion-option value="100m">100m</ion-option>\n                    <ion-option value="200m">200m</ion-option>\n                    <ion-option value="400m">400m</ion-option>\n                    <ion-option value="800m">800m</ion-option>\n                    <ion-option value="1000m">1000m</ion-option>\n                    <ion-option value="1500m">1500m</ion-option>\n                    <ion-option value="Mile">Mile</ion-option>\n                    <ion-option value="3000m">3000m</ion-option>\n                    <ion-option value="5000m">5000m</ion-option>\n                    <ion-option value="10000m">10000m</ion-option>\n                    <ion-option value="Marathon">Marathon</ion-option>\n                    <ion-option value="High Jump">High Jump</ion-option>\n                    <ion-option value="Long Jump">Long Jump</ion-option>\n                    <ion-option value="Triple Jump">Triple Jump</ion-option>\n                    <ion-option value="Pole Vault">Pole Vault</ion-option>\n                    <ion-option value="Discus">Discus</ion-option>\n                    <ion-option value="Javelin">Javelin</ion-option>\n                    <ion-option value="Shot Put">Shot Put</ion-option>\n                    <ion-option value="Hammer">Hammer</ion-option>\n                    <ion-option value="100mH">100mH</ion-option>\n                    <ion-option value="110mH">110mH</ion-option>\n                    <ion-option value="400mH">400mH</ion-option>\n                    <ion-option value="Heptathlon">Heptathlon</ion-option>\n                    <ion-option value="Decathlon">Decathlon</ion-option>\n                    <ion-option value="3000m SC">3000m SC</ion-option>\n                    <ion-option value="10km Walk">10km Walk</ion-option>\n                    <ion-option value="20km Walk">20km Walk</ion-option>\n                    <ion-option value="50km Walk">50km Walk</ion-option>\n                    <ion-option value="Indoors">---Indoors---</ion-option>\n                    <ion-option value="150m">150m</ion-option>\n                    <ion-option value="300m">300m</ion-option>\n                    <ion-option value="600m">600m</ion-option>\n                    <ion-option value="1000mI">1000mI</ion-option>\n                    <ion-option value="1500mI">1500mI</ion-option>\n                    <ion-option value="3000mI">3000mI</ion-option>\n                    <ion-option value="60mH">60mH</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col col-2>\n                <ion-label>Score:</ion-label>\n            </ion-col>\n            <ion-col col-3>\n                <ion-input [readonly]="true" [(ngModel)]="outputs.score"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-label>Hr</ion-label>\n                <ion-input [readonly]="true" [(ngModel)]="outputs.hr"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Min</ion-label>\n                <ion-input [readonly]="true" [(ngModel)]="outputs.min"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Sec</ion-label>\n                <ion-input [readonly]="true" [(ngModel)]="outputs.sec"></ion-input>\n            </ion-col>\n            <ion-col>\n                <ion-label>Pts/M</ion-label>\n                <ion-input [readonly]="true" [(ngModel)]="outputs.pts"></ion-input>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row>\n        <ion-buttons style="width: 100%; text-align: center">\n            <button style="width: 100%; text-align: center" ion-button (click)="calculateScore()">Calculate</button>\n        </ion-buttons>\n    </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tools/calculators/mercier/mercier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_calculators_mercier__["a" /* MercierPointsProvider */]])
    ], MercierPage);
    return MercierPage;
}());

//# sourceMappingURL=mercier.js.map

/***/ })

});
//# sourceMappingURL=12.js.map