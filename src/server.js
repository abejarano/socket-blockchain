'use strict'

const express = require('express');
const http = require('http');
const app = express()//instancia de express
const bodyParser = require('body-parser');
const server = http.createServer(app)//creando el server con http y express como handle request
const socket = require('./service/socketBlockchain');
const PORT = process.env.PORT || 23287;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//console.log(process.argv);

const ws = new socket(server);

app.post('/block',(req, res) => {
    ws.sendBlock(req.body.hashblock, req.query.cypto);
    res.end('cool');
 });

//corriendo el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`); 
})
