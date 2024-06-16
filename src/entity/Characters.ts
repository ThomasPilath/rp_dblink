import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from './Users';
import { UsersInterface } from '../Interfaces/UsersInterfaces';
import { CharacterInterface } from '../Interfaces/CharactersInterfaces';

@Entity()
export class Character implements CharacterInterface {
  @PrimaryGeneratedColumn('uuid')
  charId: number;

  @ManyToOne(() => Users, (user: UsersInterface) => user.userId)
  @Column()
  userId: number;

  @Column()
  stateId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  dateOfBirth: Date;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column()
  lastPlayed: Date;

  @Column()
  isDead: boolean;

  @Column({ nullable: true })
  x: number;

  @Column({ nullable: true })
  y: number;

  @Column({ nullable: true })
  z: number;

  @Column({ nullable: true })
  heading: number;

  @Column({ nullable: true })
  health: number;

  @Column({ nullable: true })
  armour: number;

  @Column('longtext')
  statuses: string; // Stockage de données JSON

  @Column({ nullable: true })
  deleted: Date;
}