import jwt from 'jsonwebtoken';
import express from 'express';
const config = process.env.task_management;

export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({
            message: 'No Token is provided'
        });
    }
    jwt.verify(token, 'task-secret-key', (err: any, decoded: any) => {
        if (err)
            return res.status(403).send({
                message: 'Unautorized'
            });
        req['userId'] = decoded.id;
        next();
    });
}
