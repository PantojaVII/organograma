import Card from "../Card"
import hexToRgba from 'hex-to-rgba';
import "./Team.css"

const Team = (props) => {
    //um objeto
    console.log(props.upgradeColor);
    return (
        /* props.colaborators.length > 0: Esta parte da expressão verifica se o tamanho (número de elementos) do array props.colaborators é maior que zero. Se o tamanho for maior que zero, isso significa que há pelo menos um colaborador, e a expressão retornará true. */
        props.colaborators.length > 0 &&
        /* se true então executa o código abaixo se não, não executa */

        /* O operador && em JavaScript realiza uma avaliação lógica curta. Isso significa que, se a expressão à esquerda (no caso, props.colaborators.length > 0) for avaliada como false, a expressão inteira é avaliada como false, e a parte à baixo não é executada. No entanto, se a expressão à esquerda for avaliada como true, a parte à baixo é executada. */
        <section className="team" style={{
            backgroundColor: hexToRgba(props.color, '0.6'),
        }} >
            <input
                value={props.color}
                onChange={event => props.upgradeColor(event.target.value, props.nameTeam)}
                // o onchange é o que usa para acessar o input, nesse caso ele recebe um event e também a função de alguma coisa

                //pegamos o valor do input passado

                type="color"
                className="input-color" />
            <h3 style={{ borderColor: props.color }}>
                {props.nameTeam}
            </h3>
            <div className="card-colaborators">
                {props.colaborators.map((colaborador, indice) => {

                    return (
                        <Card
                            backgroundColor={props.color}
                            key={colaborador.name}
                            name={colaborador.name}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            team={colaborador.team}
                            aoDeletar={props.aoDeletar}
                        ></Card>)
                })}
            </div>
        </section>

    )
}

export default Team