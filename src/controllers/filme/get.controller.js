const { StatusCodes } = require("http-status-codes")
const { getFilmeService } = require("../../services")

module.exports = {
    get: async (req, res) => {
        try {
            const id = req.params['id']
            const response = await getFilmeService.get(id)
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