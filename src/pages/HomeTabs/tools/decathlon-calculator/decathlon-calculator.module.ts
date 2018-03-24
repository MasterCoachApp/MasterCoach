import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecathlonCalculatorPage } from './decathlon-calculator';
import {ToolsPage} from "../tools-home/tools";

@NgModule({
  declarations: [
    DecathlonCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(DecathlonCalculatorPage),
  ],
    entryComponents: [
        DecathlonCalculatorPage,
    ]
})
export class DecathlonCalculatorPageModule {}
