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
        this.trackEvents = null;
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
    setEvents(trackEvents: TrackEvents[]) {
        this.trackEvents = trackEvents;
    }

}