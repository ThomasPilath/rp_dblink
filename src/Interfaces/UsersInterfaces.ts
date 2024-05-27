export interface UserInterface {
  identifier: string;
  accounts: string;
  group: string;
  inventory: string;
  job: string;
  job_grade: string;
  loadout: string;
  metadata: string;
  position: string;
  firstname: string;
  lastname: string;
  dateofbirth: string;
  sex: string;
  height: string;
  skin: string;
  status: string;
  is_dead: boolean;
  disabled: boolean;
  last_property: string;
  created_at: Date;
  last_seen: Date;
  phone_number: string;
  pincode: string;
}

export interface PlayerInterface {
  steamId: string;
  playerCharId: string;
  group: string;
  last_seen_date: string;
}

export interface IdentityInterface {
  firstname: string;
  lastname: string;
  dateofbirth: string;
  sex: string;
  height: string;
}

export interface ActivitiesInterface {
  job: string;
  job_grade: string;
}

export interface AccountInterface {
  black_money: number,
  bank: number,
  money: number
}

export interface UtilitiesInterface {
  phone_number: string;
  pincode: number;
  account: AccountInterface;
  inventory: JSON;
}

export interface CaracterInterface {
  created_at_date: string;
  status: string;
  is_dead: number;
  disabled: number;
  position: JSON;
  last_property: string;
  skin: JSON;
  loadout: string;
  metadata: string;
}

export interface UserServiceInterface {
  player: PlayerInterface;
  identity: IdentityInterface;
  activities: ActivitiesInterface;
  utilities: UtilitiesInterface;
  caracter: CaracterInterface;
}