webpackJsonp([10],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users_user__ = __webpack_require__(587);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_menu_events__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_survey_components_labels_labelProvider__ = __webpack_require__(89);
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
    function CalendarMenu(tools, labels) {
        this.tools = tools;
        this.labels = labels;
        this.datesArray = {
            datesThisMonth: [],
            datesLastMonth: [],
            datesNextMonth: [],
            currentMonth: []
        };
        this.monthsArray = {
            thisMonth: "",
            lastMonth: "",
            nextMonth: "",
            currentMonth: ""
        };
        this.displayedYear = (new Date()).getFullYear();
        this.menuEvents = new __WEBPACK_IMPORTED_MODULE_3__models_calendar_menu_events__["a" /* MenuEvents */](labels.listOfLabels);
        this.setThisMonth(new Date());
        this.setLastMonth(new Date());
        this.setNextMonth(new Date());
        this.datesArray.currentMonth = this.datesArray.datesThisMonth;
        this.monthsArray.currentMonth = this.monthsArray.thisMonth;
        // console.log(this.monthsArray.lastMonth);
        // console.log(this.monthsArray.thisMonth);
        // console.log(this.monthsArray.nextMonth);
        //
        // console.log(this.datesArray.datesLastMonth);
        // console.log(this.datesArray.datesThisMonth);
        // console.log(this.datesArray.datesNextMonth);
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
    CalendarMenu.prototype.setNextMonth = function (date) {
        date.setMonth(date.getMonth() + 1);
        this.monthsArray.nextMonth = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date).month;
        var month = date.getMonth();
        this.datesArray.datesNextMonth = this.getDatesInMonth(month, date.getFullYear());
    };
    CalendarMenu.prototype.setThisMonth = function (date) {
        var calDay = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date);
        this.displayedMonth = calDay.month;
        this.monthsArray.thisMonth = calDay.month;
        var month = date.getMonth();
        this.datesArray.datesThisMonth = this.getDatesInMonth(month, date.getFullYear());
    };
    CalendarMenu.prototype.setLastMonth = function (date) {
        date.setMonth(date.getMonth() - 1);
        this.monthsArray.lastMonth = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date).month;
        var month = date.getMonth();
        this.datesArray.datesLastMonth = this.getDatesInMonth(month, date.getFullYear());
    };
    CalendarMenu.prototype.getDatesInMonth = function (month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](new Date(date)));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };
    CalendarMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__custom_survey_components_labels_labelProvider__["a" /* LabelProvider */]])
    ], CalendarMenu);
    return CalendarMenu;
}());

//# sourceMappingURL=calendar-menu.js.map

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
	"../pages/HomeTabs/about/about.module": [
		657,
		8
	],
	"../pages/HomeTabs/contact/contact.module": [
		658,
		7
	],
	"../pages/HomeTabs/home/home.module": [
		659,
		0
	],
	"../pages/HomeTabs/tabs/tabs.module": [
		660,
		6
	],
	"../pages/Logins/create-account/create-account.module": [
		661,
		2
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		662,
		5
	],
	"../pages/Logins/login/login.module": [
		663,
		1
	],
	"../pages/Logins/standard-login/standard-login.module": [
		664,
		4
	],
	"../pages/Training/create-training/create-training.module": [
		665,
		3
	],
	"../pages/Training/text-popover/text-popover.module": [
		666,
		9
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
var Label = (function () {
    function Label(name) {
        this.label = {
            value: name
        };
    }
    return Label;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_set__ = __webpack_require__(262);

var ExerciseTable = (function () {
    //public notes: string;
    //public pinnedNotes: string;
    //public showNotes: boolean;
    // public columnMap: ExerciseTableColumn;
    // public table: {};
    // getTable(): {} {
    // return this.table;
    // };
    function ExerciseTable() {
        this.labels = [];
        this.exerciseName = null;
        this.sets = [new __WEBPACK_IMPORTED_MODULE_0__exercise_set__["a" /* ExerciseSet */](1)];
        this.category = "";
        this.array = [];
        // this.tableType = null;
        // this.tableHeaders = ['#', 'Detail', 'Measure', 'Reps']; // hard coded for now
        // this.notes = null;
        // this.pinnedNotes = null;
        // this.showNotes = false;
        // this.table = this.makeTable();
    }
    ExerciseTable.prototype.makeTable = function () {
        var table = {
            labels: this.labels,
            //tableType: this.tableType,
            exerciseName: this.exerciseName,
            sets: this.sets,
        };
        return table;
    };
    ExerciseTable.prototype.addLabels = function (labelsToAdd) {
        var _this = this;
        labelsToAdd.forEach(function (data) {
            return _this.labels.push(data);
        });
        console.log(this);
    };
    ExerciseTable.prototype.removeLabel = function (label) {
        this.labels.splice(this.labels.indexOf(label), 1);
    };
    // setTableHeaders(tableType: ExerciseTableTypes) {
    //
    // }
    ExerciseTable.prototype.setName = function (exerciseName) {
        this.exerciseName = exerciseName;
        console.log(this);
        // add first set here
    };
    ExerciseTable.prototype.addSet = function () {
        var lastSetNumber = this.sets[this.sets.length - 1]['setNumber'];
        this.sets.push(new __WEBPACK_IMPORTED_MODULE_0__exercise_set__["a" /* ExerciseSet */](lastSetNumber + 1));
    };
    ExerciseTable.prototype.deleteSet = function (set) {
        this.sets.splice(this.sets.indexOf(set), 1);
    };
    ExerciseTable.prototype.toggleComplete = function (set) {
        this.sets[this.sets.indexOf(set)].complete = !this.sets[this.sets.indexOf(set)].complete;
    };
    ExerciseTable.prototype.showNotesTooltip = function () {
        // this.showNotes = !this.showNotes;
    };
    return ExerciseTable;
}());

//# sourceMappingURL=exercise-table.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseSet; });
var ExerciseSet = (function () {
    function ExerciseSet(setNumber) {
        this.setNumber = setNumber; // this would need to be done in create training by looking at the current set # and incrementing
        this.detail = null;
        this.measure = null; // this could look at the last
        this.reps = null; // this could look at the last rep number from when the exercise was last done
        this.complete = false;
    }
    ExerciseSet.prototype.getSetInfo = function () {
        return {
            setNum: this.setNumber,
            detail: this.detail,
            measure: this.measure,
            reps: this.reps,
            isComplete: this.complete
        };
    };
    ExerciseSet.prototype.getSet = function () {
    };
    return ExerciseSet;
}());

//# sourceMappingURL=exercise-set.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ValidationProvider);
    return ValidationProvider;
}());

//# sourceMappingURL=validations.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_validations__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(152);
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
                                    resolve(apiResponse.email);
                                }).catch(function (error) {
                                    reject(null);
                                });
                            });
                        }
                        else {
                            that.signInWithFacebookCredentials(facebookCredential_1, apiResponse["email"], apiResponse["first_name"], apiResponse["last_name"]).then(function (response) {
                                resolve(apiResponse['email']);
                            }).catch(function (error) {
                                reject(null);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__tools_validations__["a" /* ValidationProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_trainings_pre_training__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_custom_survey_components_trainings_post_training__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_logging_training__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logging_activities_warm_up__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_cool_down__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_exercise_table__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_activities_exercise_set__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_custom_survey_components_labels_label__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TrainingProvider = (function () {
    function TrainingProvider(db) {
        this.db = db;
        this.preTraining = new __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_trainings_pre_training__["a" /* PreTraining */]();
        this.postTraining = new __WEBPACK_IMPORTED_MODULE_2__models_custom_survey_components_trainings_post_training__["a" /* PostTraining */]();
        this.getCustomPostTraining();
        this.getCustomPreTraining();
        this.listOfTrainings = [];
    }
    TrainingProvider.prototype.getCustomPostTraining = function () {
    };
    TrainingProvider.prototype.getCustomPreTraining = function () {
    };
    /*
    I have yet to decide if its worth continuously observing
     */
    TrainingProvider.prototype.getUserTrainings = function (user) {
        var listOfTrainings = [];
        var that = this;
        var userPromise = new Promise(function (resolve, reject) {
            var idRef = that.db.database.ref("Users/" + user.User_Id + "/Calendar");
            idRef.on('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    var training = new __WEBPACK_IMPORTED_MODULE_4__models_logging_training__["a" /* Training */]();
                    var post = snap.child("postCalEvent");
                    var pre = snap.child("preCalEvent");
                    var main = snap.child("mainCalEvent");
                    training.type = snap.child("type").val();
                    training.date = snap.child("trainingDate").val();
                    training.time = snap.child("trainingTime").val();
                    post.child("notes").forEach(function (note) {
                        training.addPostNote(note.key, note.val());
                        return false;
                    });
                    post.child("range").forEach(function (value) {
                        training.addPostRange(value.key, value.val());
                        return false;
                    });
                    pre.child("notes").forEach(function (note) {
                        training.addPreNote(note.key, note.val());
                        return false;
                    });
                    pre.child("range").forEach(function (value) {
                        training.addPreRange(value.key, value.val());
                        return false;
                    });
                    main.child("notes").forEach(function (note) {
                        training.addMainCalNote(note.key, note.val());
                        return false;
                    });
                    var activity = new __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__["a" /* Activities */]();
                    activity.warmUp = new __WEBPACK_IMPORTED_MODULE_6__models_logging_activities_warm_up__["a" /* WarmUp */](main.child("activities").child("warmup").val());
                    activity.coolDown = new __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_cool_down__["a" /* CoolDown */](main.child("activities").child("cooldown").val());
                    var exercises = {};
                    main.child("activities").child("exercises").forEach(function (event) {
                        exercises[event.key] = new __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_exercise_table__["a" /* ExerciseTable */]();
                        exercises[event.key].tableSet = new __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__["a" /* Activities */]();
                        event.forEach(function (exercise) {
                            exercises[event.key].tableSet.exercises[exercise.key] = new __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_exercise_table__["a" /* ExerciseTable */]();
                            exercises[event.key].tableSet.exercises[exercise.key].category = exercise.child("category").val();
                            exercises[event.key].tableSet.exercises[exercise.key].exerciseName = exercise.key;
                            exercises[event.key].tableSet.exercises[exercise.key].sets = [];
                            exercise.forEach(function (set) {
                                if (set.key != "labels" && set.key != "category") {
                                    var newSet = new __WEBPACK_IMPORTED_MODULE_9__models_logging_activities_exercise_set__["a" /* ExerciseSet */](set.child("setNumber").val());
                                    newSet.detail = set.child("detail").val();
                                    newSet.complete = set.child("complete").val();
                                    newSet.measure = set.child("measure").val();
                                    newSet.reps = set.child("reps").val();
                                    newSet.setNumber = set.child("setNumber").val();
                                    exercises[event.key].tableSet.exercises[exercise.key].sets.push(newSet);
                                }
                                else if (set.key == "labels") {
                                    set.forEach(function (label) {
                                        exercises[event.key].tableSet.exercises[exercise.key].labels.push(new __WEBPACK_IMPORTED_MODULE_10__models_custom_survey_components_labels_label__["a" /* Label */](label.val()));
                                        return false;
                                    });
                                }
                                return false;
                            });
                            return false;
                        });
                        return false;
                    });
                    activity.exercises = exercises;
                    training.mainCalEvent.activities = activity;
                    listOfTrainings.push(training);
                    return false;
                });
                that.listOfTrainings = listOfTrainings;
                resolve('Success');
            });
        });
        return userPromise.then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
            return error;
        });
    };
    TrainingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TrainingProvider);
    return TrainingProvider;
}());

//# sourceMappingURL=trainingProvider.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPopoverPage; });
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


/**
 * Generated class for the TextPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TextPopoverPage = (function () {
    function TextPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TextPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TextPopoverPage');
    };
    TextPopoverPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    TextPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-text-popover',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/text-popover/text-popover.html"*/'<!--\n  Generated template for the TextPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-textarea class="popoverText"></ion-textarea>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/text-popover/text-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TextPopoverPage);
    return TextPopoverPage;
}());

//# sourceMappingURL=text-popover.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDay; });
var CalendarDay = (function () {
    function CalendarDay(date) {
        this.date = date;
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
        var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        newDate.setMonth(newDate.getMonth() + 1);
        newDate.setDate(0);
        this.lastDay = String(newDate.getDate());
        switch (date.getMonth()) {
            case 0:
                return "January";
            case 1:
                this.lastDay = "28";
                return "February";
            case 2:
                this.lastDay = "31";
                return "March";
            case 3:
                this.lastDay = "30";
                return "April";
            case 4:
                this.lastDay = "31";
                return "May";
            case 5:
                this.lastDay = "30";
                return "June";
            case 6:
                this.lastDay = "30";
                return "July";
            case 7:
                this.lastDay = "31";
                return "August";
            case 8:
                this.lastDay = "30";
                return "September";
            case 9:
                this.lastDay = "31";
                return "October";
            case 10:
                this.lastDay = "30";
                return "November";
            case 11:
                this.lastDay = "31";
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
var Training = (function () {
    function Training() {
        this.date = new Date().toISOString().slice(0, 10);
        this.categoryList = [];
        this.preCalEvent = {
            range: {},
            notes: {},
        };
        this.postCalEvent = {
            range: {},
            notes: {},
        };
        this.mainCalEvent = {
            activities: null,
            notes: {},
        };
    }
    Training.prototype.addPreNote = function (k, v) {
        this.preCalEvent.notes[k] = v;
    };
    Training.prototype.addPostNote = function (k, v) {
        this.postCalEvent.notes[k] = v;
    };
    Training.prototype.addPreRange = function (k, v) {
        this.preCalEvent.range[k] = v;
    };
    Training.prototype.addPostRange = function (k, v) {
        this.postCalEvent.range[k] = v;
    };
    Training.prototype.addMainCalActivity = function (activities) {
        this.mainCalEvent.activities = activities;
    };
    Training.prototype.addMainCalNote = function (k, v) {
        this.mainCalEvent.notes[k] = v;
    };
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_table__ = __webpack_require__(261);

var Activities = (function () {
    function Activities() {
        this.warmUp = null;
        this.coolDown = null;
        this.exercises = {};
    }
    // addExercise()
    Activities.prototype.getEvents = function () {
        // return this.trackEvents;
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
    Activities.prototype.removeEvent = function (event) {
        //this.trackEvents.splice(this.trackEvents.indexOf(event),1);
    };
    Activities.prototype.setEvents = function (trackEvents) {
        // this.trackEvents = trackEvents;
    };
    Activities.prototype.addExercises = function (exercises) {
        var _this = this;
        exercises.forEach(function (data) {
            var newExercise = new __WEBPACK_IMPORTED_MODULE_0__exercise_table__["a" /* ExerciseTable */]();
            newExercise.setName(data);
            _this.exercises[newExercise.exerciseName] = newExercise;
            console.log('Exercises :', exercises);
        });
    };
    Activities.prototype.removeExercise = function (exerciseToDelete) {
        //this.exercises.splice(this.exercises.indexOf(exerciseToDelete),1)
    };
    return Activities;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(153);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__users__["a" /* UsersProvider */]])
    ], EntryProvider);
    return EntryProvider;
}());

//# sourceMappingURL=entries.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(470);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_users_users__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tools_tools__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_users_authentication__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_tools_validations__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_menus_calendar_menu__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_users_entries__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Training_text_popover_text_popover__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_custom_survey_components_labels_labelProvider__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_custom_survey_components_trainings_trainingProvider__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic3_calendar_en__ = __webpack_require__(651);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Training_text_popover_text_popover__["a" /* TextPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/HomeTabs/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/standard-login/standard-login.module#StandardLoginPageModule', name: 'StandardLoginPage', segment: 'standard-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Training/create-training/create-training.module#CreateTrainingPageModule', name: 'CreateTrainingPage', segment: 'create-training', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Training/text-popover/text-popover.module#TextPopoverPageModule', name: 'TextPopoverPage', segment: 'text-popover', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic3_calendar_en__["a" /* CalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Training_text_popover_text_popover__["a" /* TextPopoverPage */]
                // AboutPage,
                // ContactPage,
                // HomePage,
                // TabsPage,
                // LoginPage,
                // CreateAccountPage,
                // ForgotPasswordPage,
                // StandardLoginPage,
                // CreateTrainingPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_13__providers_users_users__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_tools_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_users_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_tools_validations__["a" /* ValidationProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_menus_calendar_menu__["a" /* CalendarMenu */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_20__providers_users_entries__["a" /* EntryProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_custom_survey_components_labels_labelProvider__["a" /* LabelProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_custom_survey_components_trainings_trainingProvider__["a" /* TrainingProvider */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEvents; });
var MenuEvents = (function () {
    function MenuEvents(labels) {
        this.labels = labels;
        this.labelList = labels;
    }
    return MenuEvents;
}());

//# sourceMappingURL=menu-events.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label__ = __webpack_require__(212);

var LabelBank = (function () {
    function LabelBank() {
        this.labelBank = [
            new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("100m"),
            new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("110mH"),
            new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("400m"),
            new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("1500m")
        ];
    }
    LabelBank.prototype.fillBankExternal = function () {
        //search for custom labels
    };
    return LabelBank;
}());

//# sourceMappingURL=label-bank.js.map

/***/ }),

/***/ 587:
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

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreTraining; });
var PreTraining = (function () {
    function PreTraining() {
        this.preTraining = {
            readiness: {
                key: "Readiness",
                val: 0,
                type: 'range'
            },
            hunger: {
                key: "Hunger",
                val: 0,
                type: 'range'
            },
            stress: {
                key: "Stress",
                val: 0,
                type: 'range'
            },
            bodyState: {
                key: "Body State",
                val: 0,
                type: 'range'
            },
            energy: {
                key: "Energy",
                val: 0,
                type: 'range'
            },
            preThoughts: {
                key: "Thoughts",
                val: '',
                type: 'note'
            },
        };
    }
    PreTraining.prototype.getPreTraining = function () {
        return this.preTraining;
    };
    PreTraining.prototype.addRange = function (key) {
        var machineKey = key.replace(/ /g, '');
        this.preTraining.machineKey = {
            key: key,
            val: 0,
            type: 'range'
        };
    };
    PreTraining.prototype.addNote = function (key) {
        var machineKey = key.replace(/ /g, '');
        this.preTraining.machineKey = {
            key: key,
            val: '',
            type: 'note'
        };
    };
    return PreTraining;
}());

//# sourceMappingURL=pre-training.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTraining; });
var PostTraining = (function () {
    function PostTraining() {
        this.postTraining = {
            postThoughts: {
                key: 'Thoughts',
                val: '',
                type: 'note'
            },
            rating: {
                key: 'Overall',
                val: 0,
                type: 'range'
            }
        };
    }
    PostTraining.prototype.getPostTraining = function () {
        return this.postTraining;
    };
    PostTraining.prototype.addRange = function (key) {
        var machineKey = key.replace(/ /g, '');
        this.postTraining.machineKey = {
            key: key,
            val: 0,
            type: 'range'
        };
    };
    PostTraining.prototype.addNote = function (key) {
        var machineKey = key.replace(/ /g, '');
        this.postTraining.machineKey = {
            key: key,
            val: '',
            type: 'note'
        };
    };
    return PostTraining;
}());

//# sourceMappingURL=post-training.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarmUp; });
var WarmUp = (function () {
    function WarmUp(name) {
        this.name = name;
    }
    return WarmUp;
}());

//# sourceMappingURL=warm-up.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoolDown; });
var CoolDown = (function () {
    function CoolDown(name) {
        this.name = name;
    }
    return CoolDown;
}());

//# sourceMappingURL=cool-down.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_custom_survey_components_labels_labelProvider__ = __webpack_require__(89);
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
    //rootPage:any = 'CreateTrainingPage';
    function MyApp(platform, statusBar, splashScreen, keyboard, calendarMenu, labels) {
        var _this = this;
        this.calendarMenu = calendarMenu;
        this.labels = labels;
        //rootPage:any = LoginPage;
        this.rootPage = 'TabsPage';
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
        this.listOfLabels = this.calendarMenu.menuEvents.labelList;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-label style="font-size: 14px; color: white; padding-left: 10px">Jonah Elbaz</ion-label>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-calendar></ion-calendar>\n        <!--<ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplay\'" #calendar-->\n        <!--(swipe)="swipe($event, calendar)"-->\n        <!--(onMonthSelect)="onMonthSelect($event)"-->\n        <!--(onDaySelect)="onDaySelect($event)">-->\n        <!--</ion-calendar>-->\n            <ion-item no-lines>\n                <ion-select [(ngModel)]="displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n        <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                <ion-icon item-left name="ios-arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n                <ion-icon item-left name="ios-arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n                Filters\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.labelsFilterOpen = !collapsable.filter.labelsFilterOpen">\n                    Labels\n                </ion-label>\n                <div *ngIf="collapsable.filter.labelsFilterOpen">\n                    <ion-item *ngFor="let label of listOfLabels">\n                        <ion-label> {{label.label[\'value\']}}</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.trainingResultFilterOpen = !collapsable.filter.trainingResultFilterOpen">\n                    Training Result\n                </ion-label>\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n    </ion-content>\n    <ion-footer>\n    <ion-row>\n        <ion-col style="text-align: center; font-size: 25px;">\n            <ion-icon item-right name="md-share" class="share"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align: center; font-size: 30px;">\n            <ion-icon item-right name="ios-download-outline" class="share"></ion-icon>\n        </ion-col>\n    </ion-row>\n        </ion-footer>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_6__providers_custom_survey_components_labels_labelProvider__["a" /* LabelProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 650:
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

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 321,
	"./af.js": 321,
	"./ar": 322,
	"./ar-dz": 323,
	"./ar-dz.js": 323,
	"./ar-kw": 324,
	"./ar-kw.js": 324,
	"./ar-ly": 325,
	"./ar-ly.js": 325,
	"./ar-ma": 326,
	"./ar-ma.js": 326,
	"./ar-sa": 327,
	"./ar-sa.js": 327,
	"./ar-tn": 328,
	"./ar-tn.js": 328,
	"./ar.js": 322,
	"./az": 329,
	"./az.js": 329,
	"./be": 330,
	"./be.js": 330,
	"./bg": 331,
	"./bg.js": 331,
	"./bm": 332,
	"./bm.js": 332,
	"./bn": 333,
	"./bn.js": 333,
	"./bo": 334,
	"./bo.js": 334,
	"./br": 335,
	"./br.js": 335,
	"./bs": 336,
	"./bs.js": 336,
	"./ca": 337,
	"./ca.js": 337,
	"./cs": 338,
	"./cs.js": 338,
	"./cv": 339,
	"./cv.js": 339,
	"./cy": 340,
	"./cy.js": 340,
	"./da": 341,
	"./da.js": 341,
	"./de": 342,
	"./de-at": 343,
	"./de-at.js": 343,
	"./de-ch": 344,
	"./de-ch.js": 344,
	"./de.js": 342,
	"./dv": 345,
	"./dv.js": 345,
	"./el": 346,
	"./el.js": 346,
	"./en-au": 347,
	"./en-au.js": 347,
	"./en-ca": 348,
	"./en-ca.js": 348,
	"./en-gb": 349,
	"./en-gb.js": 349,
	"./en-ie": 350,
	"./en-ie.js": 350,
	"./en-il": 351,
	"./en-il.js": 351,
	"./en-nz": 352,
	"./en-nz.js": 352,
	"./eo": 353,
	"./eo.js": 353,
	"./es": 354,
	"./es-do": 355,
	"./es-do.js": 355,
	"./es-us": 356,
	"./es-us.js": 356,
	"./es.js": 354,
	"./et": 357,
	"./et.js": 357,
	"./eu": 358,
	"./eu.js": 358,
	"./fa": 359,
	"./fa.js": 359,
	"./fi": 360,
	"./fi.js": 360,
	"./fo": 361,
	"./fo.js": 361,
	"./fr": 362,
	"./fr-ca": 363,
	"./fr-ca.js": 363,
	"./fr-ch": 364,
	"./fr-ch.js": 364,
	"./fr.js": 362,
	"./fy": 365,
	"./fy.js": 365,
	"./gd": 366,
	"./gd.js": 366,
	"./gl": 367,
	"./gl.js": 367,
	"./gom-latn": 368,
	"./gom-latn.js": 368,
	"./gu": 369,
	"./gu.js": 369,
	"./he": 370,
	"./he.js": 370,
	"./hi": 371,
	"./hi.js": 371,
	"./hr": 372,
	"./hr.js": 372,
	"./hu": 373,
	"./hu.js": 373,
	"./hy-am": 374,
	"./hy-am.js": 374,
	"./id": 375,
	"./id.js": 375,
	"./is": 376,
	"./is.js": 376,
	"./it": 377,
	"./it.js": 377,
	"./ja": 378,
	"./ja.js": 378,
	"./jv": 379,
	"./jv.js": 379,
	"./ka": 380,
	"./ka.js": 380,
	"./kk": 381,
	"./kk.js": 381,
	"./km": 382,
	"./km.js": 382,
	"./kn": 383,
	"./kn.js": 383,
	"./ko": 384,
	"./ko.js": 384,
	"./ky": 385,
	"./ky.js": 385,
	"./lb": 386,
	"./lb.js": 386,
	"./lo": 387,
	"./lo.js": 387,
	"./lt": 388,
	"./lt.js": 388,
	"./lv": 389,
	"./lv.js": 389,
	"./me": 390,
	"./me.js": 390,
	"./mi": 391,
	"./mi.js": 391,
	"./mk": 392,
	"./mk.js": 392,
	"./ml": 393,
	"./ml.js": 393,
	"./mr": 394,
	"./mr.js": 394,
	"./ms": 395,
	"./ms-my": 396,
	"./ms-my.js": 396,
	"./ms.js": 395,
	"./mt": 397,
	"./mt.js": 397,
	"./my": 398,
	"./my.js": 398,
	"./nb": 399,
	"./nb.js": 399,
	"./ne": 400,
	"./ne.js": 400,
	"./nl": 401,
	"./nl-be": 402,
	"./nl-be.js": 402,
	"./nl.js": 401,
	"./nn": 403,
	"./nn.js": 403,
	"./pa-in": 404,
	"./pa-in.js": 404,
	"./pl": 405,
	"./pl.js": 405,
	"./pt": 406,
	"./pt-br": 407,
	"./pt-br.js": 407,
	"./pt.js": 406,
	"./ro": 408,
	"./ro.js": 408,
	"./ru": 409,
	"./ru.js": 409,
	"./sd": 410,
	"./sd.js": 410,
	"./se": 411,
	"./se.js": 411,
	"./si": 412,
	"./si.js": 412,
	"./sk": 413,
	"./sk.js": 413,
	"./sl": 414,
	"./sl.js": 414,
	"./sq": 415,
	"./sq.js": 415,
	"./sr": 416,
	"./sr-cyrl": 417,
	"./sr-cyrl.js": 417,
	"./sr.js": 416,
	"./ss": 418,
	"./ss.js": 418,
	"./sv": 419,
	"./sv.js": 419,
	"./sw": 420,
	"./sw.js": 420,
	"./ta": 421,
	"./ta.js": 421,
	"./te": 422,
	"./te.js": 422,
	"./tet": 423,
	"./tet.js": 423,
	"./tg": 424,
	"./tg.js": 424,
	"./th": 425,
	"./th.js": 425,
	"./tl-ph": 426,
	"./tl-ph.js": 426,
	"./tlh": 427,
	"./tlh.js": 427,
	"./tr": 428,
	"./tr.js": 428,
	"./tzl": 429,
	"./tzl.js": 429,
	"./tzm": 430,
	"./tzm-latn": 431,
	"./tzm-latn.js": 431,
	"./tzm.js": 430,
	"./ug-cn": 432,
	"./ug-cn.js": 432,
	"./uk": 433,
	"./uk.js": 433,
	"./ur": 434,
	"./ur.js": 434,
	"./uz": 435,
	"./uz-latn": 436,
	"./uz-latn.js": 436,
	"./uz.js": 435,
	"./vi": 437,
	"./vi.js": 437,
	"./x-pseudo": 438,
	"./x-pseudo.js": 438,
	"./yo": 439,
	"./yo.js": 439,
	"./zh-cn": 440,
	"./zh-cn.js": 440,
	"./zh-hk": 441,
	"./zh-hk.js": 441,
	"./zh-tw": 442,
	"./zh-tw.js": 442
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
webpackContext.id = 654;

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(210);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_labels_label_bank__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelProvider = (function () {
    function LabelProvider() {
        this.listOfLabels = new __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_labels_label_bank__["a" /* LabelBank */]().labelBank;
    }
    LabelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LabelProvider);
    return LabelProvider;
}());

//# sourceMappingURL=labelProvider.js.map

/***/ })

},[450]);
//# sourceMappingURL=main.js.map