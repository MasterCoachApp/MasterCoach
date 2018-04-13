import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRoutineCategoryPage } from './create-routine-category';

@NgModule({
  declarations: [
    CreateRoutineCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRoutineCategoryPage),
  ],
})
export class CreateRoutineCategoryPageModule {}
