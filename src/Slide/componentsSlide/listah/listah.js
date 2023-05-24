import "./css/listah.css"
import {TfiAngleDoubleDown} from 'react-icons/tfi'
import {AiOutlineQuestion} from 'react-icons/ai'
import {BsPostcardHeartFill} from 'react-icons/bs'
import { BsHouseFill } from  "react-icons/bs";
import {MdFavorite} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
/*import {RxShadowInner} from 'react-icons/rx'*/
import $ from "../../Funções/Query/$"
import { Link } from "react-router-dom";

var Listah = () => {
    let href = "#";
    const [display] = [true],
           Listahli6oC = () => {
            console.log("start Listahli6oC");
            const Pesquisa = $("#Pesquisa");
            if( (Pesquisa.className === "PesquisaAI") || (Pesquisa.className === "") ) {
                Pesquisa.style.display = "flex"
                Pesquisa.classList.add("PesquisaA")
                Pesquisa.classList.remove("PesquisaAI")
    } else if ((Pesquisa.className === "PesquisaA" )) {
                Pesquisa.style.display = "none"
                Pesquisa.classList.add("PesquisaAI")
                Pesquisa.classList.remove("PesquisaA")
            }
           }
    return(
        <>
        {display && 
        <ul className="Listah">
            <li className="Listahli">
                <Link to='/FormDbProd' className="Listaha">
                    F
                </Link>
            </li>
            <li className="Listahli">
                <Link to='/Produtos' className="Listaha">P</Link>
            </li>
            <li className="Listahli">
                <Link to='/' className="Listaha"> Home <BsHouseFill/> </Link>
            </li>
            <li className="Listahli Listahli1"><a href = {href} className="Listaha Listaha1">Lista de Desejos <MdFavorite/></a></li>
            <li className="Listahli Listahli2"><a href = {href} className="Listaha Listaha2">Cartão da Loja <BsPostcardHeartFill/></a></li>
            <li className="Listahli Listahli3"><a href = {href} className="Listaha Listaha3">Sobre</a></li>
            <li className="Listahli Listahli4"><a href = {href} className="Listaha Listaha4">Ajuda <AiOutlineQuestion/></a></li>
            <li className="Listahli Listahli5"><a href = {href} className="Listaha Listaha5">Departamentos <TfiAngleDoubleDown/></a></li>
            <li className="Listahli Listahli6" onClick={Listahli6oC}><a href = {href} className="Listaha Listaha6"><GoSearch/></a></li>
        </ul>}
        </>
    )
}
export default Listah