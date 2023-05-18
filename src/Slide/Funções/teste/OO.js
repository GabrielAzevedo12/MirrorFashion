var OO = (Mult,np,leng) => {
    var np1 = np, leng1 = leng;
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = i
        console.log('Foi criado o objeto Mult com '+ leng1 + ' elementos')
    }
}
module.exports = OO;