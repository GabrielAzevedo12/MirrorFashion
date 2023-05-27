import "./css/select.css"    

var Select = ({Selections}) => {
    return(
     <>
     {
        Selections.map((Selection) => (
            <select name={Selection.name} className={Selection.class}>
                {
                    Selection.options.map((option) => (
                        <option className={option.class} value={option.value}>{option.value}</option>))    
                }
            </select>))
     }
     </>
    )
}

export default Select
