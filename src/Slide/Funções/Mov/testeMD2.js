//-----------------------------------------------------------------------------------------------------------
//teste
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
var UL = (E,upx) => {
    var E = E, upx = upx,d = upx + 'px';
    return E.style.left = d;
};
let posPF = (E) => {
    var E = $("." + E), PE = E.parentElement;
    S([PE,'position','relative']);
    S([E,'position','absolute']);
}
let MD2 = (ElementoHtml,CI,Agx,FU) => {
    var [E,[QM],[x,v,cg,a],[gx]]  = [ElementoHtml,CI,Agx,FU];
    let ExcMov = setInterval(frame,15);
    function frame() {
    if((x === QM)||(x > QM)) {
        clearInterval(ExcMov);
        console.log('O movimento do '+""+ElementoHtml+''+'parou!!')
    }
else  {
        [x] = [gx(x,v,cg,a)];
        var [c1] = [UL(E,x)];
        console.log([c1,'0px'])
        
    }
}
};
let MD21 = (ElementoHtml,CI,Agx,FU) => {
    var [E,[QM],[x,v,cg,a],[gx]]  = [ElementoHtml,CI,Agx,FU];
    let ExcMov = setInterval(frame,15);
    function frame() {
    if((x === QM)||(x < QM)) {
        clearInterval(ExcMov);
        console.log('O movimento do '+""+ElementoHtml+''+'parou!!')
    }
else  {
        [x] = [gx(x,v,cg,a)];
        var [c1] = [UL(E,x)];
        console.log([c1,'0px'])
        
    }
}
};
var [E1,CI1,Agx1,FU1] = [$('.Div2'),[1600],[0,200,1,1],[gx]]
var [E2,CI2,Agx2,FU2] = [$('.Div1'),[1600],[0,200,1,1],[gx]]
var [E3,CI3,Agx3,FU3] = [$('.Div3'),[1600],[0,200,1,1],[gx]]
var [E11,CI11,Agx11,FU11] = [$('.Div2'),[0],[1600,200,-1,1],[gx]]
var [E21,CI21,Agx21,FU21] = [$('.Div1'),[0],[1600,200,-1,1],[gx]]
var [E31,CI31,Agx31,FU31] = [$('.Div3'),[0],[1600,200,-1,1],[gx]]
//Movimento na direção direita em relação ao usuário
MD2(E1,CI1,Agx1,FU1);MD2(E2,CI2,Agx2,FU2);MD2(E3,CI3,Agx3,FU3);
//Movimento na direção esquerda em relação ao usuário
MD21(E11,CI11,Agx11,FU11);MD21(E21,CI21,Agx21,FU21);MD21(E31,CI31,Agx31,FU31);

