const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));




// ! routes
app.use('/admin',admin.routes);
app.use(userRoutes);

// ! pug
// app.set('title', 'My Site');
// console.log(app.get('title'));



app.use((req, res) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.pug'));
    res.render('404', {title: 'Page Not Found'});
    //res.send('<h1>Page not found</h1>');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})