const serviceServices = require("../services/serviceServices");

async function registerService(req, res, next) {
    try {
        const user = await serviceServices.register(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getAll(req, res, next) {
    try {
        const services = await serviceServices.getAll();

        res.status(201).json(services);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function deleteService(req, res, next){
    try {
        const user = await serviceServices.deleteService(req.body);

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    registerService,
    getAll,
    deleteService
}



