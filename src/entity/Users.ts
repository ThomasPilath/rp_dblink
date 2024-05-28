import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

export interface UsersEntityInterface {
    identifier: string;
    accounts?: string;
    group: string;
    inventory?: string;
    job: string;
    job_grade: number;
    metadata?: string;
    position?: string;
    firstname?: string;
    lastname?: string;
    dateofbirth?: string;
    sex?: string;
    height?: number;
    status?: string;
    is_dead: boolean;
    disabled: boolean;
    last_property?: string;
    created_at: Date;
    last_seen: Date;
    phone_number?: string;
    pincode?: number;
}

@Entity()
export class Users implements UsersEntityInterface {
    @PrimaryColumn({ type: "varchar", length: 46, unique: true, nullable: false })
    identifier: string;

    @Column({ type: "text", nullable: true })
    accounts: string;

    @Column({ type: "varchar", length: 50, default: "user" })
    group: string;

    @Column({ type: "text", nullable: true })
    inventory: string;

    @Column({ type: "varchar", length: 20, default: "unemployed" })
    job: string;

    @Column({ type: "int", default: 0 })
    job_grade: number;

    @Column({ type: "text", nullable: true })
    loadout: string;

    @Column({ type: "text", nullable: true })
    metadata: string;

    @Column({ type: "text", nullable: true })
    position: string;

    @Column({ type: "varchar", length: 16, nullable: true })
    firstname: string;

    @Column({ type: "varchar", length: 16, nullable: true })
    lastname: string;

    @Column({ type: "varchar", length: 10, nullable: true })
    dateofbirth: string;

    @Column({ type: "varchar", length: 1, nullable: true })
    sex: string;

    @Column({ type: "int", nullable: true })
    height: number;

    @Column({ type: "text", nullable: true })
    skin: string;

    @Column({ type: "text", nullable: true })
    status: string;

    @Column({ type: "boolean", default: false })
    is_dead: boolean;

    @Column({ type: "boolean", default: false })
    disabled: boolean;

    @Column({ type: "varchar", length: 255, nullable: true })
    last_property: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    last_seen: Date;

    @Column({ type: "varchar", length: 20, nullable: true })
    phone_number: string;

    @Column({ type: "int", nullable: true })
    pincode: number;
}