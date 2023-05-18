var CriaçãoObjProdutos = () => {
    var O = {}
for(var i=1;i<8;i++) {
    O['P'+i] = {src:undefined,style:undefined,nome:undefined,preço:undefined}
}
    return O
}

var P = CriaçãoObjProdutos(); 
P['P1']['style'] = 'background-image: linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.2) 40%,rgba(0,0,0,.2) 80%,rgba(0,0,0,.4)),url("C:\Users\Casas Bahia\Desktop\Gabriel\Estudo\Livros\Ciências Exatas\Ciência da Computação\Programação\Projetos\slide\public\images\destaque-home5.jpg"); background-repeat: no-repeat; background-size: cover;'

export {P}
