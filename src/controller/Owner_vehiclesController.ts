import { NextFunction, Request, Response } from "express"
import { Owned_vehiclesServices } from "../services/Owner_vehiclesServices"

export class Owned_vehiclesController {

    private owned_vehicles = new Owned_vehiclesServices()

    async allOwned_vehicles(request: Request, response: Response, next: NextFunction) {
        return await this.owned_vehicles.findAll()
    }

    async owned_vehiclesBy(request: Request, response: Response, next: NextFunction) {
        // Définir les champs de recherche depuis le body
        const field = request.body.field
        const value = request.body.value
        // Effectuer la recherche depuis le service
        const ownedList = await this.owned_vehicles.findByField(field, value)
        // Retourner un message si aucune valeur trouvé
        if (!ownedList || ownedList.length <= 0) {
            return `No users found with ${field} is ${value}.`
        }
        // RETOUR
        return ownedList
    }

}