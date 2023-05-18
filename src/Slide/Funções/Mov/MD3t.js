//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//teste
//Funções úteis
var UL = (E,upx) => {
    var E1 = E,d = upx + 'px';
    E1.style.left = d;
    return d
};
var gx = (x,v,cg,a) => {
    return x + v*cg*a
};
var OO = (Mult,np,leng) => {
    var np1 = np, leng1 = leng;
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = i
        console.log('Foi criado o objeto Mult com '+ leng1 + ' elementos')
    }
}
var OONM = (Mult,m) => {
    var  m1 = m;
    for ( var p in Mult) {
        Mult[p] = Mult[p]*m1
        console.log('Multiplicamos cada um dos elementos de Mult por ' + m1)
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Função a ser testada
//--------------------------------------------------------------------------------------------------------
//Nome : Movimento para direita
//Definições:
//OC = Quantidade de pixels em que o elemento irá se deslocar
//v = Ira determinar a velocidade 
//Validação : Boa.
//-----------------------------------------------------------------------------------------------------------
let MD3 = (ElementoHtml,CI,Agx,FU) => {
    var [E,OC,[x,v,cg,a],[gx,UL]]  = [ElementoHtml,CI,Agx,FU];
    //OC é um conjunto de coodernadas que o elemento deve parar
    for(let p in OC) {
        let x1 = x;
        if(OC[p] === x1) {
            let ExcMov = setInterval(frame,10);
            //se a posição do elemento != 0 -->
            function frame () {
                var D = OC[p]*2;
                //o elemento irá deslocar Dpx <-->
                if((x1 === D)||(x1 > D)) {
                    clearInterval(ExcMov);
                    console.log('O movimento do '+ ElementoHtml+' parou na posição '+ x1 +'px !!')
                }
            else  {
                    [x1] = [gx(x1,v,cg,a)];
                    var c1 = UL(E,x1);
                    console.log([c1,'0px'])
                    
                }
            }
        }
        else {
            let ExcMov = setInterval(frame,10);
            //se a posição do elemento = 0 -->
            function frame () {
                //o elemento irá deslocar OC[d1]px <-->
                if((x1 === OC['d1'])||(x1 > OC['d1'])) {
                    clearInterval(ExcMov);
                    console.log('O movimento do '+ ElementoHtml+' parou na posição ' + x1 +'px !!')
                }
            else  {
                    [x1] = [gx(x1,v,cg,a)];
                    var c1 = UL(E,x1);
                    console.log([c1,'0px'])
                    
                }
            }
        }
        }
    };
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Atribuições
  var [x1,x2,x3] = [parseInt($('.Div1').style.left),parseInt($('.Div2').style.left),parseInt($('.Div3').style.left) ] ;
  var CI = {}; OO(CI,'d',4); OONM(CI,1600);console.log(CI);
  var [E1,CI1,Agx1,FU1] = [$('.Div1'),CI,[x1,200,1,1],[gx,UL]]
  var [E2,CI2,Agx2,FU2] = [$('.Div2'),CI,[x2,200,1,1],[gx,UL]]
  var [E3,CI3,Agx3,FU3] = [$('.Div3'),CI,[x3,200,1,1],[gx,UL]]
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Chamada
 MD3(E1,CI1,Agx1,FU1);MD3(E2,CI2,Agx2,FU2);MD3(E3,CI3,Agx3,FU3);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var Cin = () => {
    return [parseInt($('.Div1').style.left),parseInt($('.Div2').style.left),parseInt($('.Div3').style.left) ]
}
var [x1,x2,x3] = Cin();
