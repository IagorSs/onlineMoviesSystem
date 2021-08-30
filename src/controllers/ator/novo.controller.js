const { StatusCodes } = require("http-status-codes")
const { novoAtorService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                nome: yup.string().required(),
                nascimento: yup.date(),
            })

            await schema.validate(req.body, {
                stripUnknown: true,
            })

            const { nome, nascimento } = req.body
            const response = await novoAtorService.novo(nome, nascimento)
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