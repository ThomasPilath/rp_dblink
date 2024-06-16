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
}
]