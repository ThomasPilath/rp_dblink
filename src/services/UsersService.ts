import { UsersInterface } from "../Interfaces/UsersInterfaces";
import { AppDataSource } from "../data-source"
import { Users } from "../entity/Users"

export class UsersService {

    private userRepository = AppDataSource.getRepository(Users)

  async findAll() {
    const users =  await this.userRepository.find()
    return users
  }

  async findByField(field: keyof Users, value: string|number) {
    return await this.userRepository.find({
      where: {
        [field]: value
      }
    })
  }

  async update(id: number, field: keyof Users, value: string|number) {
    const currentUser: UsersInterface = await this.userRepository.findOne({
      where: {
        userId: id
      }
    })
    if (!currentUser) {
      throw {status: "error", message: `User with identifier ${id} not found`}
    }
    if (!(field in currentUser)) {
      throw {status: "error", message: `Field ${field} not found in user`}
    }
    const updatedUser = {
      ...currentUser,
      [field]: value
    }
    await this.userRepository.update(id, updatedUser)
    return {identifier: id, updateField: field, updateValue: value}
  }
}