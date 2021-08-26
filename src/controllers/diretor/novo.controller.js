const { StatusCodes } = require("http-status-codes")
const { novoDiretorService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id: yup.number().required(), 
                nome: yup.string().required(),
                nascimento: yup.date(),
                n_filmes_dirigidos: yup.number()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })

            const { id, nome, nascimento, n_filmes_dirigidos } = req.body
            const response = await novoDiretorService.novo(id, nome, nascimento, n_filmes_dirigidos)
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