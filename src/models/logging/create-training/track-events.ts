import {ITrackEvents} from "../interfaces/track_events-Interface";
import {Hundred} from "../../TrackEventTrainings/hundred";
import {LongJump} from "../../TrackEventTrainings/LongJump";

export class TrackEvents implements ITrackEvents {

    public hundred: {
        [key: string]: any
    };
    public sprintHurdles: {
        [key: string]: any
    };
    public fourHundred: {
        [key: string]: any
    };
    public fifteenHundred: {
        [key: string]: any
    };
    public longJump: {
        [key: string]: any
    };
    public highJump: {
        [key: string]: any
    };
    public poleVault: {
        [key: string]: any
    };
    public javelin: {
        [key: string]: any
    };
    public discus: {
        [key: string]: any
    };
    public shotput: {
        [key: string]: any
    };
    public decathlon: {
        [key: string]: any
    };

    public listOfEvents: string[];

    getListOfEvents(): string[] {
        return this.listOfEvents;
    };

    constructor() {

        this.hundred = {
            value: "100m",
            defaultExercises: new Hundred().listOfTrainings,

        };
        this.sprintHurdles = {
            value: "110mH",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.fourHundred = {
            value: "400m",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.fifteenHundred = {
            value: "1500m",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.longJump = {
            value: "Long Jump",
            defaultExercises: new LongJump().listOfTrainings,
        };
        this.highJump = {
            value: "High Jump",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.poleVault = {
            value: "Pole Vault",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.javelin = {
            value: "Javelin Throw",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.discus = {
            value: "Discus Throw",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.shotput = {
            value: "Shot Put",
            defaultExercises: new Hundred().listOfTrainings,
        };
        this.decathlon = {
            value: "Decathlon",
            defaultExercises: new Hundred().listOfTrainings,
        };


        this.listOfEvents = ["100m", "110mH", "400m","1500m", "Long Jump", "High Jump", "Pole Vault", "Discus Throw", "Javelin Throw", "Shot Put", "Decathlon"];
    }



}