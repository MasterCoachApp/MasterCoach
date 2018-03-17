import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTrainingPage } from './create-training';

@NgModule({
  declarations: [
    CreateTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTrainingPage),
  ],
})
export class CreateTrainingPageModule {}