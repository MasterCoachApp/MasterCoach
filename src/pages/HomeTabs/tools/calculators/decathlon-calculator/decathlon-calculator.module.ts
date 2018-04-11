import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecathlonCalculatorPage } from './decathlon-calculator';

@NgModule({
  declarations: [
    DecathlonCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(DecathlonCalculatorPage),
  ],
})
export class DecathlonCalculatorPageModule {}
