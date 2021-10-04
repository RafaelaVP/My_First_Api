const express = require('express')
const routeCity = require('./routes/cityRoute')
const routeClient = require('./routes/clientRoute/index')
require('./database/connectiondb')

class Controller {
    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }
    middleware(){
        this.express.use(express.json())
    }
    routes(){
        this.express.use('/api/city', routeCity)
        this.express.use('/api/city/client', routeClient)
    }
}
 module.exports = new Controller().express
