webpackJsonp([5],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings__ = __webpack_require__(153);
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
        var eventObject = this.events.updateObject(event, "filtered");
        this.calendarMenu.menuEvents = this.events;
    };
    MyApp.prototype.getEventFilterModel = function (event) {
        return this.events.getFilterFromEvent(event);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-label style="font-size: 14px; color: white; padding-left: 10px">Jonah Elbaz</ion-label>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n            <ion-item no-lines>\n                <ion-select [(ngModel)]="displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n        <ion-list no-lines id="calendarList">\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="clock" class="menuIcon"></ion-icon> Today\n            </ion-label>\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="calendar" class="menuIcon"></ion-icon> This Week\n            </ion-label>\n            <ion-label no-lines class="calendar-item">\n                <ion-icon item-left name="md-analytics" class="menuIcon"></ion-icon> Analytics\n            </ion-label>\n        </ion-list>\n\n        <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                <ion-icon item-left name="ios-arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n                <ion-icon item-left name="ios-arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n                Filters\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.labelsFilterOpen = !collapsable.filter.labelsFilterOpen">\n                    Labels\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.labelsFilterOpen">\n                    <ion-item *ngFor="let label of listOfLabels">\n                        <ion-label> {{label}}</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.eventFilterOpen = !collapsable.filter.eventFilterOpen">\n                    Event\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.eventFilterOpen">\n                    <ion-item *ngFor="let event of listOfEvents">\n                        <ion-label> {{event}}</ion-label>\n                        <ion-checkbox (click)="editEventsModel(event)"  [checked]="getEventFilterModel(event)"></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.trainingResultFilterOpen = !collapsable.filter.trainingResultFilterOpen">\n                    Training Result\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.trainingResultFilterOpen">\n                    <ion-item>\n                        <ion-label>Good</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Neutral</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Bad</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n    </ion-content>\n    <ion-footer>\n    <ion-row>\n        <ion-col style="text-align: center; font-size: 25px;">\n            <ion-icon item-right name="md-share" class="share"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align: center; font-size: 30px;">\n            <ion-icon item-right name="ios-download-outline" class="share"></ion-icon>\n        </ion-col>\n    </ion-row>\n        </ion-footer>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_7__providers_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1012:
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

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 474,
	"./af.js": 474,
	"./ar": 475,
	"./ar-dz": 476,
	"./ar-dz.js": 476,
	"./ar-kw": 477,
	"./ar-kw.js": 477,
	"./ar-ly": 478,
	"./ar-ly.js": 478,
	"./ar-ma": 479,
	"./ar-ma.js": 479,
	"./ar-sa": 480,
	"./ar-sa.js": 480,
	"./ar-tn": 481,
	"./ar-tn.js": 481,
	"./ar.js": 475,
	"./az": 482,
	"./az.js": 482,
	"./be": 483,
	"./be.js": 483,
	"./bg": 484,
	"./bg.js": 484,
	"./bm": 485,
	"./bm.js": 485,
	"./bn": 486,
	"./bn.js": 486,
	"./bo": 487,
	"./bo.js": 487,
	"./br": 488,
	"./br.js": 488,
	"./bs": 489,
	"./bs.js": 489,
	"./ca": 490,
	"./ca.js": 490,
	"./cs": 491,
	"./cs.js": 491,
	"./cv": 492,
	"./cv.js": 492,
	"./cy": 493,
	"./cy.js": 493,
	"./da": 494,
	"./da.js": 494,
	"./de": 495,
	"./de-at": 496,
	"./de-at.js": 496,
	"./de-ch": 497,
	"./de-ch.js": 497,
	"./de.js": 495,
	"./dv": 498,
	"./dv.js": 498,
	"./el": 499,
	"./el.js": 499,
	"./en-au": 500,
	"./en-au.js": 500,
	"./en-ca": 501,
	"./en-ca.js": 501,
	"./en-gb": 502,
	"./en-gb.js": 502,
	"./en-ie": 503,
	"./en-ie.js": 503,
	"./en-il": 504,
	"./en-il.js": 504,
	"./en-nz": 505,
	"./en-nz.js": 505,
	"./eo": 506,
	"./eo.js": 506,
	"./es": 507,
	"./es-do": 508,
	"./es-do.js": 508,
	"./es-us": 509,
	"./es-us.js": 509,
	"./es.js": 507,
	"./et": 510,
	"./et.js": 510,
	"./eu": 511,
	"./eu.js": 511,
	"./fa": 512,
	"./fa.js": 512,
	"./fi": 513,
	"./fi.js": 513,
	"./fo": 514,
	"./fo.js": 514,
	"./fr": 515,
	"./fr-ca": 516,
	"./fr-ca.js": 516,
	"./fr-ch": 517,
	"./fr-ch.js": 517,
	"./fr.js": 515,
	"./fy": 518,
	"./fy.js": 518,
	"./gd": 519,
	"./gd.js": 519,
	"./gl": 520,
	"./gl.js": 520,
	"./gom-latn": 521,
	"./gom-latn.js": 521,
	"./gu": 522,
	"./gu.js": 522,
	"./he": 523,
	"./he.js": 523,
	"./hi": 524,
	"./hi.js": 524,
	"./hr": 525,
	"./hr.js": 525,
	"./hu": 526,
	"./hu.js": 526,
	"./hy-am": 527,
	"./hy-am.js": 527,
	"./id": 528,
	"./id.js": 528,
	"./is": 529,
	"./is.js": 529,
	"./it": 530,
	"./it.js": 530,
	"./ja": 531,
	"./ja.js": 531,
	"./jv": 532,
	"./jv.js": 532,
	"./ka": 533,
	"./ka.js": 533,
	"./kk": 534,
	"./kk.js": 534,
	"./km": 535,
	"./km.js": 535,
	"./kn": 536,
	"./kn.js": 536,
	"./ko": 537,
	"./ko.js": 537,
	"./ky": 538,
	"./ky.js": 538,
	"./lb": 539,
	"./lb.js": 539,
	"./lo": 540,
	"./lo.js": 540,
	"./lt": 541,
	"./lt.js": 541,
	"./lv": 542,
	"./lv.js": 542,
	"./me": 543,
	"./me.js": 543,
	"./mi": 544,
	"./mi.js": 544,
	"./mk": 545,
	"./mk.js": 545,
	"./ml": 546,
	"./ml.js": 546,
	"./mr": 547,
	"./mr.js": 547,
	"./ms": 548,
	"./ms-my": 549,
	"./ms-my.js": 549,
	"./ms.js": 548,
	"./mt": 550,
	"./mt.js": 550,
	"./my": 551,
	"./my.js": 551,
	"./nb": 552,
	"./nb.js": 552,
	"./ne": 553,
	"./ne.js": 553,
	"./nl": 554,
	"./nl-be": 555,
	"./nl-be.js": 555,
	"./nl.js": 554,
	"./nn": 556,
	"./nn.js": 556,
	"./pa-in": 557,
	"./pa-in.js": 557,
	"./pl": 558,
	"./pl.js": 558,
	"./pt": 559,
	"./pt-br": 560,
	"./pt-br.js": 560,
	"./pt.js": 559,
	"./ro": 561,
	"./ro.js": 561,
	"./ru": 562,
	"./ru.js": 562,
	"./sd": 563,
	"./sd.js": 563,
	"./se": 564,
	"./se.js": 564,
	"./si": 565,
	"./si.js": 565,
	"./sk": 566,
	"./sk.js": 566,
	"./sl": 567,
	"./sl.js": 567,
	"./sq": 568,
	"./sq.js": 568,
	"./sr": 569,
	"./sr-cyrl": 570,
	"./sr-cyrl.js": 570,
	"./sr.js": 569,
	"./ss": 571,
	"./ss.js": 571,
	"./sv": 572,
	"./sv.js": 572,
	"./sw": 573,
	"./sw.js": 573,
	"./ta": 574,
	"./ta.js": 574,
	"./te": 575,
	"./te.js": 575,
	"./tet": 576,
	"./tet.js": 576,
	"./tg": 577,
	"./tg.js": 577,
	"./th": 578,
	"./th.js": 578,
	"./tl-ph": 579,
	"./tl-ph.js": 579,
	"./tlh": 580,
	"./tlh.js": 580,
	"./tr": 581,
	"./tr.js": 581,
	"./tzl": 582,
	"./tzl.js": 582,
	"./tzm": 583,
	"./tzm-latn": 584,
	"./tzm-latn.js": 584,
	"./tzm.js": 583,
	"./ug-cn": 585,
	"./ug-cn.js": 585,
	"./uk": 586,
	"./uk.js": 586,
	"./ur": 587,
	"./ur.js": 587,
	"./uz": 588,
	"./uz-latn": 589,
	"./uz-latn.js": 589,
	"./uz.js": 588,
	"./vi": 590,
	"./vi.js": 590,
	"./x-pseudo": 591,
	"./x-pseudo.js": 591,
	"./yo": 592,
	"./yo.js": 592,
	"./zh-cn": 593,
	"./zh-cn.js": 593,
	"./zh-hk": 594,
	"./zh-hk.js": 594,
	"./zh-tw": 595,
	"./zh-tw.js": 595
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
webpackContext.id = 1016;

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users_user__ = __webpack_require__(989);
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
    UsersProvider.prototype.retrievedLoggedInUser = function (email) {
        //email is a unique key value pair in the database
        var that = this;
        var userPromise = new Promise(function (resolve, reject) {
            var idRef = that.db.database.ref("Users");
            idRef.once('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    if (snap.child("Email").val().toUpperCase() == email.toUpperCase()) {
                        var user = new __WEBPACK_IMPORTED_MODULE_2__models_users_user__["a" /* User */](snap.child("Email").val(), snap.child("First_name").val(), snap.child("Last_name").val(), snap.child("UserId").val());
                        that.loggedIn = user;
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_account_create_account__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__standard_login_standard_login__ = __webpack_require__(214);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(621);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_calendar_day__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_calendar_menu_events__ = __webpack_require__(988);
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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(41);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__["a" /* AuthenticationProvider */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(41);
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
                    console.log('HELLO!');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], StandardLoginPage);
    return StandardLoginPage;
}());

//# sourceMappingURL=standard-login.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(41);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_logging_training__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_activities__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_track_events__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__ = __webpack_require__(993);
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
 * Generated class for the CreateTrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTrainingPage = (function () {
    function CreateTrainingPage(navCtrl, navParams, users, training, alertCtrl, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.users = users;
        this.training = training;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
        this.preTraining = {
            readiness: {
                key: "Readiness",
                val: 0
            },
            hunger: {
                key: "Hunger",
                val: 0
            },
            stress: {
                key: "Stress",
                val: 0
            },
            bodyState: {
                key: "Body State",
                val: 0
            },
            energy: {
                key: "Energy",
                val: 0
            },
            preThoughts: {
                key: "Thoughts",
                val: ''
            },
        };
        this.postTraining = {
            postThoughts: {
                key: 'Thoughts',
                val: ''
            },
            overallRating: 0
        };
        this.mainTraining = {
            mainTrainingNotes: {
                key: 'Notes',
                val: ''
            }
        };
        this.trainingExpanded = false;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;
        this.overallThoughtsExpanded = false;
        this.activities = new __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_activities__["a" /* Activities */]();
        this.listOfEvents = new __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_track_events__["a" /* TrackEvents */]().getListOfEvents();
    }
    CreateTrainingPage.prototype.createQnaArray = function () {
        var qna = [];
        var question = new __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__["a" /* Qna */](this.preTraining.energy.key, this.preTraining.energy.val);
        qna.push(question);
        question = new __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__["a" /* Qna */](this.preTraining.bodyState.key, this.preTraining.bodyState.val);
        qna.push(question);
        question = new __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__["a" /* Qna */](this.preTraining.stress.key, this.preTraining.stress.val);
        qna.push(question);
        question = new __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__["a" /* Qna */](this.preTraining.hunger.key, this.preTraining.hunger.val);
        qna.push(question);
        question = new __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__["a" /* Qna */](this.preTraining.readiness.key, this.preTraining.readiness.val);
        qna.push(question);
        return qna;
    };
    CreateTrainingPage.prototype.createNewTraining = function () {
        var qna = this.createQnaArray();
        var preNotes = [];
        var postNotes = [];
        var mainNotes = [];
        var preNote = new __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__["a" /* Notes */](this.preTraining.preThoughts.key, this.preTraining.preThoughts.val);
        preNotes.push(preNote);
        var postNote = new __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__["a" /* Notes */](this.postTraining.postThoughts.key, this.postTraining.postThoughts.val);
        postNotes.push(postNote);
        var mainNote = new __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__["a" /* Notes */](this.mainTraining.mainTrainingNotes.key, this.mainTraining.mainTrainingNotes.val);
        mainNotes.push(mainNote);
        var newTraining = new __WEBPACK_IMPORTED_MODULE_5__models_logging_training__["a" /* Training */]();
        newTraining.setPreCalEvent(qna, preNotes);
        newTraining.setPostCalEvent(this.postTraining.overallRating, postNotes);
        newTraining.setMainCalEvent(this.activities, mainNotes);
        if (navigator.onLine) {
            this.training.createNewEntry(newTraining);
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    CreateTrainingPage.prototype.expand = function (type) {
        switch (type) {
            case 'pre':
                this.preTrainingExpanded = !this.preTrainingExpanded;
                break;
            case 'post':
                this.postTrainingExpanded = !this.postTrainingExpanded;
                break;
            case 'training':
                this.trainingExpanded = !this.trainingExpanded;
                break;
        }
    };
    CreateTrainingPage.prototype.addActivity = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'alertCss'
        });
        alert.setTitle('Which event does this belong to?');
        this.listOfEvents.forEach(function (data) {
            alert.addInput({
                type: 'checkbox',
                label: data,
                value: data,
                checked: false
            });
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add Events',
            handler: function (data) {
                console.log('Checkbox data:', data);
                if (data != null) {
                    data.forEach(function (index) {
                        _this.activities.addEvents(index);
                    });
                }
                // this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    CreateTrainingPage.prototype.addWarmUp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Warm Up',
        });
        alert.addInput({
            type: 'radio',
            label: 'A',
            value: 'A',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'B',
            value: 'B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: function (data) {
                console.log('Checkbox data:', data);
                if (data != null) {
                    _this.activities.setWarmUp(data);
                }
                // this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    CreateTrainingPage.prototype.addCoolDown = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cool Down',
        });
        alert.addInput({
            type: 'radio',
            label: 'A',
            value: 'A',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'B',
            value: 'B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: function (data) {
                console.log('Checkbox data:', data);
                if (data != null) {
                    _this.activities.setCoolDown(data);
                }
                // this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    CreateTrainingPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    // adding for testing data on page DG 2018-03-18
    CreateTrainingPage.prototype.testConsole = function (data) {
        console.log(data);
    };
    CreateTrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-training',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/'<!--\n  Generated template for the CreateTrainingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button="arrow-back" color="primary" (click)="cancel()">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>New Training</ion-title>\n      <ion-buttons right (click)="createNewTraining()">\n          <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                Save\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list no-lines>\n    <ion-item class="tab" align-items-stretch (click)="expand(\'pre\')">\n      <ion-list-header class="title">\n        <ion-col>\n        Pre-Training\n        </ion-col>\n        <ion-col style="text-align: right; width: 100%;" col-8>\n          <ion-icon style="text-align: right" *ngIf="!this.preTrainingExpanded" class="drop" name="ios-arrow-forward"></ion-icon>\n          <ion-icon *ngIf="this.preTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n        </ion-col>\n      </ion-list-header>\n    </ion-item>\n    <ion-list *ngIf="this.preTrainingExpanded">\n      <ion-item class="ionItemFix">\n        <ion-label item-start>Readiness</ion-label>\n        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right [(ngModel)]="preTraining.readiness.val">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label item-start>Energy</ion-label>\n        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right [(ngModel)]="preTraining.energy.val">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label item-start>Hunger</ion-label>\n        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right [(ngModel)]="preTraining.hunger.val">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label item-start>Stress</ion-label>\n        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right [(ngModel)]="preTraining.stress.val">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label item-start>Body State</ion-label>\n        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right [(ngModel)]="preTraining.bodyState.val">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pain <ion-icon name="medkit"></ion-icon></ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Thoughts</ion-label>\n        <ion-textarea class="openTextBox" [(ngModel)]="this.preTraining.preThoughts.val"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-item class="tab" (click)="expand(\'training\')">\n      <ion-list-header>\n      <ion-col>\n        Training\n      </ion-col>\n      <ion-col style="text-align: right; width: 100%;" col-8>\n        <ion-icon style="text-align: right" *ngIf="!this.trainingExpanded" class="drop" name="ios-arrow-forward"></ion-icon>\n        <ion-icon *ngIf="this.trainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n      </ion-col>\n      </ion-list-header>\n    </ion-item>\n    <ion-list *ngIf="this.trainingExpanded">\n      <ion-label stacked>Activities</ion-label>\n      <ion-list>\n        <ion-label stacked class="trainingHeaders">Warm Up</ion-label>\n        <ion-item *ngIf="!this.activities.warmUp">\n          <button ion-button (click)="addWarmUp()">Add Warm Up</button>\n        </ion-item>\n        <ion-item *ngIf="this.activities.warmUp">\n          <button ion-button (click)="addWarmUp()">Warm Up {{this.activities.warmUp}}<ion-icon class="trainingHeaders" name="close" (click)="activities.setWarmUp(null)"></ion-icon></button>\n        </ion-item>\n        <ion-label stacked class="trainingHeaders">Events</ion-label>\n        <ion-list *ngIf="activities.getEvents()">\n          <ion-item *ngFor="let event of activities.getEvents()">\n            <button ion-button>{{event}} <ion-icon name="close" class="trainingHeaders" (click)="activities.removeEvent(event)" ></ion-icon></button>\n          </ion-item>\n        </ion-list>\n        <ion-item>\n          <button ion-button (click)="addActivity()">Add Event</button>\n        </ion-item>\n      </ion-list>\n      <ion-label stacked class="trainingHeaders">Cool Down</ion-label>\n      <ion-item *ngIf="!this.activities.coolDown">\n        <button ion-button (click)="addCoolDown()">Add Cool Down</button>\n      </ion-item>\n      <ion-item *ngIf="this.activities.coolDown">\n        <button ion-button (click)="addCoolDown()">Cool Down {{this.activities.coolDown}}<ion-icon class="trainingHeaders" name="close" (click)="activities.setCoolDown(null)"></ion-icon></button>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Notes</ion-label>\n        <ion-textarea class="openTextBox" [(ngModel)]="this.mainTraining.mainTrainingNotes.val"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-item class="tab" (click)="expand(\'post\')">\n      <ion-list-header>\n      <ion-col>\n        Post-Training\n      </ion-col>\n      <ion-col style="text-align: right; width: 100%;" col-8>\n        <ion-icon style="text-align: right" *ngIf="!this.postTrainingExpanded" class="drop" name="ios-arrow-forward"></ion-icon>\n        <ion-icon *ngIf="this.postTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n      </ion-col>\n      </ion-list-header>\n    </ion-item>\n    <div *ngIf="this.postTrainingExpanded">\n     <ion-list no-lines>\n      <ion-item>\n        <ion-label item-start>Rate Your Training</ion-label>\n        <ion-range  min="0" max="5" [snaps]="true" steps="1" [pin]="true" [(ngModel)]="postTraining.overallRating">\n          <ion-label range-left>0</ion-label>\n          <ion-label range-right>5</ion-label>\n        </ion-range>\n      </ion-item>\n       <ion-item no-lines>\n         <ion-label stacked>Overall Thoughts <ion-icon name="ios-expand"></ion-icon></ion-label>\n         <ion-textarea class="thoughts" [(ngModel)]="postTraining.postThoughts.val"></ion-textarea>\n       </ion-item>\n     </ion-list>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__["a" /* EntryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], CreateTrainingPage);
    return CreateTrainingPage;
}());

//# sourceMappingURL=create-training.js.map

/***/ }),

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Logins/create-account/create-account.module": [
		1019,
		4
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		1020,
		3
	],
	"../pages/Logins/login/login.module": [
		1021,
		2
	],
	"../pages/Logins/standard-login/standard-login.module": [
		1022,
		1
	],
	"../pages/Training/create-training/create-training.module": [
		1023,
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
webpackAsyncContext.id = 272;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings__ = __webpack_require__(153);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings__["a" /* SettingsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logins_login_login__ = __webpack_require__(125);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(374);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
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

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Logins_login_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_users__ = __webpack_require__(120);
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
                user.retrievedLoggedInUser(email).then(function (response) {
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-buttons>\n          <button ion-button style="font-size: 20px;" (click)="displayFullCalendar = !displayFullCalendar">\n              {{this.monthInView}}  {{this.calMenu.getDisplayedYear()}} &nbsp; <ion-icon *ngIf="!displayFullCalendar" name="md-arrow-dropdown"></ion-icon><ion-icon *ngIf="displayFullCalendar" name="md-arrow-dropup"></ion-icon>\n\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n    <ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplayTransition\'" #calendar (swipe)="swipe($event, calendar)"\n                  (onMonthSelect)="onMonthSelect($event)"\n                  (onDaySelect)="onDaySelect($event)"\n                  [events]="currentEvents" >\n    </ion-calendar>\n\n    <div id="calendarScroll" class="scroll" >\n        <ion-row nowrap>\n          <div *ngFor="let date of this.calMenu.dateArray" class="expandedDate" (click)="selectDate(date)">\n            <ion-item no-lines [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'expandedDate selected\' : \'expandedDate\'" id="{{date.date.toISOString().slice(0,10)}}">\n                <div class="hCalendarContent">\n                    <ion-row>\n                        <ion-col [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'">\n                            {{date.dayOfTheWeek}}\n                        </ion-col>\n                    </ion-row >\n                    <ion-row>\n                        <ion-col style="font-size: 14px !important;" [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'" color="primary">\n                            {{date.date.getDate()}}\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-item>\n          </div>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content padding [ngClass]="displayFullCalendar ? \'showingCalendarContent\' : \'\'">\n    <div>\n        <ion-row>\n            <ion-col>\n                <hr data-content="Planned" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.planned != null">\n            <h3 class="nothingPlanned">You have no planned trainings</h3>\n        </ion-row>\n\n    </div>\n    <div class="executed">\n        <ion-row>\n            <ion-col>\n                <hr data-content="Executed" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.executed != null">\n            <h3 class="nothingPlanned">You did not train today</h3>\n        </ion-row>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 429:
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

/***/ 430:
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryProvider = (function () {
    function EntryProvider(db, users) {
        this.db = db;
        this.users = users;
    }
    EntryProvider.prototype.createNewEntry = function (training) {
        this.db.database.ref("Users/" + this.users.loggedIn.User_Id + "/Calendar").push(training).then(function () {
            console.log("Success");
        });
    };
    EntryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersProvider */]])
    ], EntryProvider);
    return EntryProvider;
}());

//# sourceMappingURL=entries.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(601);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_credentials__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Logins_create_account_create_account__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_keyboard__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_users_users__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_tools_tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_users_authentication__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_tools_validations__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_menus_calendar_menu__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic3_calendar_en__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_google_plus__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_Training_create_training_create_training__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_users_entries__ = __webpack_require__(431);
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
                __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__["a" /* StandardLoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_Training_create_training_create_training__["a" /* CreateTrainingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/standard-login/standard-login.module#StandardLoginPageModule', name: 'StandardLoginPage', segment: 'standard-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Training/create-training/create-training.module#CreateTrainingPageModule', name: 'CreateTrainingPage', segment: 'create-training', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_28__pages_Logins_standard_login_standard_login__["a" /* StandardLoginPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_Training_create_training_create_training__["a" /* CreateTrainingPage */]
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
                __WEBPACK_IMPORTED_MODULE_29__providers_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_users_entries__["a" /* EntryProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Training_create_training_create_training__ = __webpack_require__(216);
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
    function TabsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.createNewTraining = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__Training_create_training_create_training__["a" /* CreateTrainingPage */]);
        profileModal.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/'<ion-fab class="circleTab">\n  <button ion-fab class="homeFab" (click)="createNewTraining()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-tabs tabsPlacement="bottom">\n  <ion-tab [root]="tab1Root" tabTitle="Calendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="ios-search"></ion-tab>\n  <ion-tab></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tools" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_validations__ = __webpack_require__(427);
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

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logging_activities_track_events__ = __webpack_require__(430);
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
    MenuEvents.prototype.updateObject = function (event, property) {
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

/***/ 989:
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

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
var Training = (function () {
    function Training() {
        this.type = "Training";
        this.preCalEvent = {
            survey: null,
            notes: null,
        };
        this.postCalEvent = {
            overallRating: null,
            notes: null,
        };
        this.mainCalEvent = {
            activities: null,
            notes: null
        };
    }
    //-----
    //Accessors
    //-----
    Training.prototype.getPreCalEvent = function () {
        return this.preCalEvent;
    };
    Training.prototype.getPostCalEvent = function () {
        return this.postCalEvent;
    };
    Training.prototype.getMainCalEvent = function () {
        return this.mainCalEvent;
    };
    //-----
    //Mutators
    //------
    Training.prototype.setPreCalEvent = function (qna, notes) {
        this.preCalEvent = {
            survey: qna,
            notes: notes
        };
    };
    Training.prototype.setPostCalEvent = function (overallRating, notes) {
        this.postCalEvent = {
            overallRating: overallRating,
            notes: notes
        };
    };
    Training.prototype.setMainCalEvent = function (activities, notes) {
        this.mainCalEvent = {
            activities: activities,
            notes: notes
        };
    };
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qna; });
var Qna = (function () {
    function Qna(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return Qna;
}());

//# sourceMappingURL=qna.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
var Activities = (function () {
    function Activities() {
        this.warmUp = null;
        this.coolDown = null;
        this.trackEvents = [];
    }
    Activities.prototype.getEvents = function () {
        return this.trackEvents;
    };
    Activities.prototype.getCoolDown = function () {
        return this.coolDown;
    };
    Activities.prototype.getWarmUp = function () {
        return this.warmUp;
    };
    Activities.prototype.setCoolDown = function (coolDown) {
        this.coolDown = coolDown;
    };
    Activities.prototype.setWarmUp = function (warmUp) {
        this.warmUp = warmUp;
    };
    Activities.prototype.addEvents = function (event) {
        this.trackEvents.push(event);
    };
    Activities.prototype.removeEvent = function (event) {
        this.trackEvents.splice(this.trackEvents.indexOf(event), 1);
    };
    Activities.prototype.setEvents = function (trackEvents) {
        this.trackEvents = trackEvents;
    };
    return Activities;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notes; });
var Notes = (function () {
    function Notes(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return Notes;
}());

//# sourceMappingURL=notes.js.map

/***/ })

},[596]);
//# sourceMappingURL=main.js.map