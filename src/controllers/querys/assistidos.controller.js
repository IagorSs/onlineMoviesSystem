const { StatusCodes } = require("http-status-codes")
const { assistidosService } = require("../../services")

module.exports = {
    assistidos: async (req, res) => {
        try {
            const response = await assistidosService.assistidos()
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
        }
    }
}