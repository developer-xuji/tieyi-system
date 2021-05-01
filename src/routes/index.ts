import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


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


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
export default baseRouter;
