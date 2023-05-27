import $ from "../../../Funções/Query/$"
import scrd11 from "../../../Funções/Mov/ML3"

const
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
}

export { f }