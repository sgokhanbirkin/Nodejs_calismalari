const express = require("express");
const router = express.Router();

const admin = require("./admin");

router.get("/", (req, res, next) => {
  //res.send('<h1>Hello from express.js</h1>');
  //res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

  res.render("index", {
    title: "Homepage",
    products: admin.products,
    path: "/",
  });
});

module.exports = router;
