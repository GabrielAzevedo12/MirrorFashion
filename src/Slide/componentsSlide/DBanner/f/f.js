const Adicionar_class = (e, name_class) => {
  e.classList.add(name_class);
};

const Remover_class = (e, name_class) => {
  e.classList.remove(name_class);
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

export {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN11,
};
