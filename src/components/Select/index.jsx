import "./Select.css"

const Select = (props) => {

    const aoDigitar = (event) => {
        console.log(event.target.value);
        props.aoAlterado(event.target.value)

    }

    return (
        <div className="select-form">
            <label>{props.label}</label>
            <select
                value={props.valor}

                onChange={aoDigitar}
            >
                {props.list.map(item => {
                    return <option key={item}>{item}</option>
                }
                )}
            </select>

        </div>
    )
}

export default Select