import {AiFillCloseCircle} from 'react-icons/ai'
//Quando tem a chave é uma exportão não default
//importando o icone

import "./Card.css"

const Card = ({ name, cargo, imagem, team, backgroundColor, aoDeletar }) => {
console.log(aoDeletar);
    return (
        <div className='colaborador'>
            <AiFillCloseCircle className="Deletar" onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: backgroundColor }}>
                <img src={imagem} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>

            </div>
        </div>
    )
}

export default Card