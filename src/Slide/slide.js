import './css/slide.css';
import DivC1 from './componentsSlide/DivC1/DivC1'
import $ from './Funções/Query/$';
import { slidePr } from "./slidePr/slidePr.js"
import { f } from './Funções/chamadas/chamadas.js';
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Slide() {
  return (
      <div className={slidePr.class}>
        <DivC1 DivC1pr={slidePr.filhos.f1}/>
      </div>
  );
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default Slide;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
<DivC2  Ml2={f.MoverL2} MB={f.MoverB} MC={f.MoverC}/> 
*/
/*  (() => {
    var UL = (E,upx) => {
      var E1 = E,d = upx + 'px';
      E1.style.left = d;
      return d
    };
    var UT = (E,upx) => {
    var E1 = E,d = upx + 'px';
    E1.style.top = d;
    return d
  };
    UL($('.Div1'),0);UL($('.Div2'),0);UL($('.Div3'),0)
    UT($('.Div4'),0);UT($('.Div5'),0);UT($('.Div6'),0);UT($('.Div1'),0)
  })() */
//Pa = Posição atual
//npx = Número natural múltiplo de px
//Pl = posição da lista
//sCIF = sentença da condição inicial da função = determina o intervalo
//vx = váriavel x que será iterada    
// Pa + npx = Pl = CI <->  npx = Pl - Pa , Pa>Pl -> sCIF <-> vx === Pl v vx < Pl    
