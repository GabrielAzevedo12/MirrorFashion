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
        
                }           
    return(
        <div className='Div2 Div' style={props.s}>
            <h1 className='TíD' style={s.sTíD}>Destaques</h1>
            <ol className='olD2' style={s.solD2}>    
                <li className='liD2 lD21' style={s.sliD2}><figure className='figD2 figD21' style={s.sfigD2}><img className='imgD2 imgD21 P1' id='imgD21'  style={s.simgD2} onClick={f.events.over.imgD21} onMouseOut={f.events.out.imgD21}/><figcaption className='figCD2' style={s.sfigcD2} onClick ={EimgD21}>Nome e preço</figcaption></figure></li>                
                <li className='liD2 lD22' style={s.sliD2}><figure className='figD2 figD22' style={s.sfigD2}><img className='imgD2 imgD22 P2' id='imgD22'  style={s.simgD2}/><figcaption className='figCD2' style={s.sfigcD2} onClick ={EimgD22}>Nome e preço</figcaption></figure></li>
                <li className='liD2 lD23' style={s.sliD2}><figure className='figD2 figD23' style={s.sfigD2}><img className='imgD2 imgD23 P3' id='imgD23'  style={s.simgD2}/><figcaption className='figCD2' style={s.sfigcD2} onClick ={EimgD23}>Nome e preço</figcaption></figure></li>
                <li className='liD2 lD24' style={s.sliD2}><figure className='figD2 figD24' style={s.sfigD2}><img className='imgD2 imgD24 P4' id='imgD24'  style={s.simgD2}/><figcaption className='figCD2' style={s.sfigcD2}>Nome e preço</figcaption></figure></li>
                <li className='liD2 lD25' style={s.sliD2}><figure className='figD2 figD25' style={s.sfigD2}><img className='imgD2 imgD25 P5' id='imgD25'  style={s.simgD2}/><figcaption className='figCD2' style={s.sfigcD2}>Nome e preço</figcaption></figure></li>
                <li className='liD2 lD26' style={s.sliD2}><figure className='figD2 figD26' style={s.sfigD2}><img className='imgD2 imgD26 P6' id='imgD26'  style={s.simgD2}/><figcaption className='figCD2' style={s.sfigcD2}>Nome e preço</figcaption></figure></li>
            </ol>
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