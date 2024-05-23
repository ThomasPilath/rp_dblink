import { NextFunction, Request, Response } from "express"
import { Owned_vehiclesServices } from "../services/Owner_vehiclesServices"

export class Owned_vehiclesController {

    private owned_vehicles = new Owned_vehiclesServices()

    async allOwned_vehicles(request: Request, response: Response, next: NextFunction) {
        try {
            // Gerer les besoins de l'appel suivant la valeur de body.spec
            if (request.body.spec === true) {
                return await this.owned_vehicles.findAll(true)
            } else {
                return await this.owned_vehicles.findAll(false)
            }
        } catch (error) {
            console.log("ERROR :", error)
        }
    }

    async owned_vehiclesBy(request: Request, response: Response, next: NextFunction) {
        try {
            // Définir les champs de recherche depuis le body
            const field = request.body.field
            const value = request.body.value
            // Gerer les besoins de l'appel suivant la valeur de body.spec
            if (request.body.spec === true) {
                // Effectuer la recherche depuis le service avec les specificities
                const ownedList = await this.owned_vehicles.findByField(field, value, true)
                // Retourner un message si aucune valeur trouvé 
                if (!ownedList || ownedList.length <= 0) {
                    throw {status: 404, message:`No users found with ${field} is ${value}.`}
                }
                // RESPONSE
                return ownedList
            } else {
                // Effectuer la recherche depuis le service sans les specificities
                const ownedList = await this.owned_vehicles.findByField(field, value, false)
                // Retourner un message si aucune valeur trouvé 
                if (!ownedList || ownedList.length <= 0) {
                    throw {status: 404, message:`No users found with ${field} is ${value}.`}
                }
                // RESPONSE
                return ownedList
            }
        } catch (error) {
            console.log("ERROR :", error)
        }
    }
}