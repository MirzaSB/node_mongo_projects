const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const salt = 'somesecret';

var data = {
  id: 4
};

var token = jwt.sign(data, salt);
console.log(token);

var decoded = jwt.verify(token, salt);
console.log(decoded);


// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + salt).toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + salt).toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// }
// else {
//   console.log('Data was changed. Do not trust it.');
// }