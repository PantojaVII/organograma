import './InputText.css'

// É a mesma coisa da criação padrão das funções
//Muito importante, o type text estava sendo utilizado em outros componentes, então pra não quebrar eles, é só definir um valor padrão, no caso definimos text, pois é o utilizado em outros lugares.
const InputText = (props, { type = 'text' }) => {


    return (
        <div className={`input ${props.type}`}>
            <label>{props.label}</label>

            <input
                type={props.type}
                value={props.valor}
                onChange={event => props.setinput(event.target.value)}
                required={props.required}
                placeholder={props.placeholder} />

        </div>
    )
}

export default InputText