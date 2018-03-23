export class PostTraining {


    private postTraining: {
        [key: string]: object
    };

    constructor() {
        this.postTraining = {
            postThoughts: {
                key: 'Thoughts',
                val: '',
                type: 'note'
            },
            rating: {
                key: 'Overall',
                val: 0,
                type: 'range'
            }
        };
    }

    public getPostTraining() {
        return this.postTraining;
    }

    public addRange(key: string) {
        let machineKey = key.replace(/ /g,'');
        this.postTraining.machineKey = {
            key: key,
            val: 0,
            type: 'range'
        };
    }

    public addNote(key: string) {
        let machineKey = key.replace(/ /g,'');
        this.postTraining.machineKey = {
            key: key,
            val: '',
            type: 'note'
        };

    }

}