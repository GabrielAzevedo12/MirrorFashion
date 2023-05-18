import ConjOrdenado from "./ConjOrdenado";

var MinWidth = (CO,e,a1) => {
    let [CO1,e1,a] = [CO,e,a1];
    var CondMenorIgual = (x,y,Ação1) => {
        let [x1,y1,Ação] = [x,y,Ação1]
        if ((x1 === y1)||(x1 > y1)) {
            Ação()
        } else {
            console.log(x1+' menor que '+ y1 + ' ou é undefined')
        }
    };
    for(let c of CO1) {
        CondMenorIgual(e1,c,a)
    }
}


//teste
/*var sn = (n1) => {return n1 + 1 }, I10 = ConjOrdenado(10,0,sn), el = 10;
MinWidth(I10,10,() => {console.log('Existe o elemento '+ el + ' em ' + I10 + ' ou ' + el + ' é maior que pelo menos um elemento de ' + I10)})*/

export  {MinWidth}

//---------------------------------------------------------------------------------------------------
/*
var ConjOrdenado = (qe,vi,f) => {
    let [qe1,vi1,f1,CO] = [qe,vi,f,[]] ;
    for(var i = vi1 ; i < qe1 + 1 ; i++) {
        if(i === 0) {continue}
        var ni = f1(i);
        CO.push(ni);
    }
    return CO;
}
var MinWidth = (CO,e,a1) => {
    let [CO1,e1,a] = [CO,e,a1];
    var CondMenorIgual = (x,y,Ação1) => {
        let [x1,y1,Ação] = [x,y,Ação1]
        if ((x1 === y1)||(x1 > y1)) {
            Ação()
        } else {
            console.log(x1+' menor que '+ y1 + ' ou é undefined')
        }
    };
    for(let c of CO1) {
        CondMenorIgual(e1,c,a)
    }
}
//teste
var sn = (n1) => {return n1 + 1 }, I10 = ConjOrdenado(10,0,sn), el = 10;

MinWidth(I10,10,() => {console.log('Existe o elemento '+ el + ' em ' + I10 + ' ou ' + el + ' é maior que pelo menos um elemento de ' + I10)})
*/