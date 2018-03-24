import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TextPopoverPage} from './text-popover';

@NgModule({
  declarations: [
    TextPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TextPopoverPage),
  ],
  entryComponents: [
      TextPopoverPage,
]
})
export class TextPopoverPageModule {}
