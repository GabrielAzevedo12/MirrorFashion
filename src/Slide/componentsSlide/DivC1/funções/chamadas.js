import { $ } from '../../../Funções/Query/query.js'
import { Fetch } from '../../../Funções/teste/Fetch.js'

const DivTF1A = () => {
    let e1 = $("#DivTF1"), e2 = $("#DivTF2")  ;
    e1.classList.add("DivTF1A");
    e2.classList.add("DivTF2A");
    e1.classList.remove("DivTF1IA");
    e2.classList.remove("DivTF2IA");
},
      DivTF2A = () => {
    let e1 = $("#DivTF1"), e2 = $("#DivTF2")  ;
    e1.classList.add("DivTF1IA");
    e2.classList.add("DivTF2IA");
    e1.classList.remove("DivTF1A");
    e2.classList.remove("DivTF2A");
},
      DivTF1IA = () => {
    let e = $("#DivTF1")  ;
    e.classList.remove("DivTF1A");
};

export { DivTF1A, DivTF2A, DivTF1IA }