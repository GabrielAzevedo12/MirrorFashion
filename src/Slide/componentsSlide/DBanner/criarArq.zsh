#!/bin/zsh

db=(nameArq conteudo)

for e in ${db[@]}
    do
        read -p "Digite $e : " $e
    done    
    
    #cd caminho especificado por alias;
    mnq ;
    mkdir ${nameArq} ;
    cd ${nameArq} ;
    mkdir css && touch ${nameArq}.js ;
    
    echo "import './css/${nameArq}.css';" >> ${nameArq}.js ;
    echo " " >> ${nameArq}.js ;
    echo "const ${nameArq} () => {" >> ${nameArq}.js ;
    echo "return( " >> ${nameArq}.js ;
    echo "${conteudo}" >> ${nameArq}.js ;
    echo ")" >> ${nameArq}.js ;
    echo "}" >> ${nameArq}.js ;
    echo " " >> ${nameArq}.js ;
    echo "export { ${nameArq} }" >> ${nameArq}.js ;

    cd css ; 
    touch ${nameArq}.css ;
    cd "../" ;
    