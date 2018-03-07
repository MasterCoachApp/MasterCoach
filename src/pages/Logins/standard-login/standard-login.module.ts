import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandardLoginPage } from './standard-login';

@NgModule({
  declarations: [
    StandardLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(StandardLoginPage),
  ],
})
export class StandardLoginPageModule {}
