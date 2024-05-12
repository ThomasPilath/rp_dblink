import { NextFunction, Request, Response } from "express"
import { UsersService } from "../services/UsersService"

export class UsersController {

    private users = new UsersService()

    async allUsers(request: Request, response: Response, next: NextFunction) {
        return await this.users.findAll()
    }

    async usersBy(request: Request, response: Response, next: NextFunction) {
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

        // RETOUR
        return users
    }

}