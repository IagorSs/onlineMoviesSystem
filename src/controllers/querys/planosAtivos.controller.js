const { StatusCodes } = require("http-status-codes")
const { planosAtivosService } = require("../../services")

module.exports = {
    planosAtivos: async (req, res) => {
        try {
            const response = await planosAtivosService.planosAtivos()
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
        }
    }
}