import { useEffect, useState } from 'react';
import { Fetch } from '../../Funções/teste/Fetch';
import './css/Div1.css'
import { Findindex } from "../../Funções/teste/FindIndex.js"
import Div11 from "../D11/D11";
import LD11 from "../LD11/LD11";
import { Div11D } from "../DivC1/objetos/Div11D"
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let DivDestaque_Copia = ({ DivDestaque_id }) => {

    const [LDsc1, setLDsc1] = useState([]), [ReactComp, setReactComp] = useState([]);
    
    console.log({ReactComp,LDsc1});

    useEffect(
        
        () => {

            let [url, method, content] = [
                "http://localhost:5000/ReactComponentes1/",
                "GET",
                "null",
              ];
              Fetch(url, method, content, setReactComp, null, null);

              let [url2, method2, content2] = [
                "http://localhost:5000/LDsc1/",
                "GET",
                "null",
              ];    
              Fetch(url2, method2, content2, setLDsc1, null, null);

        }

        ,[])

    let Div = {
            "DivD" : {
                "LDsc1": {LDsc1},
                "true": true,
                "Div11D": {Div11D}
            }
        }

    return(

        <div className={ReactComp[ 'class' ]} id={ReactComp[ 'id' ]}>
            <Div11 Div11Destaque={ Div[ ReactComp['name'] ][ ReactComp["filhos"]['Div11_Hook']['prop_Div11Destaque'] ] } />
            <LD11 ListaScrd={ Div[ ReactComp[ 'name' ] ][ ReactComp['filhos']['LD11']['prop_ListaScrd'] ] } />
        </div>

    )
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default DivDestaque_Copia;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*


            {

            Div[ReactComp.name][ReactComp.filhos.display] &&
                <>
                    <Div11 Div11Destaque={ Div[ReactComp.name][ReactComp.filhos.Div11_Hook.prop_Div11Destaque] } />
                    <LD11 ListaScrd={ Div[ReactComp.name][ReactComp.filhos.LD11.prop_ListaScrd] } />
                </>

            }

ReacComp[index_DivDestaque]
{ReactComp.filhos.F2}
{ReactComp.filhos.F1}

let 
    ex = <div className='eixox'></div>,
    ey = <div className='eixoy'></div>,
    xy = <div className='xy'></div>
*/
    /*(
        let S1 = S;
        let wd = window;
        let w = wd.innerWidth+'px',h = wd.innerHeight+'px';
        ()=>{
        let D1 = $('.Div1');
        S1([D1,'width',w,'height',h]);
    })()*/ 
