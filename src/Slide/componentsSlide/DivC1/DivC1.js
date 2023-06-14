import DivDestaque from "../D1/Div1";
import DivLista from "../D2/Div2.js";
import { Fetch } from "../../Funções/teste/Fetch.js";
import Div11 from "../D11/D11";
import LD11 from "../LD11/LD11";
import { useState, useEffect } from "react";
import { Dbanner } from "../DBanner/Dbanner.js";
import { Div11D } from "./objetos/Div11D"
import { Div11D2 } from "./objetos/Div11D2";
import { DivPrincipal1 } from "./objetos/DivPrincipal1";
import { DivPrincipal2 } from "./objetos/DivPrincipal2";

let DivC1 = ({ DivC1pr }) => {
  const [datau, setDatau] = useState([]),
    [LDsc1, setLDsc1] = useState([]);

  useEffect(() => {
    let [url, method, content] = [
      "http://localhost:5000/Produtos/",
      "GET",
      "null",
    ];
    Fetch(url, method, content, setDatau, null, null);

    let [url2, method2, content2] = [
      "http://localhost:5000/LDsc1/",
      "GET",
      "null",
    ];
    Fetch(url2, method2, content2, setLDsc1, null, null);
  }, []);
  const 
    // i (( I(6) - {0}
    DivD = {
      class: "Div1 Div",
      id: "Div1",
      filhos: {
        F1: <Div11 Div11Destaque={Div11D} />,
        F2: <LD11 ListaScrd={LDsc1} />,
      },
    },
    DivD2 = {
      class: "Div1 Div",
      id: "Div4",
      filhos: {
        F1: <Div11 Div11Destaque={Div11D2} />,
      },
    };
  return (
    <div className={DivC1pr.class} id={DivC1pr.id}>
      <DivDestaque DivDestaque={DivD} />
      <Dbanner />
      <DivLista DivPrincipal={DivPrincipal1} />
      <DivLista DivPrincipal={DivPrincipal2} />
      <DivDestaque DivDestaque={DivD2} />
    </div>
  );
};

export default DivC1;
/*
  let [url3, method3, content3] = [
      "http://localhost:5000/LDsc2/",
      "GET",
      "null",
    ];
    Fetch(url3, method3, content3, setLDsc2, null, null);

    let [url4, method4, content4] = [
      "http://localhost:5000/LDsc3/",
      "GET",
      "null",
    ];
    Fetch(url4, method4, content4, setLDsc3, null, null);
  }, []);

    [LDsc2, setLDsc2] = useState([]),
    [LDsc3, setLDsc3] = useState([]);
EPG = async (e) => {
      Navigate("/Produtos");
      const [text, id, name, preço, classe] = [
        e.target.textContent,
        e.target.previousSibling.previousSibling.id,
        e.target.textContent.split("  ")[0],
        e.target.textContent.split("  ")[1],
        e.target.className,
      ];

      console.log(id);

      let [url, method, content] = [
        `http://localhost:5000/Produtos/P1`,
        "PUT",
        {
          name: name + " ",
          preço: preço,
          namePreço: text ? text : "",
          src: "./images/Produtos/" + id + ".jpg",
          classD: classe,
          classImg: e.target.previousSibling.previousSibling.className,
          style: e.target.style.cssText,
        },
      ];

      Fetch(url, method, content, null, null, null);

      console.log("EPG foi executada");
    }
 "classD": "figCD2 figCD21",
      "classP": "figCD2 figCD21",
      "classImg": "figCD2 figCD21",
*/
/*const DivTF1A = () => {
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
    };*/
/*console.log(`${testeTemplate()}`)*/
/*
            EP1 = async (e) => {
            Navigate('/Produtos')
            const [text,id,name,preço] = [e.target.textContent, e.target.id, e.target.textContent.split("  ")[0], e.target.textContent.split("  ")[1]]; 
            console.log(preço);
            let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                name: name+" ",
                preço: preço,
                namePreço:  text ? text : "",
                src: "./images/Produtos/P1.jpg",
                class: "P1",
                style: e.target.style.cssText,
              },"null"]; 

            Fetch(url,method,content,null,null,null) 

            console.log('imgD21 foi executada')

                },
            EP2 = async (e) => {
                    Navigate('/Produtos')
                    const text = e.target.textContent
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        name: "Fuzz Cardigan ",
                        preço: "R$179,99",
                        namePreço:  text ? text : "",
                        src: "./images/Produtos/P2.jpg",
                        class: "P2",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null,null) 
        
                    console.log('imgD22 foi executada')
        
                },
            EP3 = async (e) => {
                    Navigate('/Produtos')
                    const text = e.target.textContent
                    let [url,method,content] = ["http://localhost:5000/Produtos/P1","PUT",{
                        name: "Fuzz Cardigan ",
                        preço: "R$179,99",
                        namePreço:  text ? text : "",
                        src: "./images/Produtos/P3.jpg",
                        class: "P3",
                        style: "null",
                      },"null"]; 
                    Fetch(url,method,content,null,null,null) 
        
                    console.log('imgD23 foi executada')
        
                },
*/
