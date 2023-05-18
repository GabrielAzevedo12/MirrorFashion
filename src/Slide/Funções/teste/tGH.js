    //V = {x/x é um valor de uma propriedade html e x é do tipo string}
    //P = {x/x é uma propriedade html e x é do tipo string}
    /*
    var GH = (TagHtml,PaiTag,[  [pr1,vl1],[pr2,vl2], ... ,[prn,vln]  ]) => {  // n (( IN, p (( P, vl (( V // 
        let TagHtmlE = TagHtml, PaiTagE = PaiTag;
        let [  [pr1e,vl1e],[pr2e,vl2e],...,[prne,vlne]  ] = [  [pr1,vl1],[pr2,vl2], ... ,[prn,vln]  ];
        let e = document.createElement(TagHtmlE);
        PaiTagE.append(e);
        e.pr1 = vl1;
        e.pr2 = vl2;
        ...
        e.prn = vln;
    }  
    */
    /*    for(x of A){
                let l = A.length
                if(!x) {}
                else {
                    for(var j = 0; j < l - 2; j++) {
                //Existe apenas uma pr em A ou não existe nenhuma e A é i
                if ( e[A[l - (l-1)]][A[l - (l-2)]] === object && !!(x) ) {
                }
                }
    }
    }
    */
    // ----------------->
    // n (( IN, p (( P, vl (( V // 
    var GH = (TagHtml,PaiTag,[A1,A2,A3]) => {  
        let TagHtmlE = TagHtml, PaiTagE = PaiTag;
        //Atribuindo valor para as pr's e os valores
        var [B1,B2,B3] = [A1,A2,A3], AP = [B1,B2,B3];
        var e = document.createElement(TagHtmlE);
        PaiTagE.append(e);
        for(var i = 0; i < AP.length; i++) {
            var A = AP[i];
            for(let x of A) {
                if(x === 'ob') {
                    var v, y;
                    for(var j = 0; j < A.length - 2; j++) {
                        //
                        y = A[j];
                        v = e[y];
                    }
                    v = A[A.length - 2]
                    console.log(v)
                    break 
                } 
                else if (x === 'fu'){
                    var v = e, y;
                    for(var j = 0; j < A.length - 2; j++) {
                        //
                        y = A[j];
                        v = v[y];
                    }
                    v(A[A.length - 2]);
                    console.log(v)
                    break 
                } 
                else if (x === 's'){
                    var v = e, y;
                    for(var j = 0; j < A.length - 2; j++) {
                        //
                        y = A[j];
                        v = v[y];
                    }
                    v = A[A.length - 2];
                    console.log(v)
                    break 
                }
                else if (x === undefined) {
                    break
                }
            }
        }
    }
    //teste
    var style = 'background: red;'
    var A1 = ['style','cssText',style,'ob']
    var A2 = ['className','Div11 Div','s'],A3=[,,]
    GH('div',$('.DivC1'),[A1,A2,A3]);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    //Espera
    /*
    //Se existir uma pr indefinida -->
                if(!x) {
                    for(var j = 0; j < AP[i].length - 3; j++) {
                        //Existe apenas uma pr em A ou não existe nenhuma
                        e[A[j]] = A[j+2];
                    }
                }
                //Existe uma pr (( pr' , pr,pr' (( A
                else {
                    
                    for(var j = 0; j < AP[i].length - 3; j++) {
                        e[A[j]][A[j+1]] = A[j+2]
                    }
                }
    */
var teste = (A,e2,P1,n1,L) => {
    var y,e1 = e2, e = document.createElement(e1), P=P1,  v, n=n1, L1 = L;
    P.append(e);
    e.className = n;
    for(var j = 0; j < A.length - 2; j++) {
        y = A[j];
        v = e3[y];
        Pus(v,L1);

    }
    v = A[A.length - 2]
    console.log(v)
    console.log(typeof(v))
}
var style = 'background: red;'
var A1 = ['style','cssText',style,'ob']
teste(A1,'div',$('.DivC1'),'Div11')
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var vl = (e,v) => {
    return e = v
}
var Pus = (P) => {
        return P.push(1)
}
var teste2 = (x,v,P,A1) => {
    var x1=x,v1=v,P1=P,A=A1;
    if(x1 === 'object') {
       Pus(P1);
       var x2 = x1[A[P1.length]];
       console.log(typeof(x2));
       teste2(x2,v1,P1,A1);
    } else if (x1 === 'string' ) {
        vl(x1,v1);
    }
}

var style = 'background: red;'
var A1 = ['style','cssText',style,'ob']
var [x,v,P]=[ $('.DivC1')[A1[0]] , $('.DivC1')[A1[2]] , []];
teste2(x,v,P,A1);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var GH2 = ([TagHtml,PaiTag],[A1,A2]) => {  
    let [TagHtmlE,PaiTagE] = [TagHtml,PaiTag];
    //Atribuindo valor para as pr's e os valores
    var [B1,B2] = [A1,A2], AP = [B1,B2];
    var e = document.createElement(TagHtmlE);
    PaiTagE.append(e);
    e.className = B1;
    e.style.cssText = B2;
}
module.exports = GH2
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------