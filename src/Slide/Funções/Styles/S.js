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
module.exports = S;

