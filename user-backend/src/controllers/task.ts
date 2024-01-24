import express from 'express';
import { Task } from '../models/db.task';
import { User } from '../models/db.user';
import { Logger } from '../log/logger';

/**
 * Get All Task
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const getAllUserTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    return res.send(data).status(200);
}

/**
 * Delete Task Data
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const deleteTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    let deleteData = await Task.findOne({
        where: { id: id }
    })
    await Task.destroy({
        where: { id: id }
    });
    Logger.info({
        message: 'Delete User Task',
        deletedData: deleteData.dataValues
    });
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    return res.send(data).status(200);
};

/**
 * Edit Task Data
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const editTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    let oldData = await Task.findOne({
        where: { id: id }
    });
    await Task.update({ title: req.body.title, description: req.body.description, status: req.body.status }, { where: { id: id } });
    let newData = await Task.findOne({
        where: { id: id }
    });
    Logger.info({
        message: 'Update User Task',
        oldData: oldData.dataValues,
        newData: newData.dataValues
    })
    const data = await Task.findAll({
        where: { userId: req.body.userId }
    });
    return res.send(data).status(200);
};

/**
 * Add Task
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const addTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const body = req.body;
    await Task.create(body);
    Logger.info({
        message: 'Add User Task',
        newData: body
    });
    const data = await Task.findAll({
        where: { userId: req.body.userId }
    });
    return res.send(data).status(200);
};

/**
 * Users Data to be added in table
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const addUser = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const users = [{
        userId: 1,
        username: 'admin',
        password: 'password'
    }, {
        userId: 2,
        username: 'salman',
        password: 'qwerty'
    }, {
        userId: 3,
        username: 'tom',
        password: 'client'
    }, {
        userId: 4,
        username: 'george',
        password: 'lenovo'
    }];
    await User.bulkCreate(users);
    const data = await User.findAll({});
    return res.send(data).status(200);
}

