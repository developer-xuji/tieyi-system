export interface IDriver {
    id: number;
    name: string;
    mobile: string;
}

class Driver implements IDriver {

    public id: number;
    public name: string;
    public mobile: string;

    constructor(nameOrDriver: string | IDriver, mobile?: string, id?: number) {
        if (typeof nameOrDriver === 'string') {
            this.name = nameOrDriver;
            this.mobile = mobile || '';
            this.id = id || -1;
        } else {
            this.name = nameOrDriver.name;
            this.mobile = nameOrDriver.mobile;
            this.id = nameOrDriver.id;
        }
    }
}

export default Driver;