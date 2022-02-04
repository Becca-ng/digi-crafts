
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const server = http.createServer(app);
const albumList = require('./albumList');
const path = require('path');
const { length } = require('./albumList');
app.use(express.static('public'));


app.get('/', (req, res) => {
    let albumImg = ``;
    albumImg += "<html>"
    albumImg += "<body>"
    albumImg += '<h1 id="header">Wow I hated making this haha</h1>'
    albumImg += `<ul>`
    for (let currentAlbum of albumList) {
    albumImg += `<li>
    <a href="/${currentAlbum.url}"><img width = "500px" height = "500px" src="${currentAlbum.img}"></a>
    </li>`;
    }
    albumImg += `</ul>`;
    albumImg += "</body>"
    albumImg += "</html>"
    res.send(albumImg);
});

app.get('/:albumName',(req,res)=> {
    const{albumName} = req.params;
    let album = albumList.find(currentAlbum => currentAlbum.url === albumName);
    res.send(display(album));
})

function loop(albumList){
    for(let currentAlbum of albumList){
        console.log(currentAlbum);
        return currentAlbum
    }
}
function display(currentAlbum) {
    let albumInfo = ``;
    albumInfo += `<ul>`
    albumInfo += `<img width = "500px" height = "500px" src="${currentAlbum.img}">`;
    albumInfo += `<li>${currentAlbum.album}</o></li>`;
    albumInfo += `<li>${currentAlbum.artist}</li>`;
    albumInfo += `<li>Album Songs: ${currentAlbum.songs}</li>`;
    albumInfo += `</ul>`;
    return albumInfo;
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});