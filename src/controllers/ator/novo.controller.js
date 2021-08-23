const { StatusCodes } = require("http-status-codes")
const { novoAtorService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id: yup.string().required(),
                nome: yup.string().required(),
                nascimento: yup.date(),
            })

            await schema.validate(req.body, {
                stripUnknown: true,
            })

            const { id, nome, nascimento } = req.body
            const response = await novoAtorService.novo(id, nome, nascimento)
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