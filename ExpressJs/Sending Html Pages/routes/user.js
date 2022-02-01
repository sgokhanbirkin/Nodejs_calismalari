const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {   
    //res.send('<h1>Hello from express.js</h1>');
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});


module.exports = router;