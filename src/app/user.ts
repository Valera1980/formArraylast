import { Phone } from './phone';

export class User {
    id: string;
    name: string;
    phones: Phone[];
    constructor({
        id = null,
        name = '',
        phones = []
    }= {}) {
        this.id = id;
        this.name = name;
        this.phones = phones;
    }
}
