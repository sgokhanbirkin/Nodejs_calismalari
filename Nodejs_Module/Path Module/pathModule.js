const path = require('path');
const file = 'pathModule.js';

let result = path.resolve(file);
result = path.extname(file);
result = path.parse(__filename);

console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);

console.log(result)