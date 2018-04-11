webpackJsonp([13],{

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExercisePageModule", function() { return AddExercisePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_exercise__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddExercisePageModule = (function () {
    function AddExercisePageModule() {
    }
    AddExercisePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_exercise__["a" /* AddExercisePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_exercise__["a" /* AddExercisePage */]),
            ],
        })
    ], AddExercisePageModule);
    return AddExercisePageModule;
}());

//# sourceMappingURL=add-exercise.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExercisePage; });
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
 * Generated class for the AddExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddExercisePage = (function () {
    function AddExercisePage(navCtrl, navParams, viewCtrl, modalCtrl, banks) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.banks = banks;
        this.exercisesToAdd = [];
        this.exerciseRecentBank = []; // currently will be empty
        this.searchQuery = '';
        this.categoryShow = {};
        this.exerciseFilter = 'Category';
        this.exercisesToAdd = [];
        // this.exerciseBank = new ExerciseBank();
        // this.exerciseCategoryBankSorted = this.exerciseCategoryBank.sort((a,b) => {
        //     if(a.category.name < b.category.name) return -1;
        //     if(a.category.name > b.category.name) return 1;
        //     return 0;
        // });
        this.exerciseRecentBank = []; // to be completed
        this.initializeExerciseBankSorted();
        this.initializeExerciseCategoryBank();
        console.log('exerciseBankSorted', this.exerciseBankSorted);
        // console.log('exerciseBank',this.exerciseBank);
        console.log('CATEGORY BANK', this.exerciseCategoryBank); // sorted
        this.exerciseCategoryBank.forEach(function (data) {
            return _this.categoryShow[data.category.name] = false;
        });
        console.log('categoryShow', this.categoryShow);
        this.showAllCategories = false;
    }
    AddExercisePage.prototype.initializeExerciseBankSorted = function () {
        // this.exerciseBankSorted = this.sortAlphabetical(this.banks.exerciseBank, 'exerciseName');
        this.exerciseBankSorted = this.banks.exerciseBank.exerciseBank;
    };
    AddExercisePage.prototype.initializeExerciseCategoryBank = function () {
        // this.exerciseCategoryBankFiltered = this.retrieveFilteredCategories().sort((a,b) => {
        //     if(a.category.name < b.category.name) return -1;
        //     if(a.category.name > b.category.name) return 1;
        //     return 0;
        // });
        this.exerciseCategoryBank = this.banks.exerciseCategoryBank.exerciseCategoryBank;
        this.exerciseCategoryBankFiltered = this.retrieveFilteredCategories();
        console.log('FILTERED CAT BANK', this.exerciseCategoryBankFiltered);
    };
    AddExercisePage.prototype.filterItems = function (searchQuery) {
        // Reset items back to all of the items
        this.initializeExerciseBankSorted();
        // set val to the value of the searchbar
        var val = searchQuery;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.exerciseBankSorted = this.exerciseBankSorted.filter(function (exercise) {
                return (exercise.exerciseName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.initializeExerciseCategoryBank();
        }
        this.initializeExerciseCategoryBank();
    };
    AddExercisePage.prototype.retrieveFilteredCategories = function () {
        var tempCategoryBank = [];
        for (var i = 0; i < this.exerciseBankSorted.length; i++) {
            if (tempCategoryBank.indexOf(this.exerciseBankSorted[i].exerciseCategory) > -1) {
                continue;
            }
            else {
                tempCategoryBank.push(this.exerciseBankSorted[i].exerciseCategory);
            }
        }
        return tempCategoryBank;
    };
    AddExercisePage.prototype.sortAlphabetical = function (arrayOfObjects, property) {
        arrayOfObjects.sort(function (a, b) {
            if (a.property < b.property)
                return -1;
            if (a.property > b.property)
                return 1;
            return 0;
        });
        return arrayOfObjects;
    };
    AddExercisePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AddExercisePage');
    };
    AddExercisePage.prototype.toggleCategoryShow = function (exerciseCategory) {
        this.categoryShow[exerciseCategory.category.name] = !this.categoryShow[exerciseCategory.category.name];
        console.log(this.categoryShow[exerciseCategory.category.name]);
    };
    AddExercisePage.prototype.toggleAllCategories = function () {
        var _this = this;
        this.showAllCategories = !this.showAllCategories;
        this.exerciseCategoryBank.forEach(function (data) {
            _this.categoryShow[data.category.name] = _this.showAllCategories;
            console.log(data.category.name);
            console.log(_this.showAllCategories);
        });
    };
    AddExercisePage.prototype.toggleFilterIsCategory = function () {
        this.filterIsCategory = (this.exerciseFilter == 'Category');
    };
    AddExercisePage.prototype.createExercise = function (searchQuery) {
        var _this = this;
        var createExerciseModal = this.modalCtrl.create('CreateExercisePage', { searchQuery: searchQuery });
        createExerciseModal.onDidDismiss(function (data) {
            if (data) {
                _this.selectExercise(data);
                _this.filterItems(searchQuery);
            }
        });
        createExerciseModal.present();
    };
    AddExercisePage.prototype.selectExercise = function (exercise) {
        var indexOfExercise = this.exercisesToAdd.indexOf(exercise);
        if (indexOfExercise == -1) {
            this.exercisesToAdd.push(exercise);
            console.log('Adding');
        }
        else {
            this.exercisesToAdd.splice(indexOfExercise, 1);
            console.log('Popped!');
        }
        console.log('exercisesToAdd', this.exercisesToAdd);
    };
    AddExercisePage.prototype.addExercisesAndDismiss = function () {
        this.viewCtrl.dismiss(this.exercisesToAdd);
    };
    AddExercisePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    AddExercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-exercise',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Exercises/add-exercise/add-exercise.html"*/'<!--\n  Generated template for the AddExercisePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button="Cancel" color="primary" (click)="cancel()">Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>AddExercise</ion-title>\n    <ion-buttons right>\n      <button *ngIf="exerciseBankSorted.length != 0" ion-button="Submit" color="primary" (click)="addExercisesAndDismiss()">Add\n      </button>\n      <button *ngIf="exerciseBankSorted.length == 0" ion-button="Submit" color="primary" (click)="createExercise(searchQuery)">New\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="filterItems(searchQuery)" [(ngModel)]="searchQuery" autocomplete="on" placeholder="Filter exercises" [showCancelButton]="shouldShowCancel" [animated]="true">\n  </ion-searchbar>\n\n  <ion-segment [(ngModel)]="exerciseFilter" (click)="toggleFilterIsCategory()">\n    <ion-segment-button value="Recent">\n      Recent\n    </ion-segment-button>\n    <ion-segment-button value="Category">\n      Category\n    </ion-segment-button>\n    <ion-segment-button value="A-Z">\n      A-Z\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngClass]="filterIsCategory ? \'categoryToggle\': \'noDisplay\'">\n    <ion-grid  no-lines>\n      <!--<ion-grid *ngIf="exerciseFilter == \'Category\'" no-lines>-->\n\n      <ion-row justify-content-center>\n        <ion-col style="text-align: right" col-4><ion-label>Hide All</ion-label></ion-col>\n        <ion-col style="text-align: center; margin: 0;" col-2><ion-toggle (click)="toggleAllCategories()"></ion-toggle></ion-col>\n        <ion-col style="text-align: left; margin-left: 5px" col-4><ion-label>Show All</ion-label></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list class="searchList" *ngIf="exerciseFilter == \'Recent\'">\n      <ion-item>\n          We need to make a provider that searches and sorts exercises by most recent, remember no duplicates!\n      </ion-item>\n  </ion-list>\n  <ion-list class="searchList" *ngIf="exerciseFilter == \'Category\'" style="text-line-through-color: grey;">\n    <div *ngFor="let exerciseCategory of exerciseCategoryBankFiltered">\n      <button ion-item detail-none (click)="toggleCategoryShow(exerciseCategory)">{{exerciseCategory.category.name}}<ion-icon class="categoryArrow" *ngIf="categoryShow[exerciseCategory.category.name]" name="ios-arrow-down" primary></ion-icon><ion-icon class="categoryArrow" primary *ngIf="!categoryShow[exerciseCategory.category.name]" name="ios-arrow-forward"></ion-icon></button>\n      <ion-list *ngIf="categoryShow[exerciseCategory.category.name]">\n        <div *ngFor="let exercise of exerciseBankSorted">\n          <ion-item *ngIf="exercise.exerciseCategory.category.name == exerciseCategory.category.name">\n            {{exercise.exerciseName}} <ion-icon></ion-icon>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n  </ion-list>\n  <ion-list class="searchList" *ngIf="exerciseFilter == \'A-Z\'">\n    <ion-item *ngFor="let exercise of exerciseBankSorted" (click)="selectExercise(exercise)">\n      {{exercise.exerciseName}} ({{exercise.exerciseCategory.category.name}})\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/MasterCoach/src/pages/Exercises/add-exercise/add-exercise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_training_exercises_exerciseProvider__["a" /* ExerciseProvider */]])
    ], AddExercisePage);
    return AddExercisePage;
}());

//# sourceMappingURL=add-exercise.js.map

/***/ })

});
//# sourceMappingURL=13.js.map