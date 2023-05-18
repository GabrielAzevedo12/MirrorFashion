var OOM = require('./OOM'), OOM2=require('./OOM2');

var F = {
    // Domínio da função
    X : OOM('x',10,1),
    //length of x
    lx: 10,
    // ContraDomínio da função
    Y: OOM2('y',10),
    //length of y
    ly: 10,
    // f(x) será descrita aqui -->
    y : (x,a) => {
        return x*a
    },
    // Criação de F(X) ((| Y (conjunto imagem)
    FX : (X,Y,y,ly) => {
            for (var i = 1 ; i < ly + 1 ; i++) {
               Y["y" + i] = y(X["x" + i],2)
            }  
        
    }
    
}
//teste
console.log(F.X)
F.FX(F.X,F.Y,F.y,F.ly);
console.log(F.Y);