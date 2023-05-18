//Transforma cada elemento de um dado array em uma string e 
//retorna um outro array com todas as strings criadas.
var TS = (A) => {
    var B = [];
    for(x of A) {
        var y;
        y = x.toString();
        B.push(y);
    }
    return B;
}
//-----------------------------------------------------------------------------------------------------------------
module.exports = TS;
//-----------------------------------------------------------------------------------------------------------------
//teste
var [d1,d2,d3] = [0,0,0], A = [d1,d2,d3], vlr;
var [e1,e2,e3] = [0,0,0], A2 = [e1,e2,e3], vlr2;
vlr = TS(A); vlr2 = TS(A2);
console.log([vlr,vlr2])
//-----------------------------------------------------------------------------------------------------------------
//Transforma cada elemento de um dado array que devem ser obrigatoriamente um número (preferencialmente diferente de hexadecimal),
//em uma string, converte para hexadecimal e retorna um outro array com todas as strings criadas.
var TSH = (A) => {
    var B = [];
    for(let x of A) {
        var y;
        y = x.toString(16);
        B.push(y);
    }
    return B;
}
//-----------------------------------------------------------------------------------------------------------------
module.exports = TSH;
//-----------------------------------------------------------------------------------------------------------------
//teste
//-----------------------------------------------------------------------------------------------------------------