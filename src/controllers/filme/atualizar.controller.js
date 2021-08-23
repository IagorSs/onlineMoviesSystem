const { StatusCodes } = require("http-status-codes")
const { atualizarFilmeService } = require("../../services")
const yup = require("yup")

module.exports = {
    atualizar: async (req, res) => {
        try {
            const schema = yup.object().shape({
                id: yup.number().required(),
                categoria: yup.string().required(),
                duracao: yup.number().required(),
                nome: yup.string().required(),
                produtora: yup.string().required(),
                arquivo: yup.string(),
                video_youtube_id: yup.string(),
                descricao: yup.string(),
                id_ator_principal: yup.number(),
                id_diretor: yup.number()
            })

            await schema.validate(req.body, {
                stripUnknown: true
            })

            const { id, categoria, duracao, nome, produtora, arquivo, video_youtube_id, descricao, id_ator_principal, id_diretor } = req.body
            const response = await atualizarFilmeService.atualizar(id, categoria, duracao, nome, produtora, arquivo, video_youtube_id, descricao, id_ator_principal, id_diretor)
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