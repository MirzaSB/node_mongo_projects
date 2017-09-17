const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB.');

  // deleteMany
  //const deleteQuery = {
  //   text: 'Eat lunch'
  // };
  // db.collection('Todos').deleteMany(deleteQuery).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  //   db.collection('Todos').deleteOne().then((result) => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // const newQuery = {
  //   completed: false
  // };
  // db.collection('Todos').findOneAndDelete(newQuery).then((result) => {
  //   console.log(result);
  // });

  //Remove all duplicate entries from 'Users' DB.
  const deleteUsersQuery = {
    name: 'John Smith'
  };
  db.collection('Users').deleteMany(deleteUsersQuery).then((result) => {
    console.log(result);
  });
  db.close();
});