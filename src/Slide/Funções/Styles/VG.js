//Está função ira variar os argumentos do linear-gradiente de um elemento html.
let MDC = (ElementoHtml,CI,CN,Agx,FU) => {
    var [E,[OC],[x,y,z],[v,cg,a],[gx,hz,C]]  = [ElementoHtml,CI,CN,Agx,FU];
    //OC é um conjunto de coodernadas que o elemento deve parar
        var [x1,y1,z1] = [x,y,undefined], [x2,y2,z2] = [undefined,y,z], [V,D]=[undefined,OC];
        let ExcMov = setInterval(frame,50);
        function frame () {
                //o elemento irá deslocar Dpx <-->
                if( (x1 === D)||(x1 > D)||(z1 === 255) ) {
                    clearInterval(ExcMov);
                    console.log('As cores do '+ ElementoHtml+' parou nas coordenada '+ [[x1,y1,z1],[x2,y2,z2]]  +'px !!')
                }
            else  {
                    [[x1,y1,z1],[x2,y2,z2]] = [[gx(x1,v,cg,a),0,hz(x1)],[hz(z2),0,gx(z2,v,cg,a)]];
                    var [v1,v2]=[[x1,y1,z1],[x2,y2,z2]]; V = [v1,v2]; console.log(V);
                    var c1 = C(E,V);
                    console.log([c1]);
                }
            }
        }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = MDC;
//-----------------------------------------------------------------------------------------------------------
