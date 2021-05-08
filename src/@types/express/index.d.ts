import { IContainer } from "@entities/Container";
import { IDriver } from "@entities/Driver";
import { ITask } from "@entities/Task";
import { IUser } from "@entities/User";

declare module 'express' {
    export interface Request  {
        body: {
            user: IUser,
            driver: IDriver,
            container: IContainer,
            task: ITask,
        };
    }
}
