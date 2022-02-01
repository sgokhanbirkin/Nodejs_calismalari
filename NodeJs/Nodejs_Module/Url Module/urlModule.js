const url = require('url');

const address = 'http://gokhanbirkin.com/test?year=2022&month=nisan';

let result = url.parse(address, true);



console.log(result.protocol);
console.log(result.host);
console.log(result.path);
console.log(result.search);
console.log(result.query.year);
console.log(result);

