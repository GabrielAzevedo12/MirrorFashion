import $ from "../Query/$";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var scrd = (ElementoHtml, scrdm, irmao) => {
  var E = ElementoHtml,
    [m, Pai, w] = [scrdm - 1, E.offsetParent[irmao], window],
    [iw, ih] = [w.innerWidth, w.innerHeight];
  Pai.scrollTo({ left: m * iw, top: 0, behavior: "smooth" });
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DEF
/*

*Tipos:

ElementoScroll : Objeto (Elemento html) 
TypeScroll : String (Determinara o tipo de scroll no elemento)
Incre : Number (Valor que será incrementado ao valor da posição 
atual da tela na horizontal ou vertical)

*/

var srcrdg = (Incre, ElementoScroll, TypeScroll) => {
  let ValorIncre = ElementoScroll[TypeScroll];
  /*
    let Dimensão_do_elemento_scroll = ElementoScroll[x], 
    tais que x (- {"clientHeight","clientWidth"}.
    let Limite_Scroll = n*Dimensão_do_elemento_scroll;
    */
  /* (ValorIncre !== 2 * Limite_Scroll) ------------
  /*                                               |    */
  /*                                               |    */
  /*                                               v    */
  if (ValorIncre >= 0 && ValorIncre !== 2 * window.innerWidth) {
    let ScrollTotal = ValorIncre + Incre;

    if (TypeScroll === "scrollLeft") {
      ElementoScroll.scrollTo({
        left: ScrollTotal,
        top: 0,
        behavior: "smooth",
      });
    } else if (TypeScroll === "scrollTop") {
      ElementoScroll.scrollTo({
        left: 0,
        top: ScrollTotal,
        behavior: "smooth",
      });
    }
  }

  if (ValorIncre === 2 * window.innerWidth) {
    let ScrollTotal = ValorIncre - Incre;

    if (TypeScroll === "scrollLeft") {
      ElementoScroll.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else if (TypeScroll === "scrollTop") {
      ElementoScroll.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    }
  }
};

/*
var $ = (NomeDaIndentificão) => { 
          var ElementoHtml = document.querySelector(NomeDaIndentificão); // BOM.
         return ElementoHtml; 
}

var teste_srcrdg = () => {
    const w = window.innerWidth;
    srcrdg(w,$(".Div11"),"scrollLeft")    
}
setInterval(teste_srcrdg,3000)*/

export { scrd, srcrdg };
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Teste
//ML2v3($('.Div5'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
