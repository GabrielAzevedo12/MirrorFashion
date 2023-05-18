//Nome : gx
//escala o vetor x.
//Definições:
// v = velocidade inicial v (( N - {0}
// cg = direção de x (( {0,1}
// a = aceleração (Força) em x (( N - {0}

var gx = (x,v,cg,a) => {
    return x + v*cg*a
};

module.exports = gx;