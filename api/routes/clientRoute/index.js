const { Router } = require('express')
const routes = new Router()
const ClientController = require('../../controllers/ClientController')

routes.get('/all', ClientController.get)

routes.post('/', ClientController.post)

routes.put('/:id', ClientController.put)

routes.delete('/:id', ClientController.delete)

routes.get ('/:id', ClientController.getIdClient)

routes.get ('/name/:human', ClientController.getNameClient)

module.exports = routes
