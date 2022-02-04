const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

const db = require('./db');


const server = http.createServer(app);


// All the other crap  I have to do 


// home page and search
app.get('/', (req, res) => {
    res.render('home');
});

// Search All Page
app.get('/search_all', (req, res) => {
    let {ComingSoon} = req.params;
    let upComing = db.find(newMovie => newMovie.ComingSoon === ComingSoon);
    res.render('searchAll', { newMovie: upComing });
});


// Search by Genre Page
app.get('/genre', (req, res) => {
    res.render('genre');
});

// Search by rating Page
app.get('/rating', (req, res) => {
    res.render('rate');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});