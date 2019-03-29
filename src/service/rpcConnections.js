'use strict'
const core = require('bitcoin-rpc-promise');
const rpc = require('../rpc.conf');


class RpcConnections {
    constructor () {
        this.conexion = new core(rpc.protocol + '://' + rpc.rpcuser + ':' + rpc.rpcpass + '@' + rpc.rpcserver + ':' + rpc.rpcport);
    }

    getTxBlock(hash) {

        return this.conexion.getblock(hash);
    }
}

module.exports = RpcConnections;