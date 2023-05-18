import './css/Produtos.css'
import { useState,useEffect } from 'react';
import { Fetch } from "../../Funções/teste/Fetch.js"
import $ from "../../Funções/Query/$" 

var Produtos = () => {
    const [datau,setDatau] = useState([]), [img,setImg] = useState([]);
    console.log([datau,img])
    useEffect(() => {
        let [url,method,content] = ["http://localhost:5000/Produtos/","GET","null"]; 
        Fetch(url,method,content,setDatau,setImg)
    },[])
    return(
        <div className='Produtos'>
            <div className='ProdutosEF Produtosvoid'>
            </div>
            <div className='ProdutosEF ProdutosTítuloD'>
                <h1 className='ProdutosEF2 ProdutosTítulo'>Alguma Coisa ------</h1>
            </div>
            <div className='ProdutosEF ProdutosInf'>
                 <div className='ProdutosEF2 ProdutosImgD'>
                <img className='ProdutosEF2 ProdutosImg AEF2' src = { img ? img : ''} alt='Alguma foto'/>
                </div>
                <h2 className='ProdutosEF2 ProdutosDescri AEF2'>Descrição do Produto</h2>
            </div>
        </div>
    )
}

export default Produtos