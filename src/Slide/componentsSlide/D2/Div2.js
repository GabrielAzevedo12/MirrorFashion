import "./css/Div2.css";
import { useState, useEffect } from "react";
import { Fetch } from "../../Funções/teste/Fetch";
import { useNavigate } from "react-router-dom";
import { f } from "./funções/f.js";
import LD11 from "../LD11/LD11";

var DivLista = (props) => {
  const [produtos, setProdutos] = useState([]),
    [LDsc2, setLDsc2] = useState([]),
    Navigate = useNavigate();

  useEffect(() => {
    const [url, method, content] = [
        "http://localhost:5000/Produtos" + props.DivPrincipal.idGet + "/",
        "GET",
        "null",
      ],
      [url2, method2, content2] = [
        "http://localhost:5000/LDsc" + props.DivPrincipal.idGetLDsc + "/",
        "GET",
        "null",
      ];

    Fetch(url, method, content, setProdutos, null, null);
    Fetch(url2, method2, content2, setLDsc2, null, null);
  }, []);

  const EPG = async (e) => {
    Navigate("/Produtos");

    const [text, id, name, preço, classd, classi, alti] = [
      e.target.textContent,
      e.target.previousSibling.id,
      e.target.textContent.split("  ")[0],
      e.target.textContent.split("  ")[1],
      e.target.parentElement.className,
      e.target.previousSibling.className,
      e.target.previousSibling.alt,
    ];

    console.log(id);

    let [url, method, content] = [
      `http://localhost:5000/ProdutosP/P`,
      "PUT",
      {
        name: name + " ",
        preço: preço,
        namePreço: text ? text : "",
        src: "./images/Produtos/" + id + ".jpg",
        classD: classd,
        classImg: classi,
        classP: e.target.className,
        altImg: alti,
        style: "",
      },
    ];

    Fetch(url, method, content, null, null, null);

    console.log("EPG foi executada");
  };
  return (
    <div className={props.DivPrincipal.class} id={props.DivPrincipal.id}>
      <h1
        className={props.DivPrincipal.filhos.f1.class}
        id={props.DivPrincipal.filhos.f1.id}
      >
        {props.DivPrincipal.filhos.f1.filhos.textContent}
      </h1>
      <div className={props.DivPrincipal.filhos.f2.class}>
        {produtos.map((Produto) => (
          <div className={Produto.classD}>
            <img
              className={Produto.classImg}
              id={Produto.id}
              src={Produto.src}
              alt={Produto.altImg}
              /*onMouseOver={f["events"]["over"][Produto.over]}*/
              /*onMouseOut={f["events"]["out"][Produto.out]}*/
            />
            <p className={Produto.classP} onClick={EPG}>
              {Produto.namePreço}
            </p>
          </div>
        ))}
      </div>
      <LD11 ListaScrd={LDsc2} />
    </div>
  );
};

export default DivLista;

//Rascunho
/*
  {props.DivPrincipal.filhos.f3}
  9lez4p-5000.csb.app
*/
/*
{props.DivPrincipal.filhos.f3}

    <div className='liD2 lD21'>
        <img className='imgD2 imgD21 AimgD2' id='P1' src="./images/Produtos/P1.jpg" alt=""/> 
        <p className='figCD2 figCD21' onClick ={EPG}>
            Fuzz Cardigan  R$179,99
        </p>
    </div>

    {produtos.map((Produto) => {
                    <div className='liD2 lD21'>
                    <img className='imgD2 imgD21 AimgD2' id='P1' src="./images/Produtos/P1.jpg" alt=""/> 
                    <p className='figCD2 figCD21' onClick ={EPG}>
                        Fuzz Cardigan  R$179,99
                    </p>
                </div>                
                })}
*/
/*

                <div className='liD2 lD21'> {FilhosFigD2.img1} <p className='figCD2' onClick ={EimgD21}>Nome e preço</p></div>              
                <div className='liD2 lD22'> {FilhosFigD2.img2} <p className='figCD2' onClick ={EimgD22}>Nome e preço</p></div>
                <div className='liD2 lD23'> {FilhosFigD2.img3} <p className='figCD2' onClick ={EimgD23}>Nome e preço</p></div>
                <div className='liD2 lD24'> {FilhosFigD2.img4} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD25'> {FilhosFigD2.img5} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD26'> {FilhosFigD2.img6} <p className='figCD2' >Nome e preço</p></div>
*/
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

/*
                {props.DivPrincipal.filhos.f2.filhos.n1.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n2.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n3.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n4.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n5.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n6.corpoJSX}
*/
