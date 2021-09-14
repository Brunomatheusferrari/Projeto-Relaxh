const usersServices = require("../services/usersServices");

async function create(req, res, next) {
    try {
        const user = await usersServices.createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function reserve(req, res, next){
    try {
        const user = await usersServices.reserve(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    create,
    reserve
};