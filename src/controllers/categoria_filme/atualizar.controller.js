const { StatusCodes } = require("http-status-codes")
const { atualizarCategoriaFilmeService } = require("../../services")
const yup = require("yup")

module.exports = {
    atualizar: async (req, res) => {
        try {
            const schema = yup.object().shape({
                antigaCategoria: yup.string().required(),
                novaCategoria: yup.string().required()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })

            const { antigaCategoria, novaCategoria } = req.body
            const response = await atualizarCategoriaFilmeService.atualizar(antigaCategoria, novaCategoria)
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