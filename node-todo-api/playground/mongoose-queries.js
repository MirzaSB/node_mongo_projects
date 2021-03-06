const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

const id = '59cdc30b063b99295fb2d416';
const userId = '59beec9a42c2e218886550f6';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => {
  console.log(e);
});