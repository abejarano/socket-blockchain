'use strict'
const socketio = require('socket.io');
const rpc = require('../rpc.conf');

class SocketBlockchain {

    constructor(server) {
        this.sw = socketio(server);
        
        this.sw.on('connect', (socket) => {
            console.log('cliente conectado');
            
        });

        this.sw.on('block', data => {
            console.log(data);
        });
    }
    set sendMessageBlock(blockhash) {
        socket.emit('block', blockhash);
    }
}

module.exports = SocketBlockchain;