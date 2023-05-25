import Input from '../inputDbP/inputDbP'
import "./css/FormPag.css"
import { useState } from 'react'
import SubBt from '../subBt/subBt'

var FormPag = ({ classNameF, classNameD, handleSubmit, ProdutoPagData }) => {  
    const [produtoPag,setProdutoPag] = useState(ProdutoPagData || [])
    const subm = (e) => {
        e.preventDefault()
        handleSubmit(produtoPag)
        console.log(produtoPag)
    }
    const handleChangeI = (e) => {
        setProdutoPag({...produtoPag, [e.target.name]: e.target.value })
        console.log(produtoPag)
    }
    
    return(
        <div className={classNameD}>
            <form className={classNameF} onSubmit={subm}> 
                <Input 
                type="text"
                text=""
                labelDisplay={null}
                name="name"
                placeholder="Insira o nome completo"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                />
                <Input 
                type="email"
                text=""
                labelDisplay={null}
                name="email"
                placeholder="Insira o E-mail"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                />
                <Input 
                type="number"
                text=""
                labelDisplay={null}
                name="CPF"
                placeholder="Insira o seu CPF"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                />
                <Input 
                type="number"
                text=""
                labelDisplay={null}
                name="celular"
                placeholder="Insira o número do celular com DDD"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                />
                <SubBt text='Criar o Produto' classBS="BSubBt" classDS="DSubBt" />
            </form>
        </div>
    )   
}

export default FormPag
