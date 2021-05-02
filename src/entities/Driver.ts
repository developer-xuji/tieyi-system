export interface IDriver {
    id: number;
    name: string;
    mobile: string;
}

class Driver implements IDriver {

    public id: number;
    public name: string;
    public mobile: string;

    constructor(nameOrUser: string | IDriver, mobile?: string, id?: number) {
        if (typeof nameOrUser === 'string') {
            this.name = nameOrUser;
            this.mobile = mobile || '';
            this.id = id || -1;
        } else {
            this.name = nameOrUser.name;
            this.mobile = nameOrUser.mobile;
            this.id = nameOrUser.id;
        }
    }
}

export default Driver;