import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Slide from './Slide/slide';
import SlideApp from './SlideApp/slideApp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ErrorPag from './ErrorPag/ErrorPag'
import Produtos from './Slide/componentsSlide/Produtos/Produtos';
import EP from './Slide/componentsSlide/EP/EP';
import { f } from './Funções/chamadas/chamadas';

const root = ReactDOM.createRoot(document.getElementById('root')); root.className = 'root' ;
const router = 
  <Router>
    <Routes>
      <Route element={<SlideApp/>}>
          <Route path='/' index element={<Slide/>}/>
          <Route path='/Produtos'  element={<Produtos/>}/>
          <Route path='/FormDbProd'  element={<EP/>}/>
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

/*
    Rascunho  : 

    <Slide />
    <Header/>
    <Ld ML1={f.MoverL1} ML2={f.MoverL2} ML3={f.MoverL3} ML4={f.MoverL4}/>
*/
