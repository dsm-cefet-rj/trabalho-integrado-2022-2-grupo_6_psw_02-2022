import style from './DetalhesLivro.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import { Botao } from '../../components/Botao'
import { Carrosel } from '../../components/Carrosel';
import { addItemCarrinho, auxAddItemCarrinho } from '../../atom/carrinho/carrinho.selectors';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listLivros, livroDestaquePag } from '../../atom/livro/livro.selectors';

const DetalhesLivro = () => {
     
    const item = useRecoilValue(livroDestaquePag);
    const adicionaItensCarrinho = useSetRecoilState(addItemCarrinho);
    const listaCarrosel = useRecoilValue(listLivros);
    

    const addAoCarrinho = async () => {
        console.log("item para o carrinho: ", item)

        const newList = await auxAddItemCarrinho(item, "positivo");
        adicionaItensCarrinho(newList);
        alert(`O Livro "${item.nome}" foi adicionado ao carrinho`);
        //navigate('/carrinho');
    };

    return ( 
    <>        
        <Titulo forNome = {item.nome}/>
        
        <div className={style.wrap}>
            <img className={style.img} src={item.image} />
            <h1 className={style.preco}>Preço : R${item.preco}</h1>             
            <Botao className ={style.botao} botao="Adicionar ao carrinho" click ={addAoCarrinho} />
            <Sinopse forNome = "Sinopse" forResumo = {item.descricao}/>
            <Titulo forNome = "Outros Livros"/>
                 
        </div>
        <Carrosel list={listaCarrosel}/>
    </>
    )


}


export default DetalhesLivro