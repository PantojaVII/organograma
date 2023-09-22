import "./Card.css"

const Card = ({ name, cargo, imagem, team }) => {

    return (
        <div className='colaborador'>
            <div className='cabecalho'>
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