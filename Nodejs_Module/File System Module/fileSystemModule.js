const fs = require("fs");

// ! Reading Directory
/*
const file = fs.readdir("./", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
*/

// ! Reading File
/* 
const data = fs.readFile('index.html', 'utf8', function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
*/

// ! Creating File
/*
fs.writeFile(
  "deneme.txt",
  "Nodejs ile oluşturuldu..",
  function (error, data) {
      if(error){
          console.log(error);
      }else{
          console.log('Dosya oluşturuldu..');
      }
  }
);
*/

// ! Creating file with apend
/*
fs.appendFile(
    "deneme1.txt",
    "Hello World......",
    function (error, data) {
        if(error){
            console.log(error);
        }else{
            console.log('Dosya oluşturuldu..');
        }
    }
);
*/

// ! Deleting file
/*
fs.unlink('deneme1.txt', function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya silindi');
    }
})
*/

// ! Rename file
/*
fs.rename('deneme.txt', 'denemeYeni.txt', function(errror){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya adı değiştirildi.');
    }
})
*/