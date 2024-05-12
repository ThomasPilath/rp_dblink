import { Owned_vehiclesController } from "./controller/Owner_vehiclesController"
import { UsersController } from "./controller/UsersController"

export const Routes = [
// Routes pour Users
{
    method: "get",
    route: "/users",
    controller: UsersController,
    action: "allUsers"
}, {
    method: "get",
    route: "/users/by",
    controller: UsersController,
    action: "usersBy"
}, 
// Routes pour Owned_vehicles
{
    method: "get",
    route: "/owned_vehicles",
    controller: Owned_vehiclesController,
    action: "allOwned_vehicles"
},
{
    method: "get",
    route: "/owned_vehicles/by",
    controller: Owned_vehiclesController,
    action: "owned_vehiclesBy"
}
]