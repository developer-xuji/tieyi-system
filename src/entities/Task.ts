export interface ITask {
    id: number;
    driverId: string;
    containerId: string;
    startPoint: string;
    endPoint: string;
    date: string;
    time: string;
}

class Task implements ITask {
    public id: number;
    public driverId: string;
    public containerId: string;
    public startPoint: string;
    public endPoint: string;
    public date: string;
    public time: string;

    constructor(task: ITask){
        const {id, driverId, containerId, startPoint, endPoint, date, time} = task;
        this.id = id;
        this.driverId = driverId;
        this.containerId = containerId;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.endPoint = endPoint;
        this.date = date;
        this.time = time;
    }
}

export default Task;