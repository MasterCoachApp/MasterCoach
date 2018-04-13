import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRoutinePage } from './create-routine';

@NgModule({
  declarations: [
    CreateRoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRoutinePage),
  ],
})
export class CreateRoutinePageModule {}
