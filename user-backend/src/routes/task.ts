import express from 'express';
import { getAllUserTask, deleteTask, editTask, addTask, addUser } from '../controllers/task';
import { verifyToken } from '../middlewares/authorization';
const taskRouter = express.Router();

taskRouter.get('/all/:userId', verifyToken, getAllUserTask);
taskRouter.post('/add', verifyToken, addTask);
taskRouter.patch('/data/:id', verifyToken, editTask);
taskRouter.delete('/data/:id/:userId', verifyToken, deleteTask);
taskRouter.get('/addusers', addUser);
export default taskRouter;