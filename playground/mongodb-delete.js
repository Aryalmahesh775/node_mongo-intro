// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  //DeleteMany
//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
//     console.log(result);
//   });

  //deleteOne
//   db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
//         console.log(result);
//   });

  //findOnedeleteOne

//   db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//     console.log(result);
//   });

//   db.collection('Users').deleteMany({name: 'Mahesh'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5d2c39b08ddb1b0bc4b55696')}).then((results) =>{
      console.log(JSON.stringify(results,undefined,2));
  });
  
 // db.close();
});