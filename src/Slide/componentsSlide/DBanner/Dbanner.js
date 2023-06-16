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
          <div className="gridTF1 gridTF"></div>
          <div className="gridTF2 gridTF"></div>
          <div className="gridTF3 gridTF"></div>
          <div className="gridTF4 gridTF"></div>
          <div className="gridTF5 gridTF"></div>
        </div>
      </div>
    </>
  );
};

export { Dbanner };

/*A Maior Loja de Roupas de todo Brasil*/
