webpackJsonp([3],{

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrainingPageModule", function() { return CreateTrainingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training__ = __webpack_require__(676);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_training__["a" /* CreateTrainingPage */]),
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

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_logging_activities_activities__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_popover_text_popover__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_custom_survey_components_labels_labelProvider__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_custom_survey_components_trainings_trainingProvider__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_logging_training__ = __webpack_require__(447);
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
        this.toggleGroup = function (group) {
            if (this.isGroupShown(group)) {
                this.shownGroup = null;
            }
            else {
                this.shownGroup = group;
            }
        };
        this.isGroupShown = function (group) {
            return this.shownGroup === group;
        };
        menu.enable(false, 'mainCalendarMenu');
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
            selector: 'page-create-training',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/'<!--\n  Generated template for the CreateTrainingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>New Training</ion-title>\n        <ion-buttons right (click)="createNewTraining()">\n            <button ion-button="arrow-back" color="primary" (click)="cancel()">\n                Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list no-lines>\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'preTraining\')">\n            <ion-col>\n                Pre-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right"  *ngIf="!isGroupShown(\'preTraining\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon  *ngIf="isGroupShown(\'preTraining\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n          <ion-item-group class="item-accordion" *ngIf="isGroupShown(\'preTraining\')">\n\n              <div  *ngFor="let title of preTrainingDivide.range">\n            <ion-item class="ionItemCrop">\n                <ion-label item-start>{{title["key"]}}</ion-label>\n                <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>5</ion-label>\n                </ion-range>\n            </ion-item>\n              </div>\n              <ion-item *ngFor="let title of preTrainingDivide.notes">\n                  <ion-label stacked> {{title["key"]}} </ion-label>\n                  <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n              </ion-item>\n          </ion-item-group>\n\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'training\')">\n            <ion-col>\n                Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right"  *ngIf="!isGroupShown(\'training\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon  *ngIf="isGroupShown(\'training\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list class="item-accordion" *ngIf="isGroupShown(\'training\')">\n            <ion-list>\n                <ion-label stacked class="trainingHeaders">Warm Up</ion-label>\n                <ion-item *ngIf="!mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">Add Warm Up</button>\n                </ion-item>\n                <ion-item *ngIf="mainTraining.activities.warmUp">\n                    <button ion-button (click)="addWarmUp()">{{mainTraining.activities.warmUp}}\n                        <ion-icon class="trainingHeaders" name="close"\n                                  (click)="mainTraining.activities.setWarmUp(null)"></ion-icon>\n                    </button>\n                    <ion-note>View</ion-note>\n\n                </ion-item>\n                <ion-label stacked class="trainingHeaders">Events</ion-label>\n                <div style="margin-top: 20px" *ngIf="trainingEventList.length > 0">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-1 style="margin-right: 20px">\n                                <button ion-button style="border-radius: 25px; width: 10px; height: 30px;" (click)="addActivity()">\n                                <ion-icon name="add"></ion-icon>\n                                </button>\n                            </ion-col>\n                            <ion-col col-10>\n                                <div class="scroll" nowrap>\n                                    <button ion-button class="label" *ngFor="let event of trainingEventList" (click)="removeLabel(event)">\n                                        {{event}}\n                                        <ion-icon name="close" class="trainingHeaders"></ion-icon>\n                                    </button>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid class="exerciseTable">\n                        <ion-row style="padding-bottom: 5px">Sprint Hurdles</ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol exerciseHeader" col-1>\n                                #\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader">\n                                Detail\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader" col-3>\n                                Measure\n                            </ion-col>\n                            <ion-col class="exerciseCol exerciseHeader" col-2>\n                                Reps\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-icon name="checkmark" style="font-size: 20px; padding: 0; font-weight: bold"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol" col-1>\n                                1\n                            </ion-col>\n                            <ion-col class="exerciseCol">\n                                With Blocks\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-3>\n                                42"\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-2>\n                                8\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-checkbox></ion-checkbox>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="exerciseCol" col-1>\n                                2\n                            </ion-col>\n                            <ion-col class="exerciseCol">\n                                Without Blocks\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-3>\n                                39"\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-2>\n                                8\n                            </ion-col>\n                            <ion-col class="exerciseCol" col-1>\n                                <ion-checkbox></ion-checkbox>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class="addSet">\n                                    ADD SET\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid style="width: 100%; border: 1px solid black; margin: 20px 5px 5px 5px;">\n                        <ion-row>\n                            <ion-col style="text-align: center; font-style: italic; opacity: 0.5" (click)="addActivity()">\n                                ADD EXERCISE\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </ion-list>\n            <ion-label stacked class="trainingHeaders">Cool Down</ion-label>\n            <ion-item *ngIf="!mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">Add Cool Down</button>\n            </ion-item>\n            <ion-item *ngIf="mainTraining.activities.coolDown">\n                <button ion-button (click)="addCoolDown()">{{mainTraining.activities.coolDown}}\n                    <ion-icon class="trainingHeaders" name="close"\n                              (click)="mainTraining.activities.setCoolDown(null)"></ion-icon>\n                </button>\n                <ion-note end>View</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Notes</ion-label>\n                <ion-textarea class="thoughts" [(ngModel)]="mainTraining.mainTrainingNotes.val"></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'postTraining\')">\n            <ion-col>\n                Post-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!isGroupShown(\'postTraining\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="isGroupShown(\'postTraining\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <div class="item-accordion" *ngIf="isGroupShown(\'postTraining\')">\n            <ion-item-group>\n                <ion-item class="ionItemCrop" *ngFor="let title of postTrainingDivide.range">\n                    <ion-label item-start>{{title["key"]}}</ion-label>\n                    <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>5</ion-label>\n                    </ion-range>\n                </ion-item>\n                <ion-item *ngFor="let title of postTrainingDivide.notes">\n                    <ion-label stacked> {{title["key"]}} </ion-label>\n                    <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n                </ion-item>\n            </ion-item-group>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Training/create-training/create-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_custom_survey_components_trainings_trainingProvider__["a" /* TrainingProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_custom_survey_components_labels_labelProvider__["a" /* LabelProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_users_entries__["a" /* EntryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */]])
    ], CreateTrainingPage);
    return CreateTrainingPage;
}());

//# sourceMappingURL=create-training.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_table__ = __webpack_require__(448);

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

/***/ })

});
//# sourceMappingURL=3.js.map