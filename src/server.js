'use strict'

const express = require('express');
const http = require('http');
const app = express()//instancia de express
const server = http.createServer(app)//creando el server con http y express como handle request
const socket = require('./service/socketBlockchain');
const PORT = process.env.PORT || 23287

//console.log(process.argv);

const ws = new socket(server);

app.post('/',function(req, res){
    console.log(req);
    
 });


//corriendo el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`); 
})
