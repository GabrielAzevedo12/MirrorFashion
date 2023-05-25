import Input from '../inputDbP/inputDbP'
import './css/FormDbProd.css'
import { useState } from 'react'
import SubBt from '../subBt/subBt'

var FormDbProd = ({classNameF,classNameD,handleSubmit,ProdutoData}) => {  
    const [produto,setProduto] = useState(ProdutoData || [])
    const subm = (e) => {
        e.preventDefault()
        handleSubmit(produto)
        console.log(produto)
    }
    const handleChangeI = (e) => {
        setProduto({...produto, [e.target.name]: e.target.value })
        console.log(produto)
    }
    
    return(
        <div className={classNameD}>
            <form className={classNameF} onSubmit={subm}> 
                <Input 
                type="text"
                text="id"
                name="id"
                labelDisplay={true}
                placeholder="Insira o id"
                handleOnChange={handleChangeI}
                classD = "DinputDbP"
                classDF = "DEFinputDbP"
                />
                <Input 
                type="text"
                text="src"
                name="src"
                labelDisplay={true}
                placeholder="Insira o src"
                handleOnChange={handleChangeI}
                classD = "DinputDbP"
                classDF = "DEFinputDbP"
                />
                <Input 
                type="text"
                text="class"
                name="class"
                labelDisplay={true}
                placeholder="Insira a class"
                handleOnChange={handleChangeI}
                classD = "DinputDbP"
                classDF = "DEFinputDbP"
                />
                <Input 
                type="text"
                text="style"
                name="style"
                labelDisplay={true}
                placeholder="Insira o style"
                handleOnChange={handleChangeI}
                classD = "DinputDbP"
                classDF = "DEFinputDbP"
                />
                <SubBt text='Criar o Produto' classBS="BSubBt" classDS="DSubBt" />
            </form>
        </div>
    )   
}

export default FormDbProd
