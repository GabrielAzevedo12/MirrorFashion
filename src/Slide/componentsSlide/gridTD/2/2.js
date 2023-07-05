/*#Comentários*/
// Este é o Hook GridTD2
/*Comentários#*/

/*#Imports*/

import './css/2.css';
import './css/gridTD2.css';
import {
  Adicionar_class,
  Aumentar_ElementoPai,
  Diminuir_ElementoPai,
  gridTD1N,
} from '../../DBanner/f/f.js';
import { GridTD2F1 } from './gtd2f1/gtd2fh1';
import { GridTD2F2 } from './gtd2f2/gtd2fh2';
import { GridTD2F3 } from './gtd2f3/gtd2fh3';
import { GridTD1FB } from '../1/gtfB/gtfhB.js'
import { HerençaOf_GridTD2 } from './hgtd2/hgtd2.js';

/*Imports#*/

//Fase : Teste

/*#Hook*/

const GridTD2 = () => {

  /*#EscopoGridTD2*/

  const 
  display_none = { display: 'none' },
  Herença = {HerençaOf_GridTD2} ;

  /*EscopoGridTD2#*/

  /*#HookCont2*/
  return (
    <div className='gridTD2'>
      <GridTD1FB Obj_Pai_Props={Herença}/>
      <GridTD2F1 Obj_Pai_Props={Herença}/>
      <GridTD2F2 Obj_Pai_Props={Herença}/>
      <GridTD2F3 Obj_Pai_Props={Herença}/>
    </div>
  );
  /*HookCont2#*/

};

/*Hook#*/

/*#Exports*/

export { GridTD2 };

/*Exports#*/

