import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {

    @PrimaryKey
    @Column
    userId: number;

    @Column
    username: string;

    @Column
    password: string;

}