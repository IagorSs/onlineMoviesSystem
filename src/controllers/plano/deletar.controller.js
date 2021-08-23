const { StatusCodes } = require("http-status-codes")
const { deletarPlanoService } = require("../../services")

module.exports = {
    deletar: async (req, res) => {
        try {
            const inscricao = req.params['inscricao']
            const categoria = req.params['categoria']

            const response = await deletarPlanoService.deletar(inscricao, categoria)
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