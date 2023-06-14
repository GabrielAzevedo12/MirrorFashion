import { DivTF1A, DivTF2A } from "../funções/chamadas.js";

const Div11D2 = {
    class: "DivT",
    id: "DivT",
    filhos: {
      F1: (
        <div /*D111*/ /*onMouseOut={DivTF1IA}*/>
          <img
            className="DivTF DivTF1"
            src="./images/Destaques/D1.jpg"
            alt=""
            id="DivTF1"
            onClick={DivTF1A}
          />
        </div>
      ),
      F2: (
        <div /*D112*/>
          <img
            className="DivTF DivTF2"
            src="./images/Destaques/D2.jpg"
            alt=""
            id="DivTF2"
            onClick={DivTF2A}
          />
        </div>
      ),
      F3: (
        <div /*D113*/>
          <img
            className="DivTF DivTF3"
            src="./images/Destaques/D3.jpg"
            alt=""
            id="DivTF3"
          />
        </div>
      ),
    },
  }
  
  export {Div11D2}