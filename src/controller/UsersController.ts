import { NextFunction, Request, Response } from "express"
import { UsersService } from "../services/UsersService"

export class UsersController {

    private users = new UsersService()

    async allUsers(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.users.findAll()
        } catch (error) {
            console.log("ERROR :", error)
        }
    }

    async usersBy(request: Request, response: Response, next: NextFunction) {
        try {
            // Définir les champs de recherche depuis le body
            const field = request.body.field
            const value = request.body.value
            // Effectuer la recherche depuis le service
            const users = await this.users.findByField(field, value)
            // Retourner un message si aucune valeur trouvé
            if (!users || users.length <= 0) {
                return `No users found with ${field} is ${value}.`
            }
            // Filtrer les valeurs que l'on souhaite renvoyer

            // RESPONSE
            return users
        } catch (error) {
            console.log("ERROR :", error)
        }
    }

}