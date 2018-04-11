import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitConverterPage } from './unit-converter';

@NgModule({
  declarations: [
    UnitConverterPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitConverterPage),
  ],
})
export class UnitConverterPageModule {}
