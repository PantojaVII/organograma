import './InputText.css'

// É a mesma coisa da criação padrão das funções
const InputText = (props) => {


    const aoDigitar = (event) => {

        props.aoAlterado(event.target.value)

    }

    return (
        <div className='input-text'>
            <label>{props.label}</label>

            <input
                value={props.valor}
                onChange={aoDigitar}
                required={props.required}
                placeholder={props.placeholder} type="text" />


        </div>
    )
}

export default InputText