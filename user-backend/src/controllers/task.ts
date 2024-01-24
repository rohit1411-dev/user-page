import express from 'express';
import { Task } from '../models/db.task';
import { User } from '../models/db.user';
import { Logger } from '../log/logger';


export const getAllUserTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    //console.log(Logger);
    Logger.info({
        message: 'Get All Tasks',
        response: data
    })
    return res.send(data).status(200);
}

export const deleteTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    let deleteData = await Task.destroy({
        where: { id: id }
    });
    Logger.info({
        message: 'Delete User Task',
        response: deleteData
    });
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    return res.send(data).status(200);
};

export const editTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    let updateData =
        await Task.update({ title: req.body.title, description: req.body.description, status: req.body.status }, { where: { id: id } });
    Logger.info({
        message: 'Update User Task',
        response: updateData
    })
    const data = await Task.findAll({
        where: { userId: req.body.userId }
    });
    return res.send(data).status(200);
};

export const addTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const body = req.body;
    let addData = await Task.create(body);
    Logger.info({
        message: 'Add User Task',
        response: addData
    });
    const data = await Task.findAll({
        where: { userId: req.body.userId }
    });
    return res.send(data).status(200);
};

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

