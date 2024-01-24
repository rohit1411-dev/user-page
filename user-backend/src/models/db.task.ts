import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Task extends Model {
    @Column
    title: string;

    @Column
    description: string;

    @Column
    status: string;

    @Column
    datetime: Date;

    @Column
    userId: number;
}