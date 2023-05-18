import FormDbProd from "../FormDbProd/FormDbProd"

var EP = () => {
    var crPost = (Produto)  => {
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
    }
    return(
        <div className="DEP">
            <h1 className="TEP">Crie o Produto</h1>
            <FormDbProd classNameF="FEP FormDbProd" classNameD="DFormDbProd" handleSubmit={crPost}/>
        </div>
    )
}

export default EP