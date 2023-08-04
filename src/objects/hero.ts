export class Hero {
    id!: number;
    name!: string;
    description!: string;

    constructor(init?:Partial<Hero>) {
        Object.assign(this, init);
    }
}