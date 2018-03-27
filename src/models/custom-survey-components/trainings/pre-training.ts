export class PreTraining {


        private preTraining: {
            [key: string]: object
        };

    constructor() {
        this.preTraining = {
            readiness: {
                key: "Readiness",
                val: 0,
                type: 'range'
            },
            hunger: {
                key: "Hunger",
                val: 0,
                type: 'range'
            },
            stress: {
                key: "Stress",
                val: 0,
                type: 'range'
            },
            bodyState: {
                key: "Body State",
                val: 0,
                type: 'range'
            },
            energy: {
                key: "Energy",
                val: 0,
                type: 'range'
            },
            preThoughts: {
                key: "Thoughts",
                val: '',
                type: 'note'
            },

        };
    }

    public getPreTraining() {
        return this.preTraining;
    }

    public addRange(key: string) {
        let machineKey = key.replace(/ /g,'');
        this.preTraining.machineKey = {
            key: key,
            val: 0,
            type: 'range'
        };
    }

    public addNote(key: string) {
        let machineKey = key.replace(/ /g,'');
        this.preTraining.machineKey = {
            key: key,
            val: '',
            type: 'note'
        };

    }

}