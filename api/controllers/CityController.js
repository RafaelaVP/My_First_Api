const modelCity = require('../models/CityTable')

class CityController{
   async get(req,res){
        try {
            const cities = await modelCity.findAll()
            return res.status(200).send(cities)
        } catch (error) {
            return res.status(400).json({
                message:'Not found'
            })
        }
    }
    async post(req,res){
        try {
            const {name,state} = req.body
            const result = await modelCity.create({
                name:name,
                state:state
            })
        return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message:'No create city'
            })
        }
    }
    async put(req,res){
        try {
            const {id} = req.params
            const {name,state} = req.body
            const result = await modelCity.update({
                name:name,
                state:state
            },{
                where:{
                    id:id
                }
            })
            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message:'Not update'
            })
        }

    }
    async delete(req,res){
        try {
            const {id} = req.params
            await modelCity.destroy({
                where:{
                    id:id
                }
            })
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({
                message:'NO DESTROY'
            })
        }
    }
    async getId(req,res){
        try {
            const {id} = req.params
            const city = await modelCity.findOne({
                where:{
                    id:id
                },
            })
            return res.status(200).send(city)

        } catch (error) {
            return res.status(400).json({
                message:'no located'
            })

        }
    }
    async getName(req,res){
        try {
            const {place} = req.params
             console.log(place)
             const nameCity = await modelCity.findOne({
                where:{
                    name:place
                },
            })
            return res.status(200).send(nameCity)

        } catch (error) {
            return res.status(400).json({
                message:'no located'
            })

        }
    }

}

module.exports = new CityController()
