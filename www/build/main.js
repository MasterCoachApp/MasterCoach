webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tools = (function () {
    function Tools(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    Tools.prototype.presentToast = function (position, message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    };
    Tools = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], Tools);
    return Tools;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(dbAuth, db) {
        this.dbAuth = dbAuth;
        this.db = db;
    }
    UserService.prototype.authenticateUser = function (email, password) {
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
    UserService.prototype.createAccountAuthentication = function (email, password, firstName, lastName) {
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
    UserService.prototype.createAccountDatabase = function (email, firstName, lastName, userId) {
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            var newUser = {
                "Email": email,
                "Last_name": lastName,
                "First_name": firstName,
                "UserId": userId
            };
            var ref = that.db.database.ref("Users").push(newUser).then(function (response) {
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
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tools__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users__ = __webpack_require__(106);
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
    function CreateAccountPage(navCtrl, navParams, authdb, facebook, tools, users) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authdb = authdb;
        this.facebook = facebook;
        this.tools = tools;
        this.users = users;
    }
    CreateAccountPage.prototype.createAccount = function () {
        var _this = this;
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
            that.users.createAccountAuthentication(that.email, that.password, that.firstName, that.lastName).then(function (response) {
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
            _this.navCtrl.pop();
        }).catch(function (error) {
            if (error == "auth/invalid-email")
                _this.tools.presentToast("bottom", 'Sorry, that email is invalid');
            if (error == "auth/email-already-in-use")
                _this.tools.presentToast("bottom", "Sorry, looks like that email is already registered");
            if (error == "auth/operation-not-allowed")
                _this.tools.presentToast("bottom", "Sorry, that action cannot be performed at this time");
            if (error == "auth/weak-password")
                _this.tools.presentToast("bottom", "Sorry, that password is too weak. Make sure it contains at least six characters");
            return;
        });
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-account',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/Logins/create-account/create-account.html"*/'<!--\n  Generated template for the CreateAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #222222">\n\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--facebook">\n                Create with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button class="loginBtn loginBtn--google">\n                Create with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n            <hr class="hr-text" data-content="OR">\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="First Name" class="createAccountInput" [(ngModel)]="firstName"></ion-input>\n    </ion-col>\n      <ion-col>\n          <ion-input placeholder="Last Name" class="createAccountInput" [(ngModel)]="lastName"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Email" class="createAccountInput" [(ngModel)]="email"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Password" type="password" class="createAccountInput" [(ngModel)]="password"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder="Re-enter Password" type="password" class="createAccountInput" [(ngModel)]="repassword"></ion-input>\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n        <ion-col style="text-align: center">\n            <button ion-button (click)="createAccount()">Create Account</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/Logins/create-account/create-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__services_tools__["a" /* Tools */],
            __WEBPACK_IMPORTED_MODULE_5__services_users__["a" /* UserService */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tools__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HomeTabs_tabs_tabs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_account_create_account__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(115);
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
    function LoginPage(navCtrl, navParams, users, tools, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.users = users;
        this.tools = tools;
        this.keyboard = keyboard;
        this.hasFocus = false;
        keyboard.disableScroll(true);
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.email == null || this.email == "" || this.password == null || this.password == "") {
            this.tools.presentToast("bottom", "Please enter an email and password.");
            return;
        }
        if (navigator.onLine) {
            var that_1 = this;
            var promise = new Promise(function (resolve, reject) {
                that_1.users.authenticateUser(that_1.email, that_1.password).then(function (response) {
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__HomeTabs_tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                if (error == "auth/invalid-email")
                    _this.tools.presentToast("bottom", 'Sorry, we don\'t know that email...yet! U+1F61C');
                if (error == "auth/user-disabled")
                    _this.tools.presentToast("bottom", "Sorry, looks like your account has been disabled U+1F613");
                if (error == "auth/user-not-found")
                    _this.tools.presentToast("bottom", "Sorry, user not found!");
                if (error == "auth/wrong-password")
                    _this.tools.presentToast("bottom", "Sorry, that password is incorrect!");
            });
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/Logins/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding style="background-color: #222222">\n\n  <div [ngClass]="hasFocus ? \'hidden\' : \'logo\'">\n    <img src="./assets/imgs/olympics.png"/>\n  </div>\n    <div style="margin-top: 10px;" [ngClass]="hasFocus ? \'\' : \'noDisplay\'">\n        <span style="font-weight: bold; font-size: 24px; color: white"> Log In</span>\n    </div>\n\n  <ion-row>\n    <ion-col>\n      <ion-input class="inputBox" [(ngModel)]="email" placeholder="Email" (focus)="hasFocus = true" (blur)="hasFocus = false"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input class="inputBox" [(ngModel)]="password" placeholder="Password" type="password" (focus)="hasFocus = true" (blur)="hasFocus = false"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="loginButtonColumn">\n        <button class="loginButton" ion-button (click)="login()">Log In</button>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n        <ion-col class="loginButtonColumn">\n            <button ion-button (click)="forgotPassword()" [ngClass]="hasFocus ? \'loginButton\' : \'noDisplay\'">Reset Password</button>\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n        <hr data-content="OR" [ngClass]="hasFocus ? \'noDisplay\' : \'hr-text\'">\n    </ion-col>\n  </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--facebook\'">\n                Log In with Facebook\n            </button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button [ngClass]="hasFocus ? \'noDisplay\' : \'loginBtn loginBtn--google\'">\n                Log In with Google\n            </button>\n        </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <button  [ngClass]="hasFocus ? \'noDisplay\' : \'create\'" (click)="createAccount()">\n      Create an account\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/Logins/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_users__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_tools__["a" /* Tools */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Logins/create-account/create-account.module": [
		451,
		1
	],
	"../pages/Logins/login/login.module": [
		452,
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
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(247);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/pages/HomeTabs/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_credentials__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_tools__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Logins_create_account_create_account__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__ = __webpack_require__(115);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_Logins_create_account_create_account__["a" /* CreateAccountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_HomeTabs_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_HomeTabs_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_HomeTabs_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_HomeTabs_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Logins_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Logins_create_account_create_account__["a" /* CreateAccountPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_users__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__services_tools__["a" /* Tools */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__["a" /* Keyboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Logins_login_login__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(115);
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
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Logins_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            keyboard.hideKeyboardAccessoryBar(false);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/CoachingApp/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
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

/***/ })

},[289]);
//# sourceMappingURL=main.js.map