import "./css/listah.css"
import {TfiAngleDoubleDown} from 'react-icons/tfi'
import {AiOutlineQuestion} from 'react-icons/ai'
import {BsPostcardHeartFill} from 'react-icons/bs'
import { BsHouseFill } from  "react-icons/bs";
import {MdFavorite} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import {RxShadowInner} from 'react-icons/rx'
import { useState } from "react"
import $ from "../../Funções/Query/$"
import { Link } from "react-router-dom";

var Listah = ({stylelh}) => {
    let href = "#";
    const [largperm,setlargperm] = useState(true);
    return(
        <>
        {largperm && 
        <ul className="Listah" style = {stylelh}>
            <Link to='/FormDbProd'>
                <li className="Listahli" href = {href}><a className="Listaha"><span classname='spanli'></span>F</a></li>
            </Link>
            <Link to='/Produtos'>
                <li className="Listahli" href = {href}><a className="Listaha"><span classname='spanli'></span>P</a></li>
            </Link>
            <Link to='/'>
                <li className="Listahli" href = {href}><a className="Listaha"><span classname='spanli'></span><BsHouseFill/></a></li>
            </Link>
            <li className="Listahli Listahli1" href = {href}><a className="Listaha Listaha1"><span classname='spanli'></span>Lista de Desejos <MdFavorite/></a></li>
            <li className="Listahli Listahli2" href = {href}><a className="Listaha Listaha2"><span classname='spanli'></span>Cartão de Fidelidade <BsPostcardHeartFill/></a></li>
            <li className="Listahli Listahli3" href = {href}><a className="Listaha Listaha3"><span classname='spanli'></span>Sobre</a></li>
            <li className="Listahli Listahli4" href = {href}><a className="Listaha Listaha4"><span classname='spanli'></span>Ajuda <AiOutlineQuestion/></a></li>
            <li className="Listahli Listahli5" href = {href}><a className="Listaha Listaha5"><span classname='spanli'></span>Departamentos <TfiAngleDoubleDown/></a></li>
            <li className="Listahli Listahli6" href = {href}><a className="Listaha Listaha6"><span classname='spanli'></span><GoSearch/></a></li>
        </ul>}
        </>
    )
}
export default Listah