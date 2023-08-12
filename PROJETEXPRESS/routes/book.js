import router from 'express'
import { listBooks , getBook , updateBook , deleteBook } from '../controllers/book.js'

const routerExpress = router()
routerExpress.get('/',listBooks)
routerExpress.get('/:id',getBook)
routerExpress.put('/:id',updateBook)
routerExpress.delete('/:id',deleteBook)

export default routerExpress
