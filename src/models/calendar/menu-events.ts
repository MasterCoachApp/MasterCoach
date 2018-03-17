import {ITrackEvents} from "../logging/interfaces/track_events-Interface";
import {TrackEvents} from "../logging/activities/track-events";

export class MenuEvents extends TrackEvents {

    listOfEvents: string[];

    constructor() {
        super();
        this.hundred.displayed = true;
        this.hundred.filtered = false;

        this.sprintHurdles.displayed = true;
        this.sprintHurdles.filtered = false;

        this.fourHundred.displayed = true;
        this.fourHundred.filtered = false;

        this.fifteenHundred.displayed = true;
        this.fifteenHundred.filtered = false;

        this.longJump.displayed = true;
        this.longJump.filtered = false;

        this.highJump.displayed = true;
        this.highJump.filtered = false;

        this.poleVault.displayed = true;
        this.poleVault.filtered = false;

        this.javelin.displayed = true;
        this.javelin.filtered = false;

        this.discus.displayed = true;
        this.discus.filtered = false;

        this.shotput.displayed = true;
        this.shotput.filtered = false;

        this.decathlon.displayed = true;
        this.decathlon.filtered = false;

    }

    getFilterFromEvent(event: string): boolean {
        switch(event) {
            case "100m":
                return this.hundred.filtered;
            case "110mH":
                return  this.sprintHurdles.filtered;
            case "400m":
                return this.fourHundred.filtered;
            case "1500m":
                return this.fifteenHundred.filtered;
            case "Long Jump":
                return this.longJump.filtered;
            case "High Jump":
                return this.highJump.filtered;
            case "Pole Vault":
                return this.poleVault.filtered;
            case "Javelin Throw":
                return this.javelin.filtered;
            case "Discus Throw":
                return this.discus.filtered;
            case "Shot Put":
                return this.shotput.filtered;
            case "Decathlon":
                return this.decathlon.filtered;
        }

    }


    updateObeject(event: string, property: string) {
        switch(event) {
            case "100m":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.hundred.filtered = !this.hundred.filtered;
                }
                return this.hundred;
            case "110mH":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.sprintHurdles.filtered = !this.sprintHurdles.filtered;
                }
                return this.sprintHurdles;
            case "400m":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.fourHundred.filtered = !this.fourHundred.filtered;
                }
                return this.fourHundred;
            case "1500m":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.fifteenHundred.filtered = !this.fifteenHundred.filtered;
                }
                return this.fifteenHundred;
            case "Long Jump":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.longJump.filtered = !this.longJump.filtered;
                }
                return this.longJump;
            case "High Jump":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.highJump.filtered = !this.highJump.filtered;
                }
                return this.highJump;
            case "Pole Vault":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.poleVault.filtered = !this.poleVault.filtered;
                }
                return this.poleVault;
            case "Javelin Throw":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.javelin.filtered = !this.javelin.filtered;
                }
                return this.javelin;
            case "Discus Throw":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.discus.filtered = !this.discus.filtered;
                }
                return this.discus;
            case "Shot Put":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.shotput.filtered = !this.shotput.filtered;
                }
                return this.shotput;
            case "Decathlon":
                if(property == "displayed") {

                }
                if(property == "filtered") {
                    this.decathlon.filtered = !this.decathlon.filtered;
                }
                return this.decathlon;
        }
    }
}