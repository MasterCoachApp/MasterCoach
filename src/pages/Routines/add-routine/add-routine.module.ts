import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRoutinePage } from './add-routine';

@NgModule({
  declarations: [
    AddRoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRoutinePage),
  ],
})
export class AddRoutinePageModule {}
