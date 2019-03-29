'use strict'
const socketio = require('socket.io');
const rpc = require('../rpc.conf');

class SocketBlockchain {

    constructor(server) {
        this.sw = socketio(server);
        
        this.sw.on('connect', (socket) => {
            console.log('cliente conectado');
            
        });
    }
    sendMessageTx(tx) {

    }
}

module.exports = SocketBlockchain;