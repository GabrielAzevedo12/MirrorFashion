import "./css/3.css";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
} from "../../DBanner/f/f.js";
//Fase : Teste
const GridTD3 = () => {
  const display_none = { display: "none" };
  return (
    <div className="gridTD3">
      <div className="gridTD3F1 gridTD3F animation1_gridTD3F animation1_gridTD3F1">
        <div className="gridTD3FN1 gridTND3F1 animation1_gridTD3FN animation1_gridTD3FN1">
          verão
        </div>
        <div className="gridTD3FN2 gridTND3F1 animation1_gridTD3FN animation1_gridTD3FN2">
          teste1
        </div>
      </div>
      <div className="gridTD3F2 gridTD3F animation1_gridTD3F animation1_gridTD3F2">
        <h1 className="gridTD3F2N1 gridTND3F2 animation1_gridTD3F2N animation1_gridTD3F2N1">
          Temos Moda de Verão
        </h1>
        <h1 className="gridTD3F2N2 gridTND3F2 animation1_gridTD3FN animation1_gridTD3F2N2">
          teste3
        </h1>
      </div>
    </div>
  );
};

export { GridTD3 };

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
        
        <div className="gridTD3">
          <div className="gridTD3F1 gridTD3F animation1_gridTD3F animation1_gridTD3F1">
            <div className="gridTD3FN1 gridTND2F1 animation1_gridTD3FN animation1_gridTD3FN1">
              foutono
            </div>
            <div className="gridTD3FN2 gridTND2F1 animation1_gridTD3FN animation1_gridTD3FN2">
              teste1
            </div>
          </div>
          <div className="gridTD3F2 gridTD3F animation1_gridTD3F animation1_gridTD3F2">
            <h1 className="gridTD3F2N1 gridTND2F2 animation1_gridTD3F2N animation1_gridTD3F2N1">
              Temos Moda de Outono
            </h1>
            <h1 className="gridTD3F2N2 gridTND2F2 animation1_gridTD3FN animation1_gridTD3F2N2">
              teste3
            </h1>
          </div>
        </div>
*/
