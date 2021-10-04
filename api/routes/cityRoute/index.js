const { Router } = require('express')
const routes = new Router()
const CityController = require('../../controllers/CityController')

routes.get('/', CityController.get)

routes.post('/', CityController.post)

routes.patch('/:id', CityController.patch)

routes.delete('/:id', CityController.delete)

routes.get ('/:id', CityController.getId)

routes.get ('/name/:place', CityController.getName)

routes.get ('/state/:find', CityController.getState)



module.exports = routes
