webpackJsonp([14],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users_user__ = __webpack_require__(471);
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
	"../pages/Exercises/add-exercise/add-exercise.module": [
		533,
		12
	],
	"../pages/Exercises/create-exercise/create-exercise.module": [
		534,
		11
	],
	"../pages/Exercises/select-exercise-category/select-exercise-category.module": [
		535,
		10
	],
	"../pages/Exercises/select-exercise-table-type/select-exercise-table-type.module": [
		536,
		9
	],
	"../pages/HomeTabs/about/about.module": [
		537,
		8
	],
	"../pages/HomeTabs/contact/contact.module": [
		538,
		7
	],
	"../pages/HomeTabs/home/home.module": [
		539,
		0
	],
	"../pages/HomeTabs/tabs/tabs.module": [
		540,
		6
	],
	"../pages/Logins/create-account/create-account.module": [
		541,
		3
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		542,
		5
	],
	"../pages/Logins/login/login.module": [
		543,
		2
	],
	"../pages/Logins/standard-login/standard-login.module": [
		544,
		4
	],
	"../pages/Training/create-training/create-training.module": [
		545,
		1
	],
	"../pages/Training/text-popover/text-popover.module": [
		546,
		13
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseCategoryBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_category__ = __webpack_require__(211);

var ExerciseCategoryBank = (function () {
    function ExerciseCategoryBank() {
        this.exerciseCategoryBank = [];
        this.exerciseCategoryList = ['Sprints', 'Long Sprints', 'Distance', 'Long Jump', 'High Jump', 'Pole Vault', 'Triple Jump', 'Sprint Hurdles', '400m Hurdles', 'Javelin', 'Weights', 'Plyometrics', 'Medicine Ball'];
        for (var i = 0; i < this.exerciseCategoryList.length; i++) {
            this.exerciseCategoryBank.push(new __WEBPACK_IMPORTED_MODULE_0__exercise_category__["a" /* ExerciseCategory */](this.exerciseCategoryList[i]));
        }
    }
    return ExerciseCategoryBank;
}());

//# sourceMappingURL=exercise-category-bank.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseCategory; });
var ExerciseCategory = (function () {
    // public sprints: {
    //     [key: string]: any
    // };
    // public longSprints: {
    //     [key: string]: any
    // };
    // public tempo: {
    //     [key: string]: any
    // };
    // public distance: {
    //     [key: string]: any
    // };
    // public sprintHurdles: {
    //     [key: string]: any
    // };
    // public fourHundredHurdles: {
    //     [key: string]: any
    // };
    // public longJump: {
    //     [key: string]: any
    // };
    // public highJump: {
    //     [key: string]: any
    // };
    // public tripleJump: {
    //     [key: string]: any
    // };
    // public poleVault: {
    //     [key: string]: any
    // };
    // public javelin: {
    //     [key: string]: any
    // };
    // public discus: {
    //     [key: string]: any
    // };
    // public shotput: {
    //     [key: string]: any
    // };
    // public hammer: {
    //     [key: string]: any
    // };
    // public plyo: {
    //     [key: string]: any
    // };
    // public medBall: {
    //     [key: string]: any
    // };
    // public stabilization: {
    //     [key: string]: any
    // };
    // public misc: {
    //     [key: string]: any
    // };
    function ExerciseCategory(name) {
        this.category = {
            name: name
        };
        // this.sprints = {
        //     name: 'Sprints'
        // };
        // this.longSprints = {
        //     name: 'Long Sprints'
        // };
        // this.tempo = {
        //     name: 'Tempo'
        // };
        // this.distance = {
        //     name: 'Distance'
        // };
        // this.sprintHurdles = {
        //     name: 'Sprint Hurdles'
        // };
        // this.fourHundredHurdles = {
        //     name: '400m Hurdles'
        // };
        // this.longJump = {
        //     name: 'Long Jump'
        // };
        // this.tripleJump = {
        //     name: 'Triple Jump'
        // };
    }
    return ExerciseCategory;
}());

//# sourceMappingURL=exercise-category.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTableTypeBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__ = __webpack_require__(213);

var ExerciseTableTypeBank = (function () {
    // exerciseTableTypeList: ['Running'];
    function ExerciseTableTypeBank() {
        this.exerciseTableTypeBank = [
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Running', ['Detail', 'Distance', 'Time']),
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Runway', ['Detail', 'Steps', 'Reps']),
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('High Jump', ['Detail', 'Steps', 'Height', 'Clear']),
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Pole Vault', ['Detail', 'Steps', 'Height', 'Clear']),
            // new ExerciseTableType('Horizontal Jumps',['Detail', 'Steps', 'Reps']),
            // new ExerciseTableType('Javelin',['Detail','Steps','Reps']),
            // new ExerciseTableType('Rotation',['Detail','Weight', 'Reps']), // do they break these into sets?
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Hurdles', ['Detail', 'Discount', 'Height', 'Hurdles']),
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Weight & 1RM', ['Detail', 'Weight', '%1RM', 'Reps']),
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Weight & Reps', ['Detail', 'Weight', 'Reps']),
            // new ExerciseTableType('Medicine Ball',['Detail', 'Weight', 'Reps']), // Detail to capture if single side or not, or exercise name
            new __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__["a" /* ExerciseTableType */]('Plyometrics', ['Detail', 'Weight', 'Box Height', 'Reps'])
        ];
    }
    return ExerciseTableTypeBank;
}());

//# sourceMappingURL=exercise-table-type-bank.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTableType; });
var ExerciseTableType = (function () {
    function ExerciseTableType(name, tableHeaders) {
        this.tableTypeName = name;
        this.tableHeaderList = tableHeaders;
    }
    return ExerciseTableType;
}());

//# sourceMappingURL=exercise-table-type.js.map

/***/ }),

/***/ 264:
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

/***/ 265:
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_set__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exercises_exercise__ = __webpack_require__(88);
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


var ExerciseTable = (function (_super) {
    __extends(ExerciseTable, _super);
    // exerciseName: string; // exercise.exerciseName
    // exerciseCategory: ExerciseCategory; // exercise.exerciseCategory
    // exerciseTableType: ExerciseTableType; // exercise.tableType
    // notes: string;
    // pinnedNotes: string;
    // tableHeaderList: string[];
    function ExerciseTable(exercise) {
        var _this = _super.call(this, exercise.exerciseName, exercise.exerciseCategory, exercise.exerciseTableType) || this;
        _this.labels = [];
        _this.sets = [new __WEBPACK_IMPORTED_MODULE_0__exercise_set__["a" /* ExerciseSet */](1)];
        return _this;
    }
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
    return ExerciseTable;
}(__WEBPACK_IMPORTED_MODULE_1__exercises_exercise__["a" /* Exercise */]));

//# sourceMappingURL=exercise-table.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseSet; });
var ExerciseSet = (function () {
    // could make this a dictionary that is set based on table type
    function ExerciseSet(setNumber) {
        this.setNumber = setNumber; // this would need to be done in create training by looking at the current set # and incrementing
        this.detail = null;
        this.measure = null; // this could look at the last training saved and pull that info
        this.reps = null; // this could look at the last rep number from when the exercise was last done
        this.complete = false;
    }
    return ExerciseSet;
}());

//# sourceMappingURL=exercise-set.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_logging_exercises_exercise_bank__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_logging_create_training_exercise_category_bank__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_logging_create_training_exercise_table_type_bank__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_logging_routines_routine_bank__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExerciseProvider = (function () {
    function ExerciseProvider() {
        this.exerciseBank = new __WEBPACK_IMPORTED_MODULE_1__models_logging_exercises_exercise_bank__["a" /* ExerciseBank */]();
        this.exerciseCategoryBank = new __WEBPACK_IMPORTED_MODULE_2__models_logging_create_training_exercise_category_bank__["a" /* ExerciseCategoryBank */]();
        this.tableTypeBank = new __WEBPACK_IMPORTED_MODULE_3__models_logging_create_training_exercise_table_type_bank__["a" /* ExerciseTableTypeBank */]();
        this.routineBank = new __WEBPACK_IMPORTED_MODULE_4__models_logging_routines_routine_bank__["a" /* RoutineBank */]();
        this.exerciseCategoryBank.exerciseCategoryBank = this.exerciseCategoryBank.exerciseCategoryBank.sort(function (a, b) {
            if (a.category.name < b.category.name)
                return -1;
            if (a.category.name > b.category.name)
                return 1;
            return 0;
        });
        console.log('Exercise Provider CHECK', this.exerciseCategoryBank);
        this.exerciseBank.exerciseBank = this.sortAlphabetical(this.exerciseBank.exerciseBank, 'exerciseName');
        // this.sortAlphabetical(this.exerciseCategoryBank, 'exerciseName');
        this.tableTypeBank.exerciseTableTypeBank = this.sortAlphabetical(this.tableTypeBank.exerciseTableTypeBank, 'tableTypeName');
    }
    ExerciseProvider.prototype.sortAlphabetical = function (arrayOfObjects, property) {
        arrayOfObjects.sort(function (a, b) {
            if (a.property < b.property)
                return -1;
            if (a.property > b.property)
                return 1;
            return 0;
        });
        return arrayOfObjects;
    };
    ExerciseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ExerciseProvider);
    return ExerciseProvider;
}());

//# sourceMappingURL=exerciseProvider.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_validations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(153);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_trainings_pre_training__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_custom_survey_components_trainings_post_training__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_logging_training__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logging_create_training_warm_up__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_create_training_cool_down__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menus_calendar_menu__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_exercises_exercise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_logging_create_training_exercise_table__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_logging_create_training_exercise_set__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_logging_create_training_exercise_category__ = __webpack_require__(211);
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
    function TrainingProvider(db, users, calMenu) {
        this.db = db;
        this.users = users;
        this.calMenu = calMenu;
        this.preTraining = new __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_trainings_pre_training__["a" /* PreTraining */]();
        this.postTraining = new __WEBPACK_IMPORTED_MODULE_2__models_custom_survey_components_trainings_post_training__["a" /* PostTraining */]();
        this.getCustomPostTraining();
        this.getCustomPreTraining();
    }
    TrainingProvider.prototype.getCustomPostTraining = function () {
    };
    TrainingProvider.prototype.getCustomPreTraining = function () {
    };
    TrainingProvider.prototype.createNewEntry = function (training) {
        var filteredExerciseTableArray = [];
        training.mainCalEvent.exercises.forEach(function (data) {
            var exerciseTable = {
                sets: data.sets,
                labels: data.labels,
                exerciseName: data.exerciseName,
                category: data.exerciseCategory.category.name,
                exerciseTableType: data.exerciseTableType
            };
            filteredExerciseTableArray.push(exerciseTable);
        });
        var reformattedTraining = {
            preCalEvent: training.mainCalEvent,
            postCalEvent: training.postCalEvent,
            mainCalEvent: {
                warmUp: training.mainCalEvent.warmUp,
                coolDown: training.mainCalEvent.coolDown,
                exercises: filteredExerciseTableArray
            }
        };
        this.db.database.ref("Users/" + this.users.loggedIn.User_Id + "/Calendar").push(
        // training
        reformattedTraining).then(function () {
            console.log("Success");
        });
    };
    TrainingProvider.prototype.filterTrainingDetails = function (training) {
    };
    TrainingProvider.prototype.getUserTrainings = function (user) {
        var listOfTrainings = [];
        var that = this;
        var userPromise;
        userPromise = new Promise(function (resolve, reject) {
            var idRef = that.db.database.ref("Users/" + user.User_Id + "/Calendar");
            idRef.on('value', function (snapshot) {
                snapshot.forEach(function (snap) {
                    var training = new __WEBPACK_IMPORTED_MODULE_3__models_logging_training__["a" /* Training */]();
                    var post = snap.child("postCalEvent");
                    var pre = snap.child("preCalEvent");
                    var main = snap.child("mainCalEvent");
                    training.type = snap.child("type").val();
                    training.trainingDate = snap.child("trainingDate").val();
                    training.trainingTime = snap.child("trainingTime").val();
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
                    training.mainCalEvent.warmUp = new __WEBPACK_IMPORTED_MODULE_6__models_logging_create_training_warm_up__["a" /* WarmUp */](main.child("warmUp").val());
                    training.mainCalEvent.coolDown = new __WEBPACK_IMPORTED_MODULE_7__models_logging_create_training_cool_down__["a" /* CoolDown */](main.child("coolDown").val());
                    main.child("exercises").forEach(function (exercises) {
                        // let headers = exercises.child("exerciseTableType").child("tableHeaderList").val();
                        // let headerList: string[] = [];
                        // headers.forEach(header => {
                        //     headerList.push(header);
                        // });
                        // let tableType = new ExerciseTableType(exercises.child("exerciseTableType").child("tableTypeName").val(), headerList);
                        var ex = new __WEBPACK_IMPORTED_MODULE_9__models_logging_exercises_exercise__["a" /* Exercise */](exercises.child("exerciseName").val(), new __WEBPACK_IMPORTED_MODULE_12__models_logging_create_training_exercise_category__["a" /* ExerciseCategory */](exercises.child("category").val()), null);
                        var table = new __WEBPACK_IMPORTED_MODULE_10__models_logging_create_training_exercise_table__["a" /* ExerciseTable */](ex);
                        table.sets = [];
                        table.labels = [];
                        exercises.child("labels").forEach(function (label) {
                            table.labels.push(label.val());
                            return false;
                        });
                        exercises.child("sets").forEach(function (set) {
                            var newSet = new __WEBPACK_IMPORTED_MODULE_11__models_logging_create_training_exercise_set__["a" /* ExerciseSet */](set.child("setNumber").val());
                            newSet.detail = set.child("detail").val();
                            newSet.complete = set.child("complete").val();
                            newSet.measure = set.child("measure").val();
                            newSet.reps = set.child("reps").val();
                            newSet.setNumber = set.child("setNumber").val();
                            table.sets.push(newSet);
                            return false;
                        });
                        training.mainCalEvent.exercises.push(table);
                        return false;
                    });
                    listOfTrainings.push(training);
                    training.getCategories();
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
    TrainingProvider.prototype.setEventsNextMonth = function () {
        var _this = this;
        this.calMenu.datesArray.datesNextMonth.forEach(function (date) {
            date.content = [];
            _this.listOfTrainings.forEach(function (training) {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    };
    TrainingProvider.prototype.setEventsLastMonth = function () {
        var _this = this;
        this.calMenu.datesArray.datesLastMonth.forEach(function (date) {
            date.content = [];
            _this.listOfTrainings.forEach(function (training) {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    };
    TrainingProvider.prototype.setEventsCurrentMonth = function () {
        var _this = this;
        this.calMenu.datesArray.datesThisMonth.forEach(function (date) {
            date.content = [];
            _this.listOfTrainings.forEach(function (training) {
                if (training.trainingDate == date.dateValue) {
                    date.content.push(training);
                }
            });
        });
    };
    TrainingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users_users__["a" /* UsersProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__menus_calendar_menu__["a" /* CalendarMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__menus_calendar_menu__["a" /* CalendarMenu */]) === "function" && _c || Object])
    ], TrainingProvider);
    return TrainingProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=trainingProvider.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDay; });
var CalendarDay = (function () {
    function CalendarDay(date) {
        this.date = date;
        this.dayOfTheWeek = this.getDayOfWeek(this.date);
        this.month = this.getMonth(this.date);
        this.dateValue = date.toISOString().slice(0, 10);
        this.content = [];
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_training_warm_up__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_training_cool_down__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training_exercise_table__ = __webpack_require__(266);



var Training = (function () {
    function Training() {
        this.type = "Training";
        this.categories = [];
        this.preCalEvent = {
            range: {},
            notes: {},
        };
        this.postCalEvent = {
            range: {},
            notes: {},
        };
        this.mainCalEvent = {
            warmUp: __WEBPACK_IMPORTED_MODULE_0__create_training_warm_up__["a" /* WarmUp */],
            coolDown: __WEBPACK_IMPORTED_MODULE_1__create_training_cool_down__["a" /* CoolDown */],
            exercises: [],
            notes: {}
        };
        var date = new Date();
        this.trainingDate = date.toISOString().slice(0, 10);
        this.trainingTime = '' + date.getHours() + ':' + date.getMinutes();
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
    Training.prototype.addMainCalNote = function (k, v) {
        this.mainCalEvent.notes[k] = v;
    };
    Training.prototype.getCategories = function () {
        var _this = this;
        this.mainCalEvent.exercises.forEach(function (exercise) {
            if (_this.categories.indexOf(exercise.exerciseCategory.category.name) < 0) {
                _this.categories.push(exercise.exerciseCategory.category.name);
            }
        });
    };
    Training.prototype.addExercises = function (exercises) {
        var _this = this;
        exercises.forEach(function (data) {
            var newExerciseTable = new __WEBPACK_IMPORTED_MODULE_2__create_training_exercise_table__["a" /* ExerciseTable */](data);
            _this.mainCalEvent.exercises.push(newExerciseTable);
            console.log('Exercises :', exercises);
            console.log('this.main.exercises', _this.mainCalEvent.exercises);
        });
    };
    Training.prototype.removeExerciseTable = function (exerciseTable) {
        this.mainCalEvent.exercises.splice(this.mainCalEvent.exercises.indexOf(exerciseTable), 1);
    };
    Training.prototype.setMainCalNotes = function (k, v) {
        this.mainCalEvent.notes[k] = v;
    };
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_users_users__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_users_authentication__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_tools_validations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_menus_calendar_menu__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Training_text_popover_text_popover__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_training_labels_labelProvider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_training_trainings_trainingProvider__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_training_exercises_exerciseProvider__ = __webpack_require__(325);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_Training_text_popover_text_popover__["a" /* TextPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Exercises/add-exercise/add-exercise.module#AddExercisePageModule', name: 'AddExercisePage', segment: 'add-exercise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Exercises/create-exercise/create-exercise.module#CreateExercisePageModule', name: 'CreateExercisePage', segment: 'create-exercise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Exercises/select-exercise-category/select-exercise-category.module#SelectExerciseCategoryPageModule', name: 'SelectExerciseCategoryPage', segment: 'select-exercise-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Exercises/select-exercise-table-type/select-exercise-table-type.module#SelectExerciseTableTypePageModule', name: 'SelectExerciseTableTypePage', segment: 'select-exercise-table-type', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Training_text_popover_text_popover__["a" /* TextPopoverPage */]
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
                __WEBPACK_IMPORTED_MODULE_21__providers_training_labels_labelProvider__["a" /* LabelProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_training_exercises_exerciseProvider__["a" /* ExerciseProvider */]
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

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_training_exercise_category_bank__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training_exercise_table_type_bank__ = __webpack_require__(212);



var ExerciseBank = (function () {
    function ExerciseBank() {
        // exerciseList: ['Runway','Running'];
        this.exerciseCategoryBank = new __WEBPACK_IMPORTED_MODULE_1__create_training_exercise_category_bank__["a" /* ExerciseCategoryBank */]();
        this.exerciseTableTypeBank = new __WEBPACK_IMPORTED_MODULE_2__create_training_exercise_table_type_bank__["a" /* ExerciseTableTypeBank */]();
        this.exerciseBank = [
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Long Jump Runway', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Long Jump'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Runway'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Triple Runway', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Triple Jump'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Runway'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Javelin Runway', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Javelin'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Runway'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Javelin Ball Throws', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Javelin'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Runway'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Javelin Resistance Drills', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Javelin'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Runway'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Running', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Sprints'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Hurdle Hops', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Plyometrics'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Overhead Throw', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Medicine Ball'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Side Throw', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Medicine Ball'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Front Heave', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Medicine Ball'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
            new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */]('Block Starts', this.exerciseCategoryBank.exerciseCategoryBank.find(function (x) { return x.category.name === 'Sprints'; }), this.exerciseTableTypeBank.exerciseTableTypeBank.find(function (x) { return x.tableTypeName == 'Running'; })),
        ];
    }
    ExerciseBank.prototype.addExercise = function (exercise) {
        this.exerciseBank.push(new __WEBPACK_IMPORTED_MODULE_0__exercise__["a" /* Exercise */](exercise.exerciseName, exercise.exerciseCategory, exercise.exerciseTableType));
    };
    ExerciseBank.prototype.editExercise = function (exercise, exerciseName, exerciseCat, exerciseTableType) {
        this.exerciseBank[this.exerciseBank.indexOf(exercise)] = exercise; // is this needed? Need to check dependencies and maybe only allow if no trainings with it!
    };
    return ExerciseBank;
}());

//# sourceMappingURL=exercise-bank.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineBank; });
var RoutineBank = (function () {
    function RoutineBank() {
        this.routineBank = [];
    }
    RoutineBank.prototype.addRoutine = function (routine) {
        this.routineBank.push(routine);
    };
    return RoutineBank;
}());

//# sourceMappingURL=routine-bank.js.map

/***/ }),

/***/ 388:
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label__ = __webpack_require__(390);

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

/***/ 390:
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

/***/ 471:
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

/***/ 472:
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

/***/ 473:
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

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_training_labels_labelProvider__ = __webpack_require__(90);
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
    // rootPage:any = 'CreateTrainingPage';
    // rootPage:any = 'CreateExercisePage'
    function MyApp(platform, statusBar, splashScreen, keyboard, calendarMenu, labels) {
        var _this = this;
        this.calendarMenu = calendarMenu;
        this.labels = labels;
        // rootPage:any = 'LoginPage';
        this.rootPage = 'TabsPage';
        //----------------//
        //      Menu      //
        //---------------//
        this.collapsable = {
            filter: {
                main: true,
                eventFilterOpen: false,
                athleteFilterOpen: false,
                labelsFilterOpen: true
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
        this.calendarMenu.displayedYear = this.displayedYear;
        // this.calendarMenu.
    };
    MyApp.prototype.setBaseMenuSettings = function () {
        this.displayedYear = this.calendarMenu.getDisplayedYear();
        this.years = this.calendarMenu.getPossibleYears();
        this.listOfLabels = this.calendarMenu.menuEvents.labelList;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-item no-lines color="dark">\n                <ion-label style="font-size: 14px; color: white; padding-left: 10px;">Jonah Elbaz</ion-label>\n                <ion-select [(ngModel)]="this.calendarMenu.displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-calendar></ion-calendar>\n        <!--<ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplay\'" #calendar-->\n        <!--(swipe)="swipe($event, calendar)"-->\n        <!--(onMonthSelect)="onMonthSelect($event)"-->\n        <!--(onDaySelect)="onDaySelect($event)">-->\n        <!--</ion-calendar>-->\n\n           <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                Filters\n               <ion-icon class="arrowIcon" item-left name="ios-arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n               <ion-icon class="arrowIcon" item-left name="ios-arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.labelsFilterOpen = !collapsable.filter.labelsFilterOpen">\n                    Labels\n                </ion-label>\n                <div *ngIf="collapsable.filter.labelsFilterOpen">\n                    <ion-item *ngFor="let label of listOfLabels">\n                        <ion-label> {{label.label[\'value\']}}</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n    </ion-content>\n    <ion-footer>\n    <ion-row>\n        <ion-col style="text-align: center; font-size: 25px;">\n            <ion-icon item-right name="md-share" class="share"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align: center; font-size: 30px;">\n            <ion-icon item-right name="ios-download-outline" class="share"></ion-icon>\n        </ion-col>\n    </ion-row>\n        </ion-footer>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_6__providers_training_labels_labelProvider__["a" /* LabelProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 532:
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(214);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise(exerciseName, exerciseCategory, exerciseTableType) {
        this.exerciseName = exerciseName;
        this.exerciseCategory = exerciseCategory;
        this.exerciseTableType = exerciseTableType;
    }
    return Exercise;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_menu_events__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_labels_labelProvider__ = __webpack_require__(90);
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
        for (var i = this.displayedYear + 5; i >= 1970; i--) {
            years.push(i);
        }
        return years;
    };
    CalendarMenu.prototype.setNextMonth = function (date) {
        date.setMonth(date.getMonth() + 1);
        this.monthsArray.nextMonth = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date).month;
        var month = date.getMonth();
        this.datesArray.datesNextMonth = this.getDatesInMonth(month, this.displayedYear);
    };
    CalendarMenu.prototype.setThisMonth = function (date) {
        var calDay = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date);
        this.displayedMonth = calDay.month;
        this.monthsArray.thisMonth = calDay.month;
        var month = date.getMonth();
        this.datesArray.datesThisMonth = this.getDatesInMonth(month, this.displayedYear);
    };
    CalendarMenu.prototype.setLastMonth = function (date) {
        date.setMonth(date.getMonth() - 1);
        this.monthsArray.lastMonth = new __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__["a" /* CalendarDay */](date).month;
        var month = date.getMonth();
        this.datesArray.datesLastMonth = this.getDatesInMonth(month, this.displayedYear);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__training_labels_labelProvider__["a" /* LabelProvider */]])
    ], CalendarMenu);
    return CalendarMenu;
}());

//# sourceMappingURL=calendar-menu.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_labels_label_bank__ = __webpack_require__(389);
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

},[331]);
//# sourceMappingURL=main.js.map