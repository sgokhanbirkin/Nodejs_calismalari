// // IIFE

// var controllerA = (function() {
//     // scope A
//     var firstName = "Gökhan";
//     var age = 27;

//     var log = function(){
//         console.log(this.firstName)
//     }

//     return {
//         firstName,
//         log
//     }
// })();

// var lastName = 'Birkin';

//console.log(module);

// private members
var age = 39;

// public members
var firstName = "Gökhan";
var log = function (name) {
  console.log(name);
};

// module.exports.log = log;
// module.exports.firstName = firstName;

module.exports = {
  firstName,
  log,
};

console.log(__filename); // file path
console.log(__dirname); // directory path

// ! Node Module
/**File System Module
 * Path Module
 * Events Module
 * Os Module
 * Http Module
 */

// ! 3rd Party Module
/**Npm */

