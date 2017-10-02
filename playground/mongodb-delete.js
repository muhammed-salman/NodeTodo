const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('COnnected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) =>{
  //   console.log(result);
  // });

  //deleteOne
// db.collection('Todos').deleteOne({text: 'Sleep a little'}).then((result)=>{
//   console.log(result);
// });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  //   console.log(result);
  // });

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Salman'}).then((result) =>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Users').deleteOne({_id: new ObjectID('59d0c413c86bd510dae599ad')}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59d0c81db9845112953e3ed1')}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
