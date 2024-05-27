import { UserInterface, UserServiceInterface } from "../Interfaces/UsersInterfaces";
import { AppDataSource } from "../data-source"
import { Users } from "../entities/Users"

const getUser = async (user: UserInterface) => {
    const {
      identifier,
      accounts,
      group,
      inventory,
      job,
      job_grade,
      loadout,
      metadata,
      position,
      firstname,
      lastname,
      dateofbirth,
      sex,
      height,
      skin,
      status,
      is_dead,
      disabled,
      last_property,
      created_at,
      last_seen,
      phone_number,
      pincode,
    } = user;
    
    const [playerCharId, steamId] =  identifier.split(":");
    const created_at_date =  created_at.toISOString().split("T")[0];
    const last_seen_date =  last_seen.toISOString().split("T")[0];
    
    const player = {
      steamId,
      playerCharId,
      group,
      last_seen_date
    };
    // console.log("player :", player)

    const identity = {
      firstname,
      lastname,
      dateofbirth,
      sex,
      height
    };
    // console.log("identity :", identity)

    const activities = {
      job,
      job_grade
    };
    // console.log("activities :", activities)

    const utilities = {
      phone_number,
      pincode,
      account: JSON.parse(accounts),
      inventory: JSON.parse(inventory),
    };
    // console.log("utilities :", utilities)

    const caracter = {
      created_at_date,
      status,
      is_dead,
      disabled,
      position: JSON.parse(position),
      last_property,
      skin: JSON.parse(skin),
      loadout,
      metadata,
    };
    // console.log("caracter :", caracter)

    
    return { player, identity, activities, utilities, caracter };
}

export class UsersService {

    private userRepository = AppDataSource.getRepository(Users)

  async findAll() {
    const users = await this.userRepository.find()
    const filteredUsers = []
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
    const filteredUsers = []
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