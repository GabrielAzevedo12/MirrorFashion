import './css/inputDbP.css'

var Input = ({ type, text, name, placeholder, handleOnChange, value, classD, classDF, labelDisplay }) => {
    return (
        <div className={classD}>
            { labelDisplay && <label className={classDF} htmlFor={name}>{text}:</label> }
            <input
            className={classDF}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input