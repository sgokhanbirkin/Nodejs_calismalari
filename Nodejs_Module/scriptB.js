// // IIFE

// var controllerB = (function() {
//     // scope A
//     var firstName = "Süleyman";

//     var log = function(){
//         console.log(this.firstName)
//     }

//     return {
//         firstName,
//         log
//     }
// })();

// console.log(controllerA.firstName)
// console.log(controllerB.firstName)


const scriptA = require('./scriptA');

scriptA.log('Birkin');
console.log(scriptA.firstName);