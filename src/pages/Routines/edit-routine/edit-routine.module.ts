import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRoutinePage } from './edit-routine';

@NgModule({
  declarations: [
    EditRoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(EditRoutinePage),
  ],
})
export class EditRoutinePageModule {}
