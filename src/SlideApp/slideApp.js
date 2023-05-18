import Header from "../Slide/componentsSlide/Header/Header"
import Rodape from '../Slide/componentsSlide/Rodape/Rodape'
import {Outlet} from 'react-router-dom'
import Ld from "../Slide/componentsSlide/LD/LD"
import {f} from '../index.js'

var SlideApp = () => {
    return(
        <>  
            <Outlet/>
            <Header/>
            <Rodape/>
            <Ld ML1={f.MoverL1} ML2={f.MoverL2} ML3={f.MoverL3} ML4={f.MoverL4}/>
        </>
    )
}

export default SlideApp