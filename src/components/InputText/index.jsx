import './InputText.css'

// É a mesma coisa da criação padrão das funções
const InputText = ({label, placeholder}) => {

    return(
        <div className='input-text'>
            <label>Digite o seu {label}</label>
            <input placeholder={placeholder} type="text" />
        </div>
    )
}

export default InputText