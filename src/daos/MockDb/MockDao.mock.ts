/* eslint-disable no-console */
import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import { IDriver } from '@entities/Driver';
import { IContainer } from '@entities/Container';
import fs from "fs";
import { ITask } from '@entities/Task';

interface IDatabase {
    users: IUser[];
    drivers: IDriver[];
    containers: IContainer[];
    tasks: ITask[];
}

const date = new Date();
const fileName = 'Db/'+date.getFullYear()+'-'+date.getMonth()+'.json';
 const emptyDb = {
            drivers: [],
            containers: [],
            tasks:[],
        }
if(fs.existsSync(fileName) === false){
    fs.writeFileSync(fileName,"{}");
    jsonfile.writeFileSync(fileName, emptyDb);
}

class MockDaoMock {

    private readonly dbFilePath = 'Db/'+date.getFullYear()+'-'+date.getMonth()+'.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }


    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default MockDaoMock;
