const { StatusCodes } = require("http-status-codes")
const { deletarFilmeAssistidoService } = require("../../services")

module.exports = {
    deletar: async (req, res) => {
        try {
            const id_filme = req.params['id']
            const inscricao_usuario = req.params['inscricao']
            const response = await deletarFilmeAssistidoService.deletar(id_filme, inscricao_usuario)
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