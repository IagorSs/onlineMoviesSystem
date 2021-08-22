const { StatusCodes } = require("http-status-codes")
const { novoUsuarioService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try{
            const schema = yup.object().shape({
                inscricao: yup.number().required(),
                email: yup.string().required().email(),
                nome: yup.string().required(),
                login: yup.string().required(),
                senha: yup.string().required()
            })

            await schema.validate(req.body, {
                stripUnknown: true,
            })

            const { inscricao, email, nome, login, senha } = req.body
            const response = await novoUsuarioService.novo(inscricao, email, nome, login, senha)
            return res.status(StatusCodes.OK).json(response);
        }catch (error){
            console.error(error)
            return res.status(
                error.name == "ValidationError"
                    ? StatusCodes.UNPROCESSABLE_ENTITY
                    : error.status || StatusCodes.INTERNAL_SERVER_ERROR
            ).json(error.message)
        }
    }
}