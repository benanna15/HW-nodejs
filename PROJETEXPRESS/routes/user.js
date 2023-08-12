import router from 'express'
import { getUser, listUsers , updateUser, deleteUser , createUser } from '../controllers/user.js'
import { auth } from '../middlewares/auth.js'
import { timeOfMyRequest } from '../middlewares/time.js'
const routerExpress = router()

routerExpress.get('/',listUsers)
routerExpress.post('/',createUser)
routerExpress.get('/:id',auth,timeOfMyRequest,getUser)
routerExpress.put('/:id',updateUser)
routerExpress.delete('/:id',deleteUser)


export default routerExpress