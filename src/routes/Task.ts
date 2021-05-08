import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import TaskDao from "@daos/Task/TaskDao";
import { paramMissingError } from '@shared/constants';

const taskDao = new TaskDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all tasks.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllTasks(req: Request, res: Response) {
    const tasks = await taskDao.getAll();
    // eslint-disable-next-line no-console
    return res.status(OK).json({tasks});
}

/**
 * Add one task.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneTask(req: Request, res: Response) {
    const { task } = req.body;
    if (!task) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await taskDao.add(task);
    return res.status(CREATED).end();
}

/**
 * Update one container.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneTask(req: Request, res: Response) {
    const { task } = req.body;
    if (!task) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    task.id = Number(task.id);
    await taskDao.update(task);
    return res.status(OK).end();
}

/**
 * Delete one container.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneTask(req: Request, res: Response) {
    const { id } = req.params;
    await taskDao.delete(Number(id));
    return res.status(OK).end();
}