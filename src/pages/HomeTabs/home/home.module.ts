import {IonicPageModule} from "ionic-angular";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {HomePage} from "./home";
import {CalendarModule} from "ionic3-calendar-en";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        CalendarModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomePageModule {}
