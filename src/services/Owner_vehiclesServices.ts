import { AppDataSource } from "../data-source"
import { Owned_vehicles } from "../entity/Owned_vehicles"

export class Owned_vehiclesServices {

    private owned_vehiclesRepository = AppDataSource.getRepository(Owned_vehicles)

  async findAll() {
    const owned_vehiclesFound = await this.owned_vehiclesRepository.find()
    const filteredList = []
    owned_vehiclesFound.forEach(vehicle => {
      const {owner, plate, type, stored, parking} = vehicle
      filteredList.push({owner, plate, type, stored, parking})
    })
    return filteredList
  }

  async findByField(field: string, value: string,) {
    const owned_vehiclesFound = await this.owned_vehiclesRepository.find({
      where: {
        [field]: value
      }
    })
    const filteredList = []
    owned_vehiclesFound.forEach(vehicle => {
      const {owner, plate, type, stored, parking} = vehicle
      filteredList.push({owner, plate, type, stored, parking})
    })
    return filteredList
  }

}