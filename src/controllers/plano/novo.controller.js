const { StatusCodes } = require("http-status-codes")
const { novoPlanoSerice } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                inscricao: yup.number().required(),
                categoria: yup.string().required(),
                n_telas: yup.number().required(),
                pagamento: yup.string().required(),
                expiracao: yup.date().required(),
            })

            await schema.validate(req.body, {
                stripUnknown: true,
            })

            const { inscricao, categoria, n_telas, pagamento, expiracao } = req.body
            const response = await novoPlanoSerice.novo(inscricao, categoria, n_telas, pagamento, expiracao)
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