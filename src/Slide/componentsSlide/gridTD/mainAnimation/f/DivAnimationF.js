import { $ } from "../../../../Funções/Query/query";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
  Remover_class,
} from "../../../DBanner/f/f.js";

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
const Analise_class_p = (db, name_class, soluçoes) => {
  for (let x of db) {
    if (x === name_class["1"] || x === null) {
      console.log("Existe o elemento " + name_class["1"]);
      soluçoes["1"]();
      break;
    } else if (x === name_class["2"]) {
      console.log("Existe o elemento " + name_class["2"]);
      soluçoes["2"]();
      break;
    } else if (x === name_class["3"]) {
      console.log("Existe o elemento " + name_class["3"]);
      /*soluçoes["3"]();*/
      break;
    } else if (x === name_class["4"]) {
      console.log("Existe o elemento " + name_class["4"]);
      /*soluçoes["4"]();*/
      break;
    } else if (x === name_class["5"]) {
      console.log("Existe o elemento " + name_class["5"]);
      /*soluçoes["5"]();*/
      break;
    }
  }
};
//---------------------------------------------------------------------------------------------------------------------------------------
//Definição
const window_Event_onscroll = () => {
  const soluçoes_onscroll_window = {
      1: () => {
        //Mudança de layout DivAnimation_main 1
        Remover_class($(".DivAnimation_main"), "displayNone");
        Remover_class($(".DivAnimation_main"), "template_areas_state_inicial");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_2"), "displayNone");
        Remover_class($(".main_banner_2"), "main_banner_2_state_inicial");
        Adicionar_class($(".main_banner_2"), "main_banner_2_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_3"), "displayNone");
        Remover_class($(".main_banner_3"), "main_banner_3_state_inicial");
        Adicionar_class($(".main_banner_3"), "main_banner_3_state_1");
        //---------------------------------------------------------
        Remover_class($(".Seja"), "displayNone");
        //---------------------------------------------------------
      },
      2: () => {
        /*
        //Mudança de layout DivAnimation_main 2
        Remover_class($(".DivAnimation_main"), "template_areas_state_inicial");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_1"), "main_banner_1_state_inicial");
        Adicionar_class($(".main_banner_1"), "main_banner_1_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_2"), "main_banner_2_state_inicial");
        Adicionar_class($(".main_banner_2"), "main_banner_2_state_1");
        //---------------------------------------------------------
        */
        setTimeout(() => {
          console.log("teste 2");
        }, 2000);
      },
      3: () => {
        //Mudança de layout DivAnimation_main 3
        Remover_class($(".DivAnimation_main"), "template_areas_state_1");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_2");
        //---------------------------------------------------------
        Remover_class($(".main_banner_1"), "main_banner_1_state_inicial");
        Adicionar_class($(".main_banner_1"), "main_banner_1_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_2"), "main_banner_2_state_inicial");
        Adicionar_class($(".main_banner_2"), "main_banner_2_state_1");
        //---------------------------------------------------------
      },
      4: () => {
        //Mudança de layout DivAnimation_main 4
        Remover_class($(".DivAnimation_main"), "template_areas_state_2");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_3");
        //---------------------------------------------------------
        Remover_class($(".main_banner_1"), "main_banner_1_state_inicial");
        Adicionar_class($(".main_banner_1"), "main_banner_1_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_2"), "main_banner_2_state_inicial");
        Adicionar_class($(".main_banner_2"), "main_banner_2_state_1");
        //---------------------------------------------------------
      },
      5: () => {
        //Mudança de layout DivAnimation_main 5
        Remover_class($(".DivAnimation_main"), "template_areas_state_3");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_4");

        /*Remover_class($(".DivAnimation_main"), "template_areas_state_4");
        Adicionar_class($(".DivAnimation_main"), "template_areas_state_5");*/
        //---------------------------------------------------------
        Remover_class($(".main_banner_1"), "main_banner_1_state_inicial");
        Adicionar_class($(".main_banner_1"), "main_banner_1_state_1");
        //---------------------------------------------------------
        Remover_class($(".main_banner_2"), "main_banner_2_state_inicial");
        Adicionar_class($(".main_banner_2"), "main_banner_2_state_1");
        //---------------------------------------------------------
      },
    },
    nameCond_onscroll_window = {
      1: "template_areas_state_inicial",
      2: "template_areas_state_1",
      3: "template_areas_state_2",
      4: "template_areas_state_4",
      5: "template_areas_state_5",
    };

  window.onscroll = () => {
    const Exe_animaçao_DivAnimation = () => {
      let db = $(".DivAnimation_main").classList;
      console.log("a função Exe_animaçao_DivMain foi executada");
      Analise_class_p(db, nameCond_onscroll_window, soluçoes_onscroll_window);
    };

    Exe_animaçao_DivAnimation();
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------

export { Event_onDrag };
