import './css/Div1.css'
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var DivDestaque = (props) => {
    return(
        <div className={props.DivDestaque.class} id={props.DivDestaque.id}>
            {props.DivDestaque.filhos.F1}
            {props.DivDestaque.filhos.F2}
        </div>
    )
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default DivDestaque;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
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