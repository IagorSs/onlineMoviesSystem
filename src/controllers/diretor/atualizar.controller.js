const { StatusCodes } = require("http-status-codes")
const { atualizarDiretorService } = require("../../services")
const yup = require("yup")

module.exports = {
    aualizar: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id: yup.string().required(), 
                nome: yup.string().required(),
                nascimento: yup.date(),
                n_filmes_dirigidos: yup.number()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })

            const { id, nome, nascimento, n_filmes_dirigidos } = req.body
            const response = await atualizarDiretorService.atualizar(id, nome, nascimento, n_filmes_dirigidos)
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