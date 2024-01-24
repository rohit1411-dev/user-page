import jwt from 'jsonwebtoken';
import express from 'express';
import { secretKey } from '../config/constant'

export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({
            message: 'No Token is provided'
        });
    }
    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err)
            return res.status(403).send({
                message: 'Unauthorized'
            });
        req['userId'] = decoded.id;
        next();
    });
}
