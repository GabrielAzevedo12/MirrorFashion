import $ from "../Query/$";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var scrDiv = (ElementoHtml) => {
    var E = ElementoHtml, [Pd,w] = [parseInt(E.className.slice(3))-1,window], [iw,ih] = [w.innerWidth, w.innerHeight];
    w.scrollTo({ left:0, top:Pd*ih, behavior:'smooth'}) 
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export  {scrDiv}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Teste
//ML2v3($('.Div5'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------