const hotelServices = require("../services/hotelServices");

async function check_in(req, res, next) {
    try {
        const user = await hotelServices.check_in(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function check_out(req, res, next) {
    try {
        const user = await hotelServices.check_out(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function quartos(req, res, next) {
    try {
        const user = await hotelServices.quartos(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    quartos,
    check_in,
    check_out
}



