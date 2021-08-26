const router = require("express").Router()
const { filmesViewsController } = require("../controllers")

router.get("/", filmesViewsController.filmesViews)

module.exports.filmesViews = router