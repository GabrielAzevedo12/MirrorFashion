var [$,S,gx,fx,UL,UT] = [require('../Query/$'),require('../Styles/S'),require('./gx'),require('./fx'),require('./TL'),require('./TT')]; 

//Nome : PF
//habilita um elemento a ser movido.
let posPF = (E) => {
    var E = $("." + E), PE = E.parentElement;
    S([PE,'position','relative']);
    S([E,'position','absolute']);
}

module.exports = posPF;