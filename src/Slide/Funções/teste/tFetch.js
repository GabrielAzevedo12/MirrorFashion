import {Fetch} from "./Fetch.js"

let teste = () => {
    let [url,method,content] = ["http://localhost:5000/Produtos/P1","POST",  {
        name: "Fuzz Cardigan",
        preço: "R$179,99"
      }]; 
    Fetch(url,method,content,null,null,null)
}
teste() 