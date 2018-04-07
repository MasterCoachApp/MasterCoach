import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectExerciseCategoryPage } from './select-exercise-category';

@NgModule({
  declarations: [
    SelectExerciseCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectExerciseCategoryPage),
  ],
})
export class SelectExerciseCategoryPageModule {}
