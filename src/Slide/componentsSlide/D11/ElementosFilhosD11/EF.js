import {TfiAngleDoubleLeft,TfiAngleDoubleRight} from 'react-icons/tfi'
import { Funções } from "../funções/funções";

var EF = {
    D11 : {
        TL : <div className='GoTriangleLeftC'>
                <i className='GoTriangleLeft' onClick={Funções.Mov.MoverE}><TfiAngleDoubleLeft/></i>
            </div>,
        TR : <div className='GoTriangleRightC'>
                <i className='GoTriangleRight' onClick={Funções.Mov.MoverD}><TfiAngleDoubleRight/></i>
            </div>             
    },
    D111 : {
        img111 :             
        <div  className="img111 imgd" id ='img111'  /*onMouseOver={Funções.events.over.img111.f1} onMouseOut={Funções.events.out.img111.f1}*/ alt=''>
            <img  className="img111 imgd imgdis" id ='img111'  /*onMouseOver={Funções.events.over.img111.f1} onMouseOut={Funções.events.out.img111.f1}*/ src="./images/fashion-model-in-fur.jpg" alt=''/>  
        </div>
    },
    D112 : {
        img112 : 
        <div  className="img112 imgd" id ='img112'  /*onMouseOver={Funções.events.over.img112.f1} onMouseOut={Funções.events.out.img112.f1}*/ alt=''>
            <img  className="img112 imgd imgdis" id ='img112'  /*onMouseOver={Funções.events.over.img112.f1} onMouseOut={Funções.events.out.img112.f1}*/ src="./images/man-in-white-and-light-tan-outfit.jpg" alt=''/>  
        </div>
    },
    D113 : {
        img113 : 
        <div  className="img113 imgd" id ='img113'  /*onMouseOver={Funções.events.over.img113.f1} onMouseOut={Funções.events.out.img113.f1}*/ alt=''>
            <img  className="img113 imgd imgdis" id ='img113'  /*onMouseOver={Funções.events.over.img113.f1} onMouseOut={Funções.events.out.img113.f1}*/ src="./images/young-woman-in-red.jpg" alt=''/>        
        </div>
    
    },
};

export {EF}