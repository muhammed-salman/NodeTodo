const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/users');
// var id='59d23973012c9c3e55cd2dd';
//
// if(!ObjectID.isValid(id)){
//   return console.log('Id not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e)=>console.log(e));

User.findById('59d2088fd89c0f2d28b20fd5').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));
