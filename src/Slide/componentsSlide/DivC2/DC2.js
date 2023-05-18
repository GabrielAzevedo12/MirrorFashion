import Div4 from '../D4/Div4.js'
import Div5 from '../D5/Div5.js'
import Div6 from '../D6/Div6.js'
import {GoTriangleUp,GoTriangleDown} from 'react-icons/go'

var DivC2 = (props) => {
  var TT = <div className='GoTriangleDownC'>
                  <i className='GoTriangleDown' onClick={props.MB}><GoTriangleDown/></i>
            </div>,
       TB = <div className='GoTriangleRUpC'>
                 <i className='GoTriangleUp' onClick={props.MC}><GoTriangleUp/></i>
            </div>                          
    return(
        <div className='DivC2'>    
            <Div4/>
            <Div5/>
            <Div6/>
        </div>
    )
}

export default DivC2;