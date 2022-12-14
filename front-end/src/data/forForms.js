import * as yup from "yup";


export const listForFormCadastro = {
    nomeBotao: "Cadastrar",
    titulo: "Cadastra-se",
    schema: yup.object({
            nome: yup
                .string().required("O nome é obrigatório"),
            email: yup
                .string()
                .email("Digite um email válido")
                .required("O email é obrigatório"),
            senha: yup
                .string()
                .min(3, "A senha deve ter pelo menos 3 digitos")
                .required("A senha é obrigatória"),
            confirmaSenha: yup
                .string()
                .required("Confirmar a senha é obrigatório")
                .oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
        })
        .required(),

    list: [{
            label: 'nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite seu nome',
            required: false,
            maxlength: 30,
            minlength: 3,
        },
        {
            label: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'Digite seu email',
            required: false,
        },
        {
            label: 'senha',
            id: 'senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: false,
            maxlength: 10,
            minlength: 3,
        },
        {
            label: 'Confirme sua senha',
            id: 'confirmaSenha',
            type: 'password',
            placeholder: 'Confirme sua senha novamente',
            required: false,
            maxlength: 10,
            minlength: 3
        }
    ]
}

export const listForFormLogin = {

        nomeBotao: "Login",
        titulo: "Login",
        schema: yup.object({
            email: yup.
            string().
            email().
            required('campo obrigatório'),
            senha: yup.
            string().
            min(3,'No Minimo 3 caracteres').
            max(10).
            required('campo obrigatório'),
        }),
        list: [{
                label: 'email',
                id: 'email',
                type: 'text',
                placeholder: 'Digite seu e-mail',
                //required: false
            },
            {
                label: 'senha',
                id: 'senha',
                type: 'password',
                placeholder: 'Digite sua senha',
                //required: false

            }
        ]
}

export const listForPagCadastroLivro = {
    titulo: "Cadastro de Livros",
    nomeBotao: 'Cadastrar',
    referencia:"forLivro",
    schema: yup.object({
        nome: yup.string().required("O nome é obrigatório"),
        genero: yup.string().required('campo obrigatório'),
        image:yup.string(),
        preco: yup.number().positive().integer().required('campo obrigatório'),
        descricao: yup.string().min(1).max(256).required('campo obrigatório'),
        autor: yup.string().required('campo obrigatório')
    }),
    list: [{
            label: 'Nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite o nome do livro',
        },
        {
            label: 'Gênero',
            id: 'genero',
            type: 'text',
            placeholder: 'Insira o genero do livro',
        },
        {
            label: 'Foto do livro',
            id: 'image',
            type: 'text',
            placeholder: 'Digite a url da imagem do livro'
        },
        {
            label: 'Preço',
            id: 'preco',
            type: 'number',
            placeholder: 'Digite o preço'

        },
        {
            label: 'Descrição',
            id: 'descricao',
            type: 'text',
            placeholder: 'Digite a sinopse do livro',
        },
        {
            label: 'Autor',
            id: 'autor',
            type: 'text',
            placeholder: 'Digite o autor',
        }



    ]
}

export const listForPagCadastroAutor = {
    titulo: "Cadastro de Autores",
    nomeBotao: 'Cadastrar',
    referencia:"forAutor",
    schema: yup.object({
        nome: yup.string().max(126).required("O nome é obrigatório"),
        biografia: yup.string().min(2).max(256).required('campo obrigatório')
    }),
    list: [{
            label: 'Nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite o nome do livro',
        },
        {
            label: 'Foto do Autor',
            id: 'image',
            type: 'text',
            placeholder: 'Digite a url da imagem do Autor'
        },
        {
            label: 'Biografia',
            id: 'biografia',
            type: 'text',
            placeholder: 'Digite a biografia do autor',
        }
    ]
}

export const listForPagPagamento = {
    titulo: "Pagamento",
    nomeBotao: 'Pagar',
    schema: yup.object({
        estado: yup.string().max(32).required("O nome é obrigatório"),
        cidade: yup.string().max(32).required('campo obrigatório'),
        endereco: yup.string().max(126).required('campo obrigatório'),
        complemento: yup.string().min(0),
        cep: yup.string().max(10).required('campo obrigatório'),
        formaDeEnvio: yup.string().required('campo obrigatório'),
        numeroDoCartao: yup.string().min(19).max(19).required('campo obrigatório'),
        dataDeValidade: yup.string().max(5).required('campo obrigatorio'),
        cvv: yup.string().max(3).required('campo obrigatorio'),  
    }),

    list: [{
            label: 'Estado',
            id: 'estado',
            type: 'text',
            placeholder: 'Digite o seu estado',
        },
        {
            label: 'Cidade',
            id: 'cidade',
            type: 'text',
            placeholder: 'Digite a sua cidade',
            maxlength: 15,
        },
        {
            label: 'Endereco',
            id: 'endereco',
            type: 'text',
            placeholder: 'Digite o número e rua',
        },
        {
            label: 'Complemento',
            id: 'complemento',
            type: 'text',
            placeholder: 'Digite o complemento',
        },
        {
            label: 'CEP',
            id: 'cep',
            type: 'text',
            placeholder: 'CEP: XXXXX-XXX',

        },
        {
            label: 'Forma de Envio',
            id: 'formaDeEnvio',
            type: 'text',
            placeholder: 'Escolha a forma de envio'
        },
        {
            label: 'Número do cartão',
            id: 'numeroDoCartao',
            type: 'text',
            placeholder: 'Número do cartão',
        },
        {
            label: 'Data de Validade',
            id: 'dataDeValidade',
            type: 'text',
            placeholder: 'MM/AA',

        },
        {
            label: 'CVV',
            id: 'cvv',
            type: 'text',
            placeholder: 'XXX',
            pattern: "[0-9]",
        },
    ]
}