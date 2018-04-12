webpackJsonp([21],{

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExercisePageModule", function() { return CreateExercisePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_exercise__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateExercisePageModule = (function () {
    function CreateExercisePageModule() {
    }
    CreateExercisePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_exercise__["a" /* CreateExercisePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_exercise__["a" /* CreateExercisePage */]),
            ],
        })
    ], CreateExercisePageModule);
    return CreateExercisePageModule;
}());

//# sourceMappingURL=create-exercise.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateExercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_logging_exercises_exercise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_training_exercises_exerciseProvider__ = __webpack_require__(448);
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
 * Generated class for the CreateExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateExercisePage = (function () {
    function CreateExercisePage(navCtrl, navParams, viewCtrl, banks, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.banks = banks;
        this.modalCtrl = modalCtrl;
        this.exerciseName = this.navParams.get('searchQuery');
    }
    CreateExercisePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateExercisePage');
    };
    CreateExercisePage.prototype.createExerciseAndDismiss = function () {
        this.exercise = new __WEBPACK_IMPORTED_MODULE_2__models_logging_exercises_exercise__["a" /* Exercise */](this.exerciseName, this.exerciseCategory, this.exerciseTableType);
        console.log(this.exercise);
        this.banks.exerciseBank.addExercise(this.exercise);
        console.log('EXERCISE BANK', this.banks.exerciseBank.exerciseBank);
        this.viewCtrl.dismiss(this.exercise);
    };
    CreateExercisePage.prototype.presentExerciseCategoryModal = function () {
        var _this = this;
        var categoryModal = this.modalCtrl.create('SelectExerciseCategoryPage');
        categoryModal.onDidDismiss(function (data) {
            if (data) {
                _this.exerciseCategory = data;
            }
        });
        categoryModal.present();
    };
    CreateExercisePage.prototype.presentExerciseTableTypeModal = function () {
        var _this = this;
        var tableTypeModal = this.modalCtrl.create('SelectExerciseTableTypePage');
        tableTypeModal.onDidDismiss(function (data) {
            if (data) {
                _this.exerciseTableType = data;
            }
        });
        tableTypeModal.present();
    };
    CreateExercisePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CreateExercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-exercise',template:/*ion-inline-start:"/workspace/MasterCoach/src/pages/Exercises/create-exercise/create-exercise.html"*/'<!--\n  Generated template for the CreateExercisePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button="Cancel" color="primary" (click)="cancel()">Cancel\n      </button>\n    </ion-buttons>\n    <ion-title> New Exercise</ion-title>\n    <ion-buttons right>\n      <button ion-button="Cancel" color="primary" (click)="createExerciseAndDismiss()">Create\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list style="padding-top: 10px">\n    <ion-item>\n      <ion-label item-content>Name</ion-label>\n      <ion-input item-content type="text" placeholder="Enter a name" [(ngModel)]="exerciseName" right>\n        {{exerciseName}}\n      </ion-input>\n    </ion-item>\n    <button ion-item detail-push (click)="presentExerciseCategoryModal()">\n      <ion-label>Category</ion-label>\n      <ion-label class="newLabel" *ngIf="exerciseCategory" right>{{exerciseCategory.category.name}}</ion-label>\n    </button>\n    <button ion-item detail-push (click)="presentExerciseTableTypeModal()">\n      <ion-label>Type</ion-label>\n      <ion-label class="newLabel" *ngIf="exerciseTableType" right>{{exerciseTableType.tableTypeName}}</ion-label>\n    </button>\n  </ion-list>\n\n  <!--<ion-grid style="padding: 0; width: 100%; margin: 0;">-->\n    <!--<ion-row ion-item>-->\n      <!--<ion-col item-content left><ion-label>Name</ion-label></ion-col>-->\n      <!--<ion-col item-content col-8>-->\n        <!--<ion-input type="text" placeholder="Enter a name" [(ngModel)]="exerciseName">-->\n          <!--{{exerciseName}}-->\n        <!--</ion-input>-->\n      <!--</ion-col>-->\n    <!--</ion-row>-->\n    <!--<ion-row ion-item detail-push (click)="presentExerciseCategoryModal()">-->\n      <!--<ion-col item-content left><ion-label>Category</ion-label></ion-col>-->\n      <!--<ion-col item-content right class="newLabel" *ngIf="exerciseCategory">{{exerciseCategory.category.name}}</ion-col>-->\n    <!--</ion-row>-->\n    <!--<ion-row ion-item detail-push (click)="presentExerciseTableTypeModal()">-->\n      <!--<ion-col item-content left><ion-label>Type</ion-label></ion-col>-->\n      <!--<ion-col item-content right class="newLabel" *ngIf="exerciseTableType">{{exerciseTableType.tableTypeName}}</ion-col>-->\n    <!--</ion-row>-->\n  <!--</ion-grid>-->\n</ion-content>\n'/*ion-inline-end:"/workspace/MasterCoach/src/pages/Exercises/create-exercise/create-exercise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_training_exercises_exerciseProvider__["a" /* ExerciseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CreateExercisePage);
    return CreateExercisePage;
}());

//# sourceMappingURL=create-exercise.js.map

/***/ })

});
//# sourceMappingURL=21.js.map