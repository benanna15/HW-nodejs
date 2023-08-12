import { readFileSync, writeFileSync } from 'fs'
import { succesResponse , errorResponse } from '../utils.js'

const loadBooks = () => {
    const books = readFileSync("./data/books.json",'utf8')
    return JSON.parse(books)
}

export  const listBooks = (req,res) => {
    try{
        const books = loadBooks()
         succesResponse(res, books)
     }
     catch{
        errorResponse(res,"Error in load books")
         
     }
}


export const getBook = (req, res) =>{
    try{
        const { id } =req.params
        const books = loadBooks()
        console.log(books);
        const findBook = books.find(book => book.id == id)
        console.log(findBook);
       succesResponse(res,findBook)

    }
    catch(e){
        res.status(500).send(
            errorResponse(res,"Error in load book"))
    }
   

}

export const updateBook = (req, res) => {
    try{
     const { id } =req.params
    const body = req.body
    console.log({body});
    const books = loadBooks()
    const findBook = books.findIndex(book => book.id == id)
  
    console.log('book', books[findBook]);
    books[findBook] ={...books[findBook],...body}
    const booksString=JSON.stringify(books)
    writeFileSync("./data/books.json",booksString)
    succesResponse(res,books[findBook])

    }
    catch(e){
        res.status(500).send(
         errorResponse(res,"Error in load book"))
    }
   
}


export const deleteBook = (req, res) => {
    try {
        const { id } = req.params;
        const books  = loadBooks()

        const findBook = books.findIndex(book => book.id == id)
        console.log(books[findBook])

        if (findBook !== -1) {
            books.splice(findBook, 1);
            const booksString = JSON.stringify(books);
            writeFileSync('./data/books.json', booksString);
            res.status(200).json({ message: 'Livre supprimé avec succès' });
        } else {
            res.status(404).json({ message: 'Livre non trouvé' });
        }
    } catch (e) {
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};