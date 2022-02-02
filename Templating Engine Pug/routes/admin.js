const express = require("express");
const router = express.Router();

// const path = require('path');

const products = [
  {
    name: "Samsung S8",
    price: 3000,
    image: "1.jpg",
    description: "İyi telefon",
  },
  {
    name: "Samsung S7",
    price: 2500,
    image: "2.jpg",
    description: "İdare eder telefon",
  },
  {
    name: "Samsung S9",
    price: 4000,
    image: "3.jpg",
    description: "İyi telefon",
  },
  {
    name: "Iphone 7S",
    price: 4500,
    image: "4.jpg",
    description: "Çok İyi telefon",
  },
];

// ! /admin-add-product GET
router.get("/add-product", (req, res, next) => {
  //res.sendFile('../views/add-product.html');
  //res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
  res.render("add-product", {
    title: "Add a New Product",
    path: "/admin/add-product",
  });
});

// ! /admin-add-product POST
router.post("/add-product", (req, res, next) => {
  // register to db
  //console.log(req.body);
  //res.redirect('../views/index.html');
  products.push({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
