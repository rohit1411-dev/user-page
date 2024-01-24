import jwt from 'jsonwebtoken';
import { secretKey } from '../config/constant';
import express from 'express';
import { User } from '../models/db.user';
import { Logger } from '../log/logger'

/**
 * User Sign in 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const signin = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const users = await User.findAll();
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
    const token = jwt.sign({ id: user.userId }, secretKey, {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
    });
    Logger.info({
        message: 'User Sign in',
        userDetails: {
            id: user.userId,
            username: user.username,
        }
    })
    res.status(200).send({
        id: user.userId,
        username: user.username,
        accessToken: token
    })
};