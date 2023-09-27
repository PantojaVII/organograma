import Card from "../Card"
import hexToRgba from 'hex-to-rgba';
import "./Team.css"

const Team = (props) => {
    //um objeto

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
                onChange={event => props.upgradeColor(event.target.value, props.id)}
                // o onchange é o que usa para acessar o input, nesse caso ele recebe um event e também a função de alguma coisa

                //pegamos o valor do input passado

                type="color"
                className="input-color" />
            <h3 style={{ borderColor: props.color }}>
                {props.nameTeam}
            </h3>
            <div className="card-colaborators">
                {props.colaborators.map((colaborator) => {
                    /* indice é um parâmetro que você pode nomear como desejar em uma função de mapeamento (map) que está sendo usada para iterar sobre um array. Nesse caso, parece que você está usando a função map para iterar sobre o array props.colaborators e está nomeando o parâmetro de índice como indice. No entanto, você poderia nomeá-lo de qualquer outra forma, como i, idx, ou até mesmo omiti-lo, se você não precisar do índice em seu código. */
                    return (
                        <Card
                            backgroundColor={props.color}
                            id={colaborator.id}
                            name={colaborator.name}
                            cargo={colaborator.cargo}
                            imagem={colaborator.imagem}
                            team={colaborator.team}
                            favorite={colaborator.favorite}
                            aoDeletar={props.aoDeletar}
                            changeFavorite={props.functionFavorite}
                        ></Card>)
                })}
            </div>
        </section>

    )
}

export default Team