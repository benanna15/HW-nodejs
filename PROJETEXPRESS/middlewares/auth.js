import { loadUsers } from "../controllers/user.js";
import { errorResponse } from "../utils.js";

export const auth = (req, res, next) => {
    const { password } = req.headers
    const { id }= req.params

    const users= loadUsers()
    const userExistAuthentificate = users.find((user) => user.id == id && user.password == password)

    if (userExistAuthentificate) {
        req.user = userExistAuthentificate 
        next()
    }
    else errorResponse (res,'you need authentification', 401)
}