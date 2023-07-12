import { $ } from "../../../../Funções/Query/query";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
} from "../../../Dbanner/f/f.js";

//---------------------------------------------------------------------------------------------------------------------------------------

const d = () => {
  console.log("a função d foi executada");
  const posiçao = parseInt($(".DivAnimation_main").style.left),
    l = "10px",
    upx = 1,
    desloca = () => {
      const desloca_t = posiçao + upx;
      $(".DivAnimation_main").style.left = desloca_t + "px";
    },
    intervalo = (setInterval = (d, 500));

  if (posiçao + "px" === l) {
    console.log("chegou no limite do deslocamento");
  } else if (posiçao + "px" < l) {
    //itere
    console.log("deslocando mais " + upx);
    desloca();
  }
};

//---------------------------------------------------------------------------------------------------------------------------------------

const d2 = () => {
  console.log("a função d foi executada");
  const posiçao = parseInt($(".DivAnimation_main").style.left),
    upx = 1,
    desloca = () => {
      const desloca_t = posiçao + upx;
      $(".DivAnimation_main").style.left = desloca_t + "px";
    };
  //itere
  console.log("deslocando mais " + upx);
  desloca();
};

//---------------------------------------------------------------------------------------------------------------------------------------

const Event_onDrag = () => {
  console.log("a função d foi executada");

  var posiçao = parseInt($(".DivAnimation_main").style.left),
    upx = 30,
    desloca = () => {
      var desloca_t = posiçao + -1 * upx;
      console.log(desloca_t, posiçao, upx);
      $(".DivAnimation_main").style.left = desloca_t + "px";
      console.log("deslocando mais " + desloca_t + "px");
    };

  if ($(".DivAnimation_main").style.left === "") {
    $(".DivAnimation_main").style.left = "20px";
  }

  //itere
  desloca();
};

//---------------------------------------------------------------------------------------------------------------------------------------

//Definição
const window_Event_onscroll2 = () => {
  window.onscroll = () => {
    const d2 = () => {
      console.log("a função d foi executada");
      var posiçao = parseInt($(".DivAnimation_main").style.top),
        upx = 10,
        desloca = () => {
          var desloca_t = posiçao + upx;
          console.log(desloca_t, posiçao, upx);
          $(".DivAnimation_main").style.top = desloca_t + "px";
          console.log("deslocando mais " + desloca_t + "px");
        };

      if ($(".DivAnimation_main").style.top === "") {
        $(".DivAnimation_main").style.top =
          "-" + $(".DivAnimation_main").style.bottom;
      }

      //itere
      desloca();
    };
    d2();
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------

//Definição
const window_Event_onscroll3 = () => {
  window.onscroll = () => {
    const d2 = () => {
      console.log("a função d foi executada");
      var posiçao = parseInt($(".DivAnimation_main").style.bottom),
        upx = 10,
        desloca = () => {
          var desloca_t = posiçao + upx;
          console.log(desloca_t, posiçao, upx);
          $(".DivAnimation_main").style.bottom = desloca_t + "px";
          console.log("deslocando mais " + desloca_t + "px");
        };

      if ($(".DivAnimation_main").style.bottom === "") {
        $(".DivAnimation_main").style.bottom =
          "-" + $(".DivAnimation_main").style.top;
      }

      //itere
      desloca();
    };
    d2();
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------

//Definição
const window_Event_onscroll = () => {
  window.onscroll = () => {
    const Exe_animaçao_DivAnimation = () => {
      console.log("a função Exe_animaçao_DivMain foi executada");
    };
    Exe_animaçao_DivAnimation();
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------

export { Event_onDrag };
