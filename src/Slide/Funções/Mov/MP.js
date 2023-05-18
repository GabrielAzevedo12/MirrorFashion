var [$,S,gx,fx,UL,UT,posPF] = [require('../Query/$'),require('../Styles/S'),require('./gx'),require('./fx'),require('./TL'),require('./TT'),require('./posPF')];

//Nome : MP
//Movimento no plano de um dado elemento html.
//um array de condições que determinam um intervalo = CI
//um array com os args de gx = Agx
//um array com os args de fx = Afx
//um array com todos os métodos que serão aplicados na função = FU
//um array com todas as condições que serão executadas após a função terminar o ciclo de execução de instruções = CB
// (E,CI,Agx,Afx,FU,CB)
// var [CI,Agx,Afx,FU,CB] = [[QM,QM2],[x,v,cg,a],[r,x,d],[gx,fx,UL,UT],[x02]]


var MP = (ElementoHtml,CI,Agx,Afx,FU,CB) => {
    var [E,[QM,QM2],[x,v,cg,a],[r,d],[gx,fx,UL,UT],[x02,x03,x04,x05]]=[ElementoHtml,CI,Agx,Afx,FU,CB], y; 

    let ExcMov = setInterval(frame,10);
    function frame() { 
// QM2 =< x =< QM
    if( ( (x > QM) || (x === QM) || (x < QM2) || (x === QM2) ) ) {
        console.log('O movimento do '+""+ E +''+'aumentou!!');
        clearInterval(ExcMov);
        if(x02) {
            Agx = [x,v,-1,10],Afx = [r,-1], CI = [undefined,0], CB = [false,true];
            MP(E,CI,Agx,Afx,FU,CB);
        }
        if(x03) {
            Agx = [x,v,-1,10],Afx = [r,-1], CI = [undefined,-700], CB = [false,false,true];
            MP(E,CI,Agx,Afx,FU,CB);
        }
        if(x04) {
            Agx = [x,v,1,10],Afx = [r,1], CI = [0,undefined], CB = [false,false,false,true];
            MP(E,CI,Agx,Afx,FU,CB);
        }
        if(x05) {
            Agx = [x,v,1,10],Afx = [r,1], CI = [700,undefined], CB = [false];
            MP(E,CI,Agx,Afx,FU,CB);
        }
    }
    else  { 
         [x,y] = [gx(x,v,cg,a),fx(r,x,d)]
         var [c1,c2] = [UL(E,x),UT(E,y)];
         console.log([c1,c2]);
          }
}
};

//teste 
var [E,CI,Agx,Afx,FU,CB] = [$('.Título-Header-1'),[700,0],[1,1,1,1],[700,1],[gx,fx,UL,UT],[true]]
posPF('Título-Header-1');
//-->
MP(E,CI,Agx,Afx,FU,CB);

module.exports = MP;

