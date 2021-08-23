const { StatusCodes } = require("http-status-codes")
const { deletarFilmeService } = require("../../services")

module.exports = {
    deletar: async (req, res) => {
        try {
            const id = req.params['id']
            const response = await deletarFilmeService.deletar(id)
            return res.status(StatusCodes.NO_CONTENT).json(response)
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