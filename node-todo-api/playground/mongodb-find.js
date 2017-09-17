//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user =  {name: 'Andrew', age: 25};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  //const query = {completed: false};
  const query = {
    _id: new ObjectID('59b5ae18f119943a27113940')
  };
  const query2 = {
    location: 'New York'
  };

  // db.collection('Todos').find(query).toArray().then(docs => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find(query).count().then(count => {
    console.log(`Todos count: ${count}`);
  }, err => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find(query2).toArray().then(docs => {
    console.log('Users: All users from New York');
    console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    console.log('Unable to fetch users', err);
  });

  db.close();
});