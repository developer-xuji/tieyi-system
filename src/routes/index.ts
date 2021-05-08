/* eslint-disable max-len */
import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { getAllDrivers, addOneDriver, updateOneDriver, deleteOneDriver } from "./Drivers";
import { addOneContainer, deleteOneContainer, getAllContainers, updateOneContainer } from './Containers';
import { addOneTask, deleteOneTask, getAllTasks, updateOneTask } from './Task';


// User-route
const userRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.get('/all', getAllUsers);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.post('/add', addOneUser);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.put('/update', updateOneUser);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.delete('/delete/:id', deleteOneUser);

// Driver-route
const driverRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.get('/all', getAllDrivers);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.post('/add', addOneDriver);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.put('/update', updateOneDriver);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.delete('/delete/:id', deleteOneDriver);

// Container-route
const containerRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
containerRouter.get('/all', getAllContainers);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
containerRouter.post('/add', addOneContainer);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
containerRouter.put('/update', updateOneContainer);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
containerRouter.delete('/delete/:id', deleteOneContainer);

// Container-route
const taskRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
taskRouter.get('/all', getAllTasks);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
taskRouter.post('/add', addOneTask);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
taskRouter.put('/update', updateOneTask);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
taskRouter.delete('/delete/:id', deleteOneTask);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use("/drivers", driverRouter);
baseRouter.use("/containers", containerRouter);
baseRouter.use("/tasks", taskRouter);
export default baseRouter;
