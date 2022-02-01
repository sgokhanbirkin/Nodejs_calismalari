const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 200;

    //res.write("Hello World");
    //res.write(JSON.stringify({name:'Samsung S8', price: 3000}));
    // res.write('<html>');
    // res.write('<head><title>Node Js</title></head>');
    // res.write('<body><h1>Hello From Nodejs</h1></body>');
    // res.write('</html>');
    //res.end();



    fs.readFile('index.html', function(error, file){
        if(error){
            res.setHeader('Content-Type', 'text-html');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('Dosya bulunamadi...');
        }else{
            res.setHeader('Content-Type', 'text-html');
            res.statusCode = 200;
            res.statusMessage = 'ok';
            res.end(file);
        }
    })

});


server.listen(3000);
console.log('Listening port on 3000....');
