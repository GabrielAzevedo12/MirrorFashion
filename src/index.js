import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Slide from './Slide/slide';
import SlideApp from './SlideApp/slideApp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ErrorPag from './ErrorPag/ErrorPag'
import Produtos from './Slide/componentsSlide/Produtos/Produtos';
import EP from './Slide/componentsSlide/EP/EP';
import { f } from './funções/chamadas/chamadas';
import DFormPag from './Slide/componentsSlide/DFormPag/DFormPag';

const root = ReactDOM.createRoot(document.getElementById('root')); root.className = 'root' ;
var router = 
  <Router>
    <Routes>
      <Route element={<SlideApp/>}>
          <Route path='/' index element={<Slide/>}/>
          <Route path='/Produtos'  element={<Produtos/>}/>
          <Route path='/FormDbProd'  element={<EP/>}/>
          <Route path='/FormPag'  element={<DFormPag/>}/>
          <Route errorElement={<ErrorPag/>}/>
      </Route>
    </Routes>
  </Router>

root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals1(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals1

export {f}

//testeVim
/*
    Rascunho  : 

    <Slide />
    <Header/>
    <Ld ML1={f.MoverL1} ML2={f.MoverL2} ML3={f.MoverL3} ML4={f.MoverL4}/>
*/
/*
  f = {
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  als1 : (n) => {
      for (var i = 1;i<5;i++) {
         if(i === n) {
        var e = $('.LHli'+i); 
         e.style.color = 'black'; 
         e.style.listStyleType = 'disc'; 
         continue }
         var e1 = $('.LHli' + i); 
         e1.style.color = 'wheat'; 
         e1.style.listStyleType = 'disc'; 
       }
     },
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MoverL1 : () => {
    let x = $('#Div1'); scrDiv(x);
    f.als1(1)
    },
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                    
  MoverL2 : () => {
    let x = $('#Div2'); scrDiv(x);
    f.als1(2) 
    }, 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
  MoverL3 : () => {
    let x = $('#Div3'); scrDiv(x);
    f.als1(3) 
    }, 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
  MoverL4 : () => {
    let x = $('#Div4'); scrDiv(x);
    f.als1(4) 
    }, 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  g : () => {
    var o = {
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    als1 : (n) => {
        for (var i = 1;i<5;i++) {
           if(i === n) {
          var e = $('.LHli'+i); 
           e.style.color = 'black'; 
           e.style.listStyleType = 'disc'; 
           continue }
           var e1 = $('.LHli' + i); 
           e1.style.color = 'wheat'; 
           e1.style.listStyleType = 'disc'; 
         }
       },
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    MoverL1 : () => {
      let x = $('.Div1'); scrDiv(x);
      f.als1(1)
      },
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                    
    MoverL2 : () => {
      let x = $('.Div2'); scrDiv(x);
      f.als1(2) 
      }, 
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    MoverL3 : () => {
      let x = $('.Div3'); scrDiv(x);
      f.als1(3) 
      }, 
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    MoverL4 : () => {
      let x = $('.Div4'); scrDiv(x);
      f.als1(4) 
      }, 
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  }
    return o
  }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
},
*/
