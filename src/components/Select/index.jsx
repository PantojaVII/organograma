import "./Select.css"

const Select = (props) => {

    return (
        <div className="select-form">
            <label>{props.label}</label>
            <select
                value={props.valor}

                onChange={event => props.setinput(event.target.value)}
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