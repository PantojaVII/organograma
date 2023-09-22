import Card from "../Card"
import "./Team.css"

const Team = (props) => {
    //um objeto

    return (
        /* props.colaborators.length > 0: Esta parte da expressão verifica se o tamanho (número de elementos) do array props.colaborators é maior que zero. Se o tamanho for maior que zero, isso significa que há pelo menos um colaborador, e a expressão retornará true. */
        props.colaborators.length > 0 && 
        /* se true então executa o código abaixo se não, não executa */

        /* O operador && em JavaScript realiza uma avaliação lógica curta. Isso significa que, se a expressão à esquerda (no caso, props.colaborators.length > 0) for avaliada como false, a expressão inteira é avaliada como false, e a parte à baixo não é executada. No entanto, se a expressão à esquerda for avaliada como true, a parte à baixo é executada. */
        <section section className="team" style={{
            backgroundColor: props.colorPrimary,
        }} >
            <h3 style={{ borderColor: props.colorSecundary }}>
                {props.nameTeam}
            </h3>
            <div className="card-colaborators">
                {props.colaborators.map(colaborador =>
                    <Card
                        name={colaborador.name}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        team={colaborador.team}
                    ></Card>)}
            </div>
        </section>

    )
}

export default Team