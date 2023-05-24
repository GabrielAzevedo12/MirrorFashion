import "./css/Header.css";
import Listah from "../listah/listah";
import {HiOutlineViewList} from "react-icons/hi";
import {VscSearch} from 'react-icons/vsc'
import React, { useState } from "react";
import { Funções } from "./Funções/Funções.js"
import { DheaderPr } from "./DheaderPr/DheaderPr";

var Header = () => {
 return (
  <div className={DheaderPr.class} id={DheaderPr.id}>
    <div className={DheaderPr.filhos.f1.class} id={DheaderPr.filhos.f1.id}>
      <form className={DheaderPr.filhos.f1.filhos.n1.class} id={DheaderPr.filhos.f1.filhos.n1.id}>
        <input id={DheaderPr.filhos.f1.filhos.n1.filhos.b1.id} name={DheaderPr.filhos.f1.filhos.n1.filhos.b1.name} type={DheaderPr.filhos.f1.filhos.n1.filhos.b1.type} placeHolder={DheaderPr.filhos.f1.filhos.n1.filhos.b1.placeHolder} style={DheaderPr.filhos.f1.filhos.n1.filhos.b1.style}/>
      </form>
    </div>
    <div>
    <header className={DheaderPr.filhos.f2.filhos.n1.class} id={DheaderPr.filhos.f2.filhos.n1.id}>
      <div className={DheaderPr.filhos.f2.filhos.n1.filhos.b1.class} id={DheaderPr.filhos.f2.filhos.n1.filhos.b1.id}><img className={DheaderPr.filhos.f2.filhos.n1.filhos.b1.class} src={DheaderPr.filhos.f2.filhos.n1.filhos.b1.filhos.t1.src}/></div>
      <div className={DheaderPr.filhos.f2.filhos.n1.filhos.b2.class} id={DheaderPr.filhos.f2.filhos.n1.filhos.b2.id}><Listah ListahPr={DheaderPr.filhos.f2.filhos.n1.filhos.b2.filhos.t1}/></div>
      <div className={DheaderPr.filhos.f2.filhos.n1.filhos.b3.class} id={DheaderPr.filhos.f2.filhos.n1.filhos.b3.id}><HiOutlineViewList/></div>
    </header>
    </div>
  </div>  
 )
}
export default Header;

//<div className="VscSearch" style={Style.VscSearch}><VscSearch/></div>