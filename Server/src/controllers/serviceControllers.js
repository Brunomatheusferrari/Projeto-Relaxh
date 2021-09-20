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
        const user = await serviceServices.getAll(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    registerService,
    getAll
}



