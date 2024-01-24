import jwt from 'jsonwebtoken';
import express from 'express'

export const signin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const users = [{
        userId: 1,
        username: 'admin',
        password: 'password'
    }, {
        userId: 2,
        username: 'rohit',
        password: 'chanana'
    }, {
        userId: 3,
        username: 'prakash',
        password: 'singh'
    }, {
        userId: 4,
        username: 'george',
        password: 'lenvi'
    }];
    let isPasswordValid = users.some((user) => {
        return user.password === req.body.password && user.username === req.body.username
    });
    if (!isPasswordValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        });
    }
    let user = users.find((user) => user.username === req.body.username)
    const token = jwt.sign({ id: user.userId }, 'task-secret-key', {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
    });
    res.status(200).send({
        id: user.userId,
        username: user.username,
        accessToken: token
    })
};