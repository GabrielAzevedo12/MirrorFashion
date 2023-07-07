import { $ } from "../../../Funções/Query/query";

const Adicionar_class = (e, name_class) => {
  e.classList.add(name_class);
};

const Remover_class = (e, name_class) => {
  e.classList.remove(name_class);
};

const Exibir_class = (db) => {
  for (let x of db) {
    console.log(x);
  }
};

const Analise_class_p = (db, name_class, soluçoes) => {
  var quantidade_elementosDiferentes = 0;
  let quantidade_elementosDiferentes_total = db["length"];

  for (let x of db) {
    if (x === name_class["p1"] || x === null) {
      console.log("Existe o elemento " + " name_class['p1']");
      soluçoes["1"]();
      break;
    } else if (x === name_class["p2"]) {
      console.log("Existe o elemento " + " name_class['p2']");
      soluçoes["2"]();
      break;
    } else if (x === name_class["p3"]) {
      console.log("Existe o elemento " + " name_class['p3']");
      soluçoes["3"]();
      break;
    }
  }
};

const Analise_class = (db, name_class, s1, s2) => {
  var quantidade_elementosDiferentes = 0;
  let quantidade_elementosDiferentes_total = db["length"];

  for (let x of db) {
    if (x === name_class) {
      console.log("Existe o elemento");
      s1();
    } else if (x !== name_class) {
      quantidade_elementosDiferentes = quantidade_elementosDiferentes + 1;
      console.log(quantidade_elementosDiferentes + " elemento distinto");

      if (
        quantidade_elementosDiferentes === quantidade_elementosDiferentes_total
      ) {
        console.log("Todos os elementos são distintos de " + name_class);
        console.log("Não existe o elemento");
        s2();
        break;
      } else {
        continue;
      }
    }
  }
};

const Aumentar_ElementoPai = (e) => {
  const Pai = e.target.parentElement;
  Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
};

const Diminuir_ElementoPai = (e) => {
  const Pai = e.target.parentElement;
  Remover_class(Pai, "Animação_filhoFor_gridTF1");
};

/*onMouseOver={gridTD1N11.Disparar_Evento_Quando.Over.Aumentar_ElementoPai}*/

const gridTD1N = {
  gridTD1N6: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Over: (e) => {
        const Pai = e.target.parentElement;
        Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1N7: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1N8: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1N9: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1N10: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1N11: {
    Disparar_Evento_Quando: {
      Over: (e) => {
        const Pai = e.target.parentElement;
        Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Click: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1NB1: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1NB foi disparada");

        const el = $(".gridTF7");
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1NB2: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1NB foi disparada");

        const el = $(".gridTF7");
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD1NB3: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD1NB3 foi disparada");

        const irmão2 = $(".gridTF7"),
          irmão3 = irmão2.nextSibling,
          irmão1 = irmão2.previousSibling,
          soluçoes_gridTD1NB3 = {
            1: () => {
              //primeira posição -> segunda posição

              Adicionar_class(irmão1, "for_posiçao2_of_gridTF6_m1");
              Adicionar_class(irmão2, "for_posiçao3_of_gridTF7_m1");
              Adicionar_class(irmão3, "for_posiçao1_of_gridTF8_m1");

              Remover_class(irmão1, "for_posiçao1_of_gridTF6_m1");
              Remover_class(irmão2, "for_posiçao2_of_gridTF7_m1");
              Remover_class(irmão3, "for_posiçao3_of_gridTF8_m1");
            },
            2: () => {
              //segunda posição -> terceira posição

              Adicionar_class(irmão1, "for_posiçao3_of_gridTF6_m1");
              Adicionar_class(irmão2, "for_posiçao1_of_gridTF7_m1");
              Adicionar_class(irmão3, "for_posiçao2_of_gridTF8_m1");

              Remover_class(irmão1, "for_posiçao2_of_gridTF6_m1");
              Remover_class(irmão2, "for_posiçao3_of_gridTF7_m1");
              Remover_class(irmão3, "for_posiçao1_of_gridTF8_m1");
            },
            3: () => {
              //terceira posição -> primeira posição

              Adicionar_class(irmão1, "for_posiçao1_of_gridTF6_m1");
              Adicionar_class(irmão2, "for_posiçao2_of_gridTF7_m1");
              Adicionar_class(irmão3, "for_posiçao3_of_gridTF8_m1");

              Remover_class(irmão1, "for_posiçao3_of_gridTF6_m1");
              Remover_class(irmão2, "for_posiçao1_of_gridTF7_m1");
              Remover_class(irmão3, "for_posiçao2_of_gridTF8_m1");
            },
          },
          name_class_gridTD1NB3 = {
            p1: "for_posiçao2_of_gridTF7_m1",
            p2: "for_posiçao3_of_gridTF7_m1",
            p3: "for_posiçao1_of_gridTF7_m1",
          },
          db = irmão2.classList;

        Analise_class_p(db, name_class_gridTD1NB3, soluçoes_gridTD1NB3);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
};

const gridTD2N = {
  gridTD2N6: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Over: (e) => {
        const Pai = e.target.parentElement;
        Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2N7: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2N8: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2N9: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2N10: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2N7 foi disparada");

        const el = e.target.parentElement;
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2N11: {
    Disparar_Evento_Quando: {
      Over: (e) => {
        const Pai = e.target.parentElement;
        Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Click: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2NB1: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2NB foi disparada");

        const el = $(".gridTF7");
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2NB2: {
    Disparar_Evento_Quando: {
      Click: (e) => {
        console.log("gridTD2NB foi disparada");

        const el = $(".gridTF7");
        const irmão = el.previousSibling,
          db = el.classList;
        const s1 = () => {
            Remover_class(el, "for_posiçao1_of_gridTF7");
            Adicionar_class(el, "for_posiçao2_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao1_of_gridTF6");
            Remover_class(irmão, "for_posiçao2_of_gridTF6");
          },
          s2 = () => {
            Remover_class(el, "for_posiçao2_of_gridTF7");
            Adicionar_class(el, "for_posiçao1_of_gridTF7");

            Adicionar_class(irmão, "for_posiçao2_of_gridTF6");
            Remover_class(irmão, "for_posiçao1_of_gridTF6");
          };
        console.log(el, irmão);
        Analise_class(db, "for_posiçao1_of_gridTF7", s1, s2);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
  gridTD2NB3: {
    Disparar_Evento_Quando: {
      Click: () => {
        console.log("gridTD2NB3 foi disparada");

        const irmão2 = $(".gridTD2_F2"),
          irmão3 = irmão2.nextSibling,
          irmão1 = irmão2.previousSibling,
          soluçoes_gridTD2NB3 = {
            1: () => {
              //primeira posição -> segunda posição

              Adicionar_class(irmão1, "for_posiçao2_of_gridTD2_F1_m1");
              Adicionar_class(irmão2, "for_posiçao3_of_gridTD2_F2_m1");
              Adicionar_class(irmão3, "for_posiçao1_of_gridTD2_F3_m1");

              Remover_class(irmão1, "for_posiçao1_of_gridTD2_F1_m1");
              Remover_class(irmão2, "for_posiçao2_of_gridTD2_F2_m1");
              Remover_class(irmão3, "for_posiçao3_of_gridTD2_F3_m1");
            },
            2: () => {
              //segunda posição -> terceira posição

              Adicionar_class(irmão1, "for_posiçao3_of_gridTD2_F1_m1");
              Adicionar_class(irmão2, "for_posiçao1_of_gridTD2_F2_m1");
              Adicionar_class(irmão3, "for_posiçao2_of_gridTD2_F3_m1");

              Remover_class(irmão1, "for_posiçao2_of_gridTD2_F1_m1");
              Remover_class(irmão2, "for_posiçao3_of_gridTD2_F2_m1");
              Remover_class(irmão3, "for_posiçao1_of_gridTD2_F3_m1");
            },
            3: () => {
              //terceira posição -> primeira posição

              Adicionar_class(irmão1, "for_posiçao1_of_gridTD2_F1_m1");
              Adicionar_class(irmão2, "for_posiçao2_of_gridTD2_F2_m1");
              Adicionar_class(irmão3, "for_posiçao3_of_gridTD2_F3_m1");

              Remover_class(irmão1, "for_posiçao3_of_gridTD2_F1_m1");
              Remover_class(irmão2, "for_posiçao1_of_gridTD2_F2_m1");
              Remover_class(irmão3, "for_posiçao2_of_gridTD2_F3_m1");
            },
          },
          name_class_gridTD2NB3 = {
            p1: "for_posiçao2_of_gridTD2_F2_m1",
            p2: "for_posiçao3_of_gridTD2_F2_m1",
            p3: "for_posiçao1_of_gridTD2_F2_m1",
          },
          db = irmão2.classList;

        Analise_class_p(db, name_class_gridTD2NB3, soluçoes_gridTD2NB3);
      },
      Over: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Out: (e) => {
        const Pai = e.target.parentElement;
        Remover_class(Pai, "Animação_filhoFor_gridTF1");
      },
      Drag: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      Drop: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragStart: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
      DragOver: (e) => {
        console.log(e.target);
        const el = e.target.parentElement;
      },
    },
  },
};

export {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTD1N,
  gridTD2N,
  Analise_class,
};
