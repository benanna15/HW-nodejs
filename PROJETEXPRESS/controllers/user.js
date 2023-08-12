import { readFileSync, writeFileSync } from 'fs'
import { succesResponse , errorResponse } from '../utils.js'
import { User } from '../models/Users.js'



export const loadUsers = () => {
     const users = readFileSync("./data/users.json",'utf8')
     return JSON.parse(users)
 }
// export  const listUsers = (req, res) => {
//     try{
//        const users = loadUsers()
//         succesResponse(res,users)
//     }
//     catch{
//        errorResponse(res,"Error in load user")
        
//     }
   
// }

// export const getUser = (req, res) =>{
//     try{
//         /* const { id } =req.params
//         const users = loadUsers()
//         const findUser = users.find(user => user.id == id) */
//       const { user } = req
//        succesResponse(res,user)

//     }
//     catch(e){
//         res.status(500).send(
//             errorResponse(res,"Error in load user"))
//     }
   

// }

// export const updateUser = (req, res) => {
//     try{
//      const { id } =req.params
//     const body = req.body
//     console.log({body});
//     const users = loadUsers()
//     const findUser = users.findIndex(user => user.id == id)
//     console.log(findUser);
//     console.log('user', users[findUser]);
//     users[findUser] ={...users[findUser],...body}
//     const usersString=JSON.stringify(users)
//     writeFileSync("./data/users.json",usersString)
//     succesResponse(res,users[findUser])

//     }
//     catch(e){
//         res.status(500).send(
//          errorResponse(res,"Error in load user"))
//     }
   
// } 

// export const deleteUser = (req, res) => {
//     try {
//         const { id } = req.params;
//         const users = loadUsers()

//         const findUser = users.findIndex(user => user.id == id)
//         console.log(users[findUser])

//         if (users[findUser] !== -1) {
//             users.splice(findUser, 1);
//             const usersString = JSON.stringify(users);
//             writeFileSync('./data/users.json', usersString);
//             res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
//         } else {
//             res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//     } catch (e) {
//         res.status(500).json({ message: 'Erreur interne du serveur' });
//     }
// };


export  const listUsers = async(req, res) => {
    try{
        const users = await User.find();
        succesResponse(res,users)
    }
    catch{
       errorResponse(res,"Error in load user")
        
    }
   
}

export const getUser = async (req, res) =>{


    try{
       
        const { id } = req.params;
        const user = await User.findOne({ id: id });
        // if (user) {
            succesResponse(res, user);
        // } else {
        //     res.status(404).json({ message: 'Utilisateur non trouvé' });
        // }

    }
    catch(e){
        res.status(500).send(
            errorResponse(res,"Error in load user"))
    }
   
}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate({ id: id }, updates, { new: true });
console.log(updatedUser);
        if (updatedUser) {
            succesResponse(res, updatedUser);
        } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    } catch (e) {
        errorResponse(res, 'Erreur lors de la mise à jour de l\'utilisateur', e);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findOneAndDelete({ id: id })
            
            if (deletedUser) {
                succesResponse(res, { message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (e) {
            errorResponse(res, 'Error deleting user', e);
        }
};

export const createUser = async (req,res) => {

    const payload = req.body  
    try{
        const newUser = await new User(payload).save()
        succesResponse(res, newUser)
    }
    catch(e){
        errorResponse(res,e);
    }
    
    ç
}