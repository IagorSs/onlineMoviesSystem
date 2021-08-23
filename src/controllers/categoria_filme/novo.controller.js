const { StatusCodes } = require("http-status-codes")
const { novoCategoriaFilmeService } = require("../../services")
const yup = require("yup")

module.exports = {
    novo: async (req, res) => {
        try {
            const schema = yup.object().shape({
                categoria: yup.string().required()
            })
    
            await schema.validate(req.body, {
                stripUnknown: true
            })
    
            const { categoria } = req.body
            const response = await novoCategoriaFilmeService.novo(categoria)
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