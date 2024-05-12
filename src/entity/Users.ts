import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 46, unique: true, nullable: false })
    identifier: string;

    @Column({ type: "longtext", nullable: true, default: null })
    accounts: string;

    @Column({ type: "varchar", length: 50, default: "user" })
    group: string;

    @Column({ type: "longtext", nullable: true, default: null })
    inventory: string;

    @Column({ type: "varchar", length: 20, default: "unemployed" })
    job: string;

    @Column({ type: "int", default: 0 })
    job_grade: number;

    @Column({ type: "longtext", nullable: true, default: null })
    loadout: string;

    @Column({ type: "longtext", nullable: true, default: null })
    metadata: string;

    @Column({ type: "longtext", nullable: true, default: null })
    position: string;

    @Column({ type: "varchar", length: 16, nullable: true, default: null })
    firstname: string;

    @Column({ type: "varchar", length: 16, nullable: true, default: null })
    lastname: string;

    @Column({ type: "varchar", length: 10, nullable: true, default: null })
    dateofbirth: string;

    @Column({ type: "varchar", length: 1, nullable: true, default: null })
    sex: string;

    @Column({ type: "int", nullable: true, default: null })
    height: number;

    @Column({ type: "longtext", nullable: true, default: null })
    skin: string;

    @Column({ type: "longtext", nullable: true, default: null })
    status: string;

    @Column({ type: "tinyint", default: 0 })
    is_dead: number;

    @Column({ type: "tinyint", default: 0 })
    disabled: number;

    @Column({ type: "varchar", length: 255, nullable: true, default: null })
    last_property: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: null, onUpdate: "CURRENT_TIMESTAMP" })
    last_seen: Date;

    @Column({ type: "varchar", length: 20, nullable: true, default: null })
    phone_number: string;

    @Column({ type: "int", nullable: true, default: null })
    pincode: number;
}