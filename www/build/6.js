webpackJsonp([6],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1018);
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
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_users__ = __webpack_require__(206);
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
                        console.log(response);
                    }
                }).catch(function (error) {
                    console.log("Auto login failed to find existing user in db");
                    _this.app.getRootNav().push('LoginPage');
                });
            }
        });
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
            this.dateSelected = data;
            var todayItem = document.getElementById(this.dateSelected.dateValue);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-buttons>\n          <button ion-button style="font-size: 20px;" (click)="displayFullCalendar = !displayFullCalendar">\n              {{this.monthInView}}  {{this.calMenu.getDisplayedYear()}} &nbsp; <ion-icon *ngIf="!displayFullCalendar" name="md-arrow-dropdown"></ion-icon><ion-icon *ngIf="displayFullCalendar" name="md-arrow-dropup"></ion-icon>\n\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n    <ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplayTransition\'" #calendar (swipe)="swipe($event, calendar)"\n                  (onMonthSelect)="onMonthSelect($event)"\n                  (onDaySelect)="onDaySelect($event)"\n                  [events]="currentEvents" >\n    </ion-calendar>\n\n    <div id="calendarScroll" class="scroll" >\n        <ion-row nowrap>\n          <div *ngFor="let date of this.calMenu.dateArray" class="expandedDate" (click)="selectDate(date)">\n            <ion-item no-lines [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'expandedDate selected\' : \'expandedDate\'" id="{{date.date.toISOString().slice(0,10)}}">\n                <div class="hCalendarContent">\n                    <ion-row>\n                        <ion-col [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'">\n                            {{date.dayOfTheWeek}}\n                        </ion-col>\n                    </ion-row >\n                    <ion-row>\n                        <ion-col style="font-size: 14px !important;" [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'" color="primary">\n                            {{date.date.getDate()}}\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-item>\n          </div>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content padding [ngClass]="displayFullCalendar ? \'showingCalendarContent\' : \'\'">\n    <div>\n        <ion-row>\n            <ion-col>\n                <hr data-content="Planned" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.planned != null">\n            <h3 class="nothingPlanned">You have no planned trainings</h3>\n        </ion-row>\n\n    </div>\n    <div class="executed">\n        <ion-row>\n            <ion-col>\n                <hr data-content="Executed" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.executed != null">\n            <h3 class="nothingPlanned">You did not train today</h3>\n        </ion-row>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map