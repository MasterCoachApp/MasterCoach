import {Training} from './training';
import {Treatment} from './treatment';
import {Competition} from './competition';


export class CalendarEvent {
    private Trainings: Training[];
    private Treatments: Treatment[];
    private Competitions: Competition[];

    constructor(){
        this.Trainings = null;
        this.Treatments = null;
        this.Competitions = null;
    }

    /*
        Public Getters
     */

    public getTrainings() {
        return this.Trainings;
    }
    public getTreatments() {
        return this.Treatments;
    }
    public getCompetitions() {
        return this.Competitions
    }

    /*
        Public Setters
     */

    public setTrainings(Trainings: Training[]) {
        this.Trainings = Trainings;
    }
    public setTreatments(Treatments: Treatment[]) {
        this.Treatments = Treatments;
    }
    public setCompetitions(Competitions: Competition[]) {
        this.Competitions = Competitions;
    }
}



