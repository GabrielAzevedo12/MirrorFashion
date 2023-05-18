import './css/slide.css';
import DivC1 from './componentsSlide/DivC1/DivC1'
import OOM from './Funções/teste/OOM';
import MD5 from './Funções/Mov/MD5';
import MD6 from './Funções/Mov/MD6';
import DivC2 from './componentsSlide/DivC2/DC2';
import ML2v2 from './Funções/Mov/ML2';
import S from './Funções/Styles/S';
import gx from './Funções/Mov/gx';
import UT from './Funções/Mov/TT';
import $ from './Funções/Query/$';
import Header from './componentsSlide/Header/Header';
import Ld from './componentsSlide/LD/LD';

function Slide() {
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Definições
// f = Funções 
// p = Propriedades ou atributos
var 
  f = {
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   MoverB : () => {
    let [x1,x2,x3,x4] = [parseInt($('.Div4').style.top),parseInt($('.Div5').style.top),parseInt($('.Div6').style.top),parseInt($('.Div1').style.top) ] ;
    let IZ = OOM('d',4,-790),IN = OOM('d',4,790),CI = [IN,IZ]; console.log(CI);
    let [E1,CI1,Agx1,FU1] = [$('.Div4'),CI,[x1,395,1,1],[gx,UT]];
    let [E2,CI2,Agx2,FU2] = [$('.Div5'),CI,[x2,395,1,1],[gx,UT]];
    let [E3,CI3,Agx3,FU3] = [$('.Div6'),CI,[x3,395,1,1],[gx,UT]];
    let [E4,CI4,Agx4,FU4] = [$('.Div1'),CI,[x4,395,1,1],[gx,UT]];
    //Movimento na direção baixo em relação ao usuário
    MD5(E1,CI1,Agx1,FU1);MD5(E2,CI2,Agx2,FU2);MD5(E3,CI3,Agx3,FU3);MD5(E4,CI4,Agx4,FU4)
    },
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                              
   MoverC : () => {
    let [x1,x2,x3,x4] = [parseInt($('.Div4').style.top),parseInt($('.Div5').style.top),parseInt($('.Div6').style.top),parseInt($('.Div1').style.top) ] ;
    let IZ = OOM('d',4,-790),IN = OOM('d',4,790),CI = [IN,IZ]; console.log(CI);
    let [E1,CI1,Agx1,FU1] = [$('.Div4'),CI,[x1,395,-1,1],[gx,UT]];
    let [E2,CI2,Agx2,FU2] = [$('.Div5'),CI,[x2,395,-1,1],[gx,UT]];
    let [E3,CI3,Agx3,FU3] = [$('.Div6'),CI,[x3,395,-1,1],[gx,UT]];
    let [E4,CI4,Agx4,FU4] = [$('.Div1'),CI,[x4,395,-1,1],[gx,UT]];
    //Movimento na direção cima em relação ao usuário
    MD6(E1,CI1,Agx1,FU1);MD6(E2,CI2,Agx2,FU2);MD6(E3,CI3,Agx3,FU3);MD6(E4,CI4,Agx4,FU4)
    }, 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
   MLSE2 : () => {
      let e = $('.LHli2');
      e.style.listStyleType = 'disc';
    },
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   MoverL2 : () => {
    let x = $('.Div4');
    ML2v2(x);
    f.MLSE2();
    },
   px : (e) => {
  var e1 = $(e);
   return parseInt(e1.style.left) 
} 
},
  p = {
  
  };
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  (() => {
    window.addEventListener("scroll",() => {
    })
  })();
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="slide">
        <DivC1/>
        <DivC2  Ml2={f.MoverL2} MB={f.MoverB} MC={f.MoverC}/> 
      </div>
    </>
  );
}

export default Slide;

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
