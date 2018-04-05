import {Hundred} from "../../TrackEventTrainings/hundred";
import {LongJump} from "../../TrackEventTrainings/LongJump";

export class ExerciseCategory {

    // do this like label and use category bank to make all the categories?
    public category: {
        [key: string]: any
    };

    // public sprints: {
    //     [key: string]: any
    // };
    // public longSprints: {
    //     [key: string]: any
    // };
    // public tempo: {
    //     [key: string]: any
    // };
    // public distance: {
    //     [key: string]: any
    // };
    // public sprintHurdles: {
    //     [key: string]: any
    // };
    // public fourHundredHurdles: {
    //     [key: string]: any
    // };
    // public longJump: {
    //     [key: string]: any
    // };
    // public highJump: {
    //     [key: string]: any
    // };
    // public tripleJump: {
    //     [key: string]: any
    // };
    // public poleVault: {
    //     [key: string]: any
    // };
    // public javelin: {
    //     [key: string]: any
    // };
    // public discus: {
    //     [key: string]: any
    // };
    // public shotput: {
    //     [key: string]: any
    // };
    // public hammer: {
    //     [key: string]: any
    // };
    // public plyo: {
    //     [key: string]: any
    // };
    // public medBall: {
    //     [key: string]: any
    // };
    // public stabilization: {
    //     [key: string]: any
    // };
    // public misc: {
    //     [key: string]: any
    // };

    constructor(name: string) {
        this.category = {
            name: name
        };
        // this.sprints = {
        //     name: 'Sprints'
        // };
        // this.longSprints = {
        //     name: 'Long Sprints'
        // };
        // this.tempo = {
        //     name: 'Tempo'
        // };
        // this.distance = {
        //     name: 'Distance'
        // };
        // this.sprintHurdles = {
        //     name: 'Sprint Hurdles'
        // };
        // this.fourHundredHurdles = {
        //     name: '400m Hurdles'
        // };
        // this.longJump = {
        //     name: 'Long Jump'
        // };
        // this.tripleJump = {
        //     name: 'Triple Jump'
        // };

    }
}