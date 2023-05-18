//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Nome : S
//Validação : Boa
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var TSH = (A) => {
    var B = [];
    for(let x of A) {
        var y;
        y = x.toString(16);
        B.push(y);
    }
    return B;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Esta função altera a cor de um dado elemento html referenciado como argumento.
//* Definiões:
//-Agumentos:
//e = um elemento html indentificado 
//a = a é um array com dois elementos, tais que, cada elemento possui 3 coordenadas
// sendo que cada uma das coordenadas irão especificar respectivamente um número decimal
// que pertence ao intervalo [0,255] ((- IN (subconjunto dos naturais).
var C1 = (e,a) => {
    var [b1,b2] = a, e1=e;
    var [vlr1, vlr2] = [TSH(b1),TSH(b2)]; 
    console.log([vlr1,vlr2]);
    var [x,y] = ['#' + vlr1[0] + vlr1[1] + vlr1[2]+ '','#' + vlr2[0] + vlr2[1] + vlr2[2] + ''], 
    rgb = 'linear-gradient('+ x + ',' + y + ')';
    S([e1,'background',rgb]);
    return [x,y];
}
var A = [[21,0,83],[83,0,21]];
C1($('.Div1'),A);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Rascunho:
//D1 = rgb(64, 0, 255) = rgb(64, 0, 64*4-1),
//D2 = rgb(54, 0, 215) = rgb(54, 0, 54*4-1),
//D3 = rgb(41, 0, 163) = rgb(41, 0, 41*4-1),
//D4 = rgb(22, 0, 87) = rgb(41, 0, 22*4-1),
//........................................
//Dn = rgb(x,y=0,z) = rgb(x,y=0,x*4-1) , x (( [0,64] ((- IN 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var C2 = (e,a) => {
    var [b1,b2] = a, e1=e; 
    console.log([b1,b2]);
    var [x,y] = ['rgb(' + b1[0] +','+ b1[1] +','+ b1[2]+ ')','rgb(' + b2[0] +','+ b2[1] +','+ b2[2] + ')'], 
    rgb = 'linear-gradient('+ x + ',' + y + ')';
    S([e1,'background',rgb]);
    return [x,y];
}
var A = [[21,0,83],[83,0,21]];
C2($('.Div1'),A);