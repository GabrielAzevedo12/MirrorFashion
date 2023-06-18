import "./css/Dbanner.css";
//Fase : Teste
const Dbanner = () => {
  const display_none = { display: "none" };
  return (
    <>
      <div className="DbannerPrincipal">
        <div className="DbannerTíd1 DbannerTíd" style={display_none}>
          <p className="bannerTíd1 bannerTíd1A">
            {" "}
            Sejá Bem Vindo a Mirror Fashion
          </p>
        </div>
        <span className="bannerSpan bannerSpanA"></span>
        <div className="DbannerTíd2 DbannerTíd" style={display_none}>
          <p className="bannerTíd2"></p>
        </div>
        <div className="gridTD">
          <div className="gridTF1 gridTF animation1_gridTF animation1_gridTF1">
            <div className="gridTN11 gridTN animation1_gridTN animation1_gridTN11">
              destaque1
            </div>
            <div className="gridTN12 gridTN animation1_gridTN animation1_gridTN12">
              destaque2
            </div>
            <div className="gridTN13 gridTN animation1_gridTN animation1_gridTN13">
              destaque3
            </div>
          </div>
          <div className="gridTF2 gridTF animation1_gridTF animation1_gridTF2">
            <div className="gridTN21 gridTN2 animation1_gridTN animation1_gridTN21">
              subdestaque11
            </div>
            <div className="gridTN22 gridTN2 animation1_gridTN animation1_gridTN22">
              subdestaque12
            </div>
            <div className="gridTN23 gridTN2 animation1_gridTN animation1_gridTN23">
              subdestaque13
            </div>
          </div>
          <div className="gridTF3 gridTF animation1_gridTF animation1_gridTF3">
            <div className="gridTN31 gridTN3 animation1_gridTN animation1_gridTN31">
              subdestaque21
            </div>
            <div className="gridTN32 gridTN3 animation1_gridTN animation1_gridTN32">
              subdestaque22
            </div>
            <div className="gridTN33 gridTN3 animation1_gridTN animation1_gridTN33">
              subdestaque23
            </div>
          </div>
          <div className="gridTF4 gridTF animation1_gridTF animation1_gridTF4">
            <div className="gridTN41 gridTN4 animation1_gridTN animation1_gridTN41">
              subdestaque31
            </div>
            <div className="gridTN42 gridTN4 animation1_gridTN animation1_gridTN42">
              subdestaque32
            </div>
            <div className="gridTN43 gridTN4 animation1_gridTN animation1_gridTN43">
              subdestaque33
            </div>
          </div>
          <div className="gridTF5 gridTF animation1_gridTF animation1_gridTF5">
            <div className="gridTN51 gridTN5 animation1_gridTN animation1_gridTN51">
              subdestaque41
            </div>
            <div className="gridTN52 gridTN5 animation1_gridTN animation1_gridTN52">
              subdestaque42
            </div>
            <div className="gridTN53 gridTN5 animation1_gridTN animation1_gridTN53">
              subdestaque43
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dbanner };

/*A Maior Loja de Roupas de todo Brasil*/
/*

Testes :

var teste_srcrdg1 = () => {
    const w = 100/100*$(".gridTF1").clientWidth;
    srcrdg(w,$(".gridTF1"),"scrollLeft")    
}
var teste_srcrdg2 = () => {
    const w = -100/100*$(".gridTF1").clientWidth;
    srcrdg(w,$(".gridTF1"),"scrollLeft")    
}

var teste_srcrdg13 = () => {
    const w = 100/100*$(".gridTF3").clientHeight;
    srcrdg(w,$(".gridTF3"),"scrollTop")    
}
var teste_srcrdg23 = () => {
    const w = -100/100*window.innerHeight;
    srcrdg(w,$(".gridTF3"),"scrollTop")    
}

var teste_srcrdg12 = () => {
    const w = 100/100*$(".gridTF2").clientWidth;
    srcrdg(w,$(".gridTF2"),"scrollLeft")    
}
var teste_srcrdg22 = () => {
    const w = -100/100*$(".gridTF2").clientWidth;
    srcrdg(w,$(".gridTF2"),"scrollLeft")    
}

 */
