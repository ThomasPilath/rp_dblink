export interface PlayerInterface {
  steamId: string;
  charId: string;
  group: string;
  last_seen_date: string;
}

export interface IdentityInterface {
  firstname: string;
  lastname: string;
  dateofbirth: string;
  sex: string;
  height: number;
  phone_number?: string;
  pincode?: number;
}

export interface ActivityInterface {
  job: string;
  job_grade: number;
}

export interface AccountsInterface {
  black_money: number;
  bank: number;
  money: number;
}

export interface InventoryItemsInterface {
  metadata?: {
    ammo: number;
    durability: number;
    components: any[];
  };
  slot: number;
  count: number;
  name: string;
}

export interface PositionInterface {
    x: number;
    y: number;
    z: number;
}

export interface MetadataInterface {
  health: number;
  armor: number;
}

export interface CaracterInterface {
  created_at_date: string;
  status: string;
  is_dead: boolean;
  disabled: boolean;
  position: PositionInterface;
  last_property?: string;
  metadata: MetadataInterface;
}

export interface UserInterface {
  player: PlayerInterface;
  identity: IdentityInterface;
  activity: ActivityInterface;
  inventory: InventoryItemsInterface[];
  accounts: AccountsInterface;
  caracter: CaracterInterface;
}