/*#imports*/
import "./css/mainAnimation.css";
import "./css/mainAnimationA.css";
import { Event_onDrag } from "./f/DivAnimationF.js";
/*import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN,
  Analise_class
} from '../../../DBanner/f/f.js'*/
/*Imports#*/

/*#Hook*/
var DivAnimationMain = () => {
  /*#Hook_Escopo*/
  /*Hook_Escopo#*/

  /*#Hook_Conteudo*/
  return (
    <div
      className="DivAnimation_main template_areas_1"
      /*onClick={gridTN.gridTN${1}.Disparar_Evento_Quando.Click}*/
      /*onMouseOut={gridTN.gridTN${1}.Disparar_Evento_Quando.Out}*/
      /*onMouseOver={gridTN.gridTN${1}.Disparar_Evento_Quando.Over}*/
      /*onDrag={gridTN.gridTN${1}.Disparar_Evento_Quando.Drag}*/
      /*onDrop={gridTN.gridTN${1}.Disparar_Evento_Quando.Drop}*/
      /*onDragStart={gridTN.gridTN${1}.Disparar_Evento_Quando.DragStart}*/
      /*onDragOver={gridTN.gridTN${1}.Disparar_Evento_Quando.DragOver}*/
      onDrag={Event_onDrag}
    >
      <h1 className="Seja"> Seja </h1>
      <h1 className="Bem"> Bem </h1>
      <h1 className="Vindo"> Vindo </h1>
      <h1 className="aMirrorFashion"> a MirrorFashion </h1>
    </div>
  );
  /*Hook_Conteudo#*/
};
/*Hook#*/

/*#Exports*/
export { DivAnimationMain };
/*Exports#*/
