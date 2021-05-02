import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import DriverDao from "@daos/Driver/DriverDao";
import { paramMissingError } from '@shared/constants';

const driverDao = new DriverDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all drivers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllDrivers(req: Request, res: Response) {
    const drivers = await driverDao.getAll();
    // eslint-disable-next-line no-console
    return res.status(OK).json({drivers});
}


/**
 * Add one drivers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneDriver(req: Request, res: Response) {
    const { driver } = req.body;
    if (!driver) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await driverDao.add(driver);
    return res.status(CREATED).end();
}


/**
 * Update one drivers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneDriver(req: Request, res: Response) {
    const { driver } = req.body;
    if (!driver) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    driver.id = Number(driver.id);
    await driverDao.update(driver);
    return res.status(OK).end();
}


/**
 * Delete one drivers.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneDriver(req: Request, res: Response) {
    const { id } = req.params;
    await driverDao.delete(Number(id));
    return res.status(OK).end();
}
