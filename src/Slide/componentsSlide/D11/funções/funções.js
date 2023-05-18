import $ from "../../../Funções/Query/$";
import UL from "../../../Funções/Mov/TL";
import OOM from "../../../Funções/teste/OOM";
import gx from "../../../Funções/Mov/gx";
import {MD3} from "../../../Funções/Mov/MD3.js";
import {MD4} from "../../../Funções/Mov/MD4.js";
import {ConjOrdenado} from "../../../Funções/teste/ConjOrdenado";
import {MaxWidth} from "../../../Funções/teste/MaxWidth";
import {MinWidth} from "../../../Funções/teste/MinWidth";

var Funções = {
    /*
    //Definições
    * MoverD = Mover o elemento na direção direita em relação ao usuário
    * MoverE = Mover o elemento na direção esquerda em relação ao usuário  
    * awh = Aumentar largura e altura em 1.5s
    * dwh = Diminuir largura e altura em 1.5s  
     */
    Mov : {
        MoverD :  () => {
            let [x1,x2,x3] = [parseInt($('.D111').style.left),parseInt($('.D112').style.left),parseInt($('.D113').style.left) ] ;
            let IZ = OOM('d',4,-1*1600),IN = OOM('d',4,1600),CI = [IN,IZ]; console.log(CI);
            let [E1,CI1,Agx1,FU1] = [$('.D111'),CI,[x1,400,1,1],[gx,UL]]
            let [E2,CI2,Agx2,FU2] = [$('.D112'),CI,[x2,400,1,1],[gx,UL]]
            let [E3,CI3,Agx3,FU3] = [$('.D113'),CI,[x3,400,1,1],[gx,UL]]
            //Movimento na direção direita em relação ao usuário
            MD3(E1,CI1,Agx1,FU1);MD3(E2,CI2,Agx2,FU2);MD3(E3,CI3,Agx3,FU3);
            },
        MoverE :  () => {
            let [x1,x2,x3] = [parseInt($('.D111').style.left),parseInt($('.D112').style.left),parseInt($('.D113').style.left) ] ;
            let [IN,IZ] = [OOM('d',4,1600),OOM('d',4,-1*1600)], CI = [IN,IZ]; console.log(CI);
            let [E11,CI11,Agx11,FU11] = [$('.D112'),CI,[x1,400,-1,1],[gx,UL]]
            let [E21,CI21,Agx21,FU21] = [$('.D111'),CI,[x2,400,-1,1],[gx,UL]]
            let [E31,CI31,Agx31,FU31] = [$('.D113'),CI,[x3,400,-1,1],[gx,UL]]
            //Movimento na direção esquerda em relação ao usuário
            MD4(E11,CI11,Agx11,FU11);MD4(E21,CI21,Agx21,FU21);MD4(E31,CI31,Agx31,FU31);
          },
    },
    a : {
        AnimaçãoSim : (E,[from,to],DurationIteration) => {
            var [E1,FromTo1,DurationIteration1] = [E,[from,to],DurationIteration]; 
            E1.animate(FromTo1,DurationIteration1)
        },
        header : {
            a1 : () => {
                let h = $('.header'),[w,ht] = [window.innerWidth,window.innerHeight]
                h.animate([
                    { 
                        height: 68+'px',
                    },
                    { 
                        height: 0 +'px',
                    }
            ], {duration: 500, iterations: 1});
                h.style.height = 0+'px'
            },
            a2 : () => {
                let h = $('.header'),[w,ht] = [window.innerWidth,window.innerHeight]
                h.animate([
                    { 
                        height: 0+'px'
                    },
                    { 
                        height: 68 +'px'
                    }
                ], 
                {duration: 500, iterations: 1});
            h.style.height = 68+'px'
            }
        }, 
        Lheader : {
            a1 : () => {
                let lh = $('.Lheader'),[w,ht] = [window.innerWidth,window.innerHeight]
                lh.animate([
                    { 
                        height: 68+'px',
                        bottom: 0+"px"
                    },
                    { 
                        height: 0 +'px',
                        bottom: (45/100)*w+"px"
                    }
                ], 
                    {duration: 500, iterations: 1});
               lh.style.height = 0+'px'
               lh.style.bottom = (45/100)*w+'px'
            },
            a2 : () => {
                let lh = $('.Lheader'),[w,ht] = [window.innerWidth,window.innerHeight]
                lh.animate([
                    { 
                        height: 68+'px',
                        bottom: (45/100)*w+"px"
                    },
                    { 
                        height: 0 +'px',
                        bottom: 0+"px"
                    }
                ], 
                    {duration: 500, iterations: 1});
                lh.style.height = 68+'px'
                lh.style.bottom = 0+'px'
            }
        },
        Listah : {
            a1 : () => {
                let lhd = $('.Listah'),[w,ht] = [window.innerWidth,window.innerHeight]
                lhd.animate([
                    { 
                        height: 68+'px',
                        bottom: 0+"px"
                    },
                    { 
                        height: 0 +'px',
                        bottom: w+"px"
                    }
                ], 
                            {duration: 500, iterations: 1});
                       lhd.style.height = 0+'px'
                       lhd.style.left = w+'px'
            },
            a2 : () => {
                let lhd = $('.Listah'),[w,ht] = [window.innerWidth,window.innerHeight]
                lhd.animate([
                    { 
                        height: 68+'px',
                        bottom: w+"px"
                    },
                    { 
                        height: 0 +'px',
                        bottom: 0+"px"
                    }
                ], 
                    {duration: 500, iterations: 1});
                lhd.style.height = 0+'px'
                lhd.style.left = 0+'px'
            }
        }, 
        D11 : {
            a1 : () => {
                let div11 = $('.Div11'),[w,ht] = [window.innerWidth,window.innerHeight]
                div11.animate([
                    { 
                        height: (76/100)*ht+'px',
                    },
                    { 
                        height: (80/100)*ht+'px',
                    }
                ], 
                    {duration: 500, iterations: 1});
                div11.style.height = (80/100)*ht+'px'
            },
            a2 : () => {
                let div11 = $('.Div11'),[w,ht] = [window.innerWidth,window.innerHeight]
                div11.animate([
                    { 
                        height: (80/100)*ht+'px',
                    },
                    { 
                        height: (76/100)*ht+'px',
                    }
                ], 
                    {duration: 500, iterations: 1});
                div11.style.height = (76/100)*ht+'px'
            }
        },
        gimg : {
            awh : (e) => {
                let I = e, [w,h] = [window.innerWidth,window.innerHeight],
                [from,to] = [{ height: (95/100)*h+'px', width: (80/100)*w+'px'},{ height: (95/100)*h+'px', width: (85.5/100)*w+'px'}], [s,iteration] = [1000,1];  
                I.animate([from,to], {duration: s, iterations: iteration});
                I.style.height= (92.5/100)*h+'px'; 
                I.style.width= (85/100)*w+'px';
                I.style.left= "0px";                
            },
            dwh : (e) => {
                let I = e, [w,h] = [window.innerWidth,window.innerHeight],
                [to,from] = [{ height: (95/100)*h+'px', width: (80/100)*w+'px'},{ height: (95/100)*h+'px', width: (85.5/100)*w+'px'}], [s,iteration] = [500,1];  
                I.animate([from,to], {duration: s, iterations: iteration});
                I.style.height = (95/100)*h+'px';
                I.style.width = (80/100)*w+'px'; 
                I.style.left = "0px"           
            },
        },
        img : {
            img1 : {
                a1 : () => {
                }
            },
            img2 : {
                a1 : () => {
                }
            },
            img3 : {
                a1 : () => {
                }
            }
        },
    },
    rd : {
        dec : (s1,mh1,mw1,qe1) => {
            let [s,mh,mw,qe] = [s1,mh1,mw1,qe1];
            for(var i = 1; i < qe + 1 ; i++) {
                var ei  = $(s + i);
                if(mh !== 'não definido')  {
                    ei.style.minHeight = mh* + "vh";
                    ei.style.Height = mh* + "vh";
                } 
                else {
                    console.log('Altura não está definida')
                }
                if(mw !== 'não definido')  {
                    ei.style.minWidth = mw* + "vw";
                    ei.style.Width = mw* + "vw";
                } 
                else {
                    console.log('Largura não está definida')
                }
            }},
        dec1 : (s1,mh1,mw1,qe1) => {
            let [s,mh,mw,qe] = [s1,mh1,mw1,qe1], [w,h] = [window.innerWidth,window.innerHeight];
            for(var i = 1; i < qe + 1 ; i++) {
                var ei  = $(s + i);
                    if(mh !== 'não definido')  {
                        ei.style.Height = mh*h + "px";
                    } 
                    else {
                        console.log('Altura não está definida')
                    }
                    if(mw !== 'não definido')  {
                        ei.style.Width = mw*w + "px";
                    } 
                    else {
                        console.log('Largura não está definida')
                    }
            }},
        dec2 : (s1,mh1,mw1,qe1) => {
            let [s,mh,mw,qe] = [s1,mh1,mw1,qe1];
            for(var i = 1; i < qe + 1 ; i++) {
                var ei  = $(s + i);
                if(mh !== 'não definido')  {
                    ei.style.minHeight = mh;
                    ei.style.Height = mh;
                } 
                else {
                    console.log('Altura não está definida')
                }
                if(mw !== 'não definido')  {
                    ei.style.minWidth = mw;
                    ei.style.Width = mw;
                } 
                else {
                    console.log('Largura não está definida')
                }
            }
        }, 
        img11 : {
        // a (( IR [+] - {0}
         /*{
                var [s,mh,mw] = [s1,mh1,mw1];
                for(var i = 1; i<4 ; i++) {
                    var ei  = $(".img11" + i);
                    ei.style.minHeight = (95/100)*h + "px";
                    ei.style.minWidth = (80/100)*w + "px";
                }
            }*/
            wwIdapx1 : () => {Funções.rd.dec('.img11',90,100,3)},
            wwIdapx2 : () => {Funções.rd.dec('.img11',95,80,3)}
        },
        D11 : {
        // a (( IR [+] - {0}
        wwIdapx1 : () => {Funções.rd.dec('.D11',100,100,3)},
        wwIdapx2 : () => {Funções.rd.dec('.D11',74,100,3)}
            },
        Div : {
        // a (( IR [+] - {0}
        wwIdapx1 : () => {Funções.rd.dec('.Div',100,100,6)},
        wwIdapx2 : () => {Funções.rd.dec('.Div',100,100,6)}
            },
        ld : {
            wwIdapx1 : () => {Funções.rd.dec('.LHul','não definido',45,1)},
            wwIdapx2: () => {Funções.rd.dec('.LHul','não definido','none',1)}
        },
        vl : {
            wwIdapx1 : () => {
                var vl  = $('.HiOutlineViewList')
                vl.style.display = ''
            },
            wwIdapx2 : () => {
                var vl  = $('.HiOutlineViewList')
                vl.style.display = 'none'
            }
        },
        lh : {
            wwIdapx1 : () => {
                var lh  = $('.Listah')
                lh.style.display = 'none'
            },
            wwIdapx2 : () => {
                var lh  = $('.Listah')
                lh.style.display = ''
            },
        },
        Div11 : {
            wwIdapx1 : () => {Funções.rd.dec('.Div1',90,100,1)},
            wwIdapx2 : () => {Funções.rd.dec('.Div1',76,100,1)},
        },
        AtualizarD : () => {
            let AtualizarDObj = {
                args : {
                    tipoFunção : {
                        f1 :(n1) => {return n1*100 },
                        f2 :(n2) => {return n2*1600 },
                        f3 :(n3) => {return 1000 + 100*n3 },
                    },
                    tipoObj : {
                        html : {
                            e1:$('.header'),
                            e2:$('.Dheader'),
                            e3:$('.Listah'),
                            e4:$('.HiOutlineViewList'),
                            e5:$('.LHul'),
                        }
                    }
                }
            },
            [header,Dheader,lh,ViewList,Ld] = [AtualizarDObj.args.tipoObj.html.e1,AtualizarDObj.args.tipoObj.html.e2,AtualizarDObj.args.tipoObj.html.e3,AtualizarDObj.args.tipoObj.html.e4,AtualizarDObj.args.tipoObj.html.e5], 
            [s100n,s1600n,s1002n] = [AtualizarDObj.args.tipoFunção.f1,AtualizarDObj.args.tipoFunção.f2,AtualizarDObj.args.tipoFunção.f3],
            [I10,I1,I5]=[ConjOrdenado(10,0,s100n),ConjOrdenado(1,0,s1600n),ConjOrdenado(5,0,s1002n)], [w,h] = [window.innerWidth,window.innerHeight];
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------                      
            MaxWidth(I10,w,Funções.events.resize.D11img11DivLd1)
            MinWidth(I1,w,Funções.events.resize.D11img11DivLd2)
            /*MaxWidth(I15,w,Funções.events.resize.D11img11DivLd3)*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          if((w === 1285)||(w < 1285)) {
                  lh.style.display = 'none';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                  header.style.height = 80 + "px";
                  Dheader.style.height = 80 + "px";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                  ViewList.style.display = '';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
        }
        }
    },
    CriaçãoMarcaStyleEventAnimação : {
        /*
        Definições:
        PF = Um array especificando a classe do elemento Pai e a sua tag Filho que será criada.
        VCS = Valor da classe do elemento que será criada e dos estilos iniciais que serão aplicados.
        A = Um array contendo animações iniciais que será aplicada ao elemento.
        vi = Valor inicial.
        QuantidadeElem = Quantidade de elementos que será criada.
        E = Event.
        EA = Event e ação.
        */
        Event : (Elemento,Evento,Ação) => {
            let [Elemento1,Evento1,Ação1] = [Elemento,Evento,Ação] ;
            Elemento1.addEventListener(Evento1,Ação1);
        },
        CMSEA1 : (PF,VCS,EA,A,iterações) => {
            let [TagHtmlE,PaiTagE] = PF, [Evento,Ação] = EA, [FromTo,DurationIteration,AnimaçãoEvent] = A, [C,S] = VCS, e = document.createElement(TagHtmlE);
            PaiTagE.append(e);
            e.className = C + iterações;
            e.style.cssText = S;
            Funções.CriaçãoMarcaStyleEventAnimação.Event(e,Evento,Ação);
            if(AnimaçãoEvent) {
                Funções.CriaçãoMarcaStyleEventAnimação.Event(e,Evento,() => {
                e.animate(FromTo,DurationIteration);
                });
            } else {
                e.animate(FromTo,DurationIteration);
            }
        },
        CMSEA2 : (PF,VCS,EA,A,vi,QuantidadeElem) => {  
            for(var i = vi; i < QuantidadeElem + 1; i++) {
                Funções.CriaçãoMarcaStyleEventAnimação.CMSEA1(PF,VCS,EA,A,i)
            }  
        }
    },
    events : {
        over : {
            img111 : {
                f1 :  () => {
                    Funções.a.gimg.awh($('.img111')); 
                    Funções.a.header.a1()
                    Funções.a.Lheader.a1()
                    Funções.a.Listah.a1()
                    Funções.a.D11.a1()    
                }
            },
            img112 : {
                f1 : () => {
                    Funções.a.gimg.awh($('.img112'))
                    Funções.a.header.a1()
                    Funções.a.Lheader.a1()
                    Funções.a.Listah.a1()
                    Funções.a.D11.a1()
                }
            },
            img113 : {
                f1 : () => {
                    Funções.a.gimg.awh($('.img113'))
                    Funções.a.header.a1()
                    Funções.a.Lheader.a1()
                    Funções.a.Listah.a1()
                    Funções.a.D11.a1()
                }
            }, 
        },
        out : {
            img111: {
                f1 : () => {
                    Funções.a.gimg.dwh($('.img111'));
                    Funções.a.header.a2()
                    Funções.a.Lheader.a2()
                    Funções.a.Listah.a2()
                    Funções.a.D11.a2()
                }
            },
            img112: {
                f1 : () => {                
                    Funções.a.gimg.dwh($('.img112'))
                    Funções.a.header.a2()
                    Funções.a.Lheader.a2()
                    Funções.a.Listah.a2()
                    Funções.a.D11.a2()
                }
            },
            img113: {
                f1 : () => {
                    Funções.a.gimg.dwh($('.img113'))
                    Funções.a.header.a2()
                    Funções.a.Lheader.a2()
                    Funções.a.Listah.a2()
                    Funções.a.D11.a2()
                }
            },
        },
        resize : {
            D11img11DivLd1 : () => {
                Funções.rd.D11.wwIdapx1()
                Funções.rd.img11.wwIdapx1()
                Funções.rd.vl.wwIdapx1()
                Funções.rd.lh.wwIdapx1()
                Funções.rd.Div11.wwIdapx1()
                Funções.rd.ld.wwIdapx1()
            },
            D11img11DivLd2 : () => {
    
                Funções.rd.D11.wwIdapx2()
                Funções.rd.img11.wwIdapx2()
                Funções.rd.Div.wwIdapx2()
                Funções.rd.vl.wwIdapx2()
                Funções.rd.lh.wwIdapx2()
                Funções.rd.Div11.wwIdapx2()
                Funções.rd.ld.wwIdapx2()     

            },
            body : () => {
                Funções.rd.AtualizarD()
            }
        }
    },
    addEvent : {
        body : () => {
            let body = document.body;
            body.onresize = Funções.events.resize.body
        }
    }
};

export {Funções}

/*
Def :
AnimaçãoEventObj.y = xy, y (( {Eventos,Animações}
AnimaçãoEventObj = {
    Eventos : {
        E1:VE1,
        E2:VE2,
        ...
        En:VEn,
    },
    Animações : {
T : Obj A1:VA1,
T : Obj A2:VA2,
        ...
T : Obj An:VAn,
    }
} ---->
let Elemento = VElemento
for(var i = 1; i < n; i++) {
    Funções.CriaçãoMarcaStyleEventAnimação.Event(Elemento,x['Eventos']["E" + i],() => {
                Elemento.animate( x['Animações']["A"+i]['FromTo'] , xy["A"+i]['DurationIteration'] );
}
*/
