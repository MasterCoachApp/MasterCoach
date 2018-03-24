import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolsPage } from './tools';
import {CreateAccountPage} from "../../../Logins/create-account/create-account";

@NgModule({
  declarations: [
    ToolsPage,
  ],
  imports: [
    IonicPageModule.forChild(ToolsPage),
  ],
  entryComponents: [
      ToolsPage,
]
})
export class ToolsPageModule {}
