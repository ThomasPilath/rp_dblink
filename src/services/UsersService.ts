import { AppDataSource } from "../data-source"
import { Users } from "../entity/Users"

export class UsersService {

    private userRepository = AppDataSource.getRepository(Users)

  async findAll() {
    const users = await this.userRepository.find()
    const filteredUsers = []
    users.forEach(user => {
      const {id, identifier, group, lastname, firstname, dateofbirth, sex, phone_number, job, job_grade} = user
      filteredUsers.push({id, identifier, group, lastname, firstname, dateofbirth, sex, phone_number, job, job_grade})
    })
    console.log(filteredUsers)
    return filteredUsers
  }

  async findByField(field: string, value: string,) {
    const users = await this.userRepository.find({
      where: {
        [field]: value
      }
    })
    const filteredUsers = []
    users.forEach(user => {
      const {id, identifier, group, lastname, firstname, dateofbirth, sex, phone_number, job, job_grade} = user
      filteredUsers.push({id, identifier, group, lastname, firstname, dateofbirth, sex, phone_number, job, job_grade})
    })
    console.log(filteredUsers)
    return filteredUsers
  }

}