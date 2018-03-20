import {CreateAccountPage} from "../../Logins/create-account/create-account";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {AboutPage} from "./about";

@NgModule({
    declarations: [
        AboutPage,
    ],
    imports: [
        IonicPageModule.forChild(AboutPage),
    ]
})
export class AboutPageModule {}
