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
                    <img className='ProdutosEF3 ProdutosImg AEF3' src = { img ? img : ''} alt='Alguma foto'/>
                </div>
                <div className='ProdutosEF2 ProdutosDescriD AEF3'>
                    <h2 className='ProdutosEF3 ProdutosDescri'>Descrição do Produto</h2>
                    <div className='TabelaD'>
                        <h2 className="TabelaTíd">Tabela</h2>
                        <p>
                        material italiano com estampa desenhada pelos artesões da comunidade
                        Esse é o melhor casaco Cardigã que você já viu. Excelente de Krotor 
                        nas ilhas gregas. Compre já e receba hoje mesmo pela nossa entrega                                                                                              
                        nossa entrega a jato. 
                        </p>
                        <table> 
                            <thead> 
                                <tr>
                                    <th>Características</th>
                                    <th>Detalhes</th>
                                </tr> 
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Modelo</td>
                                    <td>X1,X2,..., e XN</td>
                                </tr>
                                <tr>
                                    <td>Cores</td>
                                    <td>C1,C2,..., e CN</td>
                                </tr>
                                <tr>
                                    <td>Lavagem</td>
                                    <td>Lavar a Mão</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos