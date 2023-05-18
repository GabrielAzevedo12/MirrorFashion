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
    },
    Style = {
      Dheader : {
        width: (95/100)*Dimensões.w    
      },
      header : {
        minHeight: '9vh',
        height: '9vh'        
      },
      ViewList : {
        color: 'wheat',
      },
      VscSearch : {
        display : 'none'
      },
      Listah :  {
        minHeight: '9vh'        
      },
      Lheader :  {
        minHeight: '6vh',
        height: '6vh',
        display: "flex"        
      },
      lh :  {
        minHeight: '8vh',
        height: '8vh',     
      }     
    };
 return (
  <div className="Dheader">
    <header className="header" style={Style.header}>
      <div className="Lheader" style={Style.Lheader}><img className="Lheader" style={Style.Lheader} src="./images/logo-rodape.png"/></div>
      <div className="Listahd" style={Style.lh}><Listah stylelh = {Style.lh}/></div>
      <div className="HiOutlineViewList" style={Style.ViewList}><HiOutlineViewList/></div>
    </header>
  </div>  
 )
}
export default Header;

//<div className="VscSearch" style={Style.VscSearch}><VscSearch/></div>