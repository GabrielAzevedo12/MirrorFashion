import './css/Div2.css'
import $ from '../../Funções/Query/$';
import { P } from './BD/OP';
import { useState,useEffect } from 'react';
import { f } from './funções/f';
import { s } from "./styles/s"
import { Link,useNavigate } from 'react-router-dom';
import {Fetch} from "../../Funções/teste/Fetch"

var Div2 = (props) => { 
    const Navigate =  useNavigate();
    const   EimgD21 = async () => {
            Navigate('/Produtos')

            let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                src: "./images/Produtos/P1.jpg",
                class: "P1",
                style: "null",
              },"null"]; 
            Fetch(url,method,content,null,null) 

            console.log('imgD21 foi executada')

                },
            EimgD22 = async () => {
                    Navigate('/Produtos')
        
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        src: "./images/Produtos/P2.jpg",
                        class: "P2",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null) 
        
                    console.log('imgD22 foi executada')
        
                },
            EimgD23 = async () => {
                    Navigate('/Produtos')
        
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        src: "./images/Produtos/P3.jpg",
                        class: "P3",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null) 
        
                    console.log('imgD23 foi executada')
        
                },
            FilhosFigD2     = {
                img1 : <img className='imgD2 imgD21 AimgD2' id='P1'/>,
                img2 : <img className='imgD2 imgD22 AimgD2' id='P2'/>,
                img3 : <img className='imgD2 imgD23 AimgD2' id='P3'/>,
                img4 : <img className='imgD2 imgD24 AimgD2' id='P4'/>,
                img5 : <img className='imgD2 imgD25 AimgD2' id='P5'/>,
                img6 : <img className='imgD2 imgD26 AimgD2' id='P6'/>,
            }
    return(
        <div className='Div2 Div'>
            <h1 className='TíD'>Novidades</h1>
            <div className='olD2'>    
                <div className='liD2 lD21'> {FilhosFigD2.img1} <p className='figCD2' onClick ={EimgD21}>Nome e preço</p></div>              
                <div className='liD2 lD22'> {FilhosFigD2.img2} <p className='figCD2' onClick ={EimgD22}>Nome e preço</p></div>
                <div className='liD2 lD23'> {FilhosFigD2.img3} <p className='figCD2' onClick ={EimgD23}>Nome e preço</p></div>
                <div className='liD2 lD24'> {FilhosFigD2.img4} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD25'> {FilhosFigD2.img5} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD26'> {FilhosFigD2.img6} <p className='figCD2' >Nome e preço</p></div>
            </div>
        </div>        
    )
}

export default Div2;

//Rascunho
/*
background-image: linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.2) 40%,rgba(0,0,0,.2) 80%,rgba(0,0,0,.4)),url(http://localhost:3000/static/media/P1.1d01969….jpg);
*/
/*
  const [datau,setDatau] = useState([]);
    console.log(datau)
    useEffect(() => {
        let [url,method,content] = ["http://localhost:5000/Produtos/","GET","null"]; 
        Fetch(url,method,content,setDatau)
    },[])
*/
/*
let TFU = async () => {
        const rsp = await fetch("http://localhost:5000/Produtos", {
            method : 'GET',
            Headers : {
                'Contend-type' : 'application/json'
            }
        })
        const data = await rsp.json()
        console.log("TFU foi executada")
    }
*/
/*
 {
    "id": "P2",
    "src": "p1.jpg",
    "class": "null",
    "style": "null"
  }
*/
/*fetch("http://localhost:5000/Produtos", {
    method : 'GET',
    Headers : {
        'Contend-type' : 'application/json'
    }
})
.then((rsp) => {
    rsp.json()
})
.then((data) => {
    setDatau(data)
    console.log(datau)
})
.catch((err) => console.log(err))*/

/*data.map((inf) => {
        let e = $('.ProdutosImg');
        e.src = './images/' + inf.src
    })*/
       /*for(var i=1;i < 7;i++) {
                    var e = $('.imgD2'+i)
                    if(i === 1) {
                        continue
                    }
                    e.animate(
                        [
                            {
                                width:;
                            },
                            {
                                width:;
                            }
                        ],
                        {duration:, iterations:}
                    )
                }*/
/*
  let TFU = async () => {
        const rsp = await fetch("http://localhost:5000/Produtos", {
            method : 'GET',
            Headers : {
                'Contend-type' : 'application/json'
            }
        })
        const data = await rsp.json()
        setDatau(data)
        console.log(datau)
        console.log("TFU foi executada")
    }
    useEffect(() => {
        TFU()
    },[])
*/