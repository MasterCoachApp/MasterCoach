webpackJsonp([0],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrainingPageModule", function() { return CreateTrainingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTrainingPageModule = (function () {
    function CreateTrainingPageModule() {
    }
    CreateTrainingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_training__["a" /* CreateTrainingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_training__["a" /* CreateTrainingPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__create_training__["a" /* CreateTrainingPage */],
            ]
        })
    ], CreateTrainingPageModule);
    return CreateTrainingPageModule;
}());

//# sourceMappingURL=create-training.module.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_logging_training__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logging_qna__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_activities__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_track_events__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__ = __webpack_require__(1029);
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
            activities: new __WEBPACK_IMPORTED_MODULE_7__models_logging_activities_activities__["a" /* Activities */](),
            mainTrainingNotes: {
                key: 'Notes',
                val: ''
            }
        };
        this.trainingExpanded = false;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;
        this.listOfEvents = new __WEBPACK_IMPORTED_MODULE_8__models_logging_activities_track_events__["a" /* TrackEvents */]().getListOfEvents();
        this.trainingEventList = [];
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
        //let mainNotes: Notes[] = [];
        var preNote = new __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__["a" /* Notes */](this.preTraining.preThoughts.key, this.preTraining.preThoughts.val);
        preNotes.push(preNote);
        var postNote = new __WEBPACK_IMPORTED_MODULE_9__models_logging_notes__["a" /* Notes */](this.postTraining.postThoughts.key, this.postTraining.postThoughts.val);
        postNotes.push(postNote);
        // let mainNote = new Notes(this.mainTraining.mainTrainingNotes.key, this.mainTraining.mainTrainingNotes.val);
        // mainNotes.push(mainNote);
        var newTraining = new __WEBPACK_IMPORTED_MODULE_5__models_logging_training__["a" /* Training */]();
        newTraining.setPreCalEvent(qna, preNotes);
        newTraining.setPostCalEvent(this.postTraining.overallRating, postNotes);
        //   newTraining.setMainCalEvent(this.mainTraining.activities, mainNotes);
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
    CreateTrainingPage.prototype.selectEventWorkout = function (value) {
    };
    CreateTrainingPage.prototype.removeLabel = function (event) {
        //Remove label from UI
        this.trainingEventList.splice(this.trainingEventList.indexOf(event), 1);
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
                        _this.trainingEventList.push(index);
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
            label: 'Warm up A',
            value: 'Warm up A',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Warm up B',
            value: 'Warm up B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: function (data) {
                console.log('Checkbox data:', data);
                if (data != null) {
                    _this.mainTraining.activities.setWarmUp(data);
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
            label: 'Cool down A',
            value: 'Cool down A',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Cool down B',
            value: 'Cool down B',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Add',
            handler: function (data) {
                console.log('Checkbox data:', data);
                if (data != null) {
                    _this.mainTraining.activities.setCoolDown(data);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-training',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/'<!--\n  Generated template for the CreateTrainingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>New Training</ion-title>\n        <ion-buttons right (click)="createNewTraining()">\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list no-lines>\n        <ion-list-header class="title" (click)="expand(\'pre\')">\n            <ion-col>\n                Pre-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!preTrainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="preTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list *ngIf="preTrainingExpanded">\n            <ion-item-group>\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>Readiness</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right\n                           [(ngModel)]="preTraining.readiness.val" class="range">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>Energy</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right\n                           [(ngModel)]="preTraining.energy.val">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>Hunger</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right\n                           [(ngModel)]="preTraining.hunger.val">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>Stress</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right\n                           [(ngModel)]="preTraining.stress.val">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>Body State</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right\n                           [(ngModel)]="preTraining.bodyState.val">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n            <ion-item >\n                <ion-label>Pain\n                    <ion-icon name="medkit"></ion-icon>\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Thoughts</ion-label>\n                <ion-textarea class="thoughts" [(ngModel)]="preTraining.preThoughts.val"></ion-textarea>\n            </ion-item>\n            </ion-item-group>\n\n        </ion-list>\n\n\n        <ion-list-header (click)="expand(\'training\')" class="title" >\n            <ion-col>\n                Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!trainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="trainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list *ngIf="trainingExpanded">\n            <ion-list>\n                <ion-label stacked class="trainingHeaders">Warm Up</ion-label>\n                <ion-item *ngIf="!mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">Add Warm Up</button>\n                </ion-item>\n                <ion-item *ngIf="mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">{{mainTraining.activities.warmUp}}\n                        <ion-icon class="trainingHeaders" name="close"\n                                  (click)="mainTraining.activities.setWarmUp(null)"></ion-icon>\n                    </button>\n                    <ion-note>View</ion-note>\n\n                </ion-item>\n                <ion-label stacked class="trainingHeaders">Events</ion-label>\n                <ion-list *ngIf="trainingEventList.length > 0">\n                    <ion-item>\n                        <div *ngFor="let event of trainingEventList">\n                            <button ion-button (click)="selectEventWorkout(event)">\n                                {{event}}\n                            </button>\n                            <ion-icon name="close" class="trainingHeaders"\n                                      (click)="removeLabel(event)"></ion-icon>\n                        </div>\n                    </ion-item>\n                </ion-list>\n                <ion-item>\n                    <button ion-button (click)="addActivity()">Add Event</button>\n                </ion-item>\n            </ion-list>\n            <ion-label stacked class="trainingHeaders">Cool Down</ion-label>\n            <ion-item *ngIf="!mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">Add Cool Down</button>\n            </ion-item>\n            <ion-item *ngIf="mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">{{mainTraining.activities.coolDown}}\n                    <ion-icon class="trainingHeaders" name="close"\n                              (click)="mainTraining.activities.setCoolDown(null)"></ion-icon>\n                </button>\n                <ion-note end>View</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Notes</ion-label>\n                <ion-textarea class="thoughts" [(ngModel)]="mainTraining.mainTrainingNotes.val"></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list-header (click)="expand(\'post\')" class="title" >\n            <ion-col>\n                Post-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!postTrainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="postTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <div *ngIf="postTrainingExpanded">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label item-start>Rate Your Training</ion-label>\n                    <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true"\n                               [(ngModel)]="postTraining.overallRating">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>5</ion-label>\n                    </ion-range>\n                </ion-item>\n                <ion-item no-lines>\n                    <ion-label stacked>Overall Thoughts\n                        <ion-icon name="ios-expand"></ion-icon>\n                    </ion-label>\n                    <ion-textarea class="thoughts" [(ngModel)]="postTraining.postThoughts.val"></ion-textarea>\n                </ion-item>\n            </ion-list>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__["a" /* EntryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], CreateTrainingPage);
    return CreateTrainingPage;
}());

//# sourceMappingURL=create-training.js.map

/***/ }),

/***/ 1026:
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

/***/ 1027:
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

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__track_events__ = __webpack_require__(584);

var Activities = (function () {
    function Activities() {
        this.warmUp = null;
        this.coolDown = null;
        this.trackEvents = new __WEBPACK_IMPORTED_MODULE_0__track_events__["a" /* TrackEvents */]();
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
    Activities.prototype.removeEvent = function (event) {
        //this.trackEvents.splice(this.trackEvents.indexOf(event),1);
    };
    Activities.prototype.setEvents = function (trackEvents) {
        this.trackEvents = trackEvents;
    };
    return Activities;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 1029:
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

});
//# sourceMappingURL=0.js.map