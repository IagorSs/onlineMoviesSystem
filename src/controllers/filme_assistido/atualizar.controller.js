const { StatusCodes } = require("http-status-codes")
const { atualizarFilmeAssistidoService } = require("../../services")
const yup = require("yup")

module.exports = {
    atualizar: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id_filme: yup.number().required(),
                inscricao_usuario: yup.number().required(),
                novo_id_filme: yup.number().required()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })
            
            const { id_filme, inscricao_usuario, novo_id_filme } = req.body
            const response = await atualizarFilmeAssistidoService.atualizar(id_filme, inscricao_usuario, novo_id_filme)
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