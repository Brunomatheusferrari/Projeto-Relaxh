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

async function quartos(req, res, next) {
    try {
        const user = await usersServices.quartos(req.body);

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

async function check_in(req, res, next){
    try {
        const user = await usersServices.check_in(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    create,
    reserve,
    quartos,
    check_in
};