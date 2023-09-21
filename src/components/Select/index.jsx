import "./Select.css"

const Select = ({ list, label }) => {
    return (
        <div className="select-form">
            <label>{label}</label>
            <select name="" id="">
                {list.map(item => {
                    return <option key={item} value="">{item}</option>
                }
                )}
            </select>

        </div>
    )
}

export default Select