import "./css/Dbanner.css";
import "./css/DbannerA.css";
import "./../gridTD/1/css/gridTD.css";
import "./../gridTD/1/css/gridTDA.css";
import "./../gridTD/2/css/gridTD2A.css";
import "./../gridTD/3/css/gridTD3.css";
import "./../gridTD/3/css/gridTD3A.css";
import "./../gridTD/4/css/gridTD4.css";
import "./../gridTD/4/css/gridTD4A.css";
import "./../gridTD/5/css/gridTD5.css";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
} from "./f/f.js";
import { GridTD1 } from "../gridTD/1/1.js";
import { GridTDG } from "../gridTD/g/g.js";
import { gridTD2_props } from "./o/griTD2";
import { gridTD3_props } from "./o/griTD3";
import { gridTD4_props } from "./o/griTD4";
import { gridTD5_props } from "./o/griTD5";
import { GridTD2 } from "../gridTD/2/2";
//Fase : Teste
const Dbanner = () => {
  const display_none = { display: "none" };
  return (
    <>
      <div className="DbannerPrincipal1">
        <GridTD1 />
      </div>
      <div className="DbannerPrincipal2">
        <GridTD2 />
      </div>
      <div className="DbannerPrincipal3">
        <GridTDG PropsGridTDG={gridTD3_props} />
        <GridTDG PropsGridTDG={gridTD4_props} />
        <GridTDG PropsGridTDG={gridTD5_props} />
      </div>
    </>
  );
};

export { Dbanner };

/*A Maior Loja de Roupas de todo Brasil*/
/*

Testes :

var teste_srcrdg1 = () => {
    const w = 100/100*$('.gridTF1').clientWidth;
    srcrdg(w,$('.gridTF1'),'scrollLeft')    
}
var teste_srcrdg2 = () => {
    const w = -100/100*$('.gridTF1').clientWidth;
    srcrdg(w,$('.gridTF1'),'scrollLeft')    
}

var teste_srcrdg12 = () => {
    const w = 100/100*$('.gridTF2').clientWidth;
    srcrdg(w,$('.gridTF2'),'scrollLeft')    
}
var teste_srcrdg22 = () => {
    const w = -100/100*$('.gridTF2').clientWidth;
    srcrdg(w,$('.gridTF2'),'scrollLeft')    
}

var teste_srcrdg13 = () => {
    const w = 100/100*$('.gridTF3').clientHeight;
    srcrdg(w,$('.gridTF3'),'scrollTop')    
}
var teste_srcrdg23 = () => {
    const w = -100/100*window.innerHeight;
    srcrdg(w,$('.gridTF3'),'scrollTop')    
}

<div className='gridTH1 gridTH animation1_gridTH animation1_gridTH1'>
          <h1 className='gridTFH11 gridTFH animation1_gridTFH animation1_gridTFH11'>
            título Dbanner
          </h1>
</div>
        
 */
/*
 <div className='DbannerTíd1 DbannerTíd' style={display_none}>
          <p className='bannerTíd1 bannerTíd1A' style={display_none}>
            {' '}
            Sejá Bem Vindo a Mirror Fashion
          </p>
        </div>
        <span className='bannerSpan bannerSpanA'></span>
        <div className='DbannerTíd2 DbannerTíd' style={display_none}>
          <p className='bannerTíd2'></p>
        </div>
        
        <div className='gridTD'>
          <div className='gridTFT gridTF animation1_gridTF animation1_gridTFT'>
            <h1 className='gridTNT1 gridTN animation1_gridTN animation1_gridTNT1'>
              Sejá Bem Vindo a Mirror Fashion
            </h1>
            <h1 className='gridTNT2 gridTN animation1_gridTN animation1_gridTNT2'>
              Título grid 2
            </h1>
          </div>
          <div className='gridTF1 gridTF animation1_gridTF animation1_gridTF1'>
            <div
              className='gridTN11 gridTN animation1_gridTN animation1_gridTN11'
              onMouseOver={gridTN11.Disparar_Evento_Quando.Over}
              onMouseOut={gridTN11.Disparar_Evento_Quando.Out}
            >
              destaque1
            </div>
            <div className='gridTN12 gridTN animation1_gridTN animation1_gridTN12'>
              destaque2
            </div>
            <div className='gridTN13 gridTN animation1_gridTN animation1_gridTN13'>
              destaque3
            </div>
          </div>
          <div className='gridTF2 gridTF animation1_gridTF animation1_gridTF2'>
            <div className='gridTN21 gridTN2 animation1_gridTN animation1_gridTN21'>
              subdestaque11
            </div>
            <div className='gridTN22 gridTN2 animation1_gridTN animation1_gridTN22'>
              subdestaque12
            </div>
            <div className='gridTN23 gridTN2 animation1_gridTN animation1_gridTN23'>
              subdestaque13
            </div>
          </div>
          <div className='gridTF3 gridTF animation1_gridTF animation1_gridTF3'>
            <div className='gridTN31 gridTN3 animation1_gridTN animation1_gridTN31'>
              subdestaque21
            </div>
            <div className='gridTN32 gridTN3 animation1_gridTN animation1_gridTN32'>
              subdestaque22
            </div>
            <div className='gridTN33 gridTN3 animation1_gridTN animation1_gridTN33'>
              subdestaque23
            </div>
          </div>
          <div className='gridTF4 gridTF animation1_gridTF animation1_gridTF4'>
            <div className='gridTN41 gridTN4 animation1_gridTN animation1_gridTN41'>
              subdestaque31
            </div>
            <div className='gridTN42 gridTN4 animation1_gridTN animation1_gridTN42'>
              subdestaque32
            </div>
            <div className='gridTN43 gridTN4 animation1_gridTN animation1_gridTN43'>
              subdestaque33
            </div>
          </div>
          <div className='gridTF5 gridTF animation1_gridTF animation1_gridTF5'>
            <div className='gridTN51 gridTN5 animation1_gridTN animation1_gridTN51'>
              subdestaque41
            </div>
            <div className='gridTN52 gridTN5 animation1_gridTN animation1_gridTN52'>
              subdestaque42
            </div>
            <div className='gridTN53 gridTN5 animation1_gridTN animation1_gridTN53'>
              subdestaque43
            </div>
          </div>
          <div className='gridTF6 gridTF animation1_gridTF6'>
            <h1 className='gridTN61 gridTN6 animation1_gridTN animation1_gridTN61'>
              Temos Moda de Verão
            </h1>
            <h1 className='gridTN92 gridTN9 animation1_gridTN animation1_gridTN92'>
              Os Melhores Estilos Para Você
            </h1>
          </div>
          <div className='gridTF7 gridTF animation1_gridTF7'>
            <div className='gridTN71 gridTN7 animation1_gridTN animation1_gridTN71 tídivo'>
              fVerão1
            </div>
            <div className='gridTN72 gridTN7 animation1_gridTN animation1_gridTN72 tídivo'>
              fVerão2
            </div>
            <div className='gridTN73 gridTN7 animation1_gridTN animation1_gridTN73 tídivo'>
              fverão3
            </div>
          </div>
          <div className='gridTF8 gridTF animation1_gridTF8'>
            <div className='gridTN81 gridTN8 animation1_gridTN animation1_gridTN81 tídivo'>
              fInverno1
            </div>
            <div className='gridTN82 gridTN8 animation1_gridTN animation1_gridTN82 tídivo'>
              fInverno2
            </div>
            <div className='gridTN83 gridTN8 animation1_gridTN animation1_gridTN83 tídivo'>
              fInverno3
            </div>
          </div>
          <div className='gridTF9 gridTF animation1_gridTF9'>
            <h1 className='gridTN92 gridTN9 animation1_gridTN animation1_gridTN92'>
              Temos Moda de Inverno
            </h1>
            <h1 className='gridTN92 gridTN9 animation1_gridTN animation1_gridTN92'>
              Venha Conferir os Nossos Modelos
            </h1>
          </div>
        </div>
        
        <div className='gridTD2'>
          <div className='gridTD2F1 gridTD2F animation1_gridTD2F animation1_gridTD2F1'>
            <div className='gridTD2FN1 gridTND2F1 animation1_gridTD2FN animation1_gridTD2FN1'>
              foutono
            </div>
            <div className='gridTD2FN2 gridTND2F1 animation1_gridTD2FN animation1_gridTD2FN2'>
              teste1
            </div>
          </div>
          <div className='gridTD2F2 gridTD2F animation1_gridTD2F animation1_gridTD2F2'>
            <h1 className='gridTD2F2N1 gridTND2F2 animation1_gridTD2F2N animation1_gridTD2F2N1'>
              Temos Moda de Outono
            </h1>
            <h1 className='gridTD2F2N2 gridTND2F2 animation1_gridTD2FN animation1_gridTD2F2N2'>
              teste3
            </h1>
          </div>
        </div>
*/
