import { Fetch } from '../../../Funções/teste/Fetch.js'

let chamada = () => {
    const  EPG = async (e) => {
    const [text, id, name, preço, classe] = [e.target.textContent, e.target.id, e.target.textContent.split("  ")[0], e.target.textContent.split("  ")[1], e.target.className]; 

        console.log(name)

    let [url,method,content] = [`http://localhost:5000/Produtos/P1`,"PUT",{ 
        name: name+" ",
        preço: preço,
        namePreço:  text ? text : "",
        src: "./images/Produtos/"+`${id}`+".jpg",
        class: classe,
        style: e.target.style.cssText,
      }]; 

    Fetch(url,method,content,null,null,null) 

    console.log('imgD21 foi executada')
        }

    const addWindow = () => {
        const  addEventProdutos = () => {
                    for(var i=1; i<7; i++) {
                        var P = $(".figCD2"+i)
                        P.onclick = EPG(e)           
                    }
                }
        window.onload = addEventProdutos()
    }                
    addWindow();
}
(
    () => {
        chamada()
    }
)