webpackJsonp([4],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLoginPageModule", function() { return StandardLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standard_login__ = __webpack_require__(668);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StandardLoginPageModule = (function () {
    function StandardLoginPageModule() {
    }
    StandardLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__standard_login__["a" /* StandardLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__standard_login__["a" /* StandardLoginPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__standard_login__["a" /* StandardLoginPage */],
            ]
        })
    ], StandardLoginPageModule);
    return StandardLoginPageModule;
}());

//# sourceMappingURL=standard-login.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(151);
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
    function StandardLoginPage(navCtrl, menu, navParams, authProvider, tools, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.tools = tools;
        this.storage = storage;
        menu.enable(false, 'mainCalendarMenu');
    }
    StandardLoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push('ForgotPasswordPage');
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
                        reject(error);
                    });
                });
                promise.then(function () {
                    loading_1.dismiss();
                    _this.storage.set('user-email', _this.email);
                    _this.navCtrl.push('TabsPage'); //allow entry if successful login
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-standard-login',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/standard-login/standard-login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Log In\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <!--<div style="margin-top: 10px; text-align: center; margin-bottom: 10px">-->\n    <!--<span style="font-weight: bold; font-size: 24px;"> Log In</span>-->\n  <!--</div>-->\n\n  <ion-list no-lines>\n\n    <ion-item no-lines>\n      <ion-label class="icon"><ion-icon name="md-person"></ion-icon></ion-label>\n      <ion-input class="inputBox" [(ngModel)]="email" (keyup.enter)="login()"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label class="icon"><ion-icon name="md-lock"></ion-icon></ion-label>\n      <ion-input class="inputBox" [(ngModel)]="password" type="password" (keyup.enter)="login()"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n      <button class="loginButton" ion-button (click)="login()">Sign In</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n      <button ion-button class="loginButton" (click)="forgotPassword()">Reset Password</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/standard-login/standard-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], StandardLoginPage);
    return StandardLoginPage;
}());

//# sourceMappingURL=standard-login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map