var ConjOrdenado = (qe,vi,f) => {
    let [qe1,vi1,f1,CO] = [qe,vi,f,[]] ;
    for(var i = vi1 ; i < qe1 + 1 ; i++) {
        if(i === 0) {continue}
        var ni = f1(i);
        CO.push(ni);
    }
    return CO;
}
/*var teste = () => {
    var sn = (n1) => {return 100*n1 }, I10 = ConjOrdenado(10,0,sn), s1002n = (n3) => {return 1000 + 100*n3 }, I5 = ConjOrdenado(5,0,s1002n);
    console.log(I10)
    console.log(I5)
}
teste();*/


export {ConjOrdenado}
