import express from 'express';
import { Task } from '../models/db.task';
import { User } from '../models/db.user';


export const getAllUserTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    return res.send(data).status(200);
}

export const deleteTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    await Task.destroy({
        where: { id: id }
    });
    const data = await Task.findAll({
        where: { userId: req.params.userId }
    });
    return res.send(data).status(200);
};

export const editTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    await Task.update({ title: req.body.title, description: req.body.description, status: req.body.status }, { where: { id: id } });
    const data = await Task.findAll({
        where: { userId: req.body.userId }
    });
    return res.send(data).status(200);
};

export const addTask = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const body = req.body;
    await Task.create(body);
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

