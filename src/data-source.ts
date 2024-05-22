import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
dotenv.config({path: "config.local.env"})


export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.HOST_db,
    port: +process.env.PORT_db,
    username: process.env.USER_db,
    password: process.env.PASSWORD_db,
    database: process.env.NAME_db,
    synchronize: false,
    logging: false,
    entities: ["./src/entity/*{.ts,.js}"],
    migrations: [],
    subscribers: [],
})
