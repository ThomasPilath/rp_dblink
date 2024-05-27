import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owned_vehicles {

    @Column({ type: "varchar", length: 46, nullable: false })
    owner: string;

    @PrimaryColumn({ type: "varchar", length: 12})
    plate: string;

    @Column({ type: "longtext", default: null})
    vehicle: string;

    @Column({ type: "varchar", length: 20, nullable: false, default: 'car' })
    type: string;

    @Column({ type: "varchar", length: 20, default: null })
    job: string;

    @Column({ type: "int", default: 0 })
    stored: number;

    @Column({ type: "float", default: 0 })
    mileage: number;

    @Column({ type: "longtext", default: null })
    glovebox: string;

    @Column({ type: "longtext", default: null })
    trunk: string;

}