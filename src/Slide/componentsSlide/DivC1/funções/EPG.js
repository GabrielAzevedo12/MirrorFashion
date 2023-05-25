import { Fetch } from "../../../Funções/teste/Fetch"; 

const   EPG = async (e) => {
            Navigate('/Produtos')
            const [text, id, name, preço, classe] = [e.target.textContent, e.target.previousSibling.previousSibling.id, e.target.textContent.split("  ")[0], e.target.textContent.split("  ")[1], e.target.className]; 
                console.log(id)
            let [url,method,content] = [`http://localhost:5000/Produtos/P1`,"PUT",{ 
                name: name+" ",
                preço: preço,
                namePreço:  text ? text : "",
                src: "./images/Produtos/"+id+".jpg",
                classD: classe,
                classImg: e.target.previousSibling.previousSibling.className,
                style: e.target.style.cssText,
              }]; 
            
            Fetch(url,method,content,null,null,null) 
            
            console.log('EPG foi executada')
            }

export { EPG }             