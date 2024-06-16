import { Entity, Column, PrimaryColumn } from "typeorm";
import { UsersInterface } from "../Interfaces/UsersInterfaces";

@Entity()
export class Users implements UsersInterface {
    @PrimaryColumn({ type: "int", unique: true, nullable: false })
    userId: number;

    @Column({ type: "varchar", length: 50, nullable: true, default: null })
    username: string;

    @Column({ type: "varchar", length: 50, nullable: true, default: null })
    license2: string;

    @Column({ type: "varchar", length: 20, nullable: true, default: null })
    steam: string;

    @Column({ type: "varchar", length: 10, nullable: true, default: null })
    fivem: string;

    @Column({ type: "varchar", length: 20, nullable: true, default: null })
    discord: string;
}