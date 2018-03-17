import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {ModalController} from "ionic-angular";
import {CreateTrainingPage} from "../../Training/create-training/create-training";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public modalCtrl: ModalController) {

  }

    createNewTraining() {
        let profileModal = this.modalCtrl.create(CreateTrainingPage);
        profileModal.present();
    }
}
