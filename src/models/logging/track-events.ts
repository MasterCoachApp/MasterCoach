import {ITrackEvents} from "./interfaces/events-Interface";

export class TrackEvents implements ITrackEvents{

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
            value: "100m"
        };
        this.sprintHurdles = {
            value: "110mH",
        };
        this.fourHundred = {
            value: "400m",
        };
        this.fifteenHundred = {
            value: "1500m",
        };
        this.longJump = {
            value: "Long Jump",
        };
        this.highJump = {
            value: "High Jump",
        };
        this.poleVault = {
            value: "Pole Vault",
        };
        this.javelin = {
            value: "Javelin Throw",
        };
        this.discus = {
            value: "Discus Throw",
        };
        this.shotput = {
            value: "Shot Put",
        };
        this.decathlon = {
            value: "Decathlon",
        };


        this.listOfEvents = ["100m", "110mH", "400m","1500m", "Long Jump", "High Jump", "Pole Vault", "Discus Throw", "Javelin Throw", "Shot Put", "Decathlon"];
    }


}