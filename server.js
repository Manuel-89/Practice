const express = require('express');
const server = express();

server.get('/',(req,res) =>{
    res.send('Welcome home, this is cohort 12')
})
server.get('/index',(req,res) =>{
    res.render('index');
});

server.listen(3000, ()=> console['log']('Listening live on port 3000'));