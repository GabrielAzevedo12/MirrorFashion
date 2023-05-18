var OONM = (Mult,m) => {
    var  m1 = m;
    for ( var p in Mult) {
        Mult[p] = Mult[p]*m1
        console.log('Multiplicamos cada um dos elementos de Mult por ' + m1)
    }
}

module.exports = OONM