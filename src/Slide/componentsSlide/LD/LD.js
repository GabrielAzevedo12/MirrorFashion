import { useState } from "react";
import $ from "../../Funções/Query/$";

var Ld = (props) => {
    var [w,h] = [window.innerWidth,window.innerHeight];
    const [S,setS] = useState(
        {
        bottom: '0',
        left: (43.5/100)*w+'px'
      }
    )
    //Definições
    // s = Atributo Style
    return (
        <div className='LHd'>
            <ul className='LHul' style = {S}>
              <li className='LHli LHli1' onClick={props.ML1}><span className='LHs'></span></li>
              <li className='LHli LHli2' onClick={props.ML2}><span className='LHs'></span></li>
              <li className='LHli LHli3' onClick={props.ML3}><span className='LHs'></span></li>
              <li className='LHli LHli4' onClick={props.ML4}><span className='LHs'></span></li>
            </ul> 
        </div>
    )
};
export default Ld; 
