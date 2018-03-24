webpackJsonp([1],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrainingPageModule", function() { return CreateTrainingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training__ = __webpack_require__(671);
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

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_popover_text_popover__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_custom_survey_components_labels_labelProvider__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_custom_survey_components_trainings_trainingProvider__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_training__ = __webpack_require__(676);
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
    function CreateTrainingPage(navCtrl, menu, navParams, trainings, labels, popoverCtrl, users, training, alertCtrl, tools) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.trainings = trainings;
        this.labels = labels;
        this.popoverCtrl = popoverCtrl;
        this.users = users;
        this.training = training;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
        this.preTraining = this.trainings.preTraining.getPreTraining();
        this.postTraining = this.trainings.postTraining.getPostTraining();
        this.mainTraining = {
            activities: new __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__["a" /* Activities */](),
            mainTrainingNotes: {
                key: 'Notes',
                val: ''
            }
        };
        menu.enable(false, 'mainCalendarMenu');
        this.trainingExpanded = true;
        this.preTrainingExpanded = false;
        this.postTrainingExpanded = false;
        this.listOfEvents = labels.listOfLabels;
        this.trainingEventList = ["Long Jump", "High Jump", "Pole Vault"]; //should be empty out of development
        this.expandPostThoughts = false;
        this.preTrainingDivide = { range: [], notes: [] };
        this.postTrainingDivide = { range: [], notes: [] };
        for (var key in this.preTraining) {
            if (this.preTraining.hasOwnProperty(key)) {
                if (this.preTraining[key]['type'] == "range") {
                    this.preTrainingDivide.range.push(this.preTraining[key]);
                }
                if (this.preTraining[key]['type'] == "note") {
                    this.preTrainingDivide.notes.push(this.preTraining[key]);
                }
            }
        }
        for (var key in this.postTraining) {
            if (this.postTraining.hasOwnProperty(key)) {
                if (this.postTraining[key]['type'] == "range") {
                    this.postTrainingDivide.range.push(this.postTraining[key]);
                }
                if (this.postTraining[key]['type'] == "note") {
                    this.postTrainingDivide.notes.push(this.postTraining[key]);
                }
            }
        }
    }
    CreateTrainingPage.prototype.expandTextArea = function () {
        this.expandPostThoughts = !this.expandPostThoughts;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__text_popover_text_popover__["a" /* TextPopoverPage */], {}, { cssClass: 'custom-popover' });
        popover.present({});
    };
    CreateTrainingPage.prototype.createNewTraining = function () {
        var newTraining = new __WEBPACK_IMPORTED_MODULE_9__models_logging_training__["a" /* Training */]();
        this.preTrainingDivide.notes.forEach(function (note) {
            newTraining.addPreNote(note['key'], note['val']);
        });
        this.preTrainingDivide.range.forEach(function (range) {
            newTraining.addPreRange(range['key'], range['val']);
        });
        this.postTrainingDivide.notes.forEach(function (note) {
            newTraining.addPostNote(note['key'], note['val']);
        });
        this.postTrainingDivide.range.forEach(function (range) {
            newTraining.addPostRange(range['key'], range['val']);
        });
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
                label: data.label['value'],
                value: data.label['value'],
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
            selector: 'page-create-training',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/'<!--\n  Generated template for the CreateTrainingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>New Training</ion-title>\n        <ion-buttons right (click)="createNewTraining()">\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list no-lines>\n        <ion-list-header class="title" (click)="expand(\'pre\')">\n            <ion-col>\n                Pre-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!preTrainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="preTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list *ngIf="preTrainingExpanded">\n          <ion-item-group>\n            <ion-item class="ionItemCrop" *ngFor="let title of preTrainingDivide.range">\n                <ion-label item-start>{{title["key"]}}</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n              <ion-item *ngFor="let title of preTrainingDivide.notes">\n                  <ion-label stacked> {{title["key"]}} </ion-label>\n                  <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n              </ion-item>\n          </ion-item-group>\n        </ion-list>\n\n\n        <ion-list-header (click)="expand(\'training\')" class="title" >\n            <ion-col>\n                Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!trainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="trainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list *ngIf="trainingExpanded">\n            <ion-list>\n                <ion-label stacked class="trainingHeaders">Warm Up</ion-label>\n                <ion-item *ngIf="!mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">Add Warm Up</button>\n                </ion-item>\n                <ion-item *ngIf="mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">{{mainTraining.activities.warmUp}}\n                        <ion-icon class="trainingHeaders" name="close"\n                                  (click)="mainTraining.activities.setWarmUp(null)"></ion-icon>\n                    </button>\n                    <ion-note>View</ion-note>\n\n                </ion-item>\n                <ion-label stacked class="trainingHeaders">Events</ion-label>\n                <div style="margin-top: 20px" *ngIf="trainingEventList.length > 0">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-1 style="margin-right: 20px">\n                                <button ion-button style="border-radius: 25px; width: 10px; height: 30px;" (click)="addActivity()">\n                                <ion-icon name="add"></ion-icon>\n                                </button>\n                            </ion-col>\n                            <ion-col col-10>\n                                <div class="scroll" nowrap>\n                                    <button ion-button class="label" *ngFor="let event of trainingEventList" (click)="removeLabel(event)">\n                                        {{event}}\n                                        <ion-icon name="close" class="trainingHeaders"></ion-icon>\n                                    </button>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid class="exerciseTable">\n                        <ion-row style="padding-bottom: 5px">Sprint Hurdles</ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol exerciseHeader" col-1>\n                                #\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader">\n                                Detail\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader" col-3>\n                                Measure\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader" col-2>\n                                Reps\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-icon name="checkmark" style="font-size: 20px; padding: 0; font-weight: bold"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol" col-1>\n                                1\n                            </ion-col>\n                            <ion-col class="exerciseCol">\n                                With Blocks\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-3>\n                                42"\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-2>\n                                8\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-checkbox></ion-checkbox>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol" col-1>\n                                2\n                            </ion-col>\n                            <ion-col class="exerciseCol">\n                                Without Blocks\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-3>\n                                39"\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-2>\n                                8\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-checkbox></ion-checkbox>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="addSet">\n                                    ADD SET\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid style="width: 100%; border: 1px solid black; margin: 20px 5px 5px 5px;">\n                        <ion-row>\n                            <ion-col style="text-align: center; font-style: italic; opacity: 0.5" (click)="addActivity()">\n                                ADD EXERCISE\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </ion-list>\n            <ion-label stacked class="trainingHeaders">Cool Down</ion-label>\n            <ion-item *ngIf="!mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">Add Cool Down</button>\n            </ion-item>\n            <ion-item *ngIf="mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">{{mainTraining.activities.coolDown}}\n                    <ion-icon class="trainingHeaders" name="close"\n                              (click)="mainTraining.activities.setCoolDown(null)"></ion-icon>\n                </button>\n                <ion-note end>View</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Notes</ion-label>\n                <ion-textarea class="thoughts" [(ngModel)]="mainTraining.mainTrainingNotes.val"></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list-header (click)="expand(\'post\')" class="title" >\n            <ion-col>\n                Post-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!postTrainingExpanded" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="postTrainingExpanded" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <div *ngIf="postTrainingExpanded">\n            <ion-item-group>\n                <ion-item class="ionItemCrop" *ngFor="let title of postTrainingDivide.range">\n                    <ion-label item-start>{{title["key"]}}</ion-label>\n                    <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>5</ion-label>\n                    </ion-range>\n                </ion-item>\n                <ion-item *ngFor="let title of postTrainingDivide.notes">\n                    <ion-label stacked> {{title["key"]}} </ion-label>\n                    <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n                </ion-item>\n            </ion-item-group>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_custom_survey_components_trainings_trainingProvider__["a" /* TrainingProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_custom_survey_components_labels_labelProvider__["a" /* LabelProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__["a" /* EntryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], CreateTrainingPage);
    return CreateTrainingPage;
}());

//# sourceMappingURL=create-training.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__track_events__ = __webpack_require__(673);

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

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TrackEventTrainings_LongJump__ = __webpack_require__(675);


var TrackEvents = (function () {
    function TrackEvents() {
        this.hundred = {
            value: "100m",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.sprintHurdles = {
            value: "110mH",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.fourHundred = {
            value: "400m",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.fifteenHundred = {
            value: "1500m",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.longJump = {
            value: "Long Jump",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_1__TrackEventTrainings_LongJump__["a" /* LongJump */]().listOfTrainings,
        };
        this.highJump = {
            value: "High Jump",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.poleVault = {
            value: "Pole Vault",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.javelin = {
            value: "Javelin Throw",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.discus = {
            value: "Discus Throw",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.shotput = {
            value: "Shot Put",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
        };
        this.decathlon = {
            value: "Decathlon",
            defaultExercises: new __WEBPACK_IMPORTED_MODULE_0__TrackEventTrainings_hundred__["a" /* Hundred */]().listOfTrainings,
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

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hundred; });
var Hundred = (function () {
    function Hundred() {
        this.listOfTrainings = [
            "X meters - Starts",
            "X meters - Tempo",
            "X meters - Y %",
            "X meters - Race",
            "X meters"
        ];
    }
    return Hundred;
}());

//# sourceMappingURL=hundred.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongJump; });
var LongJump = (function () {
    function LongJump() {
        this.listOfTrainings = [
            "X step - Full Jumps",
            "X step - Takeoff",
            "X step - Run Through",
            "Two leg take off - Landing",
            "Two leg take off - No Landing"
        ];
    }
    return LongJump;
}());

//# sourceMappingURL=LongJump.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
var Training = (function () {
    function Training() {
        this.type = "Training";
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
    Training.prototype.setMainCalEvent = function (activities) {
        this.mainCalEvent.activities = activities;
    };
    Training.prototype.setMainCalNotes = function (k, v) {
        this.mainCalEvent.notes[k] = v;
    };
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ })

});
//# sourceMappingURL=1.js.map