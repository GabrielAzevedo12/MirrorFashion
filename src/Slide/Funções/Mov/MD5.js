//--------------------------------------------------------------------------------------------------------
//Nome : Movimento para baixo
//Definições:
//OC = Quantidade de pixels em que o elemento irá se deslocar
//v = Ira determinar a velocidade 
//Validação : Boa.
//-----------------------------------------------------------------------------------------------------------
let MD5 = (ElementoHtml,CI,Agx,FU) => {
    var [E,[OC,OC2],[x,v,cg,a],[gx,UT]]  = [ElementoHtml,CI,Agx,FU];
    //OC é um conjunto de coodernadas que o elemento deve parar
    for(let p in OC) {
        let x1 = x;
        //x1 (( OC - {3160} <-> x1 = n+ -->
        if((OC[p] === x1) && (x1 !== 3160)) {
            let ExcMov = setInterval(frame,10);
            //se a posição do elemento != 0 -->
            function frame () {
                var D = OC[p] + 790;
                //o elemento irá deslocar Dpx <-->
                if((x1 === D)||(x1 > D)) {
                    clearInterval(ExcMov);
                    console.log('O movimento do '+ ElementoHtml+' parou na posição '+ x1 +'px !!')
                }
            else  {
                    [x1] = [gx(x1,v,cg,a)];
                    var c1 = UT(E,x1);
                    console.log([c1,'0px'])
                }
            }
        }
        // x1 ~(( OC , x1 ~(( OC2 <-> x1 = 0 -->
        else if(x1 === 0) {
            let ExcMov = setInterval(frame,10);
                //se a posição do elemento = 0 -->
                function frame () {
                    //o elemento irá deslocar D2 <-->
                    if((x1 === 790)||(x1 > 790)) {
                        clearInterval(ExcMov);
                        console.log('O movimento do '+ ElementoHtml+' parou na posição ' + x1 +'px !!')
                    }
                else  {
                        [x1] = [gx(x1,v,cg,a)];
                        var c1 = UT(E,x1);
                        console.log([c1,'0px'])
                        
                    }
                }

        }
        //x1 (( OC2 <-> x1 ~(( OC <-> x1 = n- -->
        else if(x1 !== 0) {
            for(let p2 in OC2) {
             if(OC2[p2] === x1) {
                 let ExcMov = setInterval(frame,10);
                 //se a posição do elemento = 0 -->
                 function frame () {
                     var D2 = OC2[p2] + 790;
                     //o elemento irá deslocar D2 <-->  OC2[p2] =< e =< D2
                     if((x1 === D2)||(x1 > D2)) {
                         clearInterval(ExcMov);
                         console.log('O movimento do '+ ElementoHtml+' parou na posição ' + x1 +'px !!')
                     }
                 else  {
                         [x1] = [gx(x1,v,cg,a)];
                         var c1 = UT(E,x1);
                         console.log([c1,'0px']);    
                     }
                 }
             }
            }
         }
         //x1 (( OC , x1 = 3160 -->
         else if(x1 === 3160) {
            let ExcMov = setInterval(frame,10);
                //se a posição do elemento = 0 -->
                function frame () {
                    //o elemento irá deslocar D2 <-->
                    if(x1) {
                        clearInterval(ExcMov);
                        console.log('O movimento do '+ ElementoHtml+' parou na posição ' + x1 +'px !!')
                    }
                else  {
                        [x1] = [gx(x1,v,cg,a)];
                        var c1 = UT(E,x1);
                        console.log([c1,'0px'])
                        
                    }
                }

        }
        }
    };
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export {MD5}
//-----------------------------------------------------------------------------------------------------------


