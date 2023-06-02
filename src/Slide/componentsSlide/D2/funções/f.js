import $ from "../../../Funções/Query/$";
import { P } from "../BD/OP";
import { Style } from "../../D11/stylesPreDef/Styles";
import { EF } from "../../D11/ElementosFilhosD11/EF";
import React from "react";

let [w, h] = [window.innerWidth, window.innerHeight];
let f = {
  a: {
    fD21: {
      a1: () => {
        let [fd2] = [$(".figD21")];
        fd2.animate(
          [
            {
              width: "30vw",
            },
            {
              width: "60vw",
            },
          ],
          { duration: 1000, iterations: 1 }
        );
        fd2.style.width = "60vw";
      },
      a2: () => {
        let [fd2] = [$(".figD21")];
        fd2.animate(
          [
            {
              width: "60vw",
            },
            {
              width: "30vw",
            },
          ],
          { duration: 1000, iterations: 1 }
        );
        fd2.style.width = "30vw";
      },
    },
    imgD2: {
      awh: (e) => {
        let I = e;
        I.style.position = "relative";
        let [w, h] = [window.innerWidth, window.innerHeight],
          [from, to] = [
            {
              height: "85vh",
              width: "30vw",
              boxShadow: "0px 0px 300px 150px white",
              borderRadius: "20px",
              borderStyle: "solid",
              borderWidth: "0px",
            },
            {
              height: "180vh",
              width: "60vw",
              boxShadow: "700px 0px 500px 100px black",
              borderRadius: "100px",
              borderStyle: "solid",
              borderWidth: "1.5em",
            },
          ],
          [s, iteration] = [500, 1];
        I.animate([from, to], { duration: s, iterations: iteration });
        I.style.height = "180vh";
        I.style.width = "60vw";
        I.style.left = "ovh";
        I.style.boxShadow = "700px 0px 500px 100px black";
        I.style.borderRadius = "100px";
        I.style.borderStyle = "solid";
        I.style.borderWidth = "1.5em";
      },
      dwh: (e) => {
        let I = e,
          [w, h] = [window.innerWidth, window.innerHeight],
          [from, to] = [
            {
              height: (180 / 100) * h + "px",
              width: (60 / 100) * w + "px",
              boxShadow: "700px 0px 500px 100px white",
              borderRadius: "100px",
              borderStyle: "solid",
              borderWidth: "1.5em",
            },
            {
              height: (85 / 100) * h + "px",
              width: (30 / 100) * w + "px",
              boxShadow: "0px 0px 300px 150px black",
              borderRadius: "20px",
              borderStyle: "solid",
              borderWidth: "0px",
            },
          ],
          [s, iteration] = [500, 1];
        I.animate([from, to], { duration: s, iterations: iteration });
        I.style.height = (85 / 100) * h + "px";
        I.style.width = (30 / 100) * w + "px";
        I.style.left = "0px";
        I.style.boxShadow = "0px 0px 300px 150px black";
        I.style.borderRadius = "20px";
        I.style.borderStyle = "solid";
        I.style.borderWidth = "0px";
      },
    },
    header: {
      a1: () => {
        let h = $(".header"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        h.animate(
          [
            {
              minHeight: 9 + "vh",
              height: 9 + "vh",
            },
            {
              minHeight: 0 + "vh",
              height: 0 + "vh",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        h.style.height = 0 + "vh";
        h.style.minHeight = 0 + "vh";
      },
      a2: () => {
        let h = $(".header"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        h.animate(
          [
            {
              MinHeight: 0 + "vh",
              height: 0 + "vh",
            },
            {
              MinHeight: 9 + "vh",
              height: 9 + "vh",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        h.style.height = 9 + "vh";
        h.style.minHeight = 9 + "vh";
      },
    },
    Lheader: {
      a1: () => {
        let lh = $(".Lheader"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        lh.animate(
          [
            {
              height: 6 + "vh",
              bottom: 0 + "vw",
            },
            {
              height: 0 + "vh",
              bottom: 45 + "vw",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        lh.style.height = "0vh";
        lh.style.bottom = "45vw";
      },
      a2: () => {
        let lh = $(".Lheader"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        lh.animate(
          [
            {
              height: "0vh",
              bottom: "45vw",
            },
            {
              height: "6vh",
              bottom: "0vw",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        lh.style.height = 6 + "vh";
        lh.style.bottom = 0 + "vw";
      },
    },
    Listah: {
      a1: () => {
        let lhd = $(".Listah"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        lhd.animate(
          [
            {
              minHeight: 8 + "vh",
              height: 8 + "vh",
              left: 0 + "vw",
            },
            {
              minHeight: 0 + "vh",
              height: 0 + "vh",
              left: 100 + "vw",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        lhd.style.height = 0 + "vh";
        lhd.style.left = "100vw";
      },
      a2: () => {
        let lhd = $(".Listah"),
          [w, ht] = [window.innerWidth, window.innerHeight];
        lhd.animate(
          [
            {
              minHeight: 0 + "vh",
              height: 0 + "vh",
              left: "100vw",
            },
            {
              minHeight: 8 + "vh",
              height: 8 + "vh",
              left: 0 + "vw",
            },
          ],
          { duration: 500, iterations: 1 }
        );
        lhd.style.height = 8 + "vh";
        lhd.style.left = 0 + "vw";
      },
    },
  },
  events: {
    over: {
      AolD: (e) => {
        /*  
                f.a.fD21.a1();  
                f.a.imgD2.awh($('.imgD21'));                                
                f.a.header.a1();
                f.a.Lheader.a1();
                f.a.Listah.a1();
            */
        const Pai = e.target.parentElement.parentElement;
        const DateClassP = Pai.className.split(" ");

        let AnalClass = (db, cons, ação, ação2) => {
          for (let date of db) {
            if (date === cons) {
              //Exc ação
              ação();
            } else {
              ação2();
              console.log("O dado " + cons + " não existe !");
            }
          }
        };

        const AddClass = (elemento, name) => {
          elemento.classList.add(name);
        };

        const RmClass = (elemento, name) => {
          elemento.classList.remove(name);
        };

        const UpClass1 = () => {
          RmClass(Pai, "IAolD");
          AddClass(Pai, "AolD");
        };

        const UpClass2 = () => {
          AddClass(Pai, "AolD");
        };

        AnalClass(DateClassP, "IAolD", UpClass1, UpClass2);

        console.log("AolD disparado");
      },
    },
    out: {
      imgD21: () => {
        f.a.fD21.a2();
        f.a.imgD2.dwh($(".imgD21"));
        f.a.header.a2();
        f.a.Lheader.a2();
        f.a.Listah.a2();
      },
      IAolD: (e) => {
        //
        const Pai = e.target.parentElement.parentElement;
        const DateClassP = Pai.className.split(" ");

        let AnalClass = (db, cons, ação, ação2) => {
          for (let x of db) {
            if (x === cons) {
              //Exc ação
              ação();
            } else {
              ação2();
              console.log("O dado " + cons + " não existe !");
            }
          }
        };

        const AddClass = (elemento, name) => {
          elemento.classList.add(name);
        };

        const RmClass = (elemento, name) => {
          elemento.classList.remove(name);
        };

        const UpClass1 = () => {
          AddClass(Pai, "IAolD");
          RmClass(Pai, "AolD");
        };

        const UpClass2 = () => {};

        AnalClass(DateClassP, "AolD", UpClass1, UpClass2);

        console.log("IAolD disparado");
      },
    },
    click: {},
  },
};

export { f };
/*
() => {
            var RefClickImgD21 = document.createElement('div'), [root,D114] = [$('#root'),$('D114')]

            if(D114) {
                return null
            } else {
                RefClickImgD21.className = 'RefClickImgD21'
                root.append(RefClickImgD21)
            }

            require('../../D11/D11.js').c = require('../../D11/D11.js').AlteraState()

            Object.defineProperty(require('../../D11/D11.js'),'c',{value: true})

            console.log('f.imgD1 foi executada')
        }
*/
