const { StatusCodes } = require("http-status-codes")
const { getUsuarioService } = require("../../services")
const yup = require("yup")

module.exports = {
    get: async (req, res) => {
        try {
            const schema = yup.object().shape({
                login: yup.string().required(),
                senha: yup.string().required()
            })

            await schema.validate(req.body, {
                stripUnknown: true,
            })

            const { login, senha } = req.body
            const response = await getUsuarioService.get(login, senha)
            return res.status(StatusCodes.OK).json(response);
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