/*#Comentários*/
// Este é o Hook GridTD1
//<GridTF6/>
//<GridTF7/>
//<GridTF8/>
/*Comentários#*/

/*#Imports*/

import "./css/1.css";
import "./css/gridTD1.css";
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTD1N,
} from "../../DBanner/f/f.js";
import { GridTF1 } from "./gtf1/gtfh1";
import { GridTF2 } from "./gtf2/gtfh2";
import { GridTF3 } from "./gtf3/gtfh3";
import { GridTF4 } from "./gtf4/gtfh4";
import { GridTF5 } from "./gtf5/gtfh5";
import { GridTF6 } from "./gtf6/gtfh6";
import { GridTF7 } from "./gtf7/gtfh7";
import { GridTF8 } from "./gtf8/gtfh8";
import { GridTF9 } from "./gtf9/gtfh9";
import { GridTF10 } from "./gtf10/gtfh10";
import { GridTF11 } from "./gtf11/gtfh11";
import { GridTD1FB } from "./gtfB/gtfhB.js";

/*Imports#*/

//Fase : Teste

/*#Hook*/

const GridTD1 = () => {
  /*#EscopoGridTD1*/

  const display_none = { display: "none" };

  /*EscopoGridTD1#*/

  /*#HookCont1*/
  return (
    <div className="gridTD1">
      <GridTF1 />
      <GridTF2 />
      <GridTF3 />
      <GridTF4 />
      <GridTF5 />
      <GridTF9 />
      <GridTF10 />
      <GridTF11 />
      <GridTD1FB />
    </div>
  );
  /*HookCont1#*/
};

/*Hook#*/

/*#Exports*/

export { GridTD1 };

/*Exports#*/
