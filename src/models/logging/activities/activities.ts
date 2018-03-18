import {WarmUp} from "./warm-up";
import {CoolDown} from "./cool-down";
import {TrackEvents} from "./track-events";

export class Activities {

    warmUp: WarmUp;
    coolDown: CoolDown;
    trackEvents: TrackEvents[];


    constructor() {
        this.warmUp = null;
        this.coolDown = null;
        this.trackEvents = [];
    }


    getEvents() {
        return this.trackEvents;
    }
    getCoolDown() {
        return this.coolDown;
    }
    getWarmUp() {
        return this.warmUp;
    }

    setCoolDown(coolDown: CoolDown) {
        this.coolDown = coolDown;
    }
    setWarmUp(warmUp: WarmUp) {
        this.warmUp = warmUp;
    }
    addEvents(event: TrackEvents) {
        this.trackEvents.push(event);
    }
    removeEvent(event: TrackEvents) {
        this.trackEvents.splice(this.trackEvents.indexOf(event),1);
    }
    setEvents(trackEvents: TrackEvents[]) {
        this.trackEvents = trackEvents;
    }

}