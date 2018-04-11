webpackJsonp([11],{

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectExerciseCategoryPageModule", function() { return SelectExerciseCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_exercise_category__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectExerciseCategoryPageModule = (function () {
    function SelectExerciseCategoryPageModule() {
    }
    SelectExerciseCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_exercise_category__["a" /* SelectExerciseCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_exercise_category__["a" /* SelectExerciseCategoryPage */]),
            ],
        })
    ], SelectExerciseCategoryPageModule);
    return SelectExerciseCategoryPageModule;
}());

//# sourceMappingURL=select-exercise-category.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectExerciseCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_training_exercises_exerciseProvider__ = __webpack_require__(448);
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
 * Generated class for the SelectExerciseCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectExerciseCategoryPage = (function () {
    function SelectExerciseCategoryPage(navCtrl, navParams, banks, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.banks = banks;
        this.viewCtrl = viewCtrl;
    }
    SelectExerciseCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectExerciseCategoryPage');
    };
    SelectExerciseCategoryPage.prototype.selectCategory = function (category) {
        this.viewCtrl.dismiss(category);
    };
    SelectExerciseCategoryPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SelectExerciseCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-exercise-category',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Exercises/select-exercise-category/select-exercise-category.html"*/'<!--\n  Generated template for the SelectExerciseCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button="Back" color="primary" (click)="cancel()"><ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>SelectExerciseCategory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let category of banks.exerciseCategoryBank.exerciseCategoryBank" (click)="selectCategory(category)">\n      {{category.category.name}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Exercises/select-exercise-category/select-exercise-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_training_exercises_exerciseProvider__["a" /* ExerciseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SelectExerciseCategoryPage);
    return SelectExerciseCategoryPage;
}());

//# sourceMappingURL=select-exercise-category.js.map

/***/ })

});
//# sourceMappingURL=11.js.map