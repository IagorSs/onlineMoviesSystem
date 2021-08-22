const { StatusCodes } = require("http-status-codes")
const { deletarUsuario } = require("../../services")
const yup = require("yup")

module.exports = {
    deletar: async (req, res) => {
        try {
            const inscricao = req.params['id']

            const response = await deletarUsuario.deletar(inscricao)
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