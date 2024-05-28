import { NextFunction, Request, Response } from "express"
import { UsersService } from "../services/UsersService"

export class UsersController {

    private users = new UsersService()

    async allUsers(request: Request, response: Response, next: NextFunction) {
        try {
            const users = await this.users.findAll()
            if (!users) {
                throw {status: 400, message: "No users found."}
            }
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
                throw {status: 400, message: `No users found with ${field} is ${value}.`}
            }
            // Filtrer les valeurs que l'on souhaite renvoyer

            // RESPONSE
            return users
        } catch (error) {
            console.log("ERROR :", error)
        }
    }

    async updateUser(request: Request, response: Response, next: NextFunction) {
        try {
            const identifier = request.body.identifier
            const field = request.body.field
            const value = request.body.value
            const updatedUser = await this.users.update(identifier, field, value)
            if (!updatedUser) {
                throw {status: 400, message: "Update Error"}
            }
            return updatedUser
        } catch (error) {
            console.log("ERROR :", error)
            return { status: error.status, message: error.message}
        }
    }

}