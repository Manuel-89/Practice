const express = require('express');

const path = require('path');


// Importing Route Files
const formRoutes = require('./routes/formRoutes');

// Instantiations
const app = express();


// Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

// Routes
app.use('/', formRoutes);



app.get('/index',(req,res) =>{
    res.render('index');
});

app.listen(3000, ()=> console['log']('Listening live on port 3000'));