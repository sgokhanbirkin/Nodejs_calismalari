const express = require('express');
const router = express.Router();

const path = require('path');

// ! /admin-add-product GET
router.get('/add-product', (req, res, next) => {   
    //res.sendFile('../views/add-product.html');
    res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
    
});

// ! /admin-add-product POST
router.post('/add-product', (req, res, next) =>{
    // register to db
    console.log(req.body);
    res.redirect('../views/index.html');
});


module.exports = router;