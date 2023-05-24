// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Nome : $
// Esta função faz buscas de elementos html e retorna os mesmos para serem armazenados em variáveis.
var $ = (NomeDaIndentificão) => { /*O argumento é obrigatoriamento uma string*/  
          var ElementoHtml = document.querySelector(NomeDaIndentificão); // BOM.
         return ElementoHtml; 
}
export { $ } 
