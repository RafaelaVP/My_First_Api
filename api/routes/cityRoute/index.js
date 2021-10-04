const { Router } = require('express')
const routes = new Router()
const CityController = require('../../controllers/CityController')

routes.get('/', CityController.get)

routes.post('/', CityController.post)

routes.put('/:id', CityController.put)

routes.delete('/:id', CityController.delete)

routes.get ('/:id', CityController.getId)

routes.get ('/name/:place', CityController.getName)

routes.get ('/state/:find', CityController.getState)



module.exports = routes
