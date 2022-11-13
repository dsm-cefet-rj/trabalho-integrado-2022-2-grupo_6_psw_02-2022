import style from './itemCarrinho.module.scss'


export const Item = ({item}) => {

    return ( 
        <div className={style.container}>
            <hr/>
            <div className={style.grid1}>
                <img className={style.img} src='https://www.carochinhaeditora.com.br/wp-content/uploads/2021/01/Ah-nao_E01_CAPA-V1.png' />
            </div>
            
            <div className={style.grid2}>
                <h1 className={style.info}>Nome do Livro</h1>
                <h1 className={style.info}>Preço : R$20,00</h1>
                <h1 className={style.info}>Qtd: 1</h1>
                <input className={style.botaoadd} type="button" value = "+" />
                <input className={style.botaorem} type="button" value = "-" />
            </div>
            
        </div>
        )
}


