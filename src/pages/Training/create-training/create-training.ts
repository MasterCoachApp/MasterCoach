import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Activities} from "../../../models/logging/activities/activities";
import {TrackEvents} from "../../../models/logging/activities/track-events";

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

    activities: Activities[];
    listOfEvents: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      this.trainingExpanded = false;
      this.preTrainingExpanded = false;
      this.postTrainingExpanded = false;

      this.overallThoughtsExpanded = false;
      this.activities = [];
      this.listOfEvents = new TrackEvents().getListOfEvents();
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
      switch (type) {
          case 'overall':
             this.overallThoughtsExpanded = !this.overallThoughtsExpanded;
      }
  }

  addActivity() {

      let alert = this.alertCtrl.create();
      alert.setTitle('Which events would you like to add?');

      this.listOfEvents.forEach( data => {
          alert.addInput({
              type: 'checkbox',
              label: data,
              value: data,
              checked: false
          });
      });

      alert.addButton('Cancel');
      alert.addButton({
          text: 'Add Events',
          handler: data => {
              console.log('Checkbox data:', data);
              // this.activities;
              // this.testCheckboxResult = data;
          }
      });
      alert.present();
  }




  // cancel() {
  //   this.navCtrl.pop();
  // }

}
