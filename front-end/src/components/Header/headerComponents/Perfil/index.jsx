import style from './Perfil.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalLogin from '../../../ModalLogin'
import { listForFormLogin, listForFormCadastro } from '../../../../data/forForms'
import { usuarioLogado } from '../../../../atom/usuario/Login/loginselected'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useApiUsuario } from '../../../../hooks/useApiUsuario'
import { stateIncialCarrinho } from '../../../../atom/carrinho/carrinho.atom'
import { addItemCarrinho } from '../../../../atom/carrinho/carrinho.selectors'



const Perfil = () =>{

    const [logado, setLogado] = useRecoilState(usuarioLogado);
    const adiciona = useSetRecoilState(addItemCarrinho);
    
    const [modalLoginAberto, setModalLoginAberto] = useState(false);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
    const apiUsuario = useApiUsuario();
    

    const aoAbrirModalLogin = () => {
        setModalCadastroAberto(false);
        setModalLoginAberto(true);
    }

    const aoAbrirModalCadastro = () => {
        setModalLoginAberto(false);
        setModalCadastroAberto(true);
    }

    const aoSubmitLogin = async (data) => {
        const usuarioAoLogar = await apiUsuario.login({
            senha:data.senha,
            email:data.email
        })

        if(usuarioAoLogar.status===true){
            setLogado(usuarioAoLogar);
            const newList = await stateIncialCarrinho();
            const gambi = {
                itens:newList
            }


            adiciona(gambi);
            setModalLoginAberto(false);
        } else {
            alert(usuarioAoLogar.msg);
        }
        
    }

    const aoSubmitCadastro = async (data) => {
        const novoUsuario = await apiUsuario.cadastroDeUsuario({
            nome:data.nome,
            senha:data.senha,
            email:data.email
        }
        )

        if(novoUsuario.status === true){
            alert("Cadastro Realizado com sucesso!");
            setModalCadastroAberto(false);
        }
        else {
            alert(novoUsuario.msg);
        }
    }

    const  aoSair = async () => {
        const newUserFalse = {
            user:{
                id:"false",
                nome:"false",
                pedido_id:"false"
            }
          }
        setLogado(newUserFalse);
    }


    
    return (
        
            <div className={style.perfil}>
                <input type="checkbox" id='perfil' className={style.perfil__input}/>
                <label htmlFor='perfil'className={style.perfil__rotulo}>     
                    <img src="/assets/imagens/user.png" alt="Meu Perfil" className={style.perfil__imagem}/>
                        <p className={style.perfil__texto}>
                            Meu Perfil
                        </p>

                </label>
                <ul className={style.perfil__op????es}> 
                
                { (logado === false) ? 
                    <>
                        <li className={style.perfil__op????es__item}>
                            <label type ='text'className={style.perfil__op????es__link}
                            onClick={aoAbrirModalLogin}
                            >Entre</label>

                            <ModalLogin 
                            aberto= {modalLoginAberto}
                            aoFechar={() => setModalLoginAberto(false)}
                            forForm={listForFormLogin}
                            aoSubmit={aoSubmitLogin}
                            />

                        </li>

                        <li className={style.perfil__op????es__item}>
                            <label type ='text'className={style.perfil__op????es__link}
                                onClick={aoAbrirModalCadastro}
                                >Cadastre-se</label>
                            <ModalLogin 
                                aberto= {modalCadastroAberto}
                                aoFechar={() => setModalCadastroAberto(false)}
                                forForm={listForFormCadastro}
                                aoSubmit={aoSubmitCadastro}
                            />

                        </li>

                    </>
                    :
                    <>
                        <li className={style.perfil__op????es__item}>
                            <NavLink className={style.perfil__op????es__link} to= '/livro'>Cadastrar Livros</NavLink>
                        </li>   
                        <li className={style.perfil__op????es__item}>
                            <NavLink className={style.perfil__op????es__link} to= '/autor'>Cadastrar Autores</NavLink>
                        </li>   
                        <li className={style.perfil__op????es__item}>
                            <div className={style.perfil__op????es__link}>Minhas configura????es</div>
                        </li>
                        <li className={style.perfil__op????es__item}>
                            <NavLink className={style.perfil__op????es__link} to= '/historico' 
                            onClick={()=>setLogado({})}>Hist??rico de Pedidos</NavLink>
                        </li>
                        <li className={style.perfil__op????es__item}>
                            <NavLink className={style.perfil__op????es__link} to= '/' 
                            onClick={aoSair}>Sair</NavLink>
                        </li>
                    </>
                }
                
                </ul>
            </div>
        
    )


}

export default Perfil