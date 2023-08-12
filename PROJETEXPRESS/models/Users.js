import mongoose from 'mongoose';

const  userSchema = new mongoose.Schema({
  id: {type: Number} ,
  firstName: {type: String,default:''},
  lastName: {type: String,default:''},
  password: {type: String,default:''}, 
  age:{type: Number,default:0},
  email: {type: String,required:false},
  phone: {type: String,default:''},
  role: {type: String,default:''}
});


export const User = mongoose.model('User', userSchema, 'Users')