export interface CharacterInterface {
  charId: number;
  userId: number;
  stateId: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  phoneNumber?: string;
  lastPlayed: Date;
  isDead: boolean;
  x?: number;
  y?: number;
  z?: number;
  heading?: number;
  health?: number;
  armour?: number;
  statuses: string; // Stockage de données JSON
  deleted?: Date;
}