export class Phone {
    id: string;
    phoneNumber: string;
    constructor({ id = null, phoneNumber = '' } = {}) {
        this.id = id;
        this.phoneNumber = phoneNumber;
    }
}
