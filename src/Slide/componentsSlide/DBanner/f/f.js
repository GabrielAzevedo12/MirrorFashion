const Adicionar_class = (e, name_class) => {
  e.classList.add(name_class);
};

const Remover_class = (e, name_class) => {
  e.classList.remove(name_class);
};

const Analise_class = (db, name_class, s1, s2) => {
    var quantidade_elementosDiferentes = 0 ;
    const quantidade_elementosDiferentes_total = db.lenght - 1 ;

    for (const x of db) {

      if(x === name_class) {

        console.log("Existe o elemento")
        s1();

      } else if (x === name_class) {

        quantidade_elementosDiferentes = quantidade_elementosDiferentes + 1 ;

        if (quantidade_elementosDiferentes === quantidade_elementosDiferentes_total) {

        console.log("Não existe o elemento")
        s2();
        break ;

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

/*onMouseOver={gridTN11.Disparar_Evento_Quando.Over.Aumentar_ElementoPai}*/

const gridTN11 = {
  Disparar_Evento_Quando: {
    Over: (e) => {
      const Pai = e.target.parentElement;
      Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
    },
    Out: (e) => {
      const Pai = e.target.parentElement;
      Remover_class(Pai, "Animação_filhoFor_gridTF1");
    },
  },
};

const gridTN6 = {
  Disparar_Evento_Quando: {
    Click: (e) => {
      const el = e.target.parentElement ;
      const irmão = el.previousSibling ;
      const 
      e1 = () => {
        Remover_class(el,"for_posiçao1_of_gridTN7")
        Adicionar_class(el,"for_posiçao2_of_gridTN7")

        Adicionar_class(irmão,"for_posiçao1_of_gridTN6")
        Remover_class(irmão,"for_posiçao2_of_gridTN6")
      },
      ne2 = () => {
        Remover_class(el,"for_posiçao2_of_gridTN7")
        Adicionar_class(el,"for_posiçao1_of_gridTN7")

        Adicionar_class(irmão,"for_posiçao2_of_gridTN6")
        Remover_class(irmão,"for_posiçao1_of_gridTN6")
      };

      Analise_class(e.target.classList, "for_posiçao1_of_gridTN6", e1, ne2)
    },
    Out: (e) => {
      const Pai = e.target.parentElement;
      Remover_class(Pai, "Animação_filhoFor_gridTF1");
    },
  },
};

const gridTN7 = {
  Disparar_Evento_Quando: {
    Over: (e) => {
      const Pai = e.target.parentElement;
      Adicionar_class(Pai, "Animação_filhoFor_gridTF1");
    },
    Out: (e) => {
      const Pai = e.target.parentElement;
      Remover_class(Pai, "Animação_filhoFor_gridTF1");
    },
  },
};

export {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
};
