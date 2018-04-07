webpackJsonp([1],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrainingPageModule", function() { return CreateTrainingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_training__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(688);
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
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
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

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_popover_text_popover__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_training_labels_labelProvider__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_training_trainings_trainingProvider__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_logging_training__ = __webpack_require__(685);
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
    // exerciseKeys: string[];
    function CreateTrainingPage(navCtrl, viewCtrl, modalCtrl, menu, navParams, trainings, labels, popoverCtrl, users, alertCtrl, tools) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.trainings = trainings;
        this.labels = labels;
        this.popoverCtrl = popoverCtrl;
        this.users = users;
        this.alertCtrl = alertCtrl;
        this.tools = tools;
        this.preTraining = this.trainings.preTraining.getPreTraining();
        this.postTraining = this.trainings.postTraining.getPostTraining();
        this.exercisesByCategory = {};
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
        // this.exerciseKeys = [];
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
        this.training = new __WEBPACK_IMPORTED_MODULE_7__models_logging_training__["a" /* Training */]();
        this.updateExercisesByCategory();
        this.trainingDateHour = new Date().getHours(); // not UTC because we want the time zone localized
        if (this.trainingDateHour < 12) {
            this.trainingMorningAfternoonEvening = 'Morning';
        }
        else if (this.trainingDateHour < 5) {
            this.trainingMorningAfternoonEvening = 'Afternoon';
        }
        else {
            this.trainingMorningAfternoonEvening = 'Evening';
        }
    }
    CreateTrainingPage.prototype.expandTextArea = function () {
        this.expandPostThoughts = !this.expandPostThoughts;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__text_popover_text_popover__["a" /* TextPopoverPage */], {}, { cssClass: 'custom-popover' });
        popover.present({});
    };
    CreateTrainingPage.prototype.createNewTraining = function () {
        var newTraining = new __WEBPACK_IMPORTED_MODULE_7__models_logging_training__["a" /* Training */]();
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
        newTraining.mainCalEvent.exercises = this.training.mainCalEvent.exercises;
        if (navigator.onLine) {
            this.trainings.createNewEntry(newTraining);
            this.viewCtrl.dismiss();
        }
        else {
            this.tools.presentToast("bottom", "Sorry, you're not connected to the internet");
        }
    };
    CreateTrainingPage.prototype.removeLabel = function (label, exerciseTable) {
        //Remove label from UI
        this.training.mainCalEvent.exercises[this.training.mainCalEvent.exercises.indexOf(exerciseTable)].removeLabel(label);
    };
    CreateTrainingPage.prototype.addExercise = function () {
        var _this = this;
        var addExerciseModal = this.modalCtrl.create('AddExercisePage');
        addExerciseModal.onDidDismiss(function (data) {
            if (data) {
                _this.training.addExercises(data);
                // this.updateExercisesByCategory();
            }
        });
        addExerciseModal.present();
    };
    CreateTrainingPage.prototype.updateExercisesByCategory = function () {
        var _this = this;
        var currentCategory = '';
        this.training.mainCalEvent.exercises.forEach(function (data) {
            if (data.exercise.exerciseCategory.category.name != currentCategory) {
                currentCategory = data.exercise.exerciseCategory.category.name;
                if (_this.exercisesByCategory.hasOwnProperty(currentCategory)) {
                    _this.exercisesByCategory[currentCategory + ' B'] = [data];
                }
                else {
                    _this.exercisesByCategory[currentCategory] = [data];
                }
            }
            else if (data.exercise.exerciseCategory.category.name == currentCategory) {
                _this.exercisesByCategory[currentCategory].push(data);
            }
        });
        console.log('updateExercises', this.exercisesByCategory);
    };
    CreateTrainingPage.prototype.addSet = function (exerciseTable) {
        this.training.mainCalEvent.exercises[this.training.mainCalEvent.exercises.indexOf(exerciseTable)].addSet();
    };
    CreateTrainingPage.prototype.deleteSet = function (set, exerciseTable) {
        this.training.mainCalEvent.exercises[this.training.mainCalEvent.exercises.indexOf(exerciseTable)].deleteSet(set);
    };
    CreateTrainingPage.prototype.addLabel = function (exerciseTable) {
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
            text: 'Add Labels',
            handler: function (data) {
                console.log('Checkbox data [LABELS]:', data);
                if (data != null) {
                    // data.forEach ( index => {
                    _this.training.mainCalEvent.exercises[_this.training.mainCalEvent.exercises.indexOf(exerciseTable)].addLabels(data);
                    // });
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
                    _this.training.setWarmUp(data);
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
                    _this.training.setCoolDown(data);
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
    CreateTrainingPage.prototype.tooltip = function () {
        this.tools.toastCtrl.create({
            message: 'One day this will be a popover tooltip',
            duration: 3000
        }).present();
    };
    CreateTrainingPage.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    CreateTrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-training',template:/*ion-inline-start:"/workspace/MasterCoach/src/pages/Training/create-training/create-training.html"*/'<!--\n  Generated template for the CreateTrainingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button color="primary" (click)="cancel()">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>{{trainingMorningAfternoonEvening}} Training</ion-title>\n        <ion-buttons right>\n            <button ion-button color="primary" (click)="createNewTraining()">\n                Save\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list no-lines>\n        <!--PRE TRAINING-->\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'preTraining\')">\n            <ion-col>\n                Pre-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right"  *ngIf="!isGroupShown(\'preTraining\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon  *ngIf="isGroupShown(\'preTraining\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <div class="item-accordion" *ngIf="isGroupShown(\'preTraining\')">\n            <ion-grid>\n                <ion-row class="ionItemCrop" *ngFor="let title of preTrainingDivide.range" align-items-center>\n                    <ion-col col-4 left>{{title["key"]}}</ion-col>\n                    <ion-col col-8 right>\n                        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                            <ion-label range-left>0</ion-label>\n                            <ion-label range-right>5</ion-label>\n                        </ion-range>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n            <ion-list>\n                <ion-item *ngFor="let title of preTrainingDivide.notes">\n                    <ion-label stacked> {{title["key"]}} </ion-label>\n                    <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <!--TRAINING-->\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'training\')">\n            <ion-col>\n                Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right"  *ngIf="!isGroupShown(\'training\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon  *ngIf="isGroupShown(\'training\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <ion-list class="item-accordion" *ngIf="isGroupShown(\'training\')">\n            <ion-list>\n                <ion-label stacked class="trainingHeaders">Warm Up</ion-label>\n                <ion-row *ngIf="!training.mainCalEvent.warmUp">\n                    <ion-col class="addWarmUpCoolDown" (click)="addWarmUp()">\n                        + Add Warm Up\n                    </ion-col>\n                </ion-row>\n                <ion-item *ngIf="training.mainCalEvent.warmUp">\n                    <button ion-button (click)="addWarmUp()">{{training.mainCalEvent.warmUp}}\n                        <ion-icon class="trainingHeaders" name="close"\n                                  (click)="training.setWarmUp(null)">\n                        </ion-icon>\n                    </button>\n                </ion-item>\n                <ion-label stacked class="trainingHeaders">Training</ion-label>\n                <div *ngFor="let exercise of training.mainCalEvent.exercises ; let i = index">\n                    <ion-grid class="exerciseTable" no-margin>\n                        <ion-row *ngIf="i >= 1 && training.mainCalEvent.exercises[i].exercise.exerciseCategory !== training.mainCalEvent.exercises[i-1].exercise.exerciseCategory">\n                            <ion-col style="font-size: large" left>\n                                {{exercise.exercise.exerciseCategory.category.name}}\n                            </ion-col>\n                        </ion-row>\n                        <ion-row *ngIf="i == 0">\n                            <ion-col style="font-size: large" left>\n                                {{exercise.exercise.exerciseCategory.category.name}}\n                            </ion-col>\n                        </ion-row>\n                        <!--<div *ngFor="let exercise of exercisesByCategory[exerciseCategory]">-->\n                            <ion-row style="padding-bottom: 5px; width: 100%;" nowrap align-items-center justify-content-between>\n                                <ion-col style="font-size: medium" left>{{exercise.exercise.exerciseName}}</ion-col>\n                                <ion-col col-1 style="margin-right: 20px">\n                                    <button ion-button class="exerciseTableIcon" (click)="addLabel(exercise)">\n                                        <ion-icon name="pricetags"></ion-icon>\n                                    </button>\n                                </ion-col>\n                                <ion-col col-6 *ngIf="exercise.labels.length > 0">\n                                    <div class="scroll">\n                                        <button ion-button class="exerciseTableLabel" *ngFor="let label of exercise.labels" (click)="removeLabel(label, exercise)">\n                                            {{label}}\n                                            <ion-icon name="close" class="trainingHeaders"></ion-icon>\n                                        </button>\n                                    </div>\n                                </ion-col>\n                                <ion-col col-1 right style="margin-right: 20px">\n                                    <button ion-button style="border-radius: 25px; width: 10px; height: 30px;" (click)="tooltip()">\n                                        <ion-icon name="md-create"></ion-icon>\n                                    </button>\n                                </ion-col>\n                                <!--<ion-col right><ion-icon ion-button icon-only name="alert"></ion-icon></ion-col>-->\n                                <!--<ion-col><ion-note>NOTE</ion-note></ion-col>-->\n                                <!--<ion-col><ion-option>option</ion-option></ion-col>-->\n                            </ion-row>\n                            <ion-row no-margin no-border>\n                                <!--<ion-col *ngFor="let column of exercise.tableHeaders" col-{{exercise.columnMap[column]}}>{{column}}</ion-col>-->\n                                <!--ngStyle="width: exercise.columnMap[column]"-->\n                                <!--<ion-col style="text-align: center" *ngFor="let column of exercise.tableHeaders">{{column}}</ion-col>-->\n                                <ion-col class="exerciseHeader" col-1>#</ion-col>\n                                <ion-col class="exerciseHeader">Detail</ion-col>\n                                <ion-col class="exerciseHeader" col-3>Measure</ion-col>\n                                <ion-col class="exerciseHeader" col-2>Reps</ion-col>\n                                <ion-col class="exerciseHeader" col-1>\n                                    <ion-icon name="checkmark-outline" style="font-size: 20px; padding: 0; font-weight: bold"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n\n                    <!--<ion-row *ngFor="let set of exercise.sets">-->\n                    <!--<ion-col *ngFor="let key of exercise.sets[set]" class="exerciseCol exerciseHeader"><ion-input>{{set[key]}}</ion-input></ion-col>-->\n\n                    <!--&lt;!&ndash;<ion-col *ngFor="let key of mainTraining.create-training.exercises[exercise].sets[set].keys()" class="exerciseCol exerciseHeader"><ion-input>{{set[key]}}</ion-input></ion-col>&ndash;&gt;-->\n                    <!--<ion-col class="exerciseCol" col-1>-->\n                    <!--<ion-checkbox name="checkmark" style="font-size: 20px; padding: 0; font-weight: bold" [(ngModel)]="set.complete"></ion-checkbox>-->\n                    <!--</ion-col>-->\n                    <!--</ion-row>-->\n                    <!--BEST VERSION BELOW-->\n\n                            <ion-row *ngFor="let set of exercise.sets" no-padding no-margin align-items-stretch>\n                                <ion-col class="exerciseCol" no-margin  col-1>{{set.setNumber}}</ion-col>\n                                <ion-col class="exerciseCol"><ion-input text-center no-margin placeholder="Detail" [(ngModel)]="set.detail"></ion-input></ion-col>\n                                <ion-col class="exerciseCol" col-3><ion-input text-center no-margin placeholder="Measure" [(ngModel)]="set.measure"></ion-input></ion-col>\n                                <ion-col class="exerciseCol" col-2><ion-input text-center no-margin placeholder="Reps" [(ngModel)]="set.reps"></ion-input></ion-col>\n                                <ion-col class="exerciseCol" no-margin col-1>\n                                    <ion-checkbox style="font-size: 10px;" no-padding no-margin [checked]="false" [(ngModel)]="set.complete"></ion-checkbox>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col text-capitalize class="addSet" (click)="addSet(exercise)">\n                                        + ADD SET\n                                </ion-col>\n                            </ion-row>\n                        <!--</div>-->\n                    </ion-grid>\n                </div>\n\n                <ion-grid class="exerciseTable" no-padding>\n                    <ion-row>\n                        <ion-col text-capitalize class="addExercise" (click)="addExercise()">\n                            + ADD EXERCISE\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-list>\n            <ion-label stacked class="trainingHeaders">Cool Down</ion-label>\n            <ion-row *ngIf="!training.mainCalEvent.coolDown">\n                <ion-col text-capitalize class="addWarmUpCoolDown" (click)="addCoolDown()">\n                    + Add Cool Down\n                </ion-col>\n            </ion-row>\n            <ion-item *ngIf="training.mainCalEvent.coolDown">\n                <ion-card class="warmUpCard" ion-button (click)="addCoolDown()">{{training.mainCalEvent.coolDown}}\n                    <ion-icon class="trainingHeaders" name="close"\n                              (click)="training.setCoolDown(null)"></ion-icon>\n                </ion-card>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>Notes</ion-label>\n                <ion-textarea class="thoughts" [(ngModel)]="training.mainCalEvent.notes.val"></ion-textarea>\n            </ion-item>\n        </ion-list>\n\n        <!--POST TRAINING-->\n        <ion-list-header class="title item-stable" (click)="toggleGroup(\'postTraining\')">\n            <ion-col>\n                Post-Training\n            </ion-col>\n            <ion-col style="text-align: right; width: 100%;" col-8>\n                <ion-icon style="text-align: right" *ngIf="!isGroupShown(\'postTraining\')" class="drop"\n                          name="ios-arrow-forward"></ion-icon>\n                <ion-icon *ngIf="isGroupShown(\'postTraining\')" class="drop" name="ios-arrow-down" right></ion-icon>\n            </ion-col>\n        </ion-list-header>\n        <div class="item-accordion" *ngIf="isGroupShown(\'postTraining\')">\n            <ion-grid>\n                <ion-row class="ionItemCrop" *ngFor="let title of postTrainingDivide.range" align-items-center>\n                    <ion-col col-4 left>{{title["key"]}}</ion-col>\n                    <ion-col col-8 right>\n                        <ion-range min="0" max="5" [snaps]="true" steps="1" [pin]="true" right class="range" [(ngModel)]="title[\'val\']">\n                            <ion-label range-left>0</ion-label>\n                            <ion-label range-right>5</ion-label>\n                        </ion-range>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-list>\n                <ion-item *ngFor="let title of postTrainingDivide.notes">\n                    <ion-label stacked> {{title["key"]}} </ion-label>\n                    <ion-textarea class="thoughts" [(ngModel)]="title[\'val\']"></ion-textarea>\n                </ion-item>\n            </ion-list>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/workspace/MasterCoach/src/pages/Training/create-training/create-training.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_training_trainings_trainingProvider__["a" /* TrainingProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_training_labels_labelProvider__["a" /* LabelProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_training_labels_labelProvider__["a" /* LabelProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */]) === "function" && _l || Object])
    ], CreateTrainingPage);
    return CreateTrainingPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=create-training.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_training_exercise_table__ = __webpack_require__(686);

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
            warmUp: null,
            coolDown: null,
            exercises: [],
            notes: {}
        };
        var date = new Date();
        this.trainingDate = date.toISOString().slice(0, 10);
        this.trainingTime = date.toDateString().slice(20, 21);
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
    Training.prototype.setCoolDown = function (coolDown) {
        this.mainCalEvent.coolDown = coolDown;
    };
    Training.prototype.setWarmUp = function (warmUp) {
        this.mainCalEvent.warmUp = warmUp;
    };
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercise_set__ = __webpack_require__(687);

var ExerciseTable = (function () {
    // notes: string;
    // pinnedNotes: string;
    // tableHeaderList: string[];
    function ExerciseTable(exercise) {
        this.labels = [];
        this.exercise = exercise;
        // this.exerciseCategory = exercise.exerciseCategory; // exercise.exerciseCategory
        // this.exerciseName = exercise.exerciseName; // exercise.exerciseName
        // this.tableType = exercise.exerciseTableType; // exercise.exerciseTableType
        // this.tableHeaderList = ['#', 'Detail', 'Measure', 'Reps']; // hard coded for now, switch to take form ExerciseTableType
        // this.tableHeaderList = exercise.exerciseTableType.tableHeaderList; // this is the way we will be going!
        this.sets = [new __WEBPACK_IMPORTED_MODULE_0__exercise_set__["a" /* ExerciseSet */](1)];
        // this.sets.push(new ExerciseSet(1));
        // this.notes = null;
        // this.pinnedNotes = null;
        // this.showNotes = false;
        // this.exerciseCategory = new ExerciseCategory().discus;
        // this.columnMap = new ExerciseTableColumn();
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
    // setTableHeaders(tableType: ExerciseTableTypes) {
    //
    // }
    //
    // setName(exerciseName: string) {
    //     this.exerciseName = exerciseName;
    //     console.log(this);
    //     // add first set here
    // }
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
}());

//# sourceMappingURL=exercise-table.js.map

/***/ }),

/***/ 687:
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

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_my__ = __webpack_require__(689);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__my_my__["a" /* MyPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__my_my__["a" /* MyPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MyPipe = (function () {
    function MyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    // transform(value: string, ...args) {
    //   return value.toLowerCase();
    // }
    MyPipe.prototype.transform = function (value, args) {
        console.log('keys', Object.keys(value));
        console.log('object', value);
        return Object.keys(value);
    };
    MyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'keys',
        })
    ], MyPipe);
    return MyPipe;
}());

//# sourceMappingURL=my.js.map

/***/ })

});
//# sourceMappingURL=1.js.map