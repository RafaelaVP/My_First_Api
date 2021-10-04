const models = [
    require ('../models/CityTable'),
    require('../models/ClientTable')


]

async function createTable () {
    for (let counter = 0; counter < models.length; counter++) {
        const model = models[counter]
        await model.sync()
    }
}

createTable()
