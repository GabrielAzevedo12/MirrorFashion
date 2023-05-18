//Nome : fx
//escala o vetor y e retorna o mesmo como uma coordenada horizontal.
//Definições:
//r é o raio
//d é a direção do vetor (se ele está diminuindo ou aumentando) 
//x é a coordenada horizontal no qual y depende.
var fx = (r,x,d) => {
    return d*(r**2-x**2)**0.5
};

module.exports = fx;