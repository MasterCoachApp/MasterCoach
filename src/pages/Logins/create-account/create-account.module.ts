import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CreateAccountPage} from './create-account';
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

@NgModule({
  declarations: [
    CreateAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountPage),
  ],
    entryComponents: [
        CreateAccountPage,
    ]
})
export class CreateAccountPageModule {}
