const { StatusCodes } = require("http-status-codes")
const { filmesViewsService } = require("../../services")

module.exports = {
    filmesViews: async (req, res) => {
        try {
            const response = await filmesViewsService.filmesViews()
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
        }
    }
}