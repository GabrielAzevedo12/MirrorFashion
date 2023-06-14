import { EF } from "../../D11/ElementosFilhosD11/EF.js"

const Div11D = {
    class: "Div11",
    id: "Div11",
    filhos: {
      F1: (
        <div className="D11F1 D11F11" /*D111*/ id="D11F11">
          {EF.D11.TL}
          {EF.D11.TR}
          {EF.D111.img111}
        </div>
      ),
      F2: (
        <div className="D11F1 D11F12" /*D112*/ id="D11F12">
          {EF.D11.TL}
          {EF.D11.TR}
          {EF.D112.img112}
        </div>
      ),
      F3: (
        <div className="D11F1 D11F13" /*D113*/ id="D11F13">
          {EF.D11.TL}
          {EF.D11.TR}
          {EF.D113.img113}
        </div>
      ),
    },
  };

  export { Div11D }