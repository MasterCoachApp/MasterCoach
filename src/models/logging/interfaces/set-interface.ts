export interface ISet {

    setNumber: {
        [key: number]: any
    };

    detail: string;
    measurement: string;
    reps: any;
    complete: boolean;

    setOfTable: any[];

    getSet(): any[];

}