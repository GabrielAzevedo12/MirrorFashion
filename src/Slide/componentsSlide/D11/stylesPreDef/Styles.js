import { Funções } from "../funções/funções";
import { EF } from "../ElementosFilhosD11/EF";

var [w,h] = [window.innerWidth,window.innerHeight]
var Style = {
    D11 : {
        minHeight: '74vh', 
        minWidth: '100vw',  
        left: "0px"
    },
    D11I :  {
        height: '95vh', 
        width: '80vw', 
        left: "0px"
        },
    Div11 : {
        top: '10vh',
        height: '74vh', 
        width: '100vw',   
    },
    D114 : {
        minHeight: (74/100)*h, 
        minWidth: w,  
        left: "0px",
        display: 'none', 
    }
}

export {Style}