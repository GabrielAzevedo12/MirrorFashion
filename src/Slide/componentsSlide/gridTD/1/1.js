import "./css/1.css";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
} from "../../DBanner/f/f.js";
import { GridTF10 } from "./gtf10/gtfh10";
import { GridTF7 } from "./gtf7/gtfh7";
import { GridTF6 } from "./gtf6/gtfh6";
import { GridTF8 } from "./gtf8/gtfh8";
import { GridTF9 } from "./gtf9/gtfh9";
import { GridTF11 } from "./gtf11/gtfh11";
import { GridTF1 } from "./gtf1/gtfh1";
import { GridTF2 } from "./gtf2/gtfh2";
import { GridTF3 } from "./gtf3/gtfh3";
import { GridTF4 } from "./gtf4/gtfh4";
import { GridTF5 } from "./gtf5/gtfh5";
import { GridTFT } from "./gtfT/gtfhT";
//Fase : Teste
const GridTD1 = () => {
  const display_none = { display: "none" };
  return (
    <div className="gridTD">
      <GridTFT/>
      <GridTF1/>
      <GridTF2/>
      <GridTF3/>
      <GridTF4/>
      <GridTF5/>
      <GridTF6/>
      <GridTF7/>
      <GridTF8/>
      <GridTF9/>
      <GridTF10/>
      <GridTF11/>
    </div>
  );
};

export { GridTD1 };

/*A Maior Loja de Roupas de todo Brasil*/
/*

Testes :

var teste_srcrdg1 = () => {
    const w = 100/100*$(".gridTF1").clientWidth;
    srcrdg(w,$(".gridTF1"),"scrollLeft")    
}
var teste_srcrdg2 = () => {
    const w = -100/100*$(".gridTF1").clientWidth;
    srcrdg(w,$(".gridTF1"),"scrollLeft")    
}

var teste_srcrdg12 = () => {
    const w = 100/100*$(".gridTF2").clientWidth;
    srcrdg(w,$(".gridTF2"),"scrollLeft")    
}
var teste_srcrdg22 = () => {
    const w = -100/100*$(".gridTF2").clientWidth;
    srcrdg(w,$(".gridTF2"),"scrollLeft")    
}

var teste_srcrdg13 = () => {
    const w = 100/100*$(".gridTF3").clientHeight;
    srcrdg(w,$(".gridTF3"),"scrollTop")    
}
var teste_srcrdg23 = () => {
    const w = -100/100*window.innerHeight;
    srcrdg(w,$(".gridTF3"),"scrollTop")    
}

<div className="gridTH1 gridTH animation1_gridTH animation1_gridTH1">
          <h1 className="gridTFH11 gridTFH animation1_gridTFH animation1_gridTFH11">
            título Dbanner
          </h1>
</div>
        
 */
/*
 <div className="DbannerTíd1 DbannerTíd" style={display_none}>
          <p className="bannerTíd1 bannerTíd1A" style={display_none}>
            {" "}
            Sejá Bem Vindo a Mirror Fashion
          </p>
        </div>
        <span className="bannerSpan bannerSpanA"></span>
        <div className="DbannerTíd2 DbannerTíd" style={display_none}>
          <p className="bannerTíd2"></p>
        </div>
        
        <div className="gridTD2">
          <div className="gridTD2F1 gridTD2F animation1_gridTD2F animation1_gridTD2F1">
            <div className="gridTD2FN1 gridTND2F1 animation1_gridTD2FN animation1_gridTD2FN1">
              foutono
            </div>
            <div className="gridTD2FN2 gridTND2F1 animation1_gridTD2FN animation1_gridTD2FN2">
              teste1
            </div>
          </div>
          <div className="gridTD2F2 gridTD2F animation1_gridTD2F animation1_gridTD2F2">
            <h1 className="gridTD2F2N1 gridTND2F2 animation1_gridTD2F2N animation1_gridTD2F2N1">
              Temos Moda de Outono
            </h1>
            <h1 className="gridTD2F2N2 gridTND2F2 animation1_gridTD2FN animation1_gridTD2F2N2">
              teste3
            </h1>
          </div>
        </div>
*/
/*
<div className="gridTF6 gridTF animation1_gridTF6">
        <h1 className="gridTN61 gridTN6 animation1_gridTN animation1_gridTN61">
          Temos Moda de Verão
        </h1>
        <h1 className="gridTN92 gridTN9 animation1_gridTN animation1_gridTN92">
          Os Melhores Estilos Para Você
        </h1>
      </div>
      <div className="gridTF7 gridTF animation1_gridTF7">
        <div className="gridTN71 gridTN7 animation1_gridTN animation1_gridTN71 tídivo">
          fVerão1
        </div>
        <div className="gridTN72 gridTN7 animation1_gridTN animation1_gridTN72 tídivo">
          fVerão2
        </div>
        <div className="gridTN73 gridTN7 animation1_gridTN animation1_gridTN73 tídivo">
          fverão3
        </div>
      </div>
      <div className="gridTF8 gridTF animation1_gridTF8">
        <div className="gridTN81 gridTN8 animation1_gridTN animation1_gridTN81 tídivo">
          fInverno1
        </div>
        <div className="gridTN82 gridTN8 animation1_gridTN animation1_gridTN82 tídivo">
          fInverno2
        </div>
        <div className="gridTN83 gridTN8 animation1_gridTN animation1_gridTN83 tídivo">
          fInverno3
        </div>
      </div>
      <div className="gridTF9 gridTF animation1_gridTF9">
        <h1 className="gridTN92 gridTN9 animation1_gridTN animation1_gridTN92">
          Temos Moda de Inverno
        </h1>
        <h1 className="gridTN92 gridTN9 animation1_gridTN animation1_gridTN92">
          Venha Conferir os Nossos Modelos
        </h1>
      </div>
 */
