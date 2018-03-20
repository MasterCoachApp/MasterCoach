import {IonicPageModule} from "ionic-angular";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {HomePage} from "./home";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
