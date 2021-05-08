import {IContainer} from "@entities/Container";
import MockDaoMock from '../MockDb/MockDao.mock';

class ContainerDao extends MockDaoMock {
    public async getOne(id: number): Promise<IContainer | null> {
        const db = await super.openDb();
        for (const container of db.containers) {
            if (container.id === id) {
                return container;
            }
        }
        return null;
    }

    public async getAll(): Promise<IContainer[]> {
        const db = await super.openDb();
        return db.containers;
    }

    public async add(container: IContainer): Promise<void> {
        const db = await super.openDb();

         //自动生成id
        let containerId = 1;
        while(db.containers.filter((c)=>c.id === containerId).length > 0)
            containerId += 1;
        container.id = containerId;

        db.containers.push(container);
        await super.saveDb(db);
    }

    public async update(container: IContainer): Promise<void> {
        const db = await super.openDb();
        const containerIndex = db.containers.findIndex((c) => c.id === container.id);
        if(containerIndex > 0){
            db.containers[containerIndex] = container;
            await super.saveDb(db);
            return;
        }
        throw new Error('Container not found');
    }

    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        const containerIndex = db.containers.findIndex((c) => c.id === id);
         if(containerIndex > 0){
            db.containers.splice(containerIndex, 1);
            await super.saveDb(db);
            return;
        }
        
        throw new Error('Container not found');
    }
}

export default ContainerDao;