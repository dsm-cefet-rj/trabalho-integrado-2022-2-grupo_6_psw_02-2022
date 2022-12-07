const pedidoService = require("../services/pedido.service")

class PedidoController {

    static async createPedido(req, res) {

        try {
            const {
                nome,
                carrinho,
                total
            } = req.body;

            if (!nome || !carrinho || !total)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newPedido = await pedidoService.criar({
                nome,
                carrinho,
                total
            })

            return res.status(201).json({
                status: true,
                newPedido
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePedido(req, res) {

        try {
            const {
                nome,
                carrinho,
                total
            } = req.body;
            const id = req.params.id;
            if (!nome && !carrinho && !total)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });

            const pedido = await pedidoService.atualizar(
                id,
                nome,
                carrinho,
                total
            );

            return res.status(201).json({
                status: true,
                pedido
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readPedido(req, res) {
        const { id } = req.params;
        const Pedido = await pedidoService.consultar(id)
        if (!Pedido) {
            return res.status(400).send({ message: "User não encontrado" })
        }
        return res.status(201).json({
            status: true,
            Pedido
        });

    }

    static async readPedidoAll(req, res) {

        try {
            const Pedido = await pedidoService.consultarTudo();

            if (Pedido.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Users);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePedido(req, res) {

        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ msg: "Id não encontrado!", status: false });
            }

            await pedidoService.deletar(id)

            return res.status(201).json({
                status: true,
                msg: "Pedido apagado com sucesso"

            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PedidoController