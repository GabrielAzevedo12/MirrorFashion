//Pa = Posição atual
//npx = Número natural múltiplo de px
//Pl = posição da lista
//sCIF = sentença da condição inicial da função = determina o intervalo
//vx = váriavel x que será iterada    
// Pa + npx = Pl = CI <->  npx = Pl - Pa , Pa>Pl -> sCIF <-> vx === Pl v vx < Pl, cggx = n (( IZ -> if(sCIF) { ... fx}     
// PL = PL2 <-> psd2 = Pl 
//-----------------------------------------------------------------------------------------------------------
/*let ML2v1 = (ElementoHtml,Agx,FU) => {
    var [E,[x,v,a],[gx,UT]]  = [ElementoHtml,Agx,FU];
    //OC é um conjunto de coodernadas que o elemento deve parar
    let [Pl,Pa] = [parseInt($('.Div5').style.top),parseInt(E.style.top)],
    dpx = Pl - Pa, D = Pa + dpx;

    if(Pa > Pl) {
        let [x1,cg,ExcMov] = [x,-1,setInterval(frame,10)];
        console.log('O elemento irá se deslocar no sentido negativo partindo de ' + Pa + 'até ele atingir ' +  Pl)
        console.log('O ciclo foi iniciado')
        function frame () {
                if((D === x1) || (x1 < D)) {
                    clearInterval(ExcMov);
                    console.log('O movimento do '+ ElementoHtml+' parou na posição '+ x1 +'px !!')
                    console.log('O ciclo foi encerrado')
                }
            else  {
                    console.log('coordenada' + [x1] + 'irá sofrer novas alterações')
                    [x1] = [gx(x1,v,cg,a)];
                    console.log('coordenada' + [x1] + 'sofreu novas alterações')
                    var c1 = UT(E,x1);
                    console.log('Foi realizado um novo deslocamento para baixo')
                    console.log([c1,'0px'])                    
                }
            }
    };
    if(Pa < Pl) {
        let [x1,cg,ExcMov] = [x,1,setInterval(frame,10)];
        console.log('O elemento irá se deslocar no sentido positivo partindo de ' + Pa + 'até ele atingir ' +  Pl)
        console.log('O ciclo foi iniciado')
        function frame () {
                if((D === x1) || (x1 > D)) {
                    clearInterval(ExcMov);
                    console.log('O movimento do '+ ElementoHtml+' parou na posição '+ x1 +'px !!')
                    console.log('O ciclo foi encerrado')
                }
            else  { 
                    console.log('coordenada' + [x1] + 'irá sofrer novas alterações')
                    [x1] = [gx(x1,v,cg,a)];
                    console.log('coordenada' + [x1] + 'sofreu novas alterações')
                    var c1 = UT(E,x1);
                    console.log('Foi realizado um novo deslocamento para baixo')
                    console.log([c1,'0px'])                    
                }
            }
    };
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = ML2v1;*/
//-----------------------------------------------------------------------------------------------------------
let ML2v2 = (ElementoHtml) => {
    var E = ElementoHtml; var [Pd,w] = [parseInt(E.className.slice(3,4))-3, window]; var [iw,ih] = [w.innerWidth, w.innerHeight];
    w.scrollTo({ left:0*iw, top:Pd*ih, behavior:'smooth'}) 
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = ML2v2;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Teste
//ML2v2($('.Div5'))
