import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CreateAccountPage} from './create-account';
import {LoginPage} from "../login/login";

@NgModule({
  declarations: [
    CreateAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ]
})
export class CreateAccountPageModule {}
