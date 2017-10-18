const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/users');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '59e73d72a6bd6b2f649de875'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('59e73d72a6bd6b2f649de875').then((todo) => {
	console.log(todo);
});