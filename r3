var $ = (NomeDaIndentificão) => { /*O argumento é obrigatoriamento uma string*/  
          var ElementoHtml = document.querySelector(NomeDaIndentificão); // BOM.
         return ElementoHtml; 
}

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
        
      if ($(".DivAnimation_main").style.top === '') {
          $(".DivAnimation_main").style.top = '-' + $(".DivAnimation_main").style.bottom;
      }
      
      //itere
      desloca();
    };
    d2();
  };
};
//Chamada
window_Event_onscroll2();

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
      
         if ($(".DivAnimation_main").style.bottom === '') {
          $(".DivAnimation_main").style.bottom = '-' + $(".DivAnimation_main").style.top;
      }
      
      //itere
      desloca();
    };
    d2();
  };
};
//Chamada
window_Event_onscroll3();