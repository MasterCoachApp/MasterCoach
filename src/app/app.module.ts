import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/HomeTabs/about/about';
import {ContactPage} from '../pages/HomeTabs/contact/contact';
import {HomePage} from '../pages/HomeTabs/home/home';
import {TabsPage} from '../pages/HomeTabs/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from "@ionic/storage";

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FIREBASE_CONFIG} from "./firebase-credentials";
import {AngularFireAuthModule} from "angularfire2/auth";
import {LoginPage} from "../pages/Logins/login/login";

import {CreateAccountPage} from "../pages/Logins/create-account/create-account";
import {Facebook} from "@ionic-native/facebook";
import {Keyboard} from "@ionic-native/keyboard";
import {UsersProvider} from '../providers/users/users';
import {ToolsProvider} from '../providers/tools/tools';
import {AuthenticationProvider} from "../providers/users/authentication";
import {ForgotPasswordPage} from "../pages/Logins/forgot-password/forgot-password";
import {ValidationProvider} from "../providers/tools/validations";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {DatePicker} from "@ionic-native/date-picker";
import {CalendarModule} from 'ionic3-calendar-en';
import {GooglePlus} from "@ionic-native/google-plus";
import {StandardLoginPage} from "../pages/Logins/standard-login/standard-login";
import {SettingsProvider} from "../providers/settings";
import {CreateTrainingPage} from "../pages/Training/create-training/create-training";
import {EntryProvider} from "../providers/users/entries";
import {TextPopoverPage} from "../pages/Training/text-popover/text-popover";

@NgModule({
  declarations: [
    MyApp,
      TextPopoverPage //why wont this popover lazy load in?
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
    AngularFireModule
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
    SettingsProvider,
    EntryProvider
  ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {}
