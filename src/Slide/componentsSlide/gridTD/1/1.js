/*#Comentários*/
// Este é o Hook GridTD1
/*Comentários#*/

/*#Imports*/

import './css/1.css';
import './css/gridTD.css';
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTN,
} from '../../DBanner/f/f.js';
import { GridTD1F1 } from './gtd1f1/gtd1fh1';
import { GridTD1F2 } from './gtd1f2/gtd1fh2';
import { GridTD1F3 } from './gtd1f3/gtd1fh3';
import { GridTD1FB } from './gtd1fB/gtd1fhB.js'
import { HerençaOf_GridTD1 } from './hgtd1/hgtd1.js';

/*Imports#*/

//Fase : Teste

/*#Hook*/

const GridTD1 = () => {

  /*#EscopoGridTD1*/

  const 
  display_none = { display: 'none' },
  Herença = {HerençaOf_GridTD1} ;

  /*EscopoGridTD1#*/

  /*#HookCont1*/
  return (
    <div className='gridTD1'>
      <GridTD1FB Obj_Pai_Props={Herença}/>
      <GridTD1F1 Obj_Pai_Props={Herença}/>
      <GridTD1F2 Obj_Pai_Props={Herença}/>
      <GridTD1F3 Obj_Pai_Props={Herença}/>
    </div>
  );
  /*HookCont1#*/

};

/*Hook#*/

/*#Exports*/

export { GridTD1 };

/*Exports#*/

