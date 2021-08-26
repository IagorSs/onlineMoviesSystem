const { StatusCodes } = require("http-status-codes")
const { quantidadeAssistidaDosUsuariosService } = require("../../services")

module.exports = {
    quantidadeAssistidaDosUsuarios: async (req, res) => {
        try {
            const response = await quantidadeAssistidaDosUsuariosService.quantidadeAssistidaDosUsuarios()
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
        }
    }
}