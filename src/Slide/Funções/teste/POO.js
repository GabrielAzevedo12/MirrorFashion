//Está função analisa se todos os elementos em um conj. Ordenado estão definidos.
var POO1 = (A) => {
    let A1 = A; let P = [];
    for (let x of A1) {
        if(x) {
            P.push(1)
        }
        else {
            console.log('O conjunto não está totalmente definido');
            break
        }
    }
    return P;
}

module.exports = POO1;

//teste
var A = [1,,], X = POO1(A); console.log(A.length) ; console.log(X);
//---------------------------------------------------------------------------------------------------------------------------------------
//Está função analisa, se dado dois conjuntos ordenados um é subconjunto do outro, ou é igual, ou são distintos .
var POO2 = (A,Y1) => {
    let A1 = A , Y = Y1 , P = [];
    for (let x of A1) {
        for(let y of Y) {
            if(x === y) {
                P.push(1)
            }
        }
    }
    if((P.length !== 0 )) {
        console.log(A1 + '  é igual ou um subconjunto de ' + Y)
        if((P.length === A1.length) && (P.length === Y.length) ) {
            console.log(A1 + ' é igual ' + Y)
        }
        else if(((P.length === A1.length) && (P.length !== Y.length) )) {
            console.log(A1 + ' é subconjunto de ' + Y)
        }
    }
    else {
        console.log( A1 + ' não é subconjunto de ' + Y)
    }
    return P;
}
//teste
var B = [9,8], X = POO2(A,B); console.log(X);

