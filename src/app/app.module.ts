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
import {EntryProvider} from "../providers/users/entries";
import {TextPopoverPage} from "../pages/Training/text-popover/text-popover";
import {LabelProvider} from "../providers/custom-survey-components/labels/labelProvider";
import {TrainingProvider} from "../providers/custom-survey-components/trainings/trainingProvider";
import {CalendarModule} from "ionic3-calendar-en";

@NgModule({
    declarations: [
        MyApp,
        TextPopoverPage,
        // AboutPage,
        // ContactPage,
        // HomePage,
        // TabsPage,
        // LoginPage,
        // CreateAccountPage,
        // ForgotPasswordPage,
        // StandardLoginPage,
        // CreateTrainingPage
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
        // AboutPage,
        // ContactPage,
        // HomePage,
        // TabsPage,
        // LoginPage,
        // CreateAccountPage,
        // ForgotPasswordPage,
        // StandardLoginPage,
        // CreateTrainingPage
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
        CalendarMenu,
        DatePicker,
        GooglePlus,
        EntryProvider,
        LabelProvider,
        TrainingProvider
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {
}
