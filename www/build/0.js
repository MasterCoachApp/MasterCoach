webpackJsonp([0],{

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_users__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_training_trainings_trainingProvider__ = __webpack_require__(327);
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
    function HomePage(navCtrl, app, storage, tools, modalCtrl, user, menu, platform, calMenu, viewCtrl, training) {
        //this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.storage = storage;
        this.tools = tools;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.menu = menu;
        this.platform = platform;
        this.calMenu = calMenu;
        this.viewCtrl = viewCtrl;
        this.training = training;
        this.today = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](new Date());
        this.dateInView = this.today.date;
        this.monthInView = this.today.month;
        this.datesThisMonth = [];
        this.listOfTrainings = [];
        this.storage.get('user-email').then(function (email) {
            if (email == null) {
                _this.app.getRootNav().push('LoginPage');
            }
            else {
                user.retrievedLoggedInUser(email).then(function (response) {
                    if (response == null) {
                        console.log("Auto login failed to find existing user in db");
                        _this.app.getRootNav().push('LoginPage');
                    }
                    else {
                        user.loggedIn = response;
                        _this.setCalendarEvents(null);
                    }
                }).catch(function (error) {
                    console.log("Auto login failed to find existing user in db");
                    _this.app.getRootNav().push('LoginPage');
                });
            }
        });
        this.activateMenu();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollTo(_this.today.dateValue);
        }, 0);
    };
    HomePage.prototype.activateMenu = function () {
        this.menu.enable(true, 'mainCalendarMenu');
    };
    HomePage.prototype.goToToday = function () {
        if (this.dateInView.getMonth() != (new Date).getMonth()) {
            this.datesThisMonth = this.calMenu.datesArray.currentMonth;
            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.currentMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.currentMonth;
            this.calMenu.setLastMonth(new Date());
            this.calMenu.setNextMonth(new Date());
            this.today = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](new Date());
            this.dateInView = new Date();
            this.monthInView = this.today.month;
            this.training.setEventsCurrentMonth();
            this.training.setEventsNextMonth();
            this.training.setEventsLastMonth();
            this.calMenu.displayedYear = this.dateInView.getFullYear();
            this.scrollTo(this.today.dateValue);
        }
        else {
            this.scrollTo(this.today.dateValue);
        }
    };
    HomePage.prototype.changMonth = function (sign) {
        if (sign == "plus") {
            var newDate = new Date(this.dateInView.getFullYear(), this.dateInView.getMonth() + 1, this.dateInView.getDate());
            this.calMenu.datesArray.datesLastMonth = this.calMenu.datesArray.datesThisMonth;
            this.calMenu.monthsArray.lastMonth = this.calMenu.monthsArray.thisMonth;
            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.datesNextMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.nextMonth;
            this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;
            this.monthInView = this.calMenu.monthsArray.thisMonth;
            this.dateInView = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
            this.calMenu.setDisplayYear(this.dateInView.getFullYear());
            //set next month values
            this.calMenu.setNextMonth(newDate);
            this.training.setEventsNextMonth();
            this.calMenu.displayedYear = this.dateInView.getFullYear();
            console.log(this.calMenu.displayedYear);
        }
        if (sign == "minus") {
            var newDate = new Date(this.dateInView.getFullYear(), this.dateInView.getMonth() - 1, this.dateInView.getDate());
            this.calMenu.datesArray.datesNextMonth = this.calMenu.datesArray.datesThisMonth;
            this.calMenu.monthsArray.nextMonth = this.calMenu.monthsArray.thisMonth;
            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.datesLastMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.lastMonth;
            this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;
            this.monthInView = this.calMenu.monthsArray.thisMonth;
            //set last month values
            this.dateInView = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
            this.calMenu.setDisplayYear(this.dateInView.getFullYear());
            this.calMenu.setLastMonth(newDate);
            this.training.setEventsLastMonth();
            this.calMenu.displayedYear = this.dateInView.getFullYear();
        }
        this.content.scrollToTop(0);
    };
    HomePage.prototype.createNewTraining = function (dateSelected) {
        var createTrainingModal = this.modalCtrl.create('CreateTrainingPage', { date: dateSelected });
        createTrainingModal.present();
    };
    HomePage.prototype.setCalendarEvents = function (event) {
        var _this = this;
        if (this.user.loggedIn != null) {
            var that_1 = this;
            var promise = new Promise(function (resolve, reject) {
                that_1.training.getUserTrainings(_this.user.loggedIn).then(function (response) {
                    console.log(response);
                    if (response != "Success") {
                        reject(response);
                    }
                    else {
                        resolve();
                    }
                });
            });
            promise.then(function () {
                _this.listOfTrainings = _this.training.listOfTrainings;
                _this.training.setEventsCurrentMonth();
                _this.calMenu.datesArray.currentMonth = _this.calMenu.datesArray.datesThisMonth;
                _this.datesThisMonth = _this.calMenu.datesArray.datesThisMonth;
                setTimeout(function () {
                    _this.scrollTo(_this.today.dateValue);
                }, 0);
                _this.training.setEventsLastMonth();
                _this.training.setEventsNextMonth();
                if (event != null) {
                    event.complete();
                }
            }).catch(function (error) {
                if (event != null) {
                    event.complete();
                }
                console.log(error);
                that_1.tools.presentToast("bottom", "There was an unexpected error retrieving your calendar information.");
            });
        }
    };
    HomePage.prototype.scrollTo = function (elementId) {
        var doc = document.getElementById(elementId);
        if (doc != null) {
            var yOffset = doc.offsetTop;
            this.content.scrollTo(0, yOffset, 0);
            document.getElementById("calendarList").scrollTo(0, yOffset);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/workspace/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title><button style="font-size: 20px; background: none" (click)="changMonth(\'minus\')"><ion-icon color="primary" name="md-arrow-dropleft"></ion-icon></button>  <button (click)="this.content.scrollToTop(200)" style="font-size: 16px; background: none; color: white;">{{monthInView}} {{dateInView.getFullYear()}}</button> <button style="font-size: 20px; background: none" (click)="changMonth(\'plus\')"><ion-icon color="primary" name="md-arrow-dropright"></ion-icon> </button>\n        </ion-title>\n        <ion-buttons end (click)="goToToday()">\n            <button ion-button>\n                <ion-icon item-left name="clock" class="menuIcon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="setCalendarEvents($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list no-lines no-border id="calendarList">\n        <ion-item-sliding #item no-border *ngFor="let date of datesThisMonth" id="{{date.dateValue}}">\n        <ion-item>\n            <ion-row>\n                <ion-col col-2 class="tableCol">\n                    <div left text-capitalize="none">\n                        <table>\n                            <tr [ngClass]="today.dateValue == date.dateValue ? \'selectedDate\' : \'date\'">\n                                <th>{{date.date.getDate()}}</th>\n                            </tr>\n                            <tr [ngClass]="today.dateValue == date.dateValue ? \'daySelected\' : \'day\'">\n                                <th>{{date.dayOfTheWeek}}</th>\n                            </tr>\n                        </table>\n                    </div>\n                </ion-col>\n                <ion-col col-10 class="tableCol">\n                    <div class="executed" *ngIf="date.content.length == 0">\n                        <ion-row>\n                            <ion-col>\n                                <hr data-content="" class="hr-text">\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <h3 class="nothingPlanned">You did not train today</h3>\n                        </ion-row>\n                    </div>\n                    <div class="executed">\n                        <div *ngFor="let event of date.content">\n                            <ion-card class="trainingCard">\n                                <ion-row>\n                                    <ion-col>\n                                        <ion-list-header class="header">{{event.type}}</ion-list-header>\n                                    </ion-col>\n                                    <ion-col style="text-align: right">\n                                        <ion-list-header class="header">{{event.time}}</ion-list-header>\n                                    </ion-col>\n                                </ion-row>\n                                <div *ngFor="let cat of event.categories" style="padding-bottom: 12px">\n                                    <span class="categoryHeader">{{cat}}</span>\n                                    <div *ngFor="let exercise of event.mainCalEvent.exercises">\n                                        <ion-note class="exerciseHeader" *ngIf="exercise.exerciseCategory.category.name == cat">\n                                            {{exercise.exerciseName}}\n                                        </ion-note>\n                                    </div>\n                                </div>\n                            </ion-card>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n            <ion-item-options side="right">\n                <button ion-button >Labels</button>\n                <button ion-button color="secondary">View</button>\n            </ion-item-options>\n            <ion-item-options side="left">\n                <button ion-button color="danger">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-fab class="circleTab" right bottom>\n        <button ion-fab class="homeFab">\n            <ion-icon name="add"></ion-icon>\n        </button>\n        <ion-fab-list side="top">\n            <button ion-fab class="noButton" (click)="createNewTraining(today)">\n                <ion-icon name="ios-bicycle"></ion-icon>\n                <div class="label">Training</div>\n            </button>\n            <button ion-fab class="noButton">\n                <ion-icon name="ios-trophy"></ion-icon>\n                <div class="label">Competition</div>\n            </button>\n            <button ion-fab class="noButton">\n                <ion-icon name="ios-medkit"></ion-icon>\n                <div class="label">Rehabilitation</div>\n            </button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-content>\n\n\n'/*ion-inline-end:"/workspace/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__["a" /* ToolsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_tools_tools__["a" /* ToolsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__["a" /* CalendarMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__["a" /* CalendarMenu */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */]) === "function" && _m || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map