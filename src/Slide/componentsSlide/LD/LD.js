import { useState } from "react";
import "./css/LD.css"

var Ld = (props) => {
    //Definições
    // s = Atributo Style
    return (
        <div className='LHd'>
            <ul className='LHul'>
              <li className='LHli LHli1' onClick={props.ML1}><span className='LHs'></span></li>
              <li className='LHli LHli2' onClick={props.ML2}><span className='LHs'></span></li>
              <li className='LHli LHli3' onClick={props.ML3}><span className='LHs'></span></li>
              <li className='LHli LHli4' onClick={props.ML4}><span className='LHs'></span></li>
            </ul> 
        </div>
    )
};
export default Ld; 
