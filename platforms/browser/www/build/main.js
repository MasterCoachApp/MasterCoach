webpackJsonp([3],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__ = __webpack_require__(75);
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
            selector: 'page-create-account',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/create-account/create-account.html"*/'<!--\n  Generated template for the CreateAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--facebook" (click)="createWithFacebook()">\n                Create with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--google">\n                Create with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <hr class="hr-text" data-content="OR">\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="First Name" class="createAccountInput" [(ngModel)]="firstName"></ion-input>\n    </ion-col>\n      <ion-col>\n          <ion-input placeholder="Last Name" class="createAccountInput" [(ngModel)]="lastName"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Email" class="createAccountInput" [(ngModel)]="email"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Password" type="password" class="createAccountInput" [(ngModel)]="password"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Re-enter Password" type="password" class="createAccountInput" [(ngModel)]="repassword"></ion-input>\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n        <ion-col style="text-align: center">\n            <button ion-button (click)="createAccount()">Create Account</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/create-account/create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_users_authentication__["a" /* AuthenticationProvider */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_account_create_account__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__ = __webpack_require__(154);
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
        this.hasFocus = false; //boolean to determine when email/password has focus
        platform.ready().then(function () {
            keyboard.disableScroll(true); //preventing keyboard induced overflow on a page that doesnt need it
        });
    }
    LoginPage.prototype.testFocus = function () {
        if (this.keyboard.onKeyboardHide()) {
            this.hasFocus = false;
        }
    };
    LoginPage.prototype.login = function () {
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
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        if (navigator.onLine) {
            var that_2 = this;
            var promise = new Promise(function (resolve, reject) {
                that_2.authProvider.advanceWithFacebook().then(function (response) {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n\n  <div [ngClass]="hasFocus ? \'hidden\' : \'logo\'">\n    <img src="./assets/imgs/olympics.png"/>\n  </div>\n    <div style="margin-top: 10px;" [ngClass]="hasFocus ? \'\' : \'noDisplay\'">\n        <span style="font-weight: bold; font-size: 24px;"> Log In</span>\n    </div>\n\n  <ion-row>\n    <ion-col>\n      <ion-input class="inputBox" [(ngModel)]="email" placeholder="Email" (ionFocus)="hasFocus = true"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input class="inputBox" [(ngModel)]="password" placeholder="Password" type="password" (ionFocus)="hasFocus = true"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n        <button class="loginButton" ion-button (click)="login()">Log In</button>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n        <ion-col class="loginButtonColumn">\n            <button ion-button (click)="forgotPassword()" [ngClass]="hasFocus ? \'loginButton\' : \'noDisplay\'" (ionFocus)="hasFocus = true">Reset Password</button>\n        </ion-col>\n    </ion-row>\n\n\n            <div [ngClass]="hasFocus ? \'tapCatcher\' : \'noDisplay\'" (click)="hasFocus = false"></div>\n\n  <ion-row>\n    <ion-col>\n        <hr data-content="OR" [ngClass]="hasFocus ? \'noDisplay\' : \'hr-text\'">\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--facebook\'" (click)="loginWithFacebook()">\n                Log In with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--google\'">\n                Log In with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <button  [ngClass]="hasFocus ? \'noDisplay\' : \'create\'" (click)="createAccount()">\n      Create Account\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Logins/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_users_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_authentication__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(40);
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

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Logins/create-account/create-account.module": [
		521,
		2
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		522,
		1
	],
	"../pages/Logins/login/login.module": [
		523,
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logins_login_login__ = __webpack_require__(153);
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
    function ContactPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    ContactPage.prototype.signOut = function () {
        //not yet definable
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__Logins_login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Personal Profile</ion-list-header>\n    <ion-item>\n      <button ion-button style="background: none" (click)="signOut()">\n      <ion-icon name="ionic" item-start></ion-icon>\n        Sign out\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_day__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(278);
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
    function HomePage(datePicker, navCtrl, menu, platform) {
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.date = new Date();
        //I suspect hard-coding UTC time will cause problems for other time-zones
        //Without specifying it was putting the wrong date (+4:00)
        this.dateSelected = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_day__["a" /* CalendarDay */](new Date(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate(), this.date.getUTCHours(), this.date.getUTCMinutes(), this.date.getUTCSeconds()));
        this.monthInView = this.dateSelected.month;
        this.activateMenu();
        this.drawCalendar();
    }
    HomePage.prototype.activateMenu = function () {
        this.activeMenu = 'mainCalendarMenu';
        this.menu.enable(true, 'mainCalendarMenu');
        this.menu.enable(false, 'filtersCalendarMenu');
    };
    HomePage.prototype.drawCalendar = function () {
        var currentYear = (new Date()).getFullYear();
        this.dateArray = this.getDates(new Date(currentYear.toString() + '-01-01'), new Date(currentYear.toString() + '-12-31'));
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var todayItem = document.getElementById(_this.dateSelected.dateValue);
            var scroll = document.getElementById("calendarScroll");
            if (todayItem != null && scroll != null) {
                scroll.scrollLeft = (todayItem.offsetLeft - _this.platform.width() + todayItem.clientWidth + 3); //+3 to get the border of the element int he view
            }
            scroll.onscroll = function () {
                _this.determineViewedMonth();
            };
        });
    };
    // Returns an array of dates between the two dates
    HomePage.prototype.getDates = function (startDate, endDate) {
        var dates = [], currentDate = startDate, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            var day = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_day__["a" /* CalendarDay */](currentDate);
            dates.push(day);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    ;
    HomePage.prototype.selectDate = function (date) {
        this.dateSelected = date;
        this.monthInView = date.month;
    };
    HomePage.prototype.showFullCalendar = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title> {{this.monthInView}} {{this.dateSelected.date.getFullYear()}}</ion-title>\n      <ion-buttons end>\n          <button ion-button style="font-size: 14px;" (click)="showFullCalendar()">\n              Calendar\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <!--<ion-scroll #scroll id="scrollView" scrollX="true" scrollY="false" style="width:100%; height: 100px; background: #0F0F11"> -->\n\n    <div class="scroll" id="calendarScroll">\n        <ion-row nowrap>\n          <div *ngFor="let date of dateArray" class="expandedDate" (click)="selectDate(date)">\n            <ion-item no-lines [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'expandedDate selected\' : \'expandedDate\'" id="{{date.date.toISOString().slice(0,10)}}">\n                <div>\n                    <ion-row>\n                        <ion-col [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'" >\n                            {{date.dayOfTheWeek}}\n                        </ion-col>\n                    </ion-row >\n                    <ion-row>\n                        <ion-col style="font-size: 14px !important;" [ngClass]="date.dateValue == this.dateSelected.dateValue ? \'selectedTitle\' : \'dayValue\'" >\n                            {{date.date.getDate()}}\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-item>\n          </div>\n        </ion-row>\n    </div>\n  <!--</ion-scroll>-->\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-row>\n            <ion-col>\n                <hr data-content="Planned" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.planned != null">\n            <h3 class="nothingPlanned">You have no planned trainings</h3>\n        </ion-row>\n\n    </div>\n    <div class="executed">\n        <ion-row>\n            <ion-col>\n                <hr data-content="Executed" class="hr-text">\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.dateSelected.content.executed != null">\n            <h3 class="nothingPlanned">You did not train today</h3>\n        </ion-row>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_events__ = __webpack_require__(513);
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
        this.menuEvents = new __WEBPACK_IMPORTED_MODULE_3__models_calendar_events__["a" /* CalendarEvents */]();
    }
    CalendarMenu.prototype.setDisplayYear = function (year) {
        this.displayedYear = year;
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
    CalendarMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CalendarMenu);
    return CalendarMenu;
}());

//# sourceMappingURL=calendar-menu.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_credentials__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Logins_create_account_create_account__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_keyboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_users_users__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_tools_tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_users_authentication__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_tools_validations__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_menus_calendar_menu__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__ = __webpack_require__(278);
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
                __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */]
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
                __WEBPACK_IMPORTED_MODULE_22__pages_Logins_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
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
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
    function ToolsProvider(toastCtrl, loadCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
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
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 494:
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
    }
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
    return CalendarDay;
}());

//# sourceMappingURL=calendar-day.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_tabs_tabs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__ = __webpack_require__(320);
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
    function MyApp(platform, statusBar, splashScreen, keyboard, calendarMenu) {
        var _this = this;
        this.calendarMenu = calendarMenu;
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
            },
        };
        platform.ready().then(function () {
            //Menu settings
            _this.setBaseMenuSettings();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            keyboard.hideKeyboardAccessoryBar(false);
            statusBar.styleDefault();
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
    };
    MyApp.prototype.editEventsModel = function (event) {
        var eventObject = this.events.updateObeject(event, "filtered");
        this.calendarMenu.menuEvents = this.events;
    };
    MyApp.prototype.getEventFilterModel = function (event) {
        return this.events.getFilterFromEvent(event);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-item>\n                <ion-select [(ngModel)]="displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n            <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                <ion-icon item-left name="arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n                <ion-icon item-left name="arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n                Filters\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-list-header (click)="collapsable.filter.eventFilterOpen = !collapsable.filter.eventFilterOpen">\n                    Event\n                    <ion-icon item-left name="arrow-forward" *ngIf="!collapsable.filter.eventFilterOpen"></ion-icon>\n                    <ion-icon item-left name="arrow-down" *ngIf="collapsable.filter.eventFilterOpen"></ion-icon>\n                </ion-list-header>\n\n                <div *ngIf="collapsable.filter.eventFilterOpen">\n                    <ion-item *ngFor="let event of listOfEvents">\n                        <ion-label> {{event}}</ion-label>\n                        <ion-checkbox (click)="editEventsModel(event)"  [checked]="getEventFilterModel(event)"></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-list-header (click)="collapsable.filter.trainingResultFilterOpen = !collapsable.filter.trainingResultFilterOpen">\n                    Training Result\n                    <ion-icon item-left name="arrow-forward" *ngIf="!collapsable.filter.trainingResultFilterOpen"></ion-icon>\n                    <ion-icon item-left name="arrow-down" *ngIf="collapsable.filter.trainingResultFilterOpen"></ion-icon>\n                </ion-list-header>\n\n                <div *ngIf="collapsable.filter.trainingResultFilterOpen">\n                    <ion-item>\n                        <ion-label>Good</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Neutral</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Bad</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <ion-list-header (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                    <ion-icon item-left name="arrow-forward" *ngIf="!collapsable.filter.athleteFilterOpen"></ion-icon>\n                    <ion-icon item-left name="arrow-down" *ngIf="collapsable.filter.athleteFilterOpen"></ion-icon>\n                </ion-list-header>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n\n    </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__providers_menus_calendar_menu__["a" /* CalendarMenu */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(514);
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

var CalendarEvents = (function (_super) {
    __extends(CalendarEvents, _super);
    function CalendarEvents() {
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
    CalendarEvents.prototype.getFilterFromEvent = function (event) {
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
    CalendarEvents.prototype.updateObeject = function (event, property) {
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
    return CalendarEvents;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* Events */]));

//# sourceMappingURL=calendar-events.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
var Events = (function () {
    function Events() {
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
    Events.prototype.getListOfEvents = function () {
        return this.listOfEvents;
    };
    ;
    return Events;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 519:
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function UsersProvider() {
    }
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(277);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/'<ion-tabs style="color: black">\n  <ion-tab [root]="tab1Root"  tabTitle="Calendar" tabIcon="calendar" color="dark"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Add" tabIcon="clipboard"></ion-tab>\n  <ion-tab [root]="tab2Root"  tabTitle="Tools" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_tools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_validations__ = __webpack_require__(276);
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
    function AuthenticationProvider(dbAuth, db, facebook, tools, alertCtrl, validation) {
        this.dbAuth = dbAuth;
        this.db = db;
        this.facebook = facebook;
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
        console.log(email, firstName, lastName, userId);
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
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__tools_validations__["a" /* ValidationProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ })

},[321]);
//# sourceMappingURL=main.js.map