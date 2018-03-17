import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateTrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-training',
  templateUrl: 'create-training.html',
})
export class CreateTrainingPage {

    trainingExpanded: boolean;
    preTrainingExpanded: boolean;
    postTrainingExpanded: boolean;

    overallThoughtsExpanded: boolean;

    postThoughts: string;
    overallRating: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.trainingExpanded = false;
      this.preTrainingExpanded = false;
      this.postTrainingExpanded = false;

      this.overallThoughtsExpanded = false;
  }

  expand(type: string) {
      switch(type) {
          case 'pre':
              this.preTrainingExpanded = !this.preTrainingExpanded;
              break;
          case 'post':
              this.postTrainingExpanded = !this.postTrainingExpanded;
              break;
          case 'training':
              this.trainingExpanded = !this.trainingExpanded;
              break;
      }
  }

    displayText(type: string) {
      switch(type) {
          case 'overall':
              this.overallThoughtsExpanded = !this.overallThoughtsExpanded;
      }
    }


  cancel() {
    this.navCtrl.pop();
  }

}
