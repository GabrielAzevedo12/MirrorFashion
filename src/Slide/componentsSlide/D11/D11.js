import "./css/D11.css"
import "./css/DT.css"
import {EF} from './ElementosFilhosD11/EF'

var Div11 = ({Div11Destaque}) => {
    return(    
    <div className={Div11Destaque.class} id={Div11Destaque.id}>
        {Div11Destaque.filhos.F1}
        {Div11Destaque.filhos.F2}
        {Div11Destaque.filhos.F3}
    </div>
    )
}

export default Div11;


//Rascunho 
//          |
//          |
//          v

//935
/*
const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)  
    const [Data,setData] = useState(null)
    useEffect(
        () => {
            fetch(window.location.href)
            .then(r =>{
                if(r.ok) {
                     return r.json()
                }
                throw r;
            })
            .then(
                d => {
                    setData(d)
                }
            )
            .catch(
                e => {
                    console.error('Error fetching data:', e)
                    setError(e)
                }
            )
            .finally(
                () => {
                    setLoading(false)
                }
            )
        }, []
    )
*/
/*
               if((w === 1000)||(w < 1000)) {
                    lh.style.display = 'none';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                    for(var i = 1; i<4 ; i++) {
                        var img = $(".img11" + i);
                        img.style.minHeight = (90/100)*h + "px";
                        img.style.minWidth = w + "px";
                }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------                
                    header.style.height = 80 + "px";
                    Dheader.style.height = 80 + "px";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                    ViewList.style.display = '';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------            
                    for(var k = 1; k<4 ; k++) {
                        var D2 = $(".D11" + k);
                        D2.style.minHeight = (100/100)*h + "px";
                        D2.style.minWidth = w + "px";
                      }
         }
*/
/*(
    () => {
        var set5 = (e) => {
        let I = e, [w,h] = [window.innerWidth,window.innerHeight], 
        from = [{ height: (95/100)*h+'px', width: (80/100)*w+'px'},{ height: h+'px', width: w+'px'}], 
        to = {duration: 500, iterations: 1};  
        I.animate(from,to);
        I.style.height = h+'px';
        I.style.width = w+'px'; 
        I.style.left = "0px"
    },
    set6 = (e) => {
        let I = e, [w,h] = [window.innerWidth,window.innerHeight];
        I.animate([{ height: h+'px', width: w+'px'},{ height: (95/100)*h+'px', width: (80/100)*w+'px'}], {duration: 500, iterations: 1});
        I.style.height = (95/100)*h+'px';
        I.style.width = (80/100)*w+'px'; 
        I.style.left = "0px"
    }
    for(var i=2;i<4;i++) {
        var e = $('.img11'+i)
        e.addEventListener('mouseover',set5(e))
        e.addEventListener('mouseout',set6(e))
    }
}
)()
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 set3 = () => {
                let I = $('.img111'), [w,h] = [window.innerWidth,window.innerHeight],
                [from,to] = [{ height: (95/100)*h+'px', width: (80/100)*w+'px'},{ height: (92.5/100)*h+'px', width: (85.5/100)*w+'px'}], [s,iteration] = [1000,1];  
                I.animate([from,to], {duration: s, iterations: iteration});
                I.style.height= (92.5/100)*h+'px'; 
                I.style.width= (85.5/100)*w+'px';
                I.style.left= "0px";         
            }
*/
/*
var AlteraState = () => {
    var [RefClickImgD21] = [$('.RefClickImgD21')]
    if(RefClickImgD21) {
        return true
    } else {
        return false
    }
}, t = {}, c ;
Object.defineProperty(t,'c', {value: null, configurable: true})
console.log(t.c)
*/