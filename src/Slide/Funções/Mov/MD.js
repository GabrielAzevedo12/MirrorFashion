//Nome : Movimento para direita
//Definições:
//QM = Quantidade de pixels em que o elemento irá se deslocar
//v = Ira determinar a velocidade 
//Validação : Boa.
//-----------------------------------------------------------------------------------------------------------
let MD1 = (ElementoHtml,CI,Agx,FU) => {
    var [E,[QM],[x,v,cg,a],[gx,UL]]  = [ElementoHtml,CI,Agx,FU];
    let ExcMov = setInterval(frame,10);
    function frame () {
    if((x === QM)||(x > QM)) {
        clearInterval(ExcMov);
        console.log('O movimento do '+ ElementoHtml +' parou!!')
    }
else  {
        x = gx(x,v,cg,a);
        var [c1] = [UL(E,x)];
        console.log([c1,'0px'])
        
    }
}
};
//-----------------------------------------------------------------------------------------------------------
module.exports = MD1;
