import { Fetch } from "../../Funções/teste/Fetch"
import FormPag from "../FormPag/FormPag"
import "./css/DFormPag.css"

var DFormPag = () => {
    var crPost = (Produto)  => {
            const [url,method,content] = [`http://localhost:5000/ProdutosPag`,"POST",Produto]  
            Fetch(url,method,content,null,null,null)      
    }

    return(
        <div className="DFormPag">
            <h1 className="TFormPag  FDFormPag">Forma de Pagamento</h1>
            <FormPag classNameF="FormPag FDFormPag" classNameD="DForPag" handleSubmit={crPost}/>
        </div>
    )
}

export default DFormPag

/*
        fetch('http://localhost:5000/Produtos',{ 
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body : JSON.stringify(Produto)
        } )
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        */