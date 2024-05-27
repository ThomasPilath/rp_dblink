import { AccountsInterface, ActivityInterface, CaracterInterface, IdentityInterface, InventoryItemsInterface, PlayerInterface, UserInterface } from "../Interfaces/UsersInterfaces";
import { AppDataSource } from "../data-source"
import { Users, UsersEntityInterface } from "../entities/Users"

const getUser = async (user: UsersEntityInterface): Promise<UserInterface> => {
    const {
      identifier,
      accounts,
      group,
      inventory,
      job,
      job_grade,
      metadata,
      position,
      firstname,
      lastname,
      dateofbirth,
      sex,
      height,
      status,
      is_dead,
      disabled,
      last_property,
      created_at,
      last_seen,
      phone_number,
      pincode,
    } = user;
    
    const [identifierCharId, steamId] =  identifier.split(":");
    const charId = identifierCharId.slice(4)
    const created_at_date =  created_at.toISOString().split("T")[0];
    const last_seen_date =  last_seen.toISOString().split("T")[0];
    const userInventory: InventoryItemsInterface[] = JSON.parse(inventory)
    const userAccounts: AccountsInterface = JSON.parse(accounts)
    
    const player: PlayerInterface = {
      steamId,
      charId,
      group,
      last_seen_date
    };
    // console.log("player :", player)

    const identity: IdentityInterface = {
      firstname,
      lastname,
      dateofbirth,
      sex,
      height,
      phone_number,
      pincode
    };
    // console.log("identity :", identity)

    const activity: ActivityInterface = {
      job,
      job_grade
    };
    // console.log("activities :", activities)

    const caracter: CaracterInterface = {
      created_at_date,
      status,
      is_dead,
      disabled,
      position: JSON.parse(position),
      last_property,
      metadata: JSON.parse(metadata),
    };
    // console.log("caracter :", caracter)

    
    return {
      player: player,
      identity: identity,
      activity: activity,
      inventory: userInventory,
      accounts: userAccounts,
      caracter: caracter
    };
}

export class UsersService {

    private userRepository = AppDataSource.getRepository(Users)

  async findAll() {
    const users = await this.userRepository.find()
    const filteredUsers: UserInterface[] = []
    users.map(async (user: any) => {
      const once = await getUser(user)
      filteredUsers.push(once)
    })
    return filteredUsers
  }

  async findByField(field: string, value: string,) {
    const users = await this.userRepository.find({
      where: {
        [field]: value
      }
    })
    const filteredUsers: UserInterface[] = []
    users.map(async (user: any) => {
      const once = await getUser(user)
      filteredUsers.push(once)
    })
    return filteredUsers
  }

  async fieldTest(field: string) {
    const users = await this.userRepository.find()
    const filteredUsers = await Promise.all(users.map(async (user: any) => {
      return await getUser(user)
    }))
    const result = filteredUsers[0][field]
    return result
  }

}