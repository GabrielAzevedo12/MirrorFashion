//----------------------------------------------------------------------------------------------------------------------------------------------------
var OOM2 = (np,leng) => {
    var np1 = np, leng1 = leng, Mult={};
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = undefined;
    }
    console.log('Foi criado o objeto Mult com '+ leng1 + ' elementos');
    return Mult
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//teste
var Y = OOM2("y",10);
console.log(Y);
//----------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = OOM2;