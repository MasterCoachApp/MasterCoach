webpackJsonp([23],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_users_user__ = __webpack_require__(596);
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_trainings_pre_training__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_custom_survey_components_trainings_post_training__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_logging_training__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logging_create_training_warm_up__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_create_training_cool_down__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_logging_exercises_exercise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_create_training_exercise_table_type__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_logging_create_training_exercise_table__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_logging_create_training_exercise_set__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_logging_create_training_exercise_category__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menus_calendar_menu__ = __webpack_require__(91);
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
    function TrainingProvider(calMenu, db, users) {
        this.calMenu = calMenu;
        this.db = db;
        this.users = users;
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
            preCalEvent: training.preCalEvent,
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
                that.listOfTrainings = [];
                snapshot.forEach(function (snap) {
                    var training = new __WEBPACK_IMPORTED_MODULE_3__models_logging_training__["a" /* Training */]();
                    var post = snap.child("postCalEvent");
                    var pre = snap.child("preCalEvent");
                    var main = snap.child("mainCalEvent");
                    training.type = snap.child("type").val();
                    training.trainingDate = snap.child("trainingDate").val();
                    training.trainingTime = snap.child("trainingTime").val();
                    training.id = snap.key;
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
                        var headers = exercises.child("exerciseTableType").child("tableHeaderList");
                        var headerList = [];
                        headers.forEach(function (header) {
                            headerList.push(header.val());
                            return false;
                        });
                        var tableType = new __WEBPACK_IMPORTED_MODULE_9__models_logging_create_training_exercise_table_type__["a" /* ExerciseTableType */](exercises.child("exerciseTableType").child("tableTypeName").val(), headerList);
                        var ex = new __WEBPACK_IMPORTED_MODULE_8__models_logging_exercises_exercise__["a" /* Exercise */](exercises.child("exerciseName").val(), new __WEBPACK_IMPORTED_MODULE_12__models_logging_create_training_exercise_category__["a" /* ExerciseCategory */](exercises.child("category").val()), tableType);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__users_users__["a" /* UsersProvider */]])
    ], TrainingProvider);
    return TrainingProvider;
}());

//# sourceMappingURL=trainingProvider.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Exercises/add-exercise/add-exercise.module": [
		666,
		47
	],
	"../pages/Exercises/create-exercise/create-exercise.module": [
		667,
		46
	],
	"../pages/Exercises/select-exercise-category/select-exercise-category.module": [
		668,
		45
	],
	"../pages/Exercises/select-exercise-table-type/select-exercise-table-type.module": [
		669,
		44
	],
	"../pages/HomeTabs/home/home.module": [
		670,
		43
	],
	"../pages/HomeTabs/profile/profile.module": [
		671,
		42
	],
	"../pages/HomeTabs/tabs/tabs.module": [
		672,
		41
	],
	"../pages/HomeTabs/tools/calculators/decathlon-calculator/decathlon-calculator.module": [
		673,
		40
	],
	"../pages/HomeTabs/tools/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module": [
		674,
		39
	],
	"../pages/HomeTabs/tools/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module": [
		675,
		38
	],
	"../pages/HomeTabs/tools/calculators/mercier/mercier.module": [
		676,
		37
	],
	"../pages/HomeTabs/tools/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module": [
		677,
		36
	],
	"../pages/HomeTabs/tools/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module": [
		678,
		35
	],
	"../pages/HomeTabs/tools/calculators/unit-converter/unit-converter.module": [
		679,
		34
	],
	"../pages/HomeTabs/tools/gadgets/starting-gun/starting-gun.module": [
		680,
		33
	],
	"../pages/HomeTabs/tools/gadgets/stopwatch/stopwatch.module": [
		681,
		32
	],
	"../pages/HomeTabs/tools/utilities/utilities.module": [
		715,
		31
	],
	"../pages/Logins/create-account/create-account.module": [
		682,
		27
	],
	"../pages/Logins/forgot-password/forgot-password.module": [
		683,
		30
	],
	"../pages/Logins/login/login.module": [
		684,
		26
	],
	"../pages/Logins/standard-login/standard-login.module": [
		685,
		29
	],
	"../pages/Training/create-training/create-training.module": [
		686,
		25
	],
	"../pages/Training/text-popover/text-popover.module": [
		687,
		48
	],
	"../pages/view-training/view-training.module": [
		688,
		28
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
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseCategoryBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_category__ = __webpack_require__(213);

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

/***/ 213:
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTableTypeBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_table_type__ = __webpack_require__(215);

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

/***/ 215:
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_set__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exercises_exercise__ = __webpack_require__(90);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools__ = __webpack_require__(67);
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_logging_exercises_exercise_bank__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_logging_create_training_exercise_category_bank__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_logging_create_training_exercise_table_type_bank__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_logging_routines_routine_bank__ = __webpack_require__(501);
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_tools__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_validations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(154);
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPointsProvider; });
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

var MenPointsProvider = (function () {
    function MenPointsProvider() {
    }
    MenPointsProvider.prototype.getDayOne = function (outputs) {
        var dayOneScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayOne(key)) {
                    dayOneScore += outputs[key];
                }
            }
        }
        return dayOneScore;
    };
    MenPointsProvider.prototype.getDayTwo = function (outputs) {
        var dayTwoScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayTwo(key)) {
                    dayTwoScore += outputs[key];
                }
            }
        }
        return dayTwoScore;
    };
    MenPointsProvider.prototype.getTotal = function (outputs) {
        var dayOne = this.getDayOne(outputs);
        var dayTwo = this.getDayTwo(outputs);
        return dayOne + dayTwo;
    };
    MenPointsProvider.prototype.isDayOne = function (value) {
        return (value == "hundred" || value == "lj" || value == "sp" || value == "hj" || value == "four" || value == "sixty");
    };
    MenPointsProvider.prototype.isDayTwo = function (value) {
        return (value == "hurdles" || value == "dt" || value == "pv" || value == "jt" || value == "fifteen" || value == "sixtyHurdles" || value == "thousand");
    };
    MenPointsProvider.prototype.getEventPoints = function (event, score) {
        var a = 0;
        var b = 0;
        var c = 0;
        var cm = 0;
        var seconds = 0;
        switch (event) {
            case "hundred"://100
                a = 25.4347;
                b = 18;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "lj"://long jump
                a = 0.14354;
                b = 220;
                c = 1.40;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "sp"://shot put
                a = 51.39;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score, a, b, c);
            case "hj"://High jump
                a = 0.8465;
                b = 75;
                c = 1.42;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "four"://400
                a = 1.53775;
                b = 82;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "hurdles"://110mH
                a = 5.74352;
                b = 28.5;
                c = 1.92;
                return this.calculateRunning(score, a, b, c);
            case "dt"://discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score, a, b, c);
            case "pv"://pole vault
                a = 0.2797;
                b = 100;
                c = 1.35;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "jt"://javelin
                a = 10.14;
                b = 7;
                c = 1.08;
                return this.calculateField(score, a, b, c);
            case "fifteen"://1500
                a = 0.03768;
                b = 480;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
            case "sixty":
                a = 58.0150;
                b = 11.5;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "sixtyHurdles":
                a = 20.5173;
                b = 15.5;
                c = 1.92;
                return this.calculateRunning(score, a, b, c);
            case "thousand":
                a = 0.08713;
                b = 305.5;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
        }
    };
    MenPointsProvider.prototype.calculateRunning = function (score, a, b, c) {
        return Math.floor(a * Math.pow(b - score, c));
    };
    MenPointsProvider.prototype.calculateField = function (score, a, b, c) {
        return Math.floor(a * Math.pow(score - b, c));
    };
    MenPointsProvider.prototype.getSeconds = function (score) {
        var time = score.split(":");
        var min = Number(time[0]);
        var sec = Number(time[1]);
        if (isNaN(min))
            min = 0;
        if (isNaN(sec))
            sec = 0;
        return (min * 60 + sec);
    };
    MenPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenPointsProvider);
    return MenPointsProvider;
}());

//# sourceMappingURL=mens.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomenPointsProvider; });
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

var WomenPointsProvider = (function () {
    function WomenPointsProvider() {
    }
    WomenPointsProvider.prototype.getDayOne = function (outputs) {
        var dayOneScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayOne(key)) {
                    dayOneScore += outputs[key];
                }
            }
        }
        return dayOneScore;
    };
    WomenPointsProvider.prototype.getDayTwo = function (outputs) {
        var dayTwoScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayTwo(key)) {
                    dayTwoScore += outputs[key];
                }
            }
        }
        return dayTwoScore;
    };
    WomenPointsProvider.prototype.getTotal = function (outputs) {
        var dayOne = this.getDayOne(outputs);
        var dayTwo = this.getDayTwo(outputs);
        return dayOne + dayTwo;
    };
    WomenPointsProvider.prototype.isDayOne = function (value) {
        return (value == "hurdles" || value == "sp" || value == "hj" || value == "two");
    };
    WomenPointsProvider.prototype.isDayTwo = function (value) {
        return (value == "lj" || value == "jt" || value == "eight");
    };
    WomenPointsProvider.prototype.getEventPoints = function (event, score) {
        var a = 0;
        var b = 0;
        var c = 0;
        var cm = 0;
        var seconds = 0;
        switch (event) {
            case "hundred"://100
                a = 25.4347;
                b = 18;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "lj"://long jump
                a = 0.188807;
                b = 210;
                c = 1.41;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "sp"://shot put
                a = 56.0211;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score, a, b, c);
            case "hj"://High jump
                a = 1.84523;
                b = 75;
                c = 1.348;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "two"://two
                a = 4.99087;
                b = 42.5;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "hurdles"://110mH
                a = 9.23076;
                b = 26.7;
                c = 1.835;
                return this.calculateRunning(score, a, b, c);
            case "dt"://discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score, a, b, c);
            case "jt"://javelin
                a = 15.9803;
                b = 3.8;
                c = 1.04;
                return this.calculateField(score, a, b, c);
            case "eight"://1500
                a = 0.11193;
                b = 254;
                c = 1.88;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
            case "sixtyHurdles":
                a = 20.0479;
                b = 17;
                c = 1.835;
                return this.calculateRunning(score, a, b, c);
        }
    };
    WomenPointsProvider.prototype.calculateRunning = function (score, a, b, c) {
        return Math.floor(a * Math.pow(b - score, c));
    };
    WomenPointsProvider.prototype.calculateField = function (score, a, b, c) {
        return Math.floor(a * Math.pow(score - b, c));
    };
    WomenPointsProvider.prototype.getSeconds = function (score) {
        var time = score.split(":");
        var min = Number(time[0]);
        var sec = Number(time[1]);
        if (isNaN(min))
            min = 0;
        if (isNaN(sec))
            sec = 0;
        return (min * 60 + sec);
    };
    WomenPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WomenPointsProvider);
    return WomenPointsProvider;
}());

//# sourceMappingURL=womens.js.map

/***/ }),

/***/ 452:
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

/***/ 453:
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

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_training_exercise_table__ = __webpack_require__(266);

var Training = (function () {
    function Training() {
        this.type = "Training";
        this.categories = [];
        this.id = "";
        this.preCalEvent = {
            range: {},
            notes: {},
        };
        this.postCalEvent = {
            range: {},
            notes: {},
        };
        this.mainCalEvent = {
            warmUp: null,
            coolDown: null,
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
            var newExerciseTable = new __WEBPACK_IMPORTED_MODULE_0__create_training_exercise_table__["a" /* ExerciseTable */](data);
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercierPointsProvider; });
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

var MercierPointsProvider = (function () {
    function MercierPointsProvider() {
    }
    MercierPointsProvider.prototype.calculateMercierScore = function (inputs) {
        var score = 0;
        var noConvert = 0;
        if (inputs['select'] == "100m") {
            score = 290.52712 * (100 / inputs['sec']) - 1953.2266;
        }
        if (inputs['select'] == "200m") {
            score = 267.75893 * (200 / inputs['sec']) - 1703.6447;
        }
        if (inputs['select'] == "400m") {
            if (inputs['min'] > 0 && inputs['min'] < 9) {
                alert("Please enter 400m performance in SECONDS only.");
            }
            else {
                score = 262.37121 * (400 / inputs['sec']) - 1402.7708;
            }
        }
        if (inputs['select'] == "800m") {
            score = 302.9089 * (800 / ((60 * inputs['min']) + inputs['sec'])) - 1377.5673;
        }
        if (inputs['select'] == "1500m") {
            score = 320.6038 * (1500 / ((60 * inputs['min']) + inputs['sec'])) - 1314.0045;
        }
        if (inputs['select'] == "5000m") {
            score = 342.8535 * (5000 / ((60 * inputs['min']) + inputs['sec'])) - 1234.1959;
        }
        if (inputs['select'] == "10000m") {
            score = 349.8535 * (10000 / ((60 * inputs['min']) + inputs['sec'])) - 1171.2847;
        }
        if (inputs['select'] == "Marathon") {
            score = 384.5408 * (42194.99 / ((((60 * inputs['hr']) + inputs['sec']) * 60) + inputs['sec'])) - 1161.8021;
        }
        if (inputs['select'] == "High Jump") {
            score = 2227.8560 * Math.sqrt(inputs['pts']) - 2447.9277;
        }
        if (inputs['select'] == "Long Jump") {
            score = 1065.6947 * Math.sqrt(inputs['pts']) - 2120.1067;
        }
        if (inputs['select'] == "Triple Jump") {
            score = 717.9505 * Math.sqrt(inputs['pts']) - 2042.6637;
        }
        if (inputs['select'] == "Pole Vault") {
            score = 839.81066 * Math.sqrt(inputs['pts']) - 1065.4477;
        }
        if (inputs['select'] == "Discus") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 163.07395 * Math.sqrt(inputs['pts']) - 361.92521;
            }
            else {
                score = 194.62465 * Math.sqrt(inputs['pts']) - 628.31962;
            }
        }
        if (inputs['select'] == "Javelin") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 170.11116 * Math.sqrt(inputs['pts']) - 417.375499;
            }
            else {
                score = 168.13381 * Math.sqrt(inputs['pts']) - 601.71996;
            }
        }
        if (inputs['select'] == "Shot Put") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 326.4432919 * Math.sqrt(inputs['pts']) - 474.3020648;
            }
            else {
                score = 363.768931 * Math.sqrt(inputs['pts']) - 701.8195151;
            }
        }
        if (inputs['select'] == "Hammer") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 155.50271 * Math.sqrt(inputs['pts']) - 364.68208;
            }
            else {
                score = 166.96750 * Math.sqrt(inputs['pts']) - 537.76945;
            }
        }
        if (inputs['select'] == "100mH") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 245.697911 * (100 / inputs['sec']) - 974.427319;
        }
        if (inputs['select'] == "110mH") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 232.393146 * (110 / inputs['sec']) - 977.72885;
        }
        if (inputs['select'] == "400mH") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 235.892182 * (400 / inputs['sec']) - 772.912406;
            }
            else {
                score = 234.92702 * (400 / inputs['sec']) - 990.21339;
            }
        }
        if (inputs['select'] == "Heptathlon") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.12948997 * inputs['pts'] + 133.9909428;
        }
        if (inputs['select'] == "Decathlon") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.1037911 * inputs['pts'] + 81.780218;
        }
        if (inputs['select'] == "3000m SC") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 308.3188307 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 700.8207684;
            }
            else {
                score = score = 317.0980312 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 977.0359001;
            }
        }
        if (inputs['select'] == "10km Walk") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            ;
            score = 456.1325749 * (10000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 818.4565095;
        }
        if (inputs['select'] == "20km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            ;
            score = 514.2338335 * (20000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1188.463045;
        }
        if (inputs['select'] == "50km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            score = 578.7732604 * (50000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1157.14858;
        }
        if (inputs['select'] == "-------") {
            alert("Please select an event!");
            return;
        }
        if (inputs['select'] == "150m") {
            score = 265.3031224 * (150 / inputs['sec']) - 1720.7734;
        }
        if (inputs['select'] == "300m") {
            score = 251.7769577 * (300 / inputs['sec']) - 1414.90071;
        }
        if (inputs['select'] == "600m") {
            score = 285.7637 * (600 / ((60 * inputs['min']) + inputs['sec'])) - 1371.563558;
        }
        if (inputs['select'] == "1000m") {
            score = 313.6503268 * (1000 / ((60 * inputs['min']) + inputs['sec'])) - 1374.25166;
        }
        if (inputs['select'] == "Mile") {
            score = 321.7731201 * (1609.34 / ((60 * inputs['min']) + inputs['sec'])) - 1306.285127;
        }
        if (inputs['select'] == "2000m") {
            score = 328.2988442 * (2000 / ((60 * inputs['min']) + inputs['sec'])) - 1303.430804;
        }
        if (inputs['select'] == "3000m") {
            score = 331.264214 * (3000 / ((60 * inputs['min']) + inputs['sec'])) - 1240.294895;
        }
        return score;
    };
    MercierPointsProvider.prototype.manageScore = function (input, output, score) {
        var score_temp = score;
        var score_init = 0;
        if (input["gender"] == "women") {
            score_init = (score + 370.23683) / 1.10218405;
        }
        else {
            score_init = score;
        }
        if (input["gender"] == "women" && output["gender"] == "men") {
            score = (score_temp + 370.23683) / 1.10218405;
        }
        if (input["gender"] == "men" && output["gender"] == "women") {
            score = 1.10218405 * score_temp - 370.23683;
        }
        this.comparePerformance(input, output, score, score_init);
    };
    MercierPointsProvider.prototype.comparePerformance = function (input, output, score, score_init) {
        var comp_perf_m1, comp_perf_s, comp_perf_s1;
        if (output["select"] == "100m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 100 / (0.003439 * score + 6.72526);
        }
        if (output["select"] == "200m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 200 / (0.003734 * score + 6.36315);
        }
        if (output["select"] == "400m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 400 / (0.0038105 * score + 5.34719);
        }
        if (output["select"] == "800m") {
            output['hr'] = "";
            output['min'] = Math.floor(800 / (0.003300 * score + 4.54844) / 60);
            comp_perf_s1 = ((800 / (0.003300 * score + 4.54844) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "1500m") {
            output['hr'] = "";
            output['min'] = Math.floor(1500 / (0.003117 * score + 4.09988) / 60);
            comp_perf_s1 = ((1500 / (0.003117 * score + 4.09988) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "5000m") {
            output['hr'] = "";
            output['min'] = Math.floor(5000 / (0.0029129 * score + 3.602496) / 60);
            comp_perf_s1 = ((5000 / (0.0029129 * score + 3.602496) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "10000m") {
            output['hr'] = "";
            output['min'] = Math.floor(10000 / (0.002857 * score + 3.348169) / 60);
            comp_perf_s1 = ((10000 / (0.002857 * score + 3.348169) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                comp_perf_s = comp_perf_s1;
            }
            else {
                comp_perf_s = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Marathon") {
            output['hr'] = Math.floor(42194.99 / (0.0025989 * score + 3.022432) / 3600);
            comp_perf_m1 = Math.floor(((42194.99 / (0.0025989 * score + 3.022432) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99 / (0.0025989 * score + 3.022432) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "High Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.00044878 * score + 1.098838, 2);
        }
        if (output["select"] == "Long Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0009379 * score + 1.9897558, 2);
        }
        if (output["select"] == "Triple Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0013899 * score + 2.8472750, 2);
        }
        if (output["select"] == "Pole Vault") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0011566 * score + 1.293145, 2);
        }
        if (output["select"] == "Discus") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0061301 * score + 2.220986, 2);
            }
            else {
                output['pts'] = Math.pow(0.005136 * score + 3.2303518, 2);
            }
        }
        if (output["select"] == "Javelin") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0058689 * score + 2.4609307, 2);
            }
            else {
                output['pts'] = Math.pow(0.0059368 * score + 3.5872388, 2);
            }
        }
        if (output["select"] == "Shot Put") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.003061312 * score + 1.454488154, 2);
            }
            else {
                output['pts'] = Math.pow(0.002747525 * score + 1.930440381, 2);
            }
        }
        if (output["select"] == "Hammer") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0064308 * score + 2.34518185, 2);
            }
            else {
                output['pts'] = Math.pow(0.0059840 * score + 3.2248036, 2);
            }
        }
        if (output["select"] == "100mH") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 100 / (0.00406955 * score + 3.9663329);
        }
        if (output["select"] == "110mH") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 110 / (0.00430147 * score + 4.2084435);
        }
        if (output["select"] == "400mH") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = 400 / (0.0042374 * score + 3.2779819);
            }
            else {
                output['pts'] = 400 / (0.00425567 * score + 4.2157351);
            }
        }
        if (output["select"] == "Heptathlon") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 7.71914876 * score - 1032.090149;
        }
        if (output["select"] == "Decathlon") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 9.6301981 * score - 784.4197095;
        }
        if (output["select"] == "3000m SC") {
            output['hr'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['min'] = Math.floor(3000 / (0.003243381 * score + 2.273050417) / 60);
                comp_perf_s1 = ((3000 / (0.003243381 * score + 2.273050417) / 60) - output['min']) * 60;
                if (Math.floor(comp_perf_s1 / 10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0" + comp_perf_s1;
                }
            }
            else {
                output['min'] = Math.floor(3000 / (0.003149187 * score + 3.084594697) / 60);
                comp_perf_s1 = ((3000 / (0.003149187 * score + 3.084594697) / 60) - output['min']) * 60;
                if (Math.floor(comp_perf_s1 / 10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0" + comp_perf_s1;
                }
            }
        }
        if (output["select"] == "10km Walk") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = Math.floor(10000 / (0.00218465 * score + 1.80028029) / 60);
            comp_perf_s1 = ((10000 / (0.00218465 * score + 1.80028029) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "20km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(20000 / (0.001937687 * score + 2.316516043) / 3600);
            comp_perf_m1 = Math.floor(((20000 / (0.001937687 * score + 2.316516043) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((20000 / (0.001937687 * score + 2.316516043) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "50km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(50000 / (0.001695422 * score + 2.024370694) / 3600);
            comp_perf_m1 = Math.floor(((50000 / (0.001695422 * score + 2.024370694) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((50000 / (0.001695422 * score + 2.024370694) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Indoor") {
            alert("Please select a comparison event!");
            return;
        }
        if (output["select"] == "150m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 150 / (.003768768 * score + 6.486427968);
        }
        if (output["select"] == "300m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 300 / (0.003970935 * score + 5.620258201);
        }
        if (output["select"] == "600m") {
            output['hr'] = "";
            output['min'] = Math.floor(600 / (0.003499 * score + 4.80022) / 60);
            comp_perf_s1 = ((600 / (0.003499 * score + 4.80022) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "1000m") {
            output['hr'] = "";
            output['min'] = Math.floor(1000 / (0.00318746 * score + 4.382052887) / 60);
            comp_perf_s1 = ((1000 / (0.00318746 * score + 4.382052887) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Mile") {
            output['hr'] = "";
            output['min'] = Math.floor(1609.34 / (0.0031062 * score + 4.060811045) / 60);
            comp_perf_s1 = ((1609.34 / (0.0031062 * score + 4.060811045) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "2000m") {
            output['hr'] = "";
            output['min'] = Math.floor(2000 / (0.0030444 * score + 3.97139601) / 60);
            comp_perf_s1 = ((2000 / (0.0030444 * score + 3.97139601) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "3000m") {
            output['hr'] = "";
            output['min'] = Math.floor(3000 / (0.0030147 * score + 3.74703401) / 60);
            comp_perf_s1 = ((3000 / (0.0030147 * score + 3.74703401) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "2 mile") {
            output['hr'] = "";
            output['min'] = Math.floor(2 * 1609.34 / (0.0029949 * score + 3.726724) / 60);
            comp_perf_s1 = ((2 * 1609.34 / (0.0029949 * score + 3.726724) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "20 km") {
            output['hr'] = Math.floor(20000 / (0.0027370 * score + 3.205521) / 3600);
            comp_perf_m1 = Math.floor(((20000 / (0.0027370 * score + 3.205521) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((20000 / (0.0027370 * score + 3.205521) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Half Marathon") {
            output['hr'] = Math.floor(42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600);
            comp_perf_m1 = Math.floor(((42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        output['score'] = score_init;
        input['score'] = score;
    };
    MercierPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MercierPointsProvider);
    return MercierPointsProvider;
}());

//# sourceMappingURL=mercier.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(476);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_users_users__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tools_tools__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_users_authentication__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_tools_validations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_menus_calendar_menu__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Training_text_popover_text_popover__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_training_labels_labelProvider__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_training_trainings_trainingProvider__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_training_exercises_exerciseProvider__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic3_calendar_en__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_tools_calculators_mens__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_tools_calculators_mercier__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_tools_calculators_womens__ = __webpack_require__(451);
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
                        { loadChildren: '../pages/HomeTabs/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/decathlon-calculator/decathlon-calculator.module#DecathlonCalculatorPageModule', name: 'DecathlonCalculatorPage', segment: 'decathlon-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module#HeptathlonMCalculatorPageModule', name: 'HeptathlonMCalculatorPage', segment: 'heptathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module#HeptathlonWCalculatorPageModule', name: 'HeptathlonWCalculatorPage', segment: 'heptathlon-w-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/mercier/mercier.module#MercierPageModule', name: 'MercierPage', segment: 'mercier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module#PentathlonMCalculatorPageModule', name: 'PentathlonMCalculatorPage', segment: 'pentathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module#PentathlonWCalculatorPageModule', name: 'PentathlonWCalculatorPage', segment: 'pentathlon-w-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/calculators/unit-converter/unit-converter.module#UnitConverterPageModule', name: 'UnitConverterPage', segment: 'unit-converter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/gadgets/starting-gun/starting-gun.module#StartingGunPageModule', name: 'StartingGunPage', segment: 'starting-gun', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/gadgets/stopwatch/stopwatch.module#StopwatchPageModule', name: 'StopwatchPage', segment: 'stopwatch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HomeTabs/tools/utilities/utilities.module#UtilitiesModule', name: 'UtilitiesPage', segment: 'utilities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Logins/standard-login/standard-login.module#StandardLoginPageModule', name: 'StandardLoginPage', segment: 'standard-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Training/create-training/create-training.module#CreateTrainingPageModule', name: 'CreateTrainingPage', segment: 'create-training', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Training/text-popover/text-popover.module#TextPopoverPageModule', name: 'TextPopoverPage', segment: 'text-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-training/view-training.module#ViewTrainingPageModule', name: 'ViewTrainingPage', segment: 'view-training', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_20__pages_Training_text_popover_text_popover__["a" /* TextPopoverPage */]
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
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_21__providers_training_labels_labelProvider__["a" /* LabelProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_training_exercises_exerciseProvider__["a" /* ExerciseProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_menus_calendar_menu__["a" /* CalendarMenu */],
                __WEBPACK_IMPORTED_MODULE_25__providers_tools_calculators_mens__["a" /* MenPointsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_tools_calculators_mercier__["a" /* MercierPointsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_tools_calculators_womens__["a" /* WomenPointsProvider */]
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

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_training_exercise_category_bank__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training_exercise_table_type_bank__ = __webpack_require__(214);



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

/***/ 501:
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

/***/ 510:
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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelBank; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__label__ = __webpack_require__(512);

var LabelBank = (function () {
    function LabelBank() {
        this.labelBank = [];
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("100m"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("110mH"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("400m"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("1500m"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Long Jump"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("High Jump"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Pole Vault"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Javelin"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Shot Put"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Discus"));
        this.labelBank.push(new __WEBPACK_IMPORTED_MODULE_0__label__["a" /* Label */]("Decathlon"));
    }
    LabelBank.prototype.fillBankExternal = function () {
        //search for custom labels
    };
    return LabelBank;
}());

//# sourceMappingURL=label-bank.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
var Label = (function () {
    function Label(name) {
        this.label = {
            value: name
        };
    }
    Label.prototype.getValue = function () {
        return this.label.value;
    };
    return Label;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 596:
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

/***/ 597:
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

/***/ 598:
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

/***/ 599:
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

/***/ 600:
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

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_training_labels_labelProvider__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_training_trainings_trainingProvider__ = __webpack_require__(156);
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
    function MyApp(platform, statusBar, splashScreen, keyboard, calendarMenu, labels, training) {
        var _this = this;
        this.calendarMenu = calendarMenu;
        this.labels = labels;
        this.training = training;
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
        this.listOfLabels = [];
        this.labelFilters = [];
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
        this.listOfLabels = this.labels.listOfLabels;
    };
    MyApp.prototype.updateLabelFilters = function (filter) {
        if (this.labelFilters.indexOf(filter) < 0) {
            this.labelFilters.push(filter);
        }
        else {
            this.labelFilters.splice(this.labelFilters.indexOf(filter), 1);
        }
        this.labels.labelFilters = this.labelFilters;
        this.labels.updateFilteredTrainingList(this.training.listOfTrainings);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/'<ion-menu [content]="content" type="reveal" id="mainCalendarMenu">\n    <ion-header>\n        <ion-toolbar>\n            <ion-item no-lines color="dark">\n                <ion-label style="font-size: 14px; color: white; padding-left: 10px;">Jonah Elbaz</ion-label>\n                <ion-select [(ngModel)]="this.calendarMenu.displayedYear" (ionChange)="this.setCalendarYear()">\n                    <ion-option *ngFor="let year of years">{{year}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-calendar></ion-calendar>\n        <!--<ion-calendar [ngClass]="displayFullCalendar ? \'showingCalendar\' : \'noDisplay\'" #calendar-->\n        <!--(swipe)="swipe($event, calendar)"-->\n        <!--(onMonthSelect)="onMonthSelect($event)"-->\n        <!--(onDaySelect)="onDaySelect($event)">-->\n        <!--</ion-calendar>-->\n\n           <ion-label class="menuSectionHeader" (click)="collapsable.filter.main = !collapsable.filter.main">\n                Filters\n               <ion-icon class="arrowIcon" item-left name="ios-arrow-forward" *ngIf="!collapsable.filter.main"></ion-icon>\n               <ion-icon class="arrowIcon" item-left name="ios-arrow-down" *ngIf="collapsable.filter.main"></ion-icon>\n            </ion-label>\n            <ion-list no-lines id="filterList" class="accordion-list" *ngIf="collapsable.filter.main">\n\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.labelsFilterOpen = !collapsable.filter.labelsFilterOpen">\n                    Labels\n                </ion-label>\n                <div *ngIf="collapsable.filter.labelsFilterOpen">\n                    <ion-item *ngFor="let label of listOfLabels">\n                        <ion-label> {{label.getValue()}}</ion-label>\n                        <ion-checkbox (click)="updateLabelFilters(label)"></ion-checkbox>\n                    </ion-item>\n                </div>\n                <ion-label class="calendar-item filter" (click)="collapsable.filter.athleteFilterOpen = !collapsable.filter.athleteFilterOpen">\n                    Athlete\n                </ion-label>\n\n                <div *ngIf="collapsable.filter.athleteFilterOpen">\n                    <ion-item>\n                        <ion-label>Jonah Elbaz</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Dylan Golow</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Alex Stathis</ion-label>\n                        <ion-checkbox></ion-checkbox>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n    </ion-content>\n    <ion-footer>\n    <ion-row>\n        <ion-col style="text-align: center; font-size: 25px;">\n            <ion-icon item-right name="md-share" class="share"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align: center; font-size: 30px;">\n            <ion-icon item-right name="ios-download-outline" class="share"></ion-icon>\n        </ion-col>\n    </ion-row>\n        </ion-footer>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_5__providers_menus_calendar_menu__["a" /* CalendarMenu */], __WEBPACK_IMPORTED_MODULE_6__providers_training_labels_labelProvider__["a" /* LabelProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 659:
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

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 326,
	"./af.js": 326,
	"./ar": 327,
	"./ar-dz": 328,
	"./ar-dz.js": 328,
	"./ar-kw": 329,
	"./ar-kw.js": 329,
	"./ar-ly": 330,
	"./ar-ly.js": 330,
	"./ar-ma": 331,
	"./ar-ma.js": 331,
	"./ar-sa": 332,
	"./ar-sa.js": 332,
	"./ar-tn": 333,
	"./ar-tn.js": 333,
	"./ar.js": 327,
	"./az": 334,
	"./az.js": 334,
	"./be": 335,
	"./be.js": 335,
	"./bg": 336,
	"./bg.js": 336,
	"./bm": 337,
	"./bm.js": 337,
	"./bn": 338,
	"./bn.js": 338,
	"./bo": 339,
	"./bo.js": 339,
	"./br": 340,
	"./br.js": 340,
	"./bs": 341,
	"./bs.js": 341,
	"./ca": 342,
	"./ca.js": 342,
	"./cs": 343,
	"./cs.js": 343,
	"./cv": 344,
	"./cv.js": 344,
	"./cy": 345,
	"./cy.js": 345,
	"./da": 346,
	"./da.js": 346,
	"./de": 347,
	"./de-at": 348,
	"./de-at.js": 348,
	"./de-ch": 349,
	"./de-ch.js": 349,
	"./de.js": 347,
	"./dv": 350,
	"./dv.js": 350,
	"./el": 351,
	"./el.js": 351,
	"./en-au": 352,
	"./en-au.js": 352,
	"./en-ca": 353,
	"./en-ca.js": 353,
	"./en-gb": 354,
	"./en-gb.js": 354,
	"./en-ie": 355,
	"./en-ie.js": 355,
	"./en-il": 356,
	"./en-il.js": 356,
	"./en-nz": 357,
	"./en-nz.js": 357,
	"./eo": 358,
	"./eo.js": 358,
	"./es": 359,
	"./es-do": 360,
	"./es-do.js": 360,
	"./es-us": 361,
	"./es-us.js": 361,
	"./es.js": 359,
	"./et": 362,
	"./et.js": 362,
	"./eu": 363,
	"./eu.js": 363,
	"./fa": 364,
	"./fa.js": 364,
	"./fi": 365,
	"./fi.js": 365,
	"./fo": 366,
	"./fo.js": 366,
	"./fr": 367,
	"./fr-ca": 368,
	"./fr-ca.js": 368,
	"./fr-ch": 369,
	"./fr-ch.js": 369,
	"./fr.js": 367,
	"./fy": 370,
	"./fy.js": 370,
	"./gd": 371,
	"./gd.js": 371,
	"./gl": 372,
	"./gl.js": 372,
	"./gom-latn": 373,
	"./gom-latn.js": 373,
	"./gu": 374,
	"./gu.js": 374,
	"./he": 375,
	"./he.js": 375,
	"./hi": 376,
	"./hi.js": 376,
	"./hr": 377,
	"./hr.js": 377,
	"./hu": 378,
	"./hu.js": 378,
	"./hy-am": 379,
	"./hy-am.js": 379,
	"./id": 380,
	"./id.js": 380,
	"./is": 381,
	"./is.js": 381,
	"./it": 382,
	"./it.js": 382,
	"./ja": 383,
	"./ja.js": 383,
	"./jv": 384,
	"./jv.js": 384,
	"./ka": 385,
	"./ka.js": 385,
	"./kk": 386,
	"./kk.js": 386,
	"./km": 387,
	"./km.js": 387,
	"./kn": 388,
	"./kn.js": 388,
	"./ko": 389,
	"./ko.js": 389,
	"./ky": 390,
	"./ky.js": 390,
	"./lb": 391,
	"./lb.js": 391,
	"./lo": 392,
	"./lo.js": 392,
	"./lt": 393,
	"./lt.js": 393,
	"./lv": 394,
	"./lv.js": 394,
	"./me": 395,
	"./me.js": 395,
	"./mi": 396,
	"./mi.js": 396,
	"./mk": 397,
	"./mk.js": 397,
	"./ml": 398,
	"./ml.js": 398,
	"./mr": 399,
	"./mr.js": 399,
	"./ms": 400,
	"./ms-my": 401,
	"./ms-my.js": 401,
	"./ms.js": 400,
	"./mt": 402,
	"./mt.js": 402,
	"./my": 403,
	"./my.js": 403,
	"./nb": 404,
	"./nb.js": 404,
	"./ne": 405,
	"./ne.js": 405,
	"./nl": 406,
	"./nl-be": 407,
	"./nl-be.js": 407,
	"./nl.js": 406,
	"./nn": 408,
	"./nn.js": 408,
	"./pa-in": 409,
	"./pa-in.js": 409,
	"./pl": 410,
	"./pl.js": 410,
	"./pt": 411,
	"./pt-br": 412,
	"./pt-br.js": 412,
	"./pt.js": 411,
	"./ro": 413,
	"./ro.js": 413,
	"./ru": 414,
	"./ru.js": 414,
	"./sd": 415,
	"./sd.js": 415,
	"./se": 416,
	"./se.js": 416,
	"./si": 417,
	"./si.js": 417,
	"./sk": 418,
	"./sk.js": 418,
	"./sl": 419,
	"./sl.js": 419,
	"./sq": 420,
	"./sq.js": 420,
	"./sr": 421,
	"./sr-cyrl": 422,
	"./sr-cyrl.js": 422,
	"./sr.js": 421,
	"./ss": 423,
	"./ss.js": 423,
	"./sv": 424,
	"./sv.js": 424,
	"./sw": 425,
	"./sw.js": 425,
	"./ta": 426,
	"./ta.js": 426,
	"./te": 427,
	"./te.js": 427,
	"./tet": 428,
	"./tet.js": 428,
	"./tg": 429,
	"./tg.js": 429,
	"./th": 430,
	"./th.js": 430,
	"./tl-ph": 431,
	"./tl-ph.js": 431,
	"./tlh": 432,
	"./tlh.js": 432,
	"./tr": 433,
	"./tr.js": 433,
	"./tzl": 434,
	"./tzl.js": 434,
	"./tzm": 435,
	"./tzm-latn": 436,
	"./tzm-latn.js": 436,
	"./tzm.js": 435,
	"./ug-cn": 437,
	"./ug-cn.js": 437,
	"./uk": 438,
	"./uk.js": 438,
	"./ur": 439,
	"./ur.js": 439,
	"./uz": 440,
	"./uz-latn": 441,
	"./uz-latn.js": 441,
	"./uz.js": 440,
	"./vi": 442,
	"./vi.js": 442,
	"./x-pseudo": 443,
	"./x-pseudo.js": 443,
	"./yo": 444,
	"./yo.js": 444,
	"./zh-cn": 445,
	"./zh-cn.js": 445,
	"./zh-hk": 446,
	"./zh-hk.js": 446,
	"./zh-tw": 447,
	"./zh-tw.js": 447
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
webpackContext.id = 663;

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(216);
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
    ToolsProvider.prototype.parseISOString = function (isoDate) {
        return new Date(isoDate);
    };
    ToolsProvider.prototype.getMonth = function (date) {
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
    ToolsProvider.prototype.getDayOfWeek = function (date) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_labels_label_bank__ = __webpack_require__(511);
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
        this.labelFilters = [];
        this.filteredTrainingList = [];
        this.listOfLabels = new __WEBPACK_IMPORTED_MODULE_1__models_custom_survey_components_labels_label_bank__["a" /* LabelBank */]().labelBank;
    }
    LabelProvider.prototype.updateFilteredTrainingList = function (training) {
        var _this = this;
        this.filteredTrainingList = [];
        training.forEach(function (training) {
            training.mainCalEvent.exercises.forEach(function (exercise) {
                _this.labelFilters.forEach(function (label) {
                    if (exercise.labels.indexOf(label.getValue()) > -1) {
                        _this.filteredTrainingList.push(training);
                    }
                });
            });
        });
        this.filteredTrainingList.sort(this.compare);
    };
    LabelProvider.prototype.compare = function (a, b) {
        if (a.trainingDate < b.trainingDate)
            return -1;
        if (a.trainingDate > b.trainingDate)
            return 1;
        return 0;
    };
    LabelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LabelProvider);
    return LabelProvider;
}());

//# sourceMappingURL=labelProvider.js.map

/***/ }),

/***/ 90:
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_tools__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calendar_calendar_day__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calendar_menu_events__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_labels_labelProvider__ = __webpack_require__(89);
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

/***/ })

},[456]);
//# sourceMappingURL=main.js.map