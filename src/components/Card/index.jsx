import "./Card.css"

const Card = ({ name, cargo, imagem, team, backgroundColor }) => {

    return (
        <div className='colaborador'>
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