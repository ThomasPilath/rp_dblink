import { AppDataSource } from "../data-source"
import { Owned_vehicles } from "../entities/Owned_vehicles"

export class Owned_vehiclesServices {

    private owned_vehiclesRepository = AppDataSource.getRepository(Owned_vehicles)

  async findAll(withSpecificity: boolean) {
    const owned_vehiclesFound = await this.owned_vehiclesRepository.find()
    const filteredList = []
    if (withSpecificity) {
      owned_vehiclesFound.forEach(oneVehicle => {
        const {owner, plate, type, stored, mileage, vehicle} = oneVehicle
        const spec = JSON.parse(vehicle)
        filteredList.push({owner, plate, type, stored, mileage, spec})
      })
    } else {
      owned_vehiclesFound.forEach(oneVehicle => {
        const {owner, plate, type, stored, mileage} = oneVehicle
        filteredList.push({owner, plate, type, stored, mileage})
      })
    }
    return filteredList
  }

  async findByField(field: string, value: string, withSpecificity: boolean) {
    const owned_vehiclesFound = await this.owned_vehiclesRepository.find({
      where: {
        [field]: value
      }
    })
    const filteredList = []
    if (withSpecificity) {
      owned_vehiclesFound.forEach(oneVehicle => {
        const {owner, plate, type, stored, mileage, vehicle} = oneVehicle
        const spec = JSON.parse(vehicle)
        filteredList.push({owner, plate, type, stored, mileage, spec})
      })
    } else {
      owned_vehiclesFound.forEach(oneVehicle => {
        const {owner, plate, type, stored, mileage} = oneVehicle
        filteredList.push({owner, plate, type, stored, mileage})
      })
    }
    return filteredList
  }

}