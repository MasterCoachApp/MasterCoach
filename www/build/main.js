webpackJsonp([4],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, calendarMenu, settings) {
        var _this = this;
        this.calendarMenu = calendarMenu;
        this.settings = settings;
        //rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_tabs_tabs__["a" /* TabsPage */];
        //----------------//
        //      Menu      //
        //---------------//
        this.collapsable = {
            filter: {
                main: true,
                eventFilterOpen: false,
                trainingResultFilterOpen: false,
                athleteFilterOpen: false,
                labelsFilterOpen: false
            },
        };
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            //Menu settings
            _this.setBaseMenuSettings();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            keyboard.hideKeyboardAccessoryBar(false);
            statusBar.backgroundColorByName("white");
            splashScreen.hide();
        });
    }
    MyApp.prototype.setCalendarYear = function () {
        this.calendarMenu.setDisplayYear(this.displayedYear);
    };
    MyApp.prototype.setBaseMenuSettings = function () {
        this.displayedYear = this.calendarMenu.getDisplayedYear();
        this.years = this.calendarMenu.getPossibleYears();
        this.events = this.calendarMenu.menuEvents;
        this.listOfEvents = this.events.getListOfEvents();
        this.listOfLabels = this.calendarMenu.getLabels();
    };
    MyApp.prototype.editEventsModel = function (event) {
        var eventObject = this.events.updateObeject(event, "filtered");
        this.calendarMenu.menuEvents = this.events;
    };
    MyApp.prototype.getEventFilterModel = function (event) {
        return this.events.getFilterFromEvent(event);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-label style="font-size: 14px; color: white; padding-left: 10px">Jonah Elbaz</ion-label>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n            <ion-item no-lines>\n                <ion-select [(ngModel)]="displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n        <ion-list no-lines id="calendarList">\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="clock" class="menuIcon"></ion-icon> Today\n            </ion-label>\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="calendar" class="menuIcon"></ion-icon> This Week\n            </ion-label>\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="md-analytics" class="menuIcon"></ion-icon> Analytics\n            </ion-label>\n        </ion-list>\n\n        <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                <ion-icon item-left name="ios-arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n                <ion-icon item-left name="ios-arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n                Filters\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.labelsFilterOpen = !collapsable.filter.labelsFilterOpen">\n                    Labels\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.labelsFilterOpen">\n                    <ion-item *ngFor="let label of listOfLabels">\n                        <ion-label> {{label}}</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.eventFilterOpen = !collapsable.filter.eventFilterOpen">\n                    Event\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.eventFilterOpen">\n                    <ion-item *ngFor="let event of listOfEvents">\n                        <ion-label> {{event}}</ion-label>\n                        <ion-checkbox (click)="editEventsModel(event)"  [checked]="getEventFilterModel(event)"></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.trainingResultFilterOpen = !collapsable.filter.trainingResultFilterOpen">\n                    Training Result\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.trainingResultFilterOpen">\n                    <ion-item>\n                        <ion-label>Good</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Neutral</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Bad</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n    </ion-content>\n    <ion-footer>\n    <ion-row>\n        <ion-col style="text-align: center; font-size: 25px;">\n            <ion-icon item-right name="md-share" class="share"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align: center; font-size: 30px;">\n            <ion-icon item-right name="ios-download-outline" class="share"></ion-icon>\n        </ion-col>\n    </ion-row>\n        </ion-footer>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_7__providers_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBuNF5meA-5gA0leHbyd3UsZUqbPCWNo5Y",
    authDomain: "mastercoach-c4d2b.firebaseapp.com",
    databaseURL: "https://mastercoach-c4d2b.firebaseio.com",
    projectId: "mastercoach-c4d2b",
    storageBucket: "mastercoach-c4d2b.appspot.com",
    messagingSenderId: "736172868611"
};
//# sourceMappingURL=firebase-credentials.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 471,
	"./af.js": 471,
	"./ar": 472,
	"./ar-dz": 473,
	"./ar-dz.js": 473,
	"./ar-kw": 474,
	"./ar-kw.js": 474,
	"./ar-ly": 475,
	"./ar-ly.js": 475,
	"./ar-ma": 476,
	"./ar-ma.js": 476,
	"./ar-sa": 477,
	"./ar-sa.js": 477,
	"./ar-tn": 478,
	"./ar-tn.js": 478,
	"./ar.js": 472,
	"./az": 479,
	"./az.js": 479,
	"./be": 480,
	"./be.js": 480,
	"./bg": 481,
	"./bg.js": 481,
	"./bm": 482,
	"./bm.js": 482,
	"./bn": 483,
	"./bn.js": 483,
	"./bo": 484,
	"./bo.js": 484,
	"./br": 485,
	"./br.js": 485,
	"./bs": 486,
	"./bs.js": 486,
	"./ca": 487,
	"./ca.js": 487,
	"./cs": 488,
	"./cs.js": 488,
	"./cv": 489,
	"./cv.js": 489,
	"./cy": 490,
	"./cy.js": 490,
	"./da": 491,
	"./da.js": 491,
	"./de": 492,
	"./de-at": 493,
	"./de-at.js": 493,
	"./de-ch": 494,
	"./de-ch.js": 494,
	"./de.js": 492,
	"./dv": 495,
	"./dv.js": 495,
	"./el": 496,
	"./el.js": 496,
	"./en-au": 497,
	"./en-au.js": 497,
	"./en-ca": 498,
	"./en-ca.js": 498,
	"./en-gb": 499,
	"./en-gb.js": 499,
	"./en-ie": 500,
	"./en-ie.js": 500,
	"./en-il": 501,
	"./en-il.js": 501,
	"./en-nz": 502,
	"./en-nz.js": 502,
	"./eo": 503,
	"./eo.js": 503,
	"./es": 504,
	"./es-do": 505,
	"./es-do.js": 505,
	"./es-us": 506,
	"./es-us.js": 506,
	"./es.js": 504,
	"./et": 507,
	"./et.js": 507,
	"./eu": 508,
	"./eu.js": 508,
	"./fa": 509,
	"./fa.js": 509,
	"./fi": 510,
	"./fi.js": 510,
	"./fo": 511,
	"./fo.js": 511,
	"./fr": 512,
	"./fr-ca": 513,
	"./fr-ca.js": 513,
	"./fr-ch": 514,
	"./fr-ch.js": 514,
	"./fr.js": 512,
	"./fy": 515,
	"./fy.js": 515,
	"./gd": 516,
	"./gd.js": 516,
	"./gl": 517,
	"./gl.js": 517,
	"./gom-latn": 518,
	"./gom-latn.js": 518,
	"./gu": 519,
	"./gu.js": 519,
	"./he": 520,
	"./he.js": 520,
	"./hi": 521,
	"./hi.js": 521,
	"./hr": 522,
	"./hr.js": 522,
	"./hu": 523,
	"./hu.js": 523,
	"./hy-am": 524,
	"./hy-am.js": 524,
	"./id": 525,
	"./id.js": 525,
	"./is": 526,
	"./is.js": 526,
	"./it": 527,
	"./it.js": 527,
	"./ja": 528,
	"./ja.js": 528,
	"./jv": 529,
	"./jv.js": 529,
	"./ka": 530,
	"./ka.js": 530,
	"./kk": 531,
	"./kk.js": 531,
	"./km": 532,
	"./km.js": 532,
	"./kn": 533,
	"./kn.js": 533,
	"./ko": 534,
	"./ko.js": 534,
	"./ky": 535,
	"./ky.js": 535,
	"./lb": 536,
	"./lb.js": 536,
	"./lo": 537,
	"./lo.js": 537,
	"./lt": 538,
	"./lt.js": 538,
	"./lv": 539,
	"./lv.js": 539,
	"./me": 540,
	"./me.js": 540,
	"./mi": 541,
	"./mi.js": 541,
	"./mk": 542,
	"./mk.js": 542,
	"./ml": 543,
	"./ml.js": 543,
	"./mr": 544,
	"./mr.js": 544,
	"./ms": 545,
	"./ms-my": 546,
	"./ms-my.js": 546,
	"./ms.js": 545,
	"./mt": 547,
	"./mt.js": 547,
	"./my": 548,
	"./my.js": 548,
	"./nb": 549,
	"./nb.js": 549,
	"./ne": 550,
	"./ne.js": 550,
	"./nl": 551,
	"./nl-be": 552,
	"./nl-be.js": 552,
	"./nl.js": 551,
	"./nn": 553,
	"./nn.js": 553,
	"./pa-in": 554,
	"./pa-in.js": 554,
	"./pl": 555,
	"./pl.js": 555,
	"./pt": 556,
	"./pt-br": 557,
	"./pt-br.js": 557,
	"./pt.js": 556,
	"./ro": 558,
	"./ro.js": 558,
	"./ru": 559,
	"./ru.js": 559,
	"./sd": 560,
	"./sd.js": 560,
	"./se": 561,
	"./se.js": 561,
	"./si": 562,
	"./si.js": 562,
	"./sk": 563,
	"./sk.js": 563,
	"./sl": 564,
	"./sl.js": 564,
	"./sq": 565,
	"./sq.js": 565,
	"./sr": 566,
	"./sr-cyrl": 567,
	"./sr-cyrl.js": 567,
	"./sr.js": 566,
	"./ss": 568,
	"./ss.js": 568,
	"./sv": 569,
	"./sv.js": 569,
	"./sw": 570,
	"./sw.js": 570,
	"./ta": 571,
	"./ta.js": 571,
	"./te": 572,
	"./te.js": 572,
	"./tet": 573,
	"./tet.js": 573,
	"./tg": 574,
	"./tg.js": 574,
	"./th": 575,
	"./th.js": 575,
	"./tl-ph": 576,
	"./tl-ph.js": 576,
	"./tlh": 577,
	"./tlh.js": 577,
	"./tr": 578,
	"./tr.js": 578,
	"./tzl": 579,
	"./tzl.js": 579,
	"./tzm": 580,
	"./tzm-latn": 581,
	"./tzm-latn.js": 581,
	"./tzm.js": 580,
	"./ug-cn": 582,
	"./ug-cn.js": 582,
	"./uk": 583,
	"./uk.js": 583,
	"./ur": 584,
	"./ur.js": 584,
	"./uz": 585,
	"./uz-latn": 586,
	"./uz-latn.js": 586,
	"./uz.js": 585,
	"./vi": 587,
	"./vi.js": 587,
	"./x-pseudo": 588,
	"./x-pseudo.js": 588,
	"./yo": 589,
	"./yo.js": 589,
	"./zh-cn": 590,
	"./zh-cn.js": 590,
	"./zh-hk": 591,
	"./zh-hk.js": 591,
	"./zh-tw": 592,
	"./zh-tw.js": 592
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1010;

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_account_create_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__standard_login_standard_login__ = __webpack_require__(213);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authProvider, tools, keyboard, platform, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.tools = tools;
        this.keyboard = keyboard;
        this.loadCtrl = loadCtrl;
        platform.ready().then(function () {
            keyboard.disableScroll(true); //preventing keyboard induced overflow on a page that doesnt need it
        });
    }
    LoginPage.prototype.realLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__standard_login_standard_login__["a" /* StandardLoginPage */]);
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        if (navigator.onLine) {
            var that_1 = this;
            var promise = new Promise(function (resolve, reject) {
                that_1.authProvider.advanceWithFacebook().then(function (response) {
                    if (response != "Success") {
                        reject(response);
                    }
                    else {
                        resolve();
                    }
                });
            });
            promise.then(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__["a" /* TabsPage */]); //allow entry if successful login
            }).catch(function (error) {
                _this.authProvider.firebaseAuthenticationError(error);
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    // copied from above, likely to advance to same function after checking as separate function
    LoginPage.prototype.loginWithGoogle = function () {
        this.authProvider.advanceWithGoogle();
        // if(navigator.onLine) { //test for internet connection
        //
        //     let that = this;
        //     let promise = new Promise((resolve, reject) => {
        //
        //         that.authProvider.advanceWithGoogle().then(response => {
        //             if(response != "Success") {
        //                 reject(response);
        //             }
        //             else {
        //                 resolve();
        //             }
        //         });
        //
        //     });
        //
        //     promise.then(() => {
        //         this.navCtrl.push(TabsPage); //allow entry if successful login
        //     }).catch(error => { //handle errors thrown by firebase
        //         this.authProvider.firebaseAuthenticationError(error);
        //     });
        // }
        // else {
        //     this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        // }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <div [ngClass]="hasFocus ? \'hidden\' : \'logo\'">\n        <img src="./assets/imgs/hurdles_line.jpg"/>\n    </div>\n  <!--<div [ngClass]="hasFocus ? \'hidden\' : \'logo\'">-->\n    <!--<img src="./assets/imgs/trackfield_large.png"/>-->\n  <!--</div>-->\n    <!--<div style="margin-top: 10px; text-align: center; margin-bottom: 10px" [ngClass]="hasFocus ? \'\' : \'noDisplay\'">-->\n        <!--<span style="font-weight: bold; font-size: 24px;"> Log In</span>-->\n    <!--</div>-->\n\n    <!--<ion-list>-->\n\n        <!--<ion-item >-->\n            <!--<ion-label floating style="color: gray;">Email</ion-label>-->\n            <!--<ion-input class="inputBox" [(ngModel)]="email" (ionFocus)="hasFocus = true"></ion-input>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item >-->\n            <!--<ion-label floating style="color: gray; ">Password</ion-label>-->\n            <!--<ion-input class="inputBox" [(ngModel)]="password" type="password" (ionFocus)="hasFocus = true"></ion-input>-->\n        <!--</ion-item>-->\n\n    <!--</ion-list>-->\n\n  <!--<ion-row>-->\n    <!--<ion-col class="loginButtonColumn">-->\n        <!--<button class="loginButton" ion-button (click)="login()">Log In</button>-->\n    <!--</ion-col>-->\n  <!--</ion-row>-->\n    <!--<ion-row>-->\n        <!--<ion-col class="loginButtonColumn">-->\n            <!--<button ion-button (click)="forgotPassword()" [ngClass]="hasFocus ? \'loginButton\' : \'noDisplay\'" (ionFocus)="hasFocus = true">Reset Password</button>-->\n        <!--</ion-col>-->\n    <!--</ion-row>-->\n\n\n            <!--<div [ngClass]="hasFocus ? \'tapCatcher\' : \'noDisplay\'" (click)="hasFocus = false"></div>-->\n\n  <!--<ion-row style="margin-top: 5%;">-->\n    <!--<ion-col>-->\n        <!--<hr data-content="OR" [ngClass]="hasFocus ? \'noDisplay\' : \'hr-text\'">-->\n    <!--</ion-col>-->\n  <!--</ion-row>-->\n\n    <!--<ion-row style="margin-top: 5%;">-->\n        <!--<ion-col style="text-align: center">-->\n            <!--<button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn&#45;&#45;facebook\'" (click)="loginWithFacebook()">-->\n                <!--Log In with Facebook-->\n            <!--</button>-->\n        <!--</ion-col>-->\n    <!--</ion-row>-->\n    <!--<ion-row>-->\n        <!--<ion-col style="text-align: center">-->\n            <!--<button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn&#45;&#45;google\'">-->\n                <!--Log In with Google-->\n            <!--</button>-->\n        <!--</ion-col>-->\n    <!--</ion-row>-->\n\n  <!--<ion-row>-->\n    <!--<ion-col style="text-align: center">-->\n      <!--<button  [ngClass]="hasFocus ? \'noDisplay\' : \'create\'" (click)="createAccount()">-->\n      <!--Create Account-->\n      <!--</button>-->\n    <!--</ion-col>-->\n  <!--</ion-row>-->\n\n<ion-footer>\n    <ion-row style="margin-top: 5%;">\n        <ion-col style="text-align: center">\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--facebook\'" (click)="loginWithFacebook()">\n                Sign In with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col style="text-align: center">\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--google\'" (click)="loginWithGoogle()">\n                Log In with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col style="text-align: center">\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'create\'" (click)="createAccount()">\n                Sign Up\n            </button>\n        </ion-col>\n        <ion-col>\n            <button  class="create" (click)="realLogin()">\n                Sign In\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_calendar_day__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_calendar_menu_events__ = __webpack_require__(985);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarMenu = (function () {
    function CalendarMenu(tools, alertCtrl) {
        this.tools = tools;
        this.alertCtrl = alertCtrl;
        this.displayedYear = (new Date()).getFullYear();
        this.menuEvents = new __WEBPACK_IMPORTED_MODULE_4__models_calendar_menu_events__["a" /* MenuEvents */]();
        var currentYear = this.getDisplayedYear();
        this.dateArray = this.getDates(new Date(currentYear.toString() + '-01-01'), new Date(currentYear.toString() + '-12-31'));
    }
    CalendarMenu.prototype.getLabels = function () {
        return ["Short approach LJ", "Competition style"];
    };
    CalendarMenu.prototype.setDisplayYear = function (year) {
        this.displayedYear = year;
        this.dateArray = this.getDates(new Date(this.getDisplayedYear() + "-01-01"), new Date(this.getDisplayedYear() + "-12-31"));
    };
    CalendarMenu.prototype.getDisplayedYear = function () {
        return this.displayedYear;
    };
    CalendarMenu.prototype.getPossibleYears = function () {
        var years = [];
        for (var i = this.displayedYear; i >= 1970; i--) {
            years.push(i);
        }
        return years;
    };
    CalendarMenu.prototype.getDates = function (startDate, endDate) {
        var dates = [], currentDate = startDate, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            var day = new __WEBPACK_IMPORTED_MODULE_3__models_calendar_calendar_day__["a" /* CalendarDay */](currentDate);
            dates.push(day);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    ;
    CalendarMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CalendarMenu);
    return CalendarMenu;
}());

//# sourceMappingURL=calendar-menu.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__ = __webpack_require__(82);
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
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, navParams, tools, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.authProvider = authProvider;
    }
    CreateAccountPage.prototype.createAccount = function () {
        var _this = this;
        //validate entry
        if (this.password == "" || this.password == null || this.email == "" || this.email == null || this.firstName == null || this.lastName == null) {
            this.tools.presentToast("bottom", "You cannot leave any fields empty");
            return;
        }
        if (this.password != this.repassword) {
            this.tools.presentToast("bottom", "Your passwords do not match");
            return;
        }
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            that.authProvider.createAccountAuthentication(that.email, that.password, that.firstName, that.lastName).then(function (response) {
                if (response != "Validated") {
                    reject(response);
                }
                else {
                    resolve(response);
                }
            }).catch(function (error) {
                that.tools.presentToast("bottom", "There was an error handling your request");
                console.log("error");
            });
        });
        promise.then(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            _this.authProvider.firebaseAuthenticationError(error);
            return;
        });
    };
    CreateAccountPage.prototype.createWithFacebook = function () {
        var _this = this;
        if (navigator.onLine) {
            var that_1 = this;
            var promise = new Promise(function (resolve, reject) {
                that_1.authProvider.advanceWithFacebook().then(function (response) {
                    if (response != "Success") {
                        reject(response);
                    }
                    else {
                        resolve();
                    }
                });
            });
            promise.then(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__["a" /* TabsPage */]); //allow entry if successful login
            }).catch(function (error) {
                _this.authProvider.firebaseAuthenticationError(error);
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-account',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/create-account/create-account.html"*/'<!--\n  Generated template for the CreateAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--facebook" (click)="createWithFacebook()">\n                Create with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--google" >\n                Create with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <hr class="hr-text" data-content="OR">\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="First Name" class="createAccountInput" [(ngModel)]="firstName"></ion-input>\n    </ion-col>\n      <ion-col>\n          <ion-input placeholder="Last Name" class="createAccountInput" [(ngModel)]="lastName"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Email" class="createAccountInput" [(ngModel)]="email"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Password" type="password" class="createAccountInput" [(ngModel)]="password"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Re-enter Password" type="password" class="createAccountInput" [(ngModel)]="repassword"></ion-input>\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n        <ion-col style="text-align: center">\n            <button ion-button (click)="createAccount()">Create Account</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/create-account/create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__["a" /* AuthenticationProvider */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(89);
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
 * Generated class for the StandardLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StandardLoginPage = (function () {
    function StandardLoginPage(navCtrl, navParams, authProvider, tools, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.tools = tools;
        this.storage = storage;
    }
    StandardLoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    StandardLoginPage.prototype.login = function () {
        var _this = this;
        if (this.email == null || this.email == "" || this.password == null || this.password == "") {
            this.tools.presentToast("bottom", "Please enter an email and password.");
            return;
        }
        if (navigator.onLine) {
            var that_1 = this;
            var loading_1 = this.tools.presentLoading();
            loading_1.present().then(function () {
                var promise = new Promise(function (resolve, reject) {
                    that_1.authProvider.authenticateUser(that_1.email, that_1.password).then(function (response) {
                        if (response != "Valid")
                            reject(response);
                        else
                            resolve();
                    }).catch(function (error) {
                        console.log(1);
                        reject(error);
                    });
                });
                promise.then(function () {
                    loading_1.dismiss();
                    _this.storage.set('user-email', _this.email);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__["a" /* TabsPage */]); //allow entry if successful login
                }).catch(function (error) {
                    loading_1.dismiss();
                    _this.authProvider.firebaseAuthenticationError(error);
                });
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    StandardLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-standard-login',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/standard-login/standard-login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Log In\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <!--<div style="margin-top: 10px; text-align: center; margin-bottom: 10px">-->\n    <!--<span style="font-weight: bold; font-size: 24px;"> Log In</span>-->\n  <!--</div>-->\n\n  <ion-list no-lines>\n\n    <ion-item no-lines>\n      <ion-label class="icon"><ion-icon name="md-person"></ion-icon></ion-label>\n      <ion-input class="inputBox" [(ngModel)]="email" (keyup.enter)="login()"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label class="icon"><ion-icon name="md-lock"></ion-icon></ion-label>\n      <ion-input class="inputBox" [(ngModel)]="password" type="password" (keyup.enter)="login()"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n      <button class="loginButton" ion-button (click)="login()">Sign In</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n      <button ion-button class="loginButton" (click)="forgotPassword()">Reset Password</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/standard-login/standard-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], StandardLoginPage);
    return StandardLoginPage;
}());

//# sourceMappingURL=standard-login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(50);
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
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, authProvider, tools, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.tools = tools;
        this.alertCtrl = alertCtrl;
    }
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        if (navigator.onLine) {
            var loading_1 = this.tools.presentLoading();
            loading_1.present().then(function () {
                var promise = new Promise(function (resolve, reject) {
                    _this.authProvider.forgotPassword(_this.email).then(function (response) {
                        if (response == "Success") {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }).catch(function (error) {
                        reject();
                        console.log(error);
                    });
                });
                promise.then(function () {
                    loading_1.dismiss();
                    _this.presentAlert("An email has been sent to you to reset your password", "Success");
                }).catch(function (error) {
                    loading_1.dismiss();
                    _this.presentAlert("Oops, we were unable to reset your password.", "Oops");
                });
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    ForgotPasswordPage.prototype.presentAlert = function (message, title) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div style="margin-top: 10px;">\n    <h3> Forgot Password</h3>\n  </div>\n\n  <ion-row>\n    <ion-col>\n      <ion-input class="inputBox" [(ngModel)]="email" placeholder="Email" ></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n      <button ion-button (click)="forgotPassword()" class="loginButton">Reset Password</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Logins/create-account/create-account.module": [
		1013,
		3
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		1014,
		2
	],
	"../pages/Logins/login/login.module": [
		1015,
		1
	],
	"../pages/Logins/standard-login/standard-login.module": [
		1016,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    AboutPage.prototype.toggleAppTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <button ion-button full icon-left (click)="toggleAppTheme()">\n    <ion-icon  name="bulb"></ion-icon>Toggle Theme\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings__["a" /* SettingsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logins_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, app, storage) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.storage = storage;
    }
    ContactPage.prototype.signOut = function () {
        //not yet definable
        this.storage.remove("user-email");
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__Logins_login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Personal Profile</ion-list-header>\n    <ion-item>\n      <button ion-button style="background: none" (click)="signOut()">\n      <ion-icon name="ionic" item-start></ion-icon>\n        Sign out\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationProvider = (function () {
    function ValidationProvider(tools, alertCtrl) {
        this.tools = tools;
        this.alertCtrl = alertCtrl;
    }
    ValidationProvider.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidationProvider.prototype.requestEmailVerification = function () {
        var _this = this;
        var that = this;
        var email = "";
        var promise = new Promise(function (resolve, reject) {
            var prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'Email',
                        placeholder: 'Email'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: function (data) {
                            //validate email address properly and stop from being empty
                            if (data.Email == "" || !_this.validateEmail(data.Email)) {
                                prompt.setMessage("Please enter a valid email address");
                                return false;
                            }
                            else {
                                email = data["Email"];
                                resolve();
                            }
                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(function () {
            return email;
        });
    };
    ValidationProvider.prototype.requestDisplayNameValidation = function () {
        var nameObj = null;
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            var prompt = that.alertCtrl.create({
                title: 'Please verify this information',
                message: "",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'first_name',
                        placeholder: 'First name'
                    },
                    {
                        name: 'last_name',
                        placeholder: 'Last name'
                    },
                ],
                buttons: [
                    {
                        text: 'Save',
                        handler: function (data) {
                            if (data.first_name == "" || data.last_name == "") {
                                prompt.setMessage("Please do not leave any fields empty");
                                return false;
                            }
                            nameObj = data;
                            resolve();
                        }
                    }
                ]
            });
            prompt.present();
        });
        return promise.then(function () {
            return nameObj;
        });
    };
    ValidationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ValidationProvider);
    return ValidationProvider;
}());

//# sourceMappingURL=validations.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Logins_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, app, storage, user, menu, platform, calMenu, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.storage = storage;
        this.user = user;
        this.menu = menu;
        this.platform = platform;
        this.calMenu = calMenu;
        this.viewCtrl = viewCtrl;
        this.date = new Date();
        //I suspect hard-coding UTC time will cause problems for other time-zones
        //Without specifying it was putting the wrong date (+4:00)
        this.dateSelected = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](new Date(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate(), this.date.getUTCHours(), this.date.getUTCMinutes(), this.date.getUTCSeconds()));
        this.monthInView = this.dateSelected.month;
        this.displayFullCalendar = false;
        //Full calendar
        this.x = 0;
        this.storage.get('user-email').then(function (email) {
            if (email == null) {
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__Logins_login_login__["a" /* LoginPage */]);
            }
            else {
                user.retireveLoggedInUser(email).then(function (response) {
                    if (response == null) {
                        console.log("Auto login failed to find existing user in db");
                        _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__Logins_login_login__["a" /* LoginPage */]);
                    }
                    else {
                        user.loggedIn = response;
                        console.log(response);
                    }
                }).catch(function (error) {
                    console.log("Auto login failed to find existing user in db");
                    _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__Logins_login_login__["a" /* LoginPage */]);
                });
            }
        });
        this.activateMenu();
        this.currentEvents = [
            {
                year: 2018,
                month: 2,
                date: 4
            },
            {
                year: 2018,
                month: 2,
                date: 5
            },
            {
                year: 2018,
                month: 2,
                date: 8
            },
            {
                year: 2018,
                month: 2,
                date: 9
            }
        ];
    }
    HomePage.prototype.activateMenu = function () {
        this.activeMenu = 'mainCalendarMenu';
        this.menu.enable(true, 'mainCalendarMenu');
        this.menu.enable(false, 'filtersCalendarMenu');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var todayItem = document.getElementById(_this.dateSelected.dateValue);
            var scroll = document.getElementById("calendarScroll");
            if (todayItem != null && scroll != null) {
                scroll.scrollLeft = todayItem.offsetLeft;
            }
            scroll.onscroll = function () {
                _this.determineViewedMonth();
            };
        });
    };
    HomePage.prototype.onDaySelect = function (event) {
        var date = new Date();
        date.setMonth(event.month);
        date.setDate(event.date);
        this.dateClicked = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date);
        if (this.x != 0) {
            this.updateHorizontalCalendar(this.dateClicked);
            this.displayFullCalendar = false;
        }
        this.x++;
    };
    HomePage.prototype.updateHorizontalCalendar = function (data) {
        if (data != null) {
            console.log(data);
            this.dateSelected = data;
            var todayItem = document.getElementById(this.dateSelected.dateValue);
            console.log(todayItem);
            var scroll_1 = document.getElementById("calendarScroll");
            if (todayItem != null && scroll_1 != null) {
                scroll_1.scrollLeft = todayItem.offsetLeft;
            }
            this.monthInView = this.dateSelected.month;
        }
    };
    HomePage.prototype.onMonthSelect = function (event) {
    };
    HomePage.prototype.swipe = function (event, calendar) {
        if (event.direction === 2) {
            calendar.forward();
        }
        if (event.direction === 4) {
            calendar.back();
        }
    };
    //
    HomePage.prototype.selectDate = function (date) {
        this.dateSelected = date;
        this.monthInView = date.month;
    };
    //by finding the current offset of the scroll bar, we can determine what month to display in the header
    HomePage.prototype.determineViewedMonth = function () {
        var scroll = document.getElementById("calendarScroll");
        var jan = document.getElementById((new Date().getFullYear()).toString() + "-01-01");
        var feb = document.getElementById((new Date().getFullYear()).toString() + "-02-01");
        if (jan != null && feb != null && scroll.scrollLeft >= jan.offsetLeft && scroll.scrollLeft < feb.offsetLeft) {
            this.monthInView = "January";
            return;
        }
        var mar = document.getElementById((new Date().getFullYear()).toString() + "-03-01");
        if (feb != null && mar != null && scroll.scrollLeft >= feb.offsetLeft && scroll.scrollLeft < mar.offsetLeft) {
            this.monthInView = "February";
            return;
        }
        var apr = document.getElementById((new Date().getFullYear()).toString() + "-04-01");
        if (apr != null && mar != null && scroll.scrollLeft >= mar.offsetLeft && scroll.scrollLeft < apr.offsetLeft) {
            this.monthInView = "March";
            return;
        }
        var may = document.getElementById((new Date().getFullYear()).toString() + "-05-01");
        if (apr != null && may != null && scroll.scrollLeft >= apr.offsetLeft && scroll.scrollLeft < may.offsetLeft) {
            this.monthInView = "April";
            return;
        }
        var jun = document.getElementById((new Date().getFullYear()).toString() + "-06-01");
        if (jun != null && may != null && scroll.scrollLeft >= may.offsetLeft && scroll.scrollLeft < jun.offsetLeft) {
            this.monthInView = "May";
            return;
        }
        var jul = document.getElementById((new Date().getFullYear()).toString() + "-07-01");
        if (jun != null && jul != null && scroll.scrollLeft >= jun.offsetLeft && scroll.scrollLeft < jul.offsetLeft) {
            this.monthInView = "June";
            return;
        }
        var aug = document.getElementById((new Date().getFullYear()).toString() + "-08-01");
        if (aug != null && jul != null && scroll.scrollLeft >= jul.offsetLeft && scroll.scrollLeft < aug.offsetLeft) {
            this.monthInView = "July";
            return;
        }
        var sep = document.getElementById((new Date().getFullYear()).toString() + "-09-01");
        if (aug != null && sep != null && scroll.scrollLeft >= aug.offsetLeft && scroll.scrollLeft < sep.offsetLeft) {
            this.monthInView = "August";
            return;
        }
        var oct = document.getElementById((new Date().getFullYear()).toString() + "-10-01");
        if (oct != null && sep != null && scroll.scrollLeft >= sep.offsetLeft && scroll.scrollLeft < oct.offsetLeft) {
            this.monthInView = "September";
            return;
        }
        var nov = document.getElementById((new Date().getFullYear()).toString() + "-11-01");
        if (oct != null && nov != null && scroll.scrollLeft >= oct.offsetLeft && scroll.scrollLeft < nov.offsetLeft) {
            this.monthInView = "October";
            return;
        }
        var dec = document.getElementById((new Date().getFullYear()).toString() + "-12-01");
        if (dec != null && nov != null && scroll.scrollLeft >= nov.offsetLeft && scroll.scrollLeft < dec.offsetLeft) {
            this.monthInView = "November";
            return;
        }
        if (dec != null && scroll.scrollLeft >= dec.offsetLeft) {
            this.monthInView = "December";
            return;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-buttons>\n          <button ion-button style="font-size: 20px;" (click)="displayFullCalendar = !displayFullCalendar">\n              {{this.monthInView}}  {{this.calMenu.getDisplayedYear()}} &nbsp; <ion-icon name="md-arrow-dropdown"></ion-icon>\n\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n    <ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplayTransition\'" #calendar (swipe)="swipe($event, calendar)"\n                  (onMonthSelect)="onMonthSelect($event)"\n                  (onDaySelect)="onDaySelect($event)"\n                  [events]="currentEvents" >\n\n    </ion-calendar>\n    <div id="calendarScroll" class="scroll" >\n        <ion-row nowrap>\n          <div *ngFor="let date of this.calMenu.dateArray" class="expandedDate" (click)="selectDate(date)">\n            <ion-item no-lines [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'expandedDate selected\' : \'expandedDate\'" id="{{date.date.toISOString().slice(0,10)}}">\n                <div class="hCalendarContent">\n                    <ion-row>\n                        <ion-col [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'">\n                            {{date.dayOfTheWeek}}\n                        </ion-col>\n                    </ion-row >\n                    <ion-row>\n                        <ion-col style="font-size: 14px !important;" [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'" color="primary">\n                            {{date.date.getDate()}}\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-item>\n          </div>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content padding [ngClass]="displayFullCalendar ? \'showingCalendarContent\' : \'\'">\n    <div>\n        <ion-row>\n            <ion-col>\n                <hr data-content="Planned" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.planned != null">\n            <h3 class="nothingPlanned">You have no planned trainings</h3>\n        </ion-row>\n\n    </div>\n    <div class="executed">\n        <ion-row>\n            <ion-col>\n                <hr data-content="Executed" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.executed != null">\n            <h3 class="nothingPlanned">You did not train today</h3>\n        </ion-row>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDay; });
var CalendarDay = (function () {
    function CalendarDay(date) {
        this.date = date;
        //  this.date.setDate(date.getUTCDate());
        this.dayOfTheWeek = this.getDayOfWeek(this.date);
        this.month = this.getMonth(this.date);
        this.dateValue = date.toISOString().slice(0, 10);
        this.content = {
            planned: [],
            executed: []
        };
        this.calendarEvent = null;
    }
    /*
        Private Getters
     */
    CalendarDay.prototype.getMonth = function (date) {
        switch (date.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    };
    CalendarDay.prototype.getDayOfWeek = function (date) {
        switch (date.getDay()) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
        }
    };
    /*
        Public Setters
     */
    CalendarDay.prototype.setCalendarEvent = function (calendarEvent) {
        this.calendarEvent = calendarEvent;
    };
    return CalendarDay;
}());

//# sourceMappingURL=calendar-day.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users_user__ = __webpack_require__(987);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = (function () {
    function UsersProvider(db) {
        this.db = db;
    }
    // -------------------------///
    //    Retrieve Users       ///
    //-------------------------///
    // -------------------------///
    //    Get User - Auto Login ///
    //-------------------------///
    UsersProvider.prototype.retireveLoggedInUser = function (email) {
        //email is a unique key value pair in the database
        var that = this;
        var userPromise = new Promise(function (resolve, reject) {
            var idRef = that.db.database.ref("Users");
            idRef.once('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    if (snap.child("Email").val().toUpperCase() == email.toUpperCase()) {
                        var user = new __WEBPACK_IMPORTED_MODULE_2__models_users_user__["a" /* User */](snap.child("Email").val(), snap.child("First_name").val(), snap.child("Last_name").val(), snap.child("UserId").val());
                        resolve(user);
                        return true;
                    }
                    return false;
                });
                reject(null);
            });
        });
        return userPromise.then(function (response) {
            return response;
        }).catch(function () {
            return null;
        });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsProvider = (function () {
    function ToolsProvider(toastCtrl, loadCtrl, datePicker) {
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.datePicker = datePicker;
    }
    ToolsProvider.prototype.presentToast = function (position, message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    };
    ToolsProvider.prototype.presentLoading = function () {
        return this.loadCtrl.create({
            dismissOnPageChange: true,
            showBackdrop: false
        });
    };
    ToolsProvider.prototype.showDatePicker = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(598);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_credentials__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Logins_create_account_create_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_keyboard__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_users_users__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_tools_validations__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_menus_calendar_menu__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic3_calendar_en__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_plus__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_settings__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Logins_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__["a" /* StandardLoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/standard-login/standard-login.module#StandardLoginPageModule', name: 'StandardLoginPage', segment: 'standard-login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic3_calendar_en__["a" /* CalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Logins_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__["a" /* StandardLoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_19__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_tools_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_users_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_tools_validations__["a" /* ValidationProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_menus_calendar_menu__["a" /* CalendarMenu */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_29__providers_settings__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/'\n<ion-fab class="circleTab">\n  <button ion-fab class="homeFab"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-tabs tabsPlacement="bottom">\n  <ion-tab [root]="tab1Root"  tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Search" tabIcon="ios-search"></ion-tab>\n  <ion-tab></ion-tab>\n  <ion-tab [root]="tab2Root"  tabTitle="Tools" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_validations__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthenticationProvider = (function () {
    function AuthenticationProvider(dbAuth, db, facebook, google, storage, tools, alertCtrl, validation) {
        this.dbAuth = dbAuth;
        this.db = db;
        this.facebook = facebook;
        this.google = google;
        this.storage = storage;
        this.tools = tools;
        this.alertCtrl = alertCtrl;
        this.validation = validation;
    }
    /*
    https://firebase.google.com/docs/auth/web/manage-users?authuser=0
     */
    AuthenticationProvider.prototype.forgotPassword = function (emailAddress) {
        var promise = new Promise(function (resolve, reject) {
            var auth = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]();
            auth.sendPasswordResetEmail(emailAddress).then(function () {
                resolve("Success");
            }).catch(function (error) {
                reject(error);
            });
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
    };
    // Firebase Authentication error list
    AuthenticationProvider.prototype.firebaseAuthenticationError = function (error) {
        if (error == "auth/invalid-email")
            this.tools.presentToast("bottom", 'Sorry, we don\'t know that email...yet! U+1F61C');
        if (error == "auth/user-disabled")
            this.tools.presentToast("bottom", "Sorry, looks like your account has been disabled U+1F613");
        if (error == "auth/user-not-found")
            this.tools.presentToast("bottom", "Sorry, user not found!");
        if (error == "auth/wrong-password")
            this.tools.presentToast("bottom", "Sorry, that password is incorrect!");
        if (error == "auth/invalid-email")
            this.tools.presentToast("bottom", 'Sorry, that email is invalid');
        if (error == "auth/email-already-in-use")
            this.tools.presentToast("bottom", "Sorry, looks like that email is already registered");
        if (error == "auth/operation-not-allowed")
            this.tools.presentToast("bottom", "Sorry, that action cannot be performed at this time");
        if (error == "auth/weak-password")
            this.tools.presentToast("bottom", "Sorry, that password is too weak. Make sure it contains at least six characters");
    };
    // -------------------------///
    //    Authentication       ///
    //-------------------------///
    AuthenticationProvider.prototype.authenticateUser = function (email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.dbAuth.auth.signInWithEmailAndPassword(email, password).then(function () {
                resolve("Valid");
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                reject(errorCode);
                console.log("code:" + error.code);
                console.log(errorMessage);
            });
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
    };
    AuthenticationProvider.prototype.createAccountAuthentication = function (email, password, firstName, lastName) {
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            that.dbAuth.auth.createUserWithEmailAndPassword(email, password).then(function (response) {
                var promise = new Promise(function (resolve, reject) {
                    that.createAccountDatabase(email, firstName, lastName, response.uid).then(function (response) {
                        resolve();
                    }).catch(function (error) {
                        reject();
                        console.log(error); //do something better here? Not sure what would cause this
                    });
                });
                promise.then(function (response) {
                    resolve('Validated');
                }).catch(function (error) {
                    reject();
                    console.log(error); //do something better here? Not sure what would cause this
                });
            }).catch(function (error) {
                reject(error.code);
            });
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
    };
    //attempt to add the created account to the real time database
    AuthenticationProvider.prototype.createAccountDatabase = function (email, firstName, lastName, userId) {
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            var newUser = {
                "Email": email,
                "Last_name": lastName,
                "First_name": firstName,
                "UserId": userId
            };
            var ref = that.db.database.ref("Users/" + userId).set(newUser).then(function (response) {
                resolve();
            });
            reject();
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error; //not sure what this would be
        });
    };
    // -------------------------///
    //   Media Authentication   ///
    //-------------------------///
    AuthenticationProvider.prototype.advanceWithFacebook = function () {
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            that.facebook.login(['email'])
                .then(function (response) {
                if (response.status === 'connected') {
                    var facebookCredential_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                    that.facebook.api('me?fields=id,name,email,first_name,last_name', ['email']).then(function (apiResponse) {
                        console.log(response);
                        console.log('Good to see you, ' + apiResponse["first_name"] + " " + apiResponse["last_name"]);
                        console.log('Facebook Id: ' + apiResponse.id);
                        console.log('Email: ' + apiResponse.email);
                        if (apiResponse["first_name"] == "" || apiResponse["first_name"] == null || apiResponse["last_name"] == null || apiResponse["last_name"] == "") {
                            that.validation.requestDisplayNameValidation().then(function (nameResponse) {
                                that.signInWithFacebookCredentials(facebookCredential_1, apiResponse.email, nameResponse.first, nameResponse.last).then(function (response) {
                                    resolve("Success");
                                }).catch(function (error) {
                                    reject(error);
                                });
                            });
                        }
                        else {
                            that.signInWithFacebookCredentials(facebookCredential_1, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"]).then(function (response) {
                                resolve("Success");
                            }).catch(function (error) {
                                reject(error);
                            });
                        }
                    });
                }
            });
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error; //not sure what this would be
        });
    };
    AuthenticationProvider.prototype.signInWithFacebookCredentials = function (facebookCredential, email, first_name, last_name) {
        var _this = this;
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            that.dbAuth.auth.signInWithCredential(facebookCredential)
                .then(function (success) {
                if (success.email == null) {
                    that.validation.requestEmailVerification().then(function (emailResponse) {
                        success.updateEmail(emailResponse).then(function () {
                            var innerPromise = new Promise(function (resolve, reject) {
                                that.createAccountDatabase(emailResponse, first_name, last_name, success.uid)
                                    .then(function (response) {
                                    resolve(emailResponse);
                                }).catch(function (error) {
                                    reject();
                                    console.log(error); //do something better here? Not sure what would cause this
                                });
                            });
                            innerPromise.then(function (response) {
                                _this.storage.set('user-email', response);
                                resolve("Success");
                            }).catch(function (error) {
                                reject(error);
                                console.log(error); //do something better here? Not sure what would cause this
                            });
                        }).catch(function (error) {
                            console.log("Error updating email: " + error);
                        });
                    });
                }
                else {
                    var innerPromise = new Promise(function (resolve, reject) {
                        that.createAccountDatabase(email, first_name, last_name, success.uid)
                            .then(function (response) {
                            resolve();
                        }).catch(function (error) {
                            reject();
                            console.log(error); //do something better here? Not sure what would cause this
                        });
                    });
                    innerPromise.then(function (response) {
                        resolve("Success");
                    }).catch(function (error) {
                        reject(error);
                        console.log(error); //do something better here? Not sure what would cause this
                    });
                }
            });
        });
        return promise.then(function (response) {
            return response;
        }).catch(function (error) {
            return error; //not sure what this would be
        });
    };
    // check if same as fb, merge if so, currently a copy for the below functions advanceWithGoogle() and signInWithGoogleCredentials()
    AuthenticationProvider.prototype.advanceWithGoogle = function () {
        this.google.login({})
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.error(err); });
        // let that = this;
        // let promise = new Promise((resolve, reject) => {
        //     that.google.login(UserData => {
        //             // console.log((UserData));
        //         }
        //     )
        // });
        // return promise.then(response => {
        //     return response;
        // }).catch(error => {
        //     return error; //not sure what this would be
        // });
        // let that = this;
        // let promise = new Promise( (resolve, reject) => {
        //     that.google.login({})
        //         .then( response => {
        //             if (response.status === 'connected') {
        //
        //                 const googleCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        //
        //                 that.facebook.api('me?fields=id,name,email,first_name,last_name', ['email']).then(apiResponse => {
        //                     console.log(response);
        //                     console.log('Good to see you, ' + apiResponse["first_name"] + " " + apiResponse["last_name"]);
        //                     console.log('Facebook Id: ' + apiResponse.id);
        //                     console.log('Email: ' + apiResponse.email);
        //
        //                     if(apiResponse["first_name"] == "" || apiResponse["first_name"] == null || apiResponse["last_name"] == null || apiResponse["last_name"] == "") {
        //                         that.validation.requestDisplayNameValidation().then(nameResponse => {
        //                             that.signInWithFacebookCredentials(googleCredential, apiResponse.email, nameResponse.first, nameResponse.last, ).then(response => {
        //                                 resolve("Success");
        //                             }).catch(error =>{
        //                                 reject(error);
        //                             });
        //                         });
        //                     }
        //                     else {
        //                         that.signInWithGoogleCredentials(googleCredential, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"], ).then(response => {
        //                             resolve("Success");
        //                         }).catch(error => {
        //                             reject(error);
        //                         });
        //                     }
        //                 });
        //             }
        //         });
        // });
        //
        // return promise.then(response => {
        //     return response;
        // }).catch(error => {
        //     return error; //not sure what this would be
        // });
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__tools_validations__["a" /* ValidationProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logging_activities_track_events__ = __webpack_require__(986);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MenuEvents = (function (_super) {
    __extends(MenuEvents, _super);
    function MenuEvents() {
        var _this = _super.call(this) || this;
        _this.hundred.displayed = true;
        _this.hundred.filtered = false;
        _this.sprintHurdles.displayed = true;
        _this.sprintHurdles.filtered = false;
        _this.fourHundred.displayed = true;
        _this.fourHundred.filtered = false;
        _this.fifteenHundred.displayed = true;
        _this.fifteenHundred.filtered = false;
        _this.longJump.displayed = true;
        _this.longJump.filtered = false;
        _this.highJump.displayed = true;
        _this.highJump.filtered = false;
        _this.poleVault.displayed = true;
        _this.poleVault.filtered = false;
        _this.javelin.displayed = true;
        _this.javelin.filtered = false;
        _this.discus.displayed = true;
        _this.discus.filtered = false;
        _this.shotput.displayed = true;
        _this.shotput.filtered = false;
        _this.decathlon.displayed = true;
        _this.decathlon.filtered = false;
        return _this;
    }
    MenuEvents.prototype.getFilterFromEvent = function (event) {
        switch (event) {
            case "100m":
                return this.hundred.filtered;
            case "110mH":
                return this.sprintHurdles.filtered;
            case "400m":
                return this.fourHundred.filtered;
            case "1500m":
                return this.fifteenHundred.filtered;
            case "Long Jump":
                return this.longJump.filtered;
            case "High Jump":
                return this.highJump.filtered;
            case "Pole Vault":
                return this.poleVault.filtered;
            case "Javelin Throw":
                return this.javelin.filtered;
            case "Discus Throw":
                return this.discus.filtered;
            case "Shot Put":
                return this.shotput.filtered;
            case "Decathlon":
                return this.decathlon.filtered;
        }
    };
    MenuEvents.prototype.updateObeject = function (event, property) {
        switch (event) {
            case "100m":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.hundred.filtered = !this.hundred.filtered;
                }
                return this.hundred;
            case "110mH":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.sprintHurdles.filtered = !this.sprintHurdles.filtered;
                }
                return this.sprintHurdles;
            case "400m":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.fourHundred.filtered = !this.fourHundred.filtered;
                }
                return this.fourHundred;
            case "1500m":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.fifteenHundred.filtered = !this.fifteenHundred.filtered;
                }
                return this.fifteenHundred;
            case "Long Jump":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.longJump.filtered = !this.longJump.filtered;
                }
                return this.longJump;
            case "High Jump":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.highJump.filtered = !this.highJump.filtered;
                }
                return this.highJump;
            case "Pole Vault":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.poleVault.filtered = !this.poleVault.filtered;
                }
                return this.poleVault;
            case "Javelin Throw":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.javelin.filtered = !this.javelin.filtered;
                }
                return this.javelin;
            case "Discus Throw":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.discus.filtered = !this.discus.filtered;
                }
                return this.discus;
            case "Shot Put":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.shotput.filtered = !this.shotput.filtered;
                }
                return this.shotput;
            case "Decathlon":
                if (property == "displayed") {
                }
                if (property == "filtered") {
                    this.decathlon.filtered = !this.decathlon.filtered;
                }
                return this.decathlon;
        }
    };
    return MenuEvents;
}(__WEBPACK_IMPORTED_MODULE_0__logging_activities_track_events__["a" /* TrackEvents */]));

//# sourceMappingURL=menu-events.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackEvents; });
var TrackEvents = (function () {
    function TrackEvents() {
        this.hundred = {
            value: "100m"
        };
        this.sprintHurdles = {
            value: "110mH",
        };
        this.fourHundred = {
            value: "400m",
        };
        this.fifteenHundred = {
            value: "1500m",
        };
        this.longJump = {
            value: "Long Jump",
        };
        this.highJump = {
            value: "High Jump",
        };
        this.poleVault = {
            value: "Pole Vault",
        };
        this.javelin = {
            value: "Javelin Throw",
        };
        this.discus = {
            value: "Discus Throw",
        };
        this.shotput = {
            value: "Shot Put",
        };
        this.decathlon = {
            value: "Decathlon",
        };
        this.listOfEvents = ["100m", "110mH", "400m", "1500m", "Long Jump", "High Jump", "Pole Vault", "Discus Throw", "Javelin Throw", "Shot Put", "Decathlon"];
    }
    TrackEvents.prototype.getListOfEvents = function () {
        return this.listOfEvents;
    };
    ;
    return TrackEvents;
}());

//# sourceMappingURL=track-events.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, first_name, last_name, user_id) {
        this.Email = email;
        this.First_name = first_name;
        this.Last_name = last_name;
        this.User_Id = user_id;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[593]);
//# sourceMappingURL=main.js.map