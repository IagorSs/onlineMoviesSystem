const { StatusCodes } = require("http-status-codes")
const { viewsPorFilmeService } = require("../../services")

module.exports = {
    viewsPorFilme: async (req, res) => {
        try {
            const id = req.params['id']
            const response = await viewsPorFilmeService.viewsPorFilme(id)
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            console.error(error)
            return res.status(
                error.name == "ValidationError"
                    ? StatusCodes.UNPROCESSABLE_ENTITY
                    : error.status || StatusCodes.INTERNAL_SERVER_ERROR
            ).json(error.message)
        }
    }
}