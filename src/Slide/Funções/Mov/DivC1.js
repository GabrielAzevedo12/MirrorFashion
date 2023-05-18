import Div1 from './D1/Div1.js'
import Div2 from './D2/Div2.js'
import Div3 from './D3/Div3.js'


var DivC1 = () => {
    return(
        <div className='DivC1'>
        <Div1 TL={TL} TR={TR}/>
        <Div2 TL={TL} TR={TR}/>
        <Div3 TL={TL} TR={TR}/>
      </div>
    )
}

export default DivC1;