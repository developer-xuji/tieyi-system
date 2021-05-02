import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import { IDriver } from '@entities/Driver';


interface IDatabase {
    users: IUser[];
    drivers: IDriver[];
}


class MockDaoMock {

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }


    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default MockDaoMock;
