//Está função cria um objeto com um número de props especificadas pelo parâmetro leng
//Mult = Objeto vazio (Tipo: Objeto)
//np = Nome padrão das props (Tipo: string)
//leng = tamanho do objeto (Tipo: Number)
 var ta = (np,leng,m) => {
    var np1 = np, leng1 = leng, Mult={}, m1 = m;
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = i*m;
    }
    console.log('Foi criado o objeto Mult com '+ leng1 + ' elementos');
    console.log('Multiplicamos cada um dos elementos de Mult por ' + m1)
    return Mult
}
module.exports = ta;
//--------------------------------------------------------------------------------------------------------------------------------------------
//Se o objeto tem propriedades numéricas então, 
//está função multiplica cada uma das suas propriedades por um valor constante. 
//Mult = Objeto não vazio e numérico (Tipo: Objeto)
//m = Fator multiplicativo (Tipo: string)
//leng = tamanho do objeto (Tipo: Number)
//np = Nome padrão das props (Tipo: String)
var ta21 = (Mult,np,m,leng) => {
    var np1 = np, leng1 = leng, m1 = m;
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = i*m1
        console.log(Mult)
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------
var ta22 = (Mult,m) => {
    var  m1 = m;
    for ( var p in Mult) {
        Mult[p] = Mult[p]*m1
        console.log('Multiplicamos cada um dos elementos de Mult por ' + m1)
    }
}

var CI = ta('d',4,1600);
console.log(CI);

module.exports = ta22;
//--------------------------------------------------------------------------------------------------------------------------------------------
//Está função cria um array com um número de props especificadas pelo parâmetro n.
// a = Array vazio (Tipo: Objeto)
// n = Número (Tipo : Número)
var ta3 = (a,n) => {
    var n1 = n;
    for(var i = 1; i < n1+1; i++)
    a[i] = undefined;
    console.log(a);
}

var a = [];
ta3(a,5);
console.log(a);
console.log(a.length);
//--------------------------------------------------------------------------------------------------------------------------------------------