import S from "../Styles/S";
import GH2 from "./tGH";
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Esta função é semelhante ao laço for e while.
//Definições:
//i = é valor inicial que será iterado.
//n = é a quantidade de iterações.
//g = é a relação(ação) que será iterada com base em i e n. 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var tgf = (i,n,g) => {
    var g1 = g, i1=i,n1=n;
    if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
        g1 = g1+i1;
        i1 = i1+1;
        console.log(g1);
        return tgf(i1,3,g1);
    } else {console.log("O ciclo terminou")}
}
console.log(tgf(1,3,0));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var tgfs = (i,n,a,b) => {
    var [a1,a2] = a, [b1,b2] = b, i1=i,n1=n;
    if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
        GH2([a1,a2],[b1 + i1,b2]);
        i1 = i1+1;
        console.log(g1);
        return tgf(i1,3,g1);
    } else {console.log("O ciclo terminou")}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var f = (n) => {
    return 2*n
}
var tgfg = (i,n,a,tl) => {
    var [a1,a2] = a[0],[b1,b2] = a[1], [i1,n1,tl1] = [i,n,tl];
    if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
        //Identificação da tag
        //Criação da tag e add no elemento Pai
        GH2([a1,a2],[b1 + i1,b2]);
        //Se top for definido então, será atribuido novas coordenadas ao elemento em style.top
        if(tl1) {
            var 
            x = parseInt($('.x' + i1).className.slice(3)) = i1, fx = $('.y'+f(x)).style.top;
            //cx
             $('.yx' + i1).style.left = x + "px";
            //cfx 
             $('.yx' + i1).style.top = fx ;
        } else {
            console.log('Posições foram pré-definidas')
        }
        //Atualizando o valor de i
        i1 = i1+1;
        return tgfg(i1,n1,[[a1,a2],[b1,b2]],true);
    } else {console.log("O ciclo terminou")}
 }
 var XY1 = 'yx yx', XY2 = "height: 0px; border-style:solid;";
 tgfg(0,200,[['div',$('.xy')],[XY1,XY2]],true)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//teste
(()=>{
    var GH2 = (EP,V) => {  
        let [TagHtmlE,PaiTagE] = EP;
        //Atribuindo valor para as pr's e os valores
        var [B1,B2] = V;
        var e = document.createElement(TagHtmlE);
        PaiTagE.append(e);
        e.className = B1;
        e.style.cssText = B2;
    }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    var tgfs = (i,n,a,b,l,m1) => {
        var [a1,a2] = a, [b1,b2] = b, [i1,n1,l1,m] = [i,n,l,m1];
        if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
            GH2([a1,a2],[b1 + i1,b2]);
            if(l1) {
                //get element
                let e = $(".x" + i1);
                //set values 
                [e.style.left,e.style.top] = [ i1 + 'px', m];
            } else {
                console.log('Posições foram pré-definidas')
            }
            i1 = i1+1;
            return tgfs(i1,n1,[a1,a2],[b1,b2],true,785);
        } else {console.log("O ciclo terminou")}
     }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------     
    var A1 = 'x x',[height,borderS] = ["height: 0px; ","border-style:solid;"], A2 = height+borderS 
    tgfs(0,526,['div',$('.eixox')],[A1,A2],true,785) 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------     
    var tgfs3 = (i,n,a,top) => {
        var [a1,a2] = a[0],[b1,b2] = a[1], [i1,n1,top1] = [i,n,top];
        if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
            //Identificação da tag
            m = b1 + (256-i1);
            GH2([a1,a2],[m,b2]);
            //Criação da tag e add no elemento Pai
            //Se top for definido então, será atribuido novas coordenadas ao elemento em style.top
            if(top1) {
                //get element
                let e = $(".y" + (256-i1));
                //set values 
                e.style.top = i1 + 'px';
                e.style.left = '0px'
            } else {
                console.log('Posições foram pré-definidas')
            }
            //Atualizando o valor de i
            i1 = i1+1;
            return tgfs3(i1,n1,[[a1,a2],[b1,b2]],true);
        } else {console.log("O ciclo terminou")}
     }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
    var B1 = 'y y', B2 = "height: 0px; border-style:solid;";
    tgfs3(0,256,[['div',$('.eixoy')],[B1,B2]],true)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------     
}
)()

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var GH2 = (EP,V) => {  
    let [TagHtmlE,PaiTagE] = EP;
    //Atribuindo valor para as pr's e os valores
    var [B1,B2] = V;
    var e = document.createElement(TagHtmlE);
    PaiTagE.append(e);
    e.className = B1;
    e.style.cssText = B2;
    e.animate(FromTo,DurationIteration)
}
var f = (n) => {
    return 2*n
}
var tgfg = (i,n,a,b,tl) => {
    var [a1,a2] = a, [b1,b2] = b, [i1,n1,tl1] = [i,n,tl];
    if(( (i1 < n1) || (i1 === n1) ) && !(i1 < 0)) {
        var x = parseInt($('.x' + i1).className.slice(3)), y = 2*x, fx = $('.y'+ y)['style']['top'];
        fx = (parseInt(fx) + 511);
        //Identificação da tag
        //Criação da tag e add no elemento Pai
        GH2([a1,a2],[b1 + i1,b2]);
        //Se top for definido então, será atribuido novas coordenadas ao elemento em style.top
        if(tl1) {
            //cx
             $('.yx' + i1).style.left = x + "px";
            //cfx 
             $('.yx' + i1).style.top = fx + "px";
        } else {
            console.log('Posições foram pré-definidas')
        }
        //Atualizando o valor de i
        i1 = i1+1;
        return tgfg(i1,n1,[a1,a2],[b1,b2],true);
    } 
    else {
        console.log("O ciclo terminou")
    }
 }
 var [XY1,XY2] = ['yx yx',"height: 0px; border-style:solid; position: relative;"], [F,P] = ['div',$('.xy')];
 tgfg(0,500,[F,P],[XY1,XY2],true)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
C(pt),PIpt = (top,left), top = x = lengthRH, left = y = f(x) = 0px -->
j[n](ehr) --> j[m](ehr) = x = n = bottom (( IN, m I[n], m!=0 -->
f(x) = y = left
 */
/*
    var tgfs = (i,n,a,b) => {
        var [a1,a2] = a, [b1,b2] = b, i1=i,n1=n;
        if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
            GH2([a1,a2],[b1 + i1,b2]);
            i1 = i1+1;
            return tgfs(i1,n1,[a1,a2],[b1,b2]);
        } else {console.log("O ciclo terminou")}
     }
    var A1 = 'x x', A2 = "background-color: 'white'; position: relative; height: 1px; width: 3px;  border-style:solid"; 
    tgfs(1,789,['div',$('.Div1')],[A1,A2]) 
*/

//{
//x : parseInt($('.x' + i).className.slice(3)) = i 
//fx : $('.y'+f(x)).style.top
//cx : $('.yx' + i).style.left = x + "px"
//cfx : $('.yx' + i).style.top = fx 
//}

/*
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var tgfs2 = (i,n,a,b,top) => {
        var [a1,a2] = a, [b1,b2] = b, [i1,n1,top1] = [i,n,top];
        if(((i1 < n1)||(i1 === n1)) && !(i1 < 0)) {
            //Identificação da tag
            var m = b1 + (256-i1);
            GH2([a1,a2],[m,b2]);
            //Criação da tag e add no elemento Pai
            //Se top for definido então, será atribuido novas coordenadas ao elemento em style.top
            if(top1) {
                //get element
                let e = $(".y" + (256-i1));
                //set values 
                e.style.top = i1 + 'px';
                e.style.left = '0px'
            } else {
                console.log('Posições foram pré-definidas')
            }
            //Atualizando o valor de i
            i1 = i1+1;
            return tgfs2(i1,n1,[a1,a2],[b1,b2],true);
        } else {console.log("O ciclo terminou")}
     }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------     
    var B1 = 'y y', B2 = "height: 0px; border-style:solid;";
    tgfs2(0,256,['div',$('.eixoy')],[B1,B2],true)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
*/
