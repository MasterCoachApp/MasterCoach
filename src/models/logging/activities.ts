import {Events} from "../track-events";
import {CoolDown, WarmUp} from 'activities';

export class Activities {

    warmUp: WarmUp;
    coolDown: CoolDown;
    events: TrackEvents[];


    constructor() {
        this.warmUp = null;
        this.coolDown = null;
        this.trackEvents = null;
    }


    getEvents() {
        return this.events;
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
    addEvents(event: Events) {
        this.events.push(event);
    }
    setEvents(trackEvents: TrackEvents[]) {
        this.trackEvents = trackEvents;
    }

}