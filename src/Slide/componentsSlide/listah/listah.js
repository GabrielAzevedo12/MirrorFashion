import "./css/listah.css"
import {TfiAngleDoubleDown} from 'react-icons/tfi'
import {AiOutlineQuestion} from 'react-icons/ai'
import {BsPostcardHeartFill} from 'react-icons/bs'
import { BsHouseFill } from  "react-icons/bs";
import {MdFavorite} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import { useState } from "react"
import $ from "../../Funções/Query/$"
import { Link } from "react-router-dom";

var Listah = ({ListahPr}) => {
    //teste
    let href = "#";
    const [display,setDisplay] = useState(true),
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
        { display && 

            <ul className={ListahPr.class} id={ListahPr.id}>
                <Link to='/FormDbProd'>
                    <li className="Listahli">F</li>
                </Link>
                <Link to='/Produtos'>
                    <li className="Listahli">P</li>
                </Link>
                <Link to='/'>
                    <li className="Listahli"><BsHouseFill/></li>
                </Link>
                <li className="Listahli Listahli1"><a className="Listaha Listaha1"> Lista de Desejos <MdFavorite/> </a></li>
                <li className="Listahli Listahli2"><a className="Listaha Listaha2"> Cartão de Fidelidade <BsPostcardHeartFill/> </a></li>
                <li className="Listahli Listahli3"><a className="Listaha Listaha3"> Sobre </a></li>
                <li className="Listahli Listahli4"><a className="Listaha Listaha4"> Ajuda <AiOutlineQuestion/> </a></li>
                <li className="Listahli Listahli5"><a className="Listaha Listaha5"> Departamentos <TfiAngleDoubleDown/> </a></li>
                <li className="Listahli Listahli6" onClick={Listahli6oC}><a className="Listaha Listaha6"><GoSearch/> </a></li>
            </ul> }
        </>
    )
}
export default Listah