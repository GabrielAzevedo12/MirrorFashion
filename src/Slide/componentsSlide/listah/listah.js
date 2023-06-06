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
           },
            ExListahText = (e) => {
		console.log("ExListahText foi esta sendo executada")   
		console.log(e.target)   
		/*   
		console.log( '.' + e.target.id );   
		*/
		const ElExi = e.target.previousSibling   ;

		const AnáliseClass = (DataBase,Dado,ExecuteAção1,ExecuteAção2) => {
			for ( let el of DataBase ) {
				if (el === Dado || el === "") {
					ExecuteAção1()
					console.log("Existe o dado")
				} else {
				 	ExecuteAção2()
					console.log("Não exite o dado")
				}
			}
		} 
		// Ref AddorRmC
		//typeA , Nclass = S = {x/x is string}
		//typeA (( {"remove","add"}
		//E = ElementoHtml		    
		const AddorRmC = (E,typeA,Nclass) => {
				E["classList"][typeA](Nclass)
		}

                   AnáliseClass(ElExi.classList,"Listah_text",
			   () => {
				  AddorRmC(ElExi,"add","Listah_textA1")
				  AddorRmC(ElExi,"remove","Listah_text")
			   },
			   () => {
			   	 AddorRmC(ElExi,"add","Listah_text")
			   	 AddorRmC(ElExi,"remove","Listah_textA1")
			   }
		   )
	    }

/*		    
	 if( (ElExi.className === "Listah_text " + ElExi.id) || (ElExi.className === "" ) ) {
                ElExi.classList.add("Listah_textA1")
                ElExi.classList.remove("Listah_text")
    } else {
                ElExi.classList.add("Listah_text")
                ElExi.classList.remove("Listah_textA2")
            }

		console.log("ExListahText terminou")   
	};
*/

    return(
        <>
        {
	display && 
        <ul className="Listah">
            <li className="Listahli">
                <Link to='/FormDbProd' className="Listaha">
                    <div className ="Listah_text">F</div>
                </Link>
            </li>
            <li className="Listahli">
                <Link to='/Produtos' className="Listaha">
			 <div className ="Listah_text">P</div>
		</Link>
            </li>
            <li className="Listahli Listahli1">
                <Link to='/' className="Listaha Listaha1"> 
			  <div id = "Listah_text1"  className ="Listah_text   Listah_text1">Home</div> 
			 <div id = "Listah_icon1" onClick={ExListahText}   className ="Listah_icon   Lista_icon1"><BsHouseFill/></div> 
		</Link>
            </li>
            <li className="Listahli Listahli2">
		<a href = {href} className="Listaha Listaha2"> 
			 <div id = "Listah_text2"  className ="Listah_text   Listah_text2"> Lista de Desejos </div> 
			 <div id = "Listah_icon2"    className ="Listah_icon   Lista_icon2"><MdFavorite/></div>
		</a>
	</li>
            <li className="Listahli Listahli3">
		<a href = {href} className="Listaha Listaha3"> 
			 <div id = "Listah_text3"  className ="Listah_text   Listah_text3"> Cartão da Loja </div> 
			 <div id = "Listah_icon3"    className ="Listah_icon   Lista_icon3"><BsPostcardHeartFill/></div>
		</a>
	</li>
            <li className="Listahli Listahli4">
		<a href = {href} className="Listaha Listaha4">
			 <div id = "Listah_text4"  className ="Listah_text   Listah_text4"> Sobre </div>
			 <div id = "Listah_icon4"    className ="Listah_icon   Lista_icon4"></div>
		</a>
	</li>
            <li className="Listahli Listahli5">
		<a href = {href} className="Listaha Listaha5">
			 <div id = "Listah_text5"  className ="Listah_text   Lista_text5">Ajuda</div> 
			 <div id = "Listah_icon5"    className ="Listah_icon   Lista_icon5"><AiOutlineQuestion/></div>
		</a>
	</li>
            <li className="Listahli Listahli6">
		<a href = {href} className="Listaha Listaha6">
			 <div id = "Listah_text6"  className ="Listah_text   Lista_text6">Departamentos</div>
			 <div id = "Listah_icon6"    className ="Listah_icon   Lista_icon6"><TfiAngleDoubleDown/></div>
		</a>
	</li>
            <li className="Listahli Listahli7" onClick={Listahli6oC}>
		<a href = {href} className="Listaha Listaha7">
			 <div id = "Listah_text7"  className ="Listah_text   Lista_text7">Departamentos</div>
			 <div id = "Listah_icon7"    className ="Listah_icon   Lista_icon7"><GoSearch/></div>
		</a>
	</li>
        </ul>
	}
        </>
    )
}

export default Listah
