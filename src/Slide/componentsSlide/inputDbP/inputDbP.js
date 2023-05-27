import Select from '../selectDbP/selectDbP'
import './css/inputDbP.css'

var Input = ({ type, text, name, placeholder, handleOnChange, value, classD, classDF, classL, classLD, labelDisplay, SelectionsI, SelDisplay, InputDisplay }) => {
    return (
        <div className={classD}>
            <div className={classLD}>
                { labelDisplay && <label className={classL} htmlFor={name}>{text}:</label> }
            </div>
            {
                InputDisplay &&  
                <input
                className={classDF}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
               />
            }
            {
                SelDisplay && <Select Selections={SelectionsI}/>
            }           
        </div>
    )
}

export default Input
//Rascunho

/*
valueOp1, valueOp2, valueOp3, valueOp4, valueOp5
*/