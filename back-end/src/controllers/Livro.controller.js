const livroService = require("../services/livro.service")

class LivroController {

    static async createLivro(req, res) {

        try {
            const {
                nome,
                preco,
                descricao,
                autor,
                edicao
            } = req.body;

            if (!nome || !preco || !descricao || !autor || !edicao)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newLivro = await livroService.criar({
                nome,
                preco,
                descricao,
                autor,
                edicao
            })

            return res.status(201).json({
                status: true,
                newLivro
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLivro(req, res) {

        try {
            const {
                nome,
                preco,
                descricao,
                autor,
                edicao
            } = req.body;
            const id = req.params.id;
            if (!nome && !preco && !descricao && !autor && !edicao)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });

            const livro = await livroService.atualizar(
                id,
                nome,
                preco,
                descricao,
                autor,
                edicao
            );

            return res.status(201).json({
                status: true,
                livro
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readLivro(req, res) {
        const { id } = req.params;
        const Livro = await livroService.consultar(id)
        if (!Livro) {
            return res.status(400).send({ message: "User não encontrado" })
        }
        return res.status(201).json({
            status: true,
            Livro
        });

    }

    static async readLivroAll(req, res) {

        try {
            const Users = await livroService.consultarTudo();

            if (Users.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Users);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLivro(req, res) {

        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ msg: "Id não encontrado!", status: false });
            }

            await livroService.deletar(id)

            return res.status(201).json({
                status: true,
                msg: "Livro apagado com sucesso"

            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = LivroController