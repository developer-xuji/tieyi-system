import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import ContainerDao from "@daos/Container/ContainerDao";
import { paramMissingError } from '@shared/constants';

const containerDao = new ContainerDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all containers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllContainers(req: Request, res: Response) {
    const containers = await containerDao.getAll();
    // eslint-disable-next-line no-console
    return res.status(OK).json({containers});
}

/**
 * Add one containers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneContainer(req: Request, res: Response) {
    const { container } = req.body;
    if (!container) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await containerDao.add(container);
    return res.status(CREATED).end();
}

/**
 * Update one container.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneContainer(req: Request, res: Response) {
    const { container } = req.body;
    if (!container) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    container.id = Number(container.id);
    await containerDao.update(container);
    return res.status(OK).end();
}

/**
 * Delete one container.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneContainer(req: Request, res: Response) {
    const { id } = req.params;
    await containerDao.delete(Number(id));
    return res.status(OK).end();
}
