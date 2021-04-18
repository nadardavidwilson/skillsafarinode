
const data = require('os')
// console.log(os.userInfo());
var name=data.userInfo().username
var fs = require('fs');

//create a file named mynewfile1.txt:
// fs.appendFile('message.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const user = require('./data');
var userdata= user.data(name)


const crypto = require('crypto');

const password = crypto.createHmac('sha256', 'fctbbybr').update('Prasanth').digest('hex');



fs.appendFile('message.txt',(
`ProGrad Details
Name -> ${userdata.name},
Year-> ${userdata.year},
Qualification -> ${userdata.qualification},
Password -> ${password}
`),

function (err) {
 if (err) throw err;
console.log('Saved!');
});

// var userdata= user.data.value();
console.log(userdata.name);

console.log(userdata.year);

