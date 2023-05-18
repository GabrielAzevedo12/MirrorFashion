var $ = require('../Query/$'), S = require('../Styles/S'), gx = require('./gx'), UL = require('./TL');  
//-----------------------------------------------------------------------------------------------------------
let posPF = (E) => {
    var E1 = $("." + E), PE = E1.parentElement;
    S([PE,'position','relative']);
    S([E1,'position','absolute']);
}
//-----------------------------------------------------------------------------------------------------------
let MD2 = (ElementoHtml,CI,Agx,FU) => {
    let [E,[QM],[x,v,cg,a],[gx,UL]]  = [ElementoHtml,CI,Agx,FU];
    let ExcMov = setInterval(frame,10);
    function frame() {
    if((x === QM)||(x < QM)) {
        clearInterval(ExcMov);
        console.log('O movimento do ' + ElementoHtml+' parou!!')
    }
else  {
        [x] = [gx(x,v,cg,a)];
        var c1 = UL(E,x);
        console.log([c1,'0px'])
        
    }
}
};
//-----------------------------------------------------------------------------------------------------------
//ex
var [E11,CI11,Agx11,FU11] = [$('.Div1'),[0],[1600,200,-1,1],[gx,UL]]
var [E21,CI21,Agx21,FU21] = [$('.Div2'),[0],[1600,200,-1,1],[gx,UL]]
var [E31,CI31,Agx31,FU31] = [$('.Div3'),[0],[1600,200,-1,1],[gx,UL]]
//Movimento na direção esquerda em relação ao usuário
MD2(E11,CI11,Agx11,FU11);MD2(E21,CI21,Agx21,FU21);MD2(E31,CI31,Agx31,FU31);
//-----------------------------------------------------------------------------------------------------------
module.exports = MD2;

