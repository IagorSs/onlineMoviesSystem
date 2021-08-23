const { StatusCodes } = require("http-status-codes")
const { novoFilmeAssistidoService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id_filme: yup.number().required(),
                inscricao_usuario: yup.number().required()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })
            
            const { id_filme, inscricao_usuario } = req.body
            const response = await novoFilmeAssistidoService.novo(id_filme, inscricao_usuario)
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