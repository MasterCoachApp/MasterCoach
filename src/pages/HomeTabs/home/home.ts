import {Component, ViewChild} from '@angular/core';
import {
    App, Content, IonicPage, MenuController, ModalController, NavController, Platform,
    ViewController
} from 'ionic-angular';
import {CalendarDay} from "../../../models/calendar/calendar-day";
import {CalendarMenu} from "../../../providers/menus/calendar-menu";
import {Storage} from "@ionic/storage";
import {LoginPage} from "../../Logins/login/login";
import {UsersProvider} from "../../../providers/users/users";
import {TrainingProvider} from "../../../providers/custom-survey-components/trainings/trainingProvider";
import {TabsPage} from "../tabs/tabs";
import {ToolsProvider} from "../../../providers/tools/tools";
import {Training} from "../../../models/logging/training";
import {Activities} from "../../../models/logging/activities/activities";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild(Content) content: Content;

    today: CalendarDay = new CalendarDay(new Date());
    dateInView: Date = this.today.date;
    monthInView: string = this.today.month;
    datesThisMonth: CalendarDay[] = [];
    listOfTrainings: Training[] = [];

    constructor(public navCtrl: NavController, public app: App, public storage: Storage, public tools: ToolsProvider, public modalCtrl: ModalController, public user: UsersProvider, public menu: MenuController, public platform: Platform, public calMenu: CalendarMenu, public viewCtrl: ViewController, public training: TrainingProvider) {
        //this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;

        this.storage.get('user-email').then(email => {
            if (email == null) {
                this.app.getRootNav().push('LoginPage');
            }
            else {
                user.retrievedLoggedInUser(email).then(response => {
                    if (response == null) {
                        console.log("Auto login failed to find existing user in db");
                        this.app.getRootNav().push('LoginPage');
                    }
                    else {
                          user.loggedIn = response;
                          this.setCalendarEvents(null);
                    }
                }).catch(error => {
                    console.log("Auto login failed to find existing user in db");
                    this.app.getRootNav().push('LoginPage');
                });
            }
        });

        this.activateMenu();
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.scrollTo(this.today.dateValue);
        }, 0);
    }

    activateMenu() {
        this.menu.enable(true, 'mainCalendarMenu');
    }

    goToToday() {
        if (this.dateInView.getMonth() != (new Date).getMonth()) {
            this.datesThisMonth = this.calMenu.datesArray.currentMonth;
            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.currentMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.currentMonth;

            this.calMenu.setLastMonth(new Date());
            this.calMenu.setNextMonth(new Date());

            this.today = new CalendarDay(new Date());
            this.dateInView = new Date();
            this.monthInView = this.today.month;

            this.training.setEventsCurrentMonth();
            this.training.setEventsNextMonth();
            this.training.setEventsLastMonth();

            this.calMenu.displayedYear = this.dateInView.getFullYear();

            this.scrollTo(this.today.dateValue);

        }
        else {
            this.scrollTo(this.today.dateValue);
        }

    }

    changMonth(sign: string) {

        if (sign == "plus") {
            let newDate = new Date(this.dateInView.getFullYear(), this.dateInView.getMonth() + 1, this.dateInView.getDate());
            this.calMenu.datesArray.datesLastMonth = this.calMenu.datesArray.datesThisMonth;
            this.calMenu.monthsArray.lastMonth = this.calMenu.monthsArray.thisMonth;

            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.datesNextMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.nextMonth;

            this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;
            this.monthInView = this.calMenu.monthsArray.thisMonth;

            this.dateInView = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());

            this.calMenu.setDisplayYear(this.dateInView.getFullYear());

            //set next month values
            this.calMenu.setNextMonth(newDate);

            this.training.setEventsNextMonth();

            this.calMenu.displayedYear = this.dateInView.getFullYear();

            console.log(this.calMenu.displayedYear);


        }
        if (sign == "minus") {
            let newDate = new Date(this.dateInView.getFullYear(), this.dateInView.getMonth() - 1, this.dateInView.getDate());

            this.calMenu.datesArray.datesNextMonth = this.calMenu.datesArray.datesThisMonth;
            this.calMenu.monthsArray.nextMonth = this.calMenu.monthsArray.thisMonth;

            this.calMenu.datesArray.datesThisMonth = this.calMenu.datesArray.datesLastMonth;
            this.calMenu.monthsArray.thisMonth = this.calMenu.monthsArray.lastMonth;

            this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;
            this.monthInView = this.calMenu.monthsArray.thisMonth;

            //set last month values

            this.dateInView = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());

            this.calMenu.setDisplayYear(this.dateInView.getFullYear());

            this.calMenu.setLastMonth(newDate);

            this.training.setEventsLastMonth();

            this.calMenu.displayedYear = this.dateInView.getFullYear();

        }

        this.content.scrollToTop(0);
    }

    createNewTraining(dateSelected: string) {
        this.navCtrl.push('CreateTrainingPage', {date: dateSelected});
    }

    setCalendarEvents(event) {
            if(this.user.loggedIn != null) {
                    let that = this;
                    let promise = new Promise((resolve, reject) => {
                        that.training.getUserTrainings(this.user.loggedIn).then(response => {
                            console.log(response);
                            if (response != "Success") {
                                reject(response);
                            }
                            else {
                                resolve();
                            }
                        });
                    });

                    promise.then(() => {
                        this.listOfTrainings = this.training.listOfTrainings;

                        this.training.setEventsCurrentMonth();

                        this.calMenu.datesArray.currentMonth = this.calMenu.datesArray.datesThisMonth;
                        this.datesThisMonth = this.calMenu.datesArray.datesThisMonth;

                        setTimeout(() => {
                            this.scrollTo(this.today.dateValue);
                        }, 0);

                        this.training.setEventsLastMonth();

                        this.training.setEventsNextMonth();

                        if(event != null) {
                            event.complete();
                        }

                    }).catch(error => {
                        if(event != null) {
                            event.complete();
                        }
                        console.log(error);
                        that.tools.presentToast("bottom", "There was an unexpected error retrieving your calendar information.");
                    });
                }
            }

    scrollTo(elementId: string) {
        let doc = document.getElementById(elementId);
        if (doc != null) {
            let yOffset = doc.offsetTop;
            this.content.scrollTo(0, yOffset, 0);
            document.getElementById("calendarList").scrollTo(0, yOffset);
        }
    }
}
