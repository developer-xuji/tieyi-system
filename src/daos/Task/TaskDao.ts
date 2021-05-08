import {ITask} from "@entities/Task";
import MockDaoMock from '../MockDb/MockDao.mock';

class TaskDao extends MockDaoMock {
    public async getOne(id: number): Promise<ITask | null> {
        const db = await super.openDb();
        for (const task of db.tasks) {
            if (task.id === id) {
                return task;
            }
        }
        return null;
    }

    public async getAll(): Promise<ITask[]> {
        const db = await super.openDb();
        return db.tasks;
    }

    public async add(task: ITask): Promise<void> {
        const db = await super.openDb();

        //自动生成id
        let taskId = 1;
        while(db.tasks.filter((t)=>t.id === taskId).length > 0)
            taskId += 1;
        task.id = taskId;
        db.tasks.push(task);
        await super.saveDb(db);
    }

    public async update(task: ITask): Promise<void> {
        const db = await super.openDb();
        const taskIndex = db.tasks.findIndex((c) => c.id === task.id);
        if(taskIndex > 0){
            db.tasks[taskIndex] = task;
            await super.saveDb(db);
            return;
        }
        throw new Error('Container not found');
    }

    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        const taskIndex = db.tasks.findIndex((c) => c.id === id);
         if(taskIndex > 0){
            db.tasks.splice(taskIndex, 1);
            await super.saveDb(db);
            return;
        }
        
        throw new Error('Container not found');
    }
}

export default TaskDao;