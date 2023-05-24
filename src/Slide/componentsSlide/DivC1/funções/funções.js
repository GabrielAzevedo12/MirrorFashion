import $ from '../../../Funções/Query/$.js'

const f = {
    rd : {
        dec : (s1,mh1,mw1,qe1) => {
            let [s,mh,mw,qe] = [s1,mh1,mw1,qe1], [w,h] = [window.innerWidth,window.innerHeight];
            for(var i = 1; i < qe + 1 ; i++) {
                var ei  = $(s + i);
                if(mh !== 'não definido')  {
                    ei.style.minHeight = mh*h + "px";
                    ei.style.Height = mh*h + "px";
                } 
                else {
                    console.log('Altura não está definida')
                }
                if(mw !== 'não definido')  {
                    ei.style.minWidth = mw*w + "px";
                    ei.style.Width = mw*w + "px";
                } 
                else {
                    console.log('Largura não está definida')
                }
            }},
        Div :   {
            // a (( IR [+] - {0}
            wwIdapx1 : () => {f.rd.dec('.Div',1,1,6)},
            wwIdapx2 : () => {f.rd.dec('.Div',1,1,6)}
        }
    },
    events : {
        resize : {
            AtualizarDimensõesDiv : () => {
                f.rd.Div.wwIdapx1()
            }
        },
        load : {
            AdicionarEventBody : () => {
                let b = document.body;
                b.addEventListener('resize',f.events.resize.AtualizarDimensõesDiv)
            }
        }
    },
    AddEventWindow :  () => {
        window.addEventListener('load',f.events.load.AdicionarEventBody)
    }
};

export { f }