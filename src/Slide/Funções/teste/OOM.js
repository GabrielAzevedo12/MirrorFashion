//----------------------------------------------------------------------------------------------------------------------------------------------------
//Está função cria um objeto com um número de props especificadas pelo parâmetro leng
// e multiplica por 'm' 
//Mult = Objeto vazio (Tipo: Objeto)
//np = Nome padrão das props (Tipo: string)
//leng = tamanho do objeto (Tipo: Number)
//m = fator que multiplicara cada prop de Mult (Tipo: Number)
//----------------------------------------------------------------------------------------------------------------------------------------------------
var OOM = (np,leng,m) => {
    var np1 = np, leng1 = leng, Mult={}, m1 = m;
    for(var i = 1; i < leng1 + 1; i++) {
        Mult[np1+i] = i*m;
    }
    console.log('Foi criado o objeto Mult com '+ leng1 + ' elementos');
    console.log('E Multiplicamos cada um dos elementos de Mult por ' + m1)
    return Mult
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//teste
/*var CI1 = OOM('d',4,790),CI2 = OOM('d',4,-790)
, X = OOM('x',10,1)
console.log(CI1,CI2,X);*/
//----------------------------------------------------------------------------------------------------------------------------------------------------
export {OOM}
