var Findindex = (a,c,p,t) => {
    var updateIndex = 0, nIndex = 0;
    
        if ( t === "Object" ) {
        for( x of a ) {

            if (x[p] === c) {
                console.log("OA1")
                console.log(nIndex)
                return nIndex
                /*console.log(updateIndex)
                return updateIndex*/
            } else {
                /*updateIndex = updateIndex + nIndex;*/
                nIndex = nIndex + 1;
            }

        }
        }  
        if ( t === 'Number' ) {
           for(x of a) {    

            if (x === c) {
                console.log("NA1")
                return nIndex
                /*console.log(updateIndex)
                return updateIndex*/
                /*if(updateIndex === 0) {
                    console.log("NA1")
                    console.log(updateIndex)
                    return updateIndex
                } else {
                    console.log(updateIndex + 1)
                    return updateIndex + 1
                }*/
            } else {
                console.log("NA2")
                nIndex = nIndex + 1;
                /*updateIndex = updateIndex + nIndex;*/
            }

           }
        }    

}


var teste = () => {
    /*var I = Findindex([1,2,3,4],3,null,"Number");
    console.log(I)*/
    fetch("http://localhost:5000/Produtos")
    .then((rsp) => rsp.json())
    .then((data) => Findindex(data,"P5","id","Object"))
    .catch((err) => console.log(err))
}
teste()



