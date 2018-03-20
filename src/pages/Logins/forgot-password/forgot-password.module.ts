import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ForgotPasswordPage} from './forgot-password';
import {LoginPage} from "../login/login";

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
  ],
    entryComponents: [
        ForgotPasswordPage,
    ]
})
export class ForgotPasswordPageModule {}
