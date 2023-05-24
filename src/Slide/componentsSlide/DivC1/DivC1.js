import DivDestaque from '../D1/Div1'
import DivLista from '../D2/Div2.js'
import { $ } from '../../Funções/Query/query'
import { useNavigate } from 'react-router-dom'
import { Fetch } from '../../Funções/teste/Fetch.js'
import Div11 from '../D11/D11';
import LD11 from '../LD11/LD11';
import { EF } from '../D11/ElementosFilhosD11/EF' ;
import { f } from './funções/funções'
import { s } from "./styles/style.js"

let DivC1 = ({ DivC1pr }) => {   
    const DivTF1A = () => {
        let e1 = $("#DivTF1"), e2 = $("#DivTF2")  ;
        e1.classList.add("DivTF1A");
        e2.classList.add("DivTF2A");
        e1.classList.remove("DivTF1IA");
        e2.classList.remove("DivTF2IA");
    },
          DivTF2A = () => {
        let e1 = $("#DivTF1"), e2 = $("#DivTF2")  ;
        e1.classList.add("DivTF1IA");
        e2.classList.add("DivTF2IA");
        e1.classList.remove("DivTF1A");
        e2.classList.remove("DivTF2A");
    }
    const DivTF1IA = () => {
        let e = $("#DivTF1")  ;
        e.classList.remove("DivTF1A");
    };
    ;    
    const Navigate =  useNavigate();
    const   EP1 = async (e) => {
            Navigate('/Produtos')
            const text = e.target.textContent
            console.log(e.target.textContent)
            let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                name: "Fuzz Cardigan ",
                preço: "R$179,99",
                namePreço:  text ? text : "",
                src: "./images/Produtos/P1.jpg",
                class: "P1",
                style: "null",
              },"null"]; 
            Fetch(url,method,content,null,null,null) 

            console.log('imgD21 foi executada')

                },
            EP2 = async () => {
                    Navigate('/Produtos')
        
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        name: "Fuzz Cardigan ",
                        preço: "R$179,99",
                        src: "./images/Produtos/P2.jpg",
                        class: "P2",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null,null) 
        
                    console.log('imgD22 foi executada')
        
                },
            EP3 = async () => {
                    Navigate('/Produtos')
        
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        name: "Fuzz Cardigan ",
                        preço: "R$179,99",
                        src: "./images/Produtos/P3.jpg",
                        class: "P3",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null,null) 
        
                    console.log('imgD23 foi executada')
        
                },
            // i (( I(6) - {0}   
            DFilhosDi1 = {
                img1 : <img className='imgD2 imgD21 AimgD2' id='P1' alt=""/>,
                img2 : <img className='imgD2 imgD22 AimgD2' id='P2' alt=""/>,
                img3 : <img className='imgD2 imgD23 AimgD2' id='P3' alt=""/>,
                img4 : <img className='imgD2 imgD24 AimgD2' id='P4' alt=""/>,
                img5 : <img className='imgD2 imgD25 AimgD2' id='P5' alt=""/>,
                img6 : <img className='imgD2 imgD26 AimgD2' id='P6' alt=""/>,
            },
            DFilhosDi2 = {
                img1 : <img className='imgD2 imgD21 AimgD2' id='P7' alt=""/>,
                img2 : <img className='imgD2 imgD22 AimgD2' id='P8' alt=""/>,
                img3 : <img className='imgD2 imgD23 AimgD2' id='P9' alt=""/>,
                img4 : <img className='imgD2 imgD24 AimgD2' id='P10' alt=""/>,
                img5 : <img className='imgD2 imgD25 AimgD2' id='P11' alt=""/>,
                img6 : <img className='imgD2 imgD26 AimgD2' id='P12' alt=""/>,
            },
            DivPrincipal1 = {
                class:'DivLista Div',
                id: "Div2", 
                filhos: {
                    f1: {
                        class:'TíD',
                        filhos: {
                            textContent: "Novidades",
                        },
                    }, 
                    f2: {
                        class:"olD2",
                        filhos : {
                            n1 : {corpoJSX: <div className='liD2 lD21'> {DFilhosDi1.img1} <p className='figCD2' onClick ={EP1}>Fuzz Cardigan R$179,99</p></div>},
                            n2 : {corpoJSX: <div className='liD2 lD22'> {DFilhosDi1.img2} <p className='figCD2' onClick ={EP2}>Nome e preço</p></div>},
                            n3 : {corpoJSX: <div className='liD2 lD23'> {DFilhosDi1.img3} <p className='figCD2' onClick ={EP3}>Nome e preço</p></div>},
                            n4 : {corpoJSX: <div className='liD2 lD24'> {DFilhosDi1.img4} <p className='figCD2' >Nome e preço</p></div>},
                            n5 : {corpoJSX: <div className='liD2 lD25'> {DFilhosDi1.img5} <p className='figCD2' >Nome e preço</p></div>},
                            n6 : {corpoJSX: <div className='liD2 lD26'> {DFilhosDi1.img6} <p className='figCD2' >Nome e preço</p></div>},
                        }
                    }
            }
            },
            DivPrincipal2 = {
                class:'DivLista Div', 
                id: "Div3", 
                filhos: {
                    f1: {
                        class:'TíD2',
                        filhos: {
                            textContent: "Mais Vendidos",
                        },
                    }, 
                    f2: {
                        class:"olD22",
                        filhos : {
                            n1 : {corpoJSX: <div className='liD2 lD21'> {DFilhosDi2.img1} <p className='figCD2' >Fuzz Cardigan R$179,99</p></div>},
                            n2 : {corpoJSX: <div className='liD2 lD22'> {DFilhosDi2.img2} <p className='figCD2' >Nome e preço</p></div>},
                            n3 : {corpoJSX: <div className='liD2 lD23'> {DFilhosDi2.img3} <p className='figCD2' >Nome e preço</p></div>},
                            n4 : {corpoJSX: <div className='liD2 lD24'> {DFilhosDi2.img4} <p className='figCD2' >Nome e preço</p></div>},
                            n5 : {corpoJSX: <div className='liD2 lD25'> {DFilhosDi2.img5} <p className='figCD2' >Nome e preço</p></div>},
                            n6 : {corpoJSX: <div className='liD2 lD26'> {DFilhosDi2.img6} <p className='figCD2' >Nome e preço</p></div>},
                        }
                    }
                    }
            },
            Div11D = {
                class:'Div11', 
                id: "Div11", 
                filhos: {
                    F1: <div className="D11F1 D11F11" /*D111*/ id="D11F11">{EF.D11.TL}{EF.D11.TR}{EF.D111.img111}</div>,
                    F2: <div className="D11F1 D11F12" /*D112*/ id="D11F12">{EF.D11.TL}{EF.D11.TR}{EF.D112.img112}</div>,
                    F3: <div className="D11F1 D11F13" /*D113*/ id="D11F13">{EF.D11.TL}{EF.D11.TR}{EF.D113.img113}</div>,
                    }                
            },
            Div11D2 = {
                class:'DivT', 
                id: "DivT", 
                filhos: {
                    F1: <div /*D111*/  /*onMouseOut={DivTF1IA}*/>
                            <img className="DivTF DivTF1" src="./images/Destaques/D1.jpg" alt="" id="DivTF1" onClick={DivTF1A}/>
                        </div>,
                    F2: <div /*D112*/>
                            <img className="DivTF DivTF2" src="./images/Destaques/D2.jpg" alt="" id="DivTF2" onClick={DivTF2A}/>
                        </div>,
                    F3: <div /*D113*/>
                            <img className="DivTF DivTF3" src="./images/Destaques/D3.jpg" alt="" id="DivTF3"/>
                        </div>,
                    }                
            },
            DivD = {
                class:'Div1 Div', 
                id: "Div1", 
                filhos: {
                    F1: <Div11 Div11Destaque={Div11D}/>,
                    F2: <LD11/>,
                    }
            },
            DivD2 = {
                class:'Div1 Div', 
                id: "Div1", 
                filhos: {
                    F1: <Div11 Div11Destaque={Div11D2}/>,
                    }
            }
            ;
    return(
        <div className = {DivC1pr.class} id = {DivC1pr.id}>
            <DivDestaque DivDestaque={DivD}/>
            <DivLista DivPrincipal={DivPrincipal1}/>
            <DivLista DivPrincipal={DivPrincipal2}/>
            <DivDestaque DivDestaque={DivD2}/>
        </div>
    )
}

export default DivC1;