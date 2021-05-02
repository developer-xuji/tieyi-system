import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { getAllDrivers, addOneDriver, updateOneDriver, deleteOneDriver } from "./drivers";


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

// User-route
const driverRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.get('/all', getAllDrivers);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.post('/add', addOneDriver);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.put('/update', updateOneDriver);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
driverRouter.delete('/delete/:id', deleteOneDriver);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use("/drivers", driverRouter);
export default baseRouter;
