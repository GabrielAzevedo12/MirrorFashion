let [w,h] = [window.innerWidth,window.innerHeight];
let  s = {
    solD2 : {
        height: (76/100)*h+'px',
        width:  w+'px',
    },
    sliD2 : {
        minHeight: (85/100)*h+'px',
        minWidth:  (30/100)*w+'px',
    },
    sTíD : {
        minHeight: (10/100)*h+'px',
        minWidth:  w+'px',
    },
    simgD2 : {
        minHeight: (85/100)*h+'px',
        minWidth:  (30/100)*w+'px',
        
    },
    sfigD2 : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center'
    },
    sfigcD2 : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    
    },
    sExibiçãoP4 : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '10px',
        minHeight: (85/100)*h+'px',
        minWidth:  (85/100)*w+'px',
    },
    sExibiçãoP4img : {
        height: (85/100)*h+'px',
        width:  (50/100)*w+'px',
    }         
    }

export {s}