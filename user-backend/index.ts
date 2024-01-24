import express from 'express';
import taskRouter from './src/routes/task';
import authRouter from './src/routes/signin';
import { connectToDB } from './src/models/db.connect';
import cors from 'cors';

const app = express();
const port = 8080;

//Connect to Mysql
connectToDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/task', taskRouter);
app.use('/api', authRouter);

app.listen(port, () => {
    return console.log(`Server is listening to port:${port}`);
});