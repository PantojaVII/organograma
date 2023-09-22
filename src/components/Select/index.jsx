import "./Select.css"

const Select = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="select-form">
            <label>{props.label}</label>
            <select
                value={props.valor}

                onChange={aoDigitar}
            >
                {props.Teams.map(team => {
                    return <option key={team}>{team}</option>
                }
                )}
            </select>

        </div>
    )
}

export default Select