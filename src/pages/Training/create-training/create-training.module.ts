import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {CreateTrainingPage} from './create-training';
import {MyPipe} from "../../../pipes/my/my";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    CreateTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTrainingPage),
      PipesModule
  ],
  entryComponents: [
    CreateTrainingPage,
  ]
})
export class CreateTrainingPageModule {}
