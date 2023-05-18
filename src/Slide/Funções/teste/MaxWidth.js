import ConjOrdenado from "./ConjOrdenado";

var MaxWidth = (CO,e,a1) => {
    let [CO1,e1,a] = [CO,e,a1];
    var CondMenorIgual = (x,y,Ação1) => {
        let [x1,y1,Ação] = [x,y,Ação1]
        if ((x1 === y1)||(x1 < y1)) {
            Ação()
        } else {
            console.log(x1+' maior que '+ y1 + ' ou é undefined')
        }
    };
    for(let c of CO1) {
        CondMenorIgual(e1,c,a)
    }
}

//teste
/*var sn = (n1) => {return n1 + 1 }, I10 = ConjOrdenado(10,0,sn), el = 1;

MaxWidth(I10,1,() => {console.log('Existe o elemento '+ el + ' em ' + I10 + ' ou ' + el + ' é menor q todo elemento de ' + I10)})*/
//---------------------------------------------------------------------------------------------------
/*
var ConjOrdenado = (qe,f) => {
    let [qe1,f1,CO] = [qe,f,[]] ;
    for(var i = 0 ; i < qe1 - 1 ; i++) {
        var ni = f1(i);
        CO.push(ni);
    }
    return CO;
}
var MaxWidth = (CO,e,a1) => {
    let [CO1,e1,a] = [CO,e,a1];
    var CondMenorIgual = (x,y,Ação1) => {
        let [x1,y1,Ação] = [x,y,Ação1]
        if ((x1 === y1)||(x1 < y1)) {
            Ação()
        } else {
            console.log(x1+' maior que '+ y1 + ' ou é undefined')
        }
    };
    for(c of CO1) {
        CondMenorIgual(e1,c,a)
    }
}
//teste
var sn = (n1) => {return n1 + 1 }, I10 = ConjOrdenado(10,sn), el = 1;

MaxWidth(I10,1,() => {console.log('Existe o elemento '+ el + ' em ' + I10 + ' ou ' + el + ' é menor q todo elemento de ' + I10)})
*/
export default MaxWidth

