import "./css/LD11.css"
import { useState } from "react"
import $ from "../../Funções/Query/$"
import scrd11 from "../../Funções/Mov/ML3"

var LD11 = () => {
    const [s2,sets2] = useState();
    var [w,h] = [window.innerWidth,window.innerHeight],
    f = {
        alsg : (n,s1,ast1,ast2) => {
            var s = s1, st1 = ast1, st2 = ast2;
            for (var i = 1;i<4;i++) {
               if(i === n) {
              var e = $('.'+s+i); 
               e.style.color = st1; 
               e.style.listStyleType = 'disc'; 
               continue }
               var e1 = $('.'+s+i); 
               e1.style.color = st2; 
               e1.style.listStyleType = 'disc'; 
             }
           },
        ml1 : () => {
            let e = $('#D11F11')
            scrd11(e);
            f.alsg(1,'LD11li','white','black')
        },
        ml2 : () => {
            let e = $('#D11F12')
            scrd11(e)
            f.alsg(2,'LD11li','white','black')
        },
        ml3 : () => {
            let e = $('#D11F13')
            scrd11(e)
            f.alsg(3,'LD11li','white','black')
        },
    },
    s = {
            LD11s : {
                top: (74/100)*h+'px',
                left: (45/100)*w+'px'
            },
            LD11lis : {s2}
        }
    return(
        <> 
        <ul className="LD11">
            <li className="LHli LD11li LD11li1" onClick={f.ml1}></li>
            <li className="LHli LD11li LD11li2" onClick={f.ml2}></li>
            <li className="LHli LD11li LD11li3" onClick={f.ml3}></li>
        </ul>
        </>
    )
}
export default LD11
/*
top: 583.86px;
left: 720px;
*/