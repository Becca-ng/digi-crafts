// requirements 


const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const server = http.createServer(app);
app.use(express.static('public'));

// requirements end


app.get('/',(req,res) => {
    let data = {name:'Naruto',

    hobbies:['Being a Ninja','Eating Ramen']};
    res.render('index',{data:data});
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
