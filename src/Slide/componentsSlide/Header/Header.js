import "./css/Header.css";
import Listah from "../listah/listah";
import {HiOutlineViewList} from "react-icons/hi";
import {VscSearch} from 'react-icons/vsc'
import React, { useState } from "react";

var Header = () => {
    var
    Funções = {
      prc : (n,c) => {
      let [n1,c1] = [n,c];
      return (n1/100)*c1
    }
   },
    Dimensões = {
        h : window.innerHeight,
        w : window.innerWidth
    };
 return (
  <div className="Dheader" >
    <div className="PesquisaD">
      <form className="FormPesquisa">
        <input id="Pesquisa" name="Pesquisa" type="search" placeHolder=" Busque Produtos " style={{display: "none"}}/>
      </form>
    </div>
    <div>
    <header className="header">
      <div className="Lheader"><img className="Lheader" src="./images/logo-rodape.png"/></div>
      <div className="Listahd"><Listah/></div>
      <div className="HiOutlineViewList"><HiOutlineViewList/></div>
    </header>
    </div>
  </div>  
 )
}
export default Header;

//<div className="VscSearch" style={Style.VscSearch}><VscSearch/></div>
