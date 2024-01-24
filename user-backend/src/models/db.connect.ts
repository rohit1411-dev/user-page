import { Sequelize } from 'sequelize-typescript';
import { Task } from './db.task';

export const connectToDB = async () => {
    try {
        const connection = new Sequelize({
            dialect: "mysql", // Specifies the database dialect
            host: "localhost", // Specifies the database host
            username: "root", // Specifies the database username
            password: "password", // Specifies the database password
            database: "taskdata", // Specifies the database name
            logging: false, // Disables logging of SQL queries,
            models: [Task],
        });
        await connection.sync();
    } catch (error) {
        console.log(`Cannot Connect to DB`, error)
    }

}
