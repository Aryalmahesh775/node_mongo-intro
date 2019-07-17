// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) {
      console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('5d2db18924d829841cca6d87')
//   } ,{
//       $set: {
//           completed: true
//       }
//   } ,{
//       returnOriginal :false
//   }).then((result) =>{
//       console.log(result);
//   });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5d2c268cdd0166148c208c40')
} ,{
    $set: {
        name : 'Mahesh'
    },
    $inc: {
        age : 1
    }
} ,{
    returnOriginal :false
}).then((result) =>{
    console.log(result);
});




 // db.close();
});