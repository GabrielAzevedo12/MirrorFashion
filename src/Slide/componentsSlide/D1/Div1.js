import './css/Div1.css'
import $ from '../../Funções/Query/$';
import S from '../../Funções/Styles/S';
import Div11 from '../D11/D11';
import LD11 from '../LD11/LD11';
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var Div1 = (props) => {
    let 
    ex = <div className='eixox'></div>,
    ey = <div className='eixoy'></div>,
    xy = <div className='xy'></div>
    return(
        <div className='Div1 Div' style={props.s}>
            {props.TL}{props.TR}{ex}{ey}{xy}
            <Div11/>
            <LD11/>
        </div>
    )
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default Div1;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    /*(
        let S1 = S;
        let wd = window;
        let w = wd.innerWidth+'px',h = wd.innerHeight+'px';
        ()=>{
        let D1 = $('.Div1');
        S1([D1,'width',w,'height',h]);
    })()*/ 