const Adicionar_class = (e, name_class) => {
  e.classList.add(name_class);
};

const Remover_class = (e, name_class) => {
  e.classList.remove(name_class);
};

const Analise_class = (db, name_class, s1, s2) => {

    //console.log("Analise_class foi disparada")

    var quantidade_elementosDiferentes = 0 ;
    let quantidade_elementosDiferentes_total = db.lenght ;

    for (let x of db) {


      if (x === name_class) {

        console.log("Existe o elemento")
        s1();

      } else if (x !== name_class) {

        quantidade_elementosDiferentes = quantidade_elementosDiferentes + 1 ;
        console.log(quantidade_elementosDiferentes + " elemento distinto")

        if (quantidade_elementosDiferentes === db.lenght) {
  
        console.log("Não existe o elemento");
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

const gridTN7 = {
  Disparar_Evento_Quando: {
    Click: (e) => {

      console.log("gridTN7 foi disparada")

      const el = e.target.parentElement ;
      const irmão = el.previousSibling, db =  el.classList ;
      const 
      s1 = () => {
        Remover_class(el,"for_posiçao1_of_gridTN7")
        Adicionar_class(el,"for_posiçao2_of_gridTN7")

        Adicionar_class(irmão,"for_posiçao1_of_gridTN6")
        Remover_class(irmão,"for_posiçao2_of_gridTN6")
      },
      s2 = () => {
        Remover_class(el,"for_posiçao2_of_gridTN7")
        Adicionar_class(el,"for_posiçao1_of_gridTN7")

        Adicionar_class(irmão,"for_posiçao2_of_gridTN6")
        Remover_class(irmão,"for_posiçao1_of_gridTN6")
      };

      console.log(el,irmão)
      Analise_class(db, "for_posiçao1_of_gridTN7", s1, s2)

    },
    Out: (e) => {
      const Pai = e.target.parentElement;
      Remover_class(Pai, "Animação_filhoFor_gridTF1");
    },
  },
};

const gridTN6 = {
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
  gridTN7,
  gridTN6,
  Analise_class
};
