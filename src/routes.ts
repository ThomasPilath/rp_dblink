import { Owned_vehiclesController } from "./controllers/Owner_vehiclesController"
import { UsersController } from "./controllers/UsersController"

export const Routes = [
// Routes pour Users
{
    method: "get",
    route: "/users",
    controller: UsersController,
    action: "allUsers"
},
{
    method: "get",
    route: "/users/by",
    controller: UsersController,
    action: "usersBy"
},
{
    method: "put",
    route: "/users/update",
    controller: UsersController,
    action: "updateUser"
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