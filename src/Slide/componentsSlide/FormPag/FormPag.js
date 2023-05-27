import Input from '../inputDbP/inputDbP'
import "./css/FormPag.css"
import SubBt from '../subBt/subBt'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fetch } from '../../Funções/teste/Fetch';

var FormPag = ({ classNameF, classNameD, handleSubmit, ProdutoPagData, SelectionsPagData }) => {  

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

    const [Selections,setSelections] = useState(SelectionsPagData || []), Navigate =  useNavigate();
    useEffect(() => {
        let [url,method,content] = ["http://localhost:5000/Selections1/","GET","null"]; 
        Fetch(url,method,content,setSelections,null,null)
    },[])

    return(
        <div className={classNameD}>
            <form className={classNameF} onSubmit={subm}> 
                <Input 
                type="text"
                text=""
                labelDisplay={null}
                InputDisplay={true}
                name="name"
                placeholder="Insira o nome completo"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                SelDisplay={false}
                />
                <Input 
                type="email"
                text=""
                labelDisplay={null}
                InputDisplay={true}
                name="email"
                placeholder="Insira o E-mail"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                SelDisplay={false}
                />
                <Input 
                type="number"
                text=""
                labelDisplay={null}
                InputDisplay={true}
                name="CPF"
                placeholder="Insira o seu CPF"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                SelDisplay={false}
                />
                <Input 
                type="number"
                text=""
                labelDisplay={null}
                InputDisplay={true}
                name="celular"
                placeholder="Insira o número do celular com DDD"
                handleOnChange={handleChangeI}
                classD = "DinputDFP"
                classDF = "inputDbP DinputDbPF"
                SelDisplay={false}
                />
                <div className='DSelect'>
                    <Input 
                    type="text"
                    text=""
                    labelDisplay={null}
                    InputDisplay={false}
                    name="celular"
                    placeholder="Select"
                    handleOnChange={handleChangeI}
                    classD = "DinputDFP"
                    classDF = "inputDbP DinputDbPF"
                    SelDisplay={true}
                    SelectionsI={Selections}
                    />
                    <Input 
                    type="text"
                    text=""
                    labelDisplay={null}
                    InputDisplay={false}
                    name="celular"
                    placeholder="Select"
                    handleOnChange={handleChangeI}
                    classD = "DinputDFP"
                    classDF = "inputDbP DinputDbPF"
                    SelDisplay={true}
                    SelectionsI={Selections}
                    />
                </div>
                <SubBt text='Criar o Produto' classBS="BSubBt" classDS="DSubBt" />
            </form>
        </div>
    )   
}

export default FormPag
