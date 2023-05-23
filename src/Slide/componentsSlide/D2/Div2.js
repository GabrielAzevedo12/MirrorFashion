import './css/Div2.css';

var DivLista = (props) => { 
            /*return*/
    return(
        <div className={props.DivPrincipal.class} id={props.DivPrincipal.id}>
            <h1 className={props.DivPrincipal.filhos.f1.class}>{props.DivPrincipal.filhos.f1.filhos.textContent}</h1>
            <div className={props.DivPrincipal.filhos.f2.class}>    
                {props.DivPrincipal.filhos.f2.filhos.n1.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n2.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n3.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n4.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n5.corpoJSX}
                {props.DivPrincipal.filhos.f2.filhos.n6.corpoJSX}
            </div>
        </div>        
    )
}

export default DivLista;

//Rascunho
/*

                <div className='liD2 lD21'> {FilhosFigD2.img1} <p className='figCD2' onClick ={EimgD21}>Nome e preço</p></div>              
                <div className='liD2 lD22'> {FilhosFigD2.img2} <p className='figCD2' onClick ={EimgD22}>Nome e preço</p></div>
                <div className='liD2 lD23'> {FilhosFigD2.img3} <p className='figCD2' onClick ={EimgD23}>Nome e preço</p></div>
                <div className='liD2 lD24'> {FilhosFigD2.img4} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD25'> {FilhosFigD2.img5} <p className='figCD2' >Nome e preço</p></div>
                <div className='liD2 lD26'> {FilhosFigD2.img6} <p className='figCD2' >Nome e preço</p></div>
*/
/*
background-image: linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.2) 40%,rgba(0,0,0,.2) 80%,rgba(0,0,0,.4)),url(http://localhost:3000/static/media/P1.1d01969….jpg);
*/
/*
  const [datau,setDatau] = useState([]);
    console.log(datau)
    useEffect(() => {
        let [url,method,content] = ["http://localhost:5000/Produtos/","GET","null"]; 
        Fetch(url,method,content,setDatau)
    },[])
*/
/*
let TFU = async () => {
        const rsp = await fetch("http://localhost:5000/Produtos", {
            method : 'GET',
            Headers : {
                'Contend-type' : 'application/json'
            }
        })
        const data = await rsp.json()
        console.log("TFU foi executada")
    }
*/
/*
 {
    "id": "P2",
    "src": "p1.jpg",
    "class": "null",
    "style": "null"
  }
*/
/*fetch("http://localhost:5000/Produtos", {
    method : 'GET',
    Headers : {
        'Contend-type' : 'application/json'
    }
})
.then((rsp) => {
    rsp.json()
})
.then((data) => {
    setDatau(data)
    console.log(datau)
})
.catch((err) => console.log(err))*/

/*data.map((inf) => {
        let e = $('.ProdutosImg');
        e.src = './images/' + inf.src
    })*/
       /*for(var i=1;i < 7;i++) {
                    var e = $('.imgD2'+i)
                    if(i === 1) {
                        continue
                    }
                    e.animate(
                        [
                            {
                                width:;
                            },
                            {
                                width:;
                            }
                        ],
                        {duration:, iterations:}
                    )
                }*/
/*
  let TFU = async () => {
        const rsp = await fetch("http://localhost:5000/Produtos", {
            method : 'GET',
            Headers : {
                'Contend-type' : 'application/json'
            }
        })
        const data = await rsp.json()
        setDatau(data)
        console.log(datau)
        console.log("TFU foi executada")
    }
    useEffect(() => {
        TFU()
    },[])
*/