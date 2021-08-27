const { StatusCodes } = require("http-status-codes")
const { getAllCategoriaFilmeService } = require("../../services")

module.exports = {
    getAll: async (req, res) => {
        try {
            const response = await getAllCategoriaFilmeService.getAll()
            return res.status(StatusCodes.OK).json(response)
        } catch (error) { 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
        }
    }
}