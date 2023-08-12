import mongoose from 'mongoose';

const book = new mongoose.model('Book',{
  _id: {bsonType:"objectId" ,required:true} ,
  author: {type: String,default:''},
  titre: {type: String,default:''},
  price: {type: Number,default:0},
  publication: {type: String,default:''},
  description: {type: String,default:''},
  type: {enum: ['Histoire','Religion','Informatique'],default:'Histoire'}
});



module.exports = book