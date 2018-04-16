import {async, TestBed} from '@angular/core/testing';
import {IonicApp, IonicErrorHandler, IonicModule, Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MyApp} from './app.component';
import {
    PlatformMock,
    StatusBarMock,
    SplashScreenMock
} from '../../test-config/mocks-ionic';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler} from "@angular/core";
import {Keyboard} from "@ionic-native/keyboard";
import {AuthenticationProvider} from "../providers/users/authentication";
import {DatePicker} from "@ionic-native/date-picker";
import {ValidationProvider} from "../providers/tools/validations";
import {MercierPointsProvider} from "../providers/tools/calculators/mercier";
import {LabelProvider} from "../providers/training/labels/labelProvider";
import {ExerciseProvider} from "../providers/training/exercises/exerciseProvider";
import {GooglePlus} from "@ionic-native/google-plus";
import {MenPointsProvider} from "../providers/tools/calculators/mens";
import {TrainingProvider} from "../providers/training/trainings/trainingProvider";
import {UsersProvider} from "../providers/users/users";
import {ToolsProvider} from "../providers/tools/tools";
import {WomenPointsProvider} from "../providers/tools/calculators/womens";
import {CalendarMenu} from "../providers/menus/calendar-menu";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {BrowserModule} from "@angular/platform-browser";
import {CalendarModule} from "ionic3-calendar-en";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {IonicStorageModule} from "@ionic/storage";
import {FIREBASE_CONFIG} from "./firebase-credentials";
import {TextPopoverPage} from "../pages/Training/text-popover/text-popover";

describe('MyApp Component', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
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
            providers: [
                {provide: StatusBar, useClass: StatusBarMock},
                {provide: SplashScreen, useClass: SplashScreenMock},
                {provide: Platform, useClass: PlatformMock},
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
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
      expect(component instanceof MyApp).toBe(true);
    });

    // it('should have two pages', () => {
    //   expect(component.pages.length).toBe(2);
    // });

});
