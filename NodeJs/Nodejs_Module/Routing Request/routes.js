const fs = require('fs');
const qs = require('querystring');

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Tye", "text/html");
  if (url === "/") {
    res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
    
            <body>
                <form method="POST" action="/log">
                    <input type="text" name="message">
                    <button type="submit">Save</button>
                </form>
            </body>
        </html>
        `);

    return res.end();
  }

  if (url === "/log" && method === "POST") {
    // ! Body parsing (bodyParser)

    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const bodyParsed = Buffer.concat(body).toString();
      //console.log(bodyParsed);
      const message = bodyParsed.split("=")[1];
      //console.log(qs.parse(bodyParsed));
      fs.appendFileSync("message.txt", "\n" + message);
    });

    //fs.writeFileSync('message.txt', 'Deneme');
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = routeHandler;