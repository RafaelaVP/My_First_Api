const modelClient = require('../models/ClientTable')
const modelCity = require('../models/CityTable')
const clients = require('../models/ClientTable')

class ClientController{
   async get(req,res){
        try {
            const clients = await modelClient.findAll()
            console.log(clients)
            return res.status(200).send(clients)
        } catch (error) {
            return res.status(400).json({
                message:'Not found'
            })
        }
    }
    async post(req,res){
        try {
            const {name,city,gender,birthdate} = req.body
            console.log(name,city,gender,birthdate)
            const result = await modelClient.create({
                name:name,
                cities:city,
                gender:gender,
                birthdate:birthdate,


            })
            console.log(result)
        return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message:'No create client'
            })
        }
    }
    async put(req,res){
        try {
            const {id} = req.params
            const {name,city,gender,birthdate} = req.body
            const result = await modelClient.update({
                name:name,
                cities:city,
                gender:gender,
                birthdate:birthdate
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
            await modelClient.destroy({
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
    async getIdClient(req,res){
        try {
            const {id} = req.params
            const client = await modelClient.findOne({
                where:{
                    id:id
                },
            })
            const city = await modelCity.findOne({
                where:{
                    id:client.cities
                }
            })
            const response = {
               name:client.name,
               birthdate: client.birthdate,
               gender: client.gender,
               cities: {
                   name:city.name,
                   state:city.state
               }

            }
            return res.status(200).send(response)

        } catch (error) {
            return res.status(400).json({
                message:'no located'
            })

        }
    }

    async getNameClient(req,res){
        try {
            const {human} = req.params
             console.log(human)
             const nameClient = await modelClient.findOne({
                where:{
                    name:human
                },
            })
            return res.status(200).send(nameClient)

        } catch (error) {
            return res.status(400).json({
                message:'no located'
            })

        }
    }


}

module.exports = new ClientController()
