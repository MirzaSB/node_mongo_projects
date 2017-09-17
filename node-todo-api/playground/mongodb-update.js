const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB.');

  const todos = db.collection('Todos');
  const users = db.collection('Users');

  // find one and update.
  // const id = new ObjectID('59bef07142c2e21888655103');
  // todos.findOneAndUpdate(
  //   {
  //   _id: id,
  //   },
  //   {
  //     $set: {
  //       completed: true,
  //       text: 'Unknown activity'
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // ).then((result) => {
  //   console.log(result);
  // });

  users.findOneAndUpdate(
    {
      _id: new ObjectID('59beec9a42c2e218886550f6'),
    },
    {
      $inc: {
        age: 1,
      }
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });


  db.close();
});