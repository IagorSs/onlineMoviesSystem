const route = require("express").Router()
const { viewsPorFilmeController } = require("../controllers")

route.get("/:id", viewsPorFilmeController.viewsPorFilme)

module.exports.viewsPorFilme = route