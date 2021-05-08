import { IDriver } from '@entities/Driver';
import MockDaoMock from '../MockDb/MockDao.mock';

class DriverDao extends MockDaoMock {
    public async getOne(mobile: string): Promise<IDriver | null> {
        const db = await super.openDb();
        for (const driver of db.drivers) {
            if (driver.mobile === mobile) {
                return driver;
            }
        }
        return null;
    }


    public async getAll(): Promise<IDriver[]> {
        const db = await super.openDb();
        return db.drivers;
    }


    public async add(driver: IDriver): Promise<void> {
        const db = await super.openDb();
        
        //自动生成id
        let driverId = 1;
        while(db.drivers.filter((d)=>d.id === driverId).length > 0)
            driverId += 1;
        driver.id = driverId;

        db.drivers.push(driver);
        await super.saveDb(db);
    }


    public async update(driver: IDriver): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.drivers.length; i++) {
            if (db.drivers[i].id === driver.id) {
                db.drivers[i] = driver;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Driver not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.drivers.length; i++) {
            if (db.drivers[i].id === id) {
                db.drivers.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Driver not found');
    }
}

export default DriverDao;