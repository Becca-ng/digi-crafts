// Modules

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

const db = require('./db');

const server = http.createServer(app);

// Modules End



// More JS
app.get('/', (req, res) => {
    let homePg = ``
    homePg += "<h1>HOME</h1>";
    homePg += "<a href = '/ceos'> Ceo List </a>";
    res.send(homePg);
});


app.get('/ceos', (req, res) => {
    res.render('ceo-list',{db:db});
});

app.get('/:url', (req, res) => {
    const{url} = req.params;
    let db= db.find(currentCeo => currentCeo.url === url);
    console.log(ceoInfo);
    res.render('ceo-details',{db,db});
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
