import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {StandardLoginPage} from './standard-login';
import {CreateTrainingPage} from "../../Training/create-training/create-training";

@NgModule({
  declarations: [
    StandardLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(StandardLoginPage),
  ],
    entryComponents: [
        StandardLoginPage,
    ]
})
export class StandardLoginPageModule {}
