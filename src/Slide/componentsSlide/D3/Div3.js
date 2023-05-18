import './css/Div3.css'

var Div3 = (props) => {
    let [w,h] = [window.innerWidth,window.innerHeight];
    let s = {
        solD3 : {
            height: (76/100)*h+'px',
            width:  w+'px',
        },
        sliD3 : {
            minHeight: (70/100)*h+'px',
            minWidth:  (30/100)*w+'px',
        },
        sTíD : {
            minHeight: (10/100)*h+'px',
            minWidth:  w+'px',
        },
        simgD3 : {
            minHeight: (65/100)*h+'px',
            minWidth:  (30/100)*w+'px',
            background: 'black'
        },
        sfigD3 : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center'
        },
        sfigcD3 : {
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'center'
        }        
        }
    return(
        <div className='Div3 Div' style={props.s}>
            <h1 className='TíD3' style={s.sTíD}>Mais vendidos</h1>
            <ol className='olD3' style={s.solD3}>    
                <li className='liD3 lD31' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
                <li className='liD3 lD32' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
                <li className='liD3 lD33' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
                <li className='liD3 lD34' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
                <li className='liD3 lD35' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
                <li className='liD3 lD36' style={s.sliD3}><figure className='figD3' style={s.sfigD3}><img className='imgD3' style={s.simgD3}/><figcaption className='figCD3' style={s.sfigcD3}>Nome e preço</figcaption></figure></li>
            </ol>    
        </div>
    )
}
export default Div3;