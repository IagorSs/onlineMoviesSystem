const { StatusCodes } = require("http-status-codes")
const { getAllDiretorService } = require("../../services")

module.exports = {
    getAll: async (req, res) => {
        try {
            const response = await getAllDiretorService.getAll()
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