import Div1 from '../D1/Div1.js'
import Div2 from '../D2/Div2.js'
import Div3 from '../D3/Div3.js'
import $ from '../../Funções/Query/$.js'
import { useState } from 'react'

var DivC1 = (props) => {       
    var 
    [w,h] = [window.innerWidth,window.innerHeight] ,
    s = {
        Div: {
            height: '100vh', 
            width: '100vw',  
            left: "0px"
        }
    },
    f = {
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

    return(
        <div className='DivC1'>
            <Div1 s={s.Div}/>
            <Div2 s={s.Div}/>
            <Div3 s={s.Div}/>
        </div>
    )
}

export default DivC1;