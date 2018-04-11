import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from "@ionic/storage";

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FIREBASE_CONFIG} from "./firebase-credentials";
import {AngularFireAuthModule} from "angularfire2/auth";
import {Facebook} from "@ionic-native/facebook";
import {Keyboard} from "@ionic-native/keyboard";
import {UsersProvider} from '../providers/users/users';
import {ToolsProvider} from '../providers/tools/tools';
import {AuthenticationProvider} from "../providers/users/authentication";
import {ValidationProvider} from "../providers/tools/validations";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {DatePicker} from "@ionic-native/date-picker";
import {GooglePlus} from "@ionic-native/google-plus";
import {TextPopoverPage} from "../pages/Training/text-popover/text-popover";
import {LabelProvider} from "../providers/training/labels/labelProvider";
import {TrainingProvider} from "../providers/training/trainings/trainingProvider";
import {ExerciseProvider} from "../providers/training/exercises/exerciseProvider";
import {CalendarModule} from "ionic3-calendar-en";
import {MenPointsProvider} from "../providers/tools/calculators/mens";
import {MercierPointsProvider} from "../providers/tools/calculators/mercier";
import {WomenPointsProvider} from "../providers/tools/calculators/womens";

@NgModule({
    declarations: [
        MyApp,
        TextPopoverPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule,
        CalendarModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TextPopoverPage

    ],
    providers: [
        StatusBar,
        SplashScreen,
        Facebook,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Keyboard,
        UsersProvider,
        ToolsProvider,
        AuthenticationProvider,
        ValidationProvider,
        DatePicker,
        GooglePlus,
        LabelProvider,
        TrainingProvider,
        ExerciseProvider,
        CalendarMenu,
        MenPointsProvider,
        MercierPointsProvider,
        WomenPointsProvider
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {
}
