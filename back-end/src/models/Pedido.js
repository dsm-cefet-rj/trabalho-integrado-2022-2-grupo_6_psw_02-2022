const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({


    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    carrinho: {

        itens: [
            {
                livro_id:
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Livro",
                },
                qtd:{
                    type:Number,
                    default:1
                }
            }   
        ],
    },
    historico: [
        {   
            itens: {
                type:Array
            },
        
            total: {
                type:Number,
                default:0
            },
            createdAt: {
                type: Date,
                default: Date.now(),
            },
            dadosUsuario: {
                endereco: {
                    type:String,
                },
                finalCartao:{
                    type:String,
                },
            }
        }
    ]

});


const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido