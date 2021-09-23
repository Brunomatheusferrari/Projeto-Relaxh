const express = require("express");
const router = express.Router();

const serviceControllers = require("../controllers/serviceControllers")
const authentication = require("../middlewares/authentication")

const serviceValidation = require("../validations/serviceValidation")

router.post("/", authentication(["admin", "user"]),serviceValidation.postService ,serviceControllers.registerService)
router.get("/getAll", authentication(["admin"]),serviceControllers.getAll)
router.delete("/delete", authentication(["user","admin"]), serviceValidation.serviceGet,serviceControllers.deleteService)

module.exports = router;