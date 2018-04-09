export class Label {

    public label: {
        [key: string]: any
    };

    constructor(name: string){
        this.label = {
            value: name
        };
    }

    getValue() {
        return this.label.value;
    }

}