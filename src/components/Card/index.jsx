import { AiFillCloseCircle } from 'react-icons/ai'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
//Quando tem a chave é uma exportão não default
//importando o icone

import "./Card.css"

const Card = ({ changeFavorite, favorite, name, cargo, imagem, backgroundColor, aoDeletar, id }) => {

    console.log(id);

    function functionFavorite() {
        changeFavorite(id)
    }

    const propsFavorite = {
        size: 25,
        onClick: functionFavorite
    }


    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className="Deletar"
                onClick={() => aoDeletar(id)}
            // fazempos assim para executar apenas quaando clicar, se deixarmos a função direta ele executa quando renderizar o component
            />
            <div className='cabecalho' style={{ backgroundColor: backgroundColor }}>
                <img src={imagem} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
                <div className='favorite'>
                    {favorite
                        /* Muito interessante, passamos todo o objeto acima como propos para as duas, pois elas tem props iguais, então facilita, e utilizamos a sintaxe {...objeto} para enviar todas e após isso conseguimos colocar as diferentes como uma props normal. */
                        ? <MdFavorite {...propsFavorite} color='red' />
                        : <MdFavoriteBorder {...propsFavorite} />
                    }
                </div>

            </div>
        </div>
    )
}

export default Card