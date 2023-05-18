var teste = (
    () => {        
var $ = (NomeDaIndentificão) => { /*O argumento é obrigatoriamento uma string*/  
    var ElementoHtml = document.querySelector(NomeDaIndentificão); // BOM.
       return ElementoHtml; 
}
let S = (ElementoValor) => {
    var ElementoHtml = ElementoValor[0]; // q1 = vst + 2 = vat - 2 
    var QuantEstilos = (ElementoValor.length - 1)/2;
    QuantEstilos = QuantEstilos+2;
    var ElementoValorG = "";
    for(var i = 0 ; i < QuantEstilos + 1 ; i = i+2) {
                var ValorStyle = ElementoValor[i+1] + ":" + ElementoValor[i+2] + ';' ;
                ElementoValorG = ElementoValorG + ValorStyle ;
                console.log(ElementoValor);
    }
    ElementoHtml.style.cssText = ElementoValorG;
};
var gx = (x,v,cg,a) => {
    return x + v*cg*a
};
var fx = (r,x,d) => {
    return d*(r**2-x**2)**0.5
};
var UL = (E,upx) => {
    var E = E, upx = upx,d = upx + 'px';
    return E.style.left = d;
};
var UT = (E,upx) => {
    var E = E, upx = upx,d = upx + 'px';
    return E.style.top = d;
};
let posPF = (E) => {
    var E = $("." + E), PE = E.parentElement;
    S([PE,'position','relative']);
    S([E,'position','absolute']);
}
//Nome : MP
//Movimento no plano de um dado elemento html.
//um array de condições que determinam um intervalo = CI.
//um array com os args de gx = Agx.
//um array com os args de fx = Afx.
//um array com todas os métodos que serão aplicados na função.
//um array com todas as condições que serão executadas após a função terminar o ciclo de execução de instruções = CB.
//um array com todas as funções úteis para realização do movimento no plano. 
// (E,CI,Agx,Afx,FU,CB).
// var [CI,Agx,Afx,FU,CB] = [[QM,QM2],[x,v,cg,a],[r,x,d],[gx,fx,UL,UT],[x02]].

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
}
)()