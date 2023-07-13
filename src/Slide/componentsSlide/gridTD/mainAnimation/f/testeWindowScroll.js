var quantExecuções = 0;
//---------------------------------------------------------------------------------------------------------------------------------------
var $ = (NomeDaIndentificão) => {
  /*O argumento é obrigatoriamento uma string*/
  var ElementoHtml = document.querySelector(NomeDaIndentificão); // BOM.
  return ElementoHtml;
};
//---------------------------------------------------------------------------------------------------------------------------------------
const Adicionar_class = (e, name_class) => {
  e.classList.add(name_class);
};

const Remover_class = (e, name_class) => {
  e.classList.remove(name_class);
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
        setTimeout(() => {
          const alterarStates = () => {
            //Mudança de layout DivAnimation_main 2
            //---------------------------------------------------------
            Adicionar_class($(".Seja"), "displayNone");
            //---------------------------------------------------------
            Remover_class($(".Bem"), "displayNone");
            //---------------------------------------------------------
            /*
            Remover_class($(".DivAnimation_main"), "template_areas_state_1");
            Adicionar_class($(".DivAnimation_main"), "template_areas_state_2");
            */
            //---------------------------------------------------------
            /*
            Remover_class($(".main_banner_1"), "displayNone");
            Remover_class($(".main_banner_1"), "main_banner_1_state_inicial");
            Adicionar_class($(".main_banner_1"), "main_banner_1_state_1");
            */
            //---------------------------------------------------------
            Remover_class($(".main_banner_2"), "main_banner_2_state_1");
            Adicionar_class($(".main_banner_2"), "main_banner_2_state_2");
            /*
            setTimeout(() => {
              Adicionar_class($(".main_banner_2"), "displayNone");
            }, 2000);
            */
          };
          alterarStates();
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
      /*console.log("a função Exe_animaçao_DivMain foi executada");*/
      Analise_class_p(db, nameCond_onscroll_window, soluçoes_onscroll_window);
      quantExecuções = quantExecuções + 1;
      console.log(quantExecuções);
    };

    Exe_animaçao_DivAnimation();
  };
};
//---------------------------------------------------------------------------------------------------------------------------------------
//chamada
window_Event_onscroll();
//---------------------------------------------------------------------------------------------------------------------------------------
//2760 a 3315