import "./css/LD11.css"
import { scrd } from "../../Funções/Mov/src" 
import $ from "../../Funções/Query/$"

var LD11 = ({ListaScrd}) => {
    return(
        <> 
            {
            ListaScrd.map( (ul) => (
                <ul class={ul.class} id={ul.id}>
                    {
                        ul.lis.map( (li1) => (
                            <li className={li1.class} id={li1.id} onClick={(e) => {scrd( $("#" + e.target.id), parseInt(li1.scrdm), li1.Sibling)}}></li>
                    ) )
                    }               
                </ul>
            ) )
            }
        </>
    )
}
export default LD11
/*
top: 583.86px;
left: 720px;
*/
/*
<ul className="LD11">
    <li className="LHli LD11li LD11li1" onClick={f.ml1}></li>
    <li className="LHli LD11li LD11li2" onClick={f.ml2}></li>
    <li className="LHli LD11li LD11li3" onClick={f.ml3}></li>
</ul>

onClick={f["ml"+li.click]}
*/