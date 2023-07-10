#!bin/bash
#laço for padrão

#Ação Particular

f2 () {

        i=${1} ;

        cp -r "/project/home/gazevedo996/workspace/src/Slide/componentsSlide/r050723${i}.txt" "/project/home/gazevedo996/workspace/text";

    }


#Executara uma ação em uma determinada quantidade de vezes

    lfor () {

    a="${1}";
    f1="${2}";

    for e in ${a[@]}
    do
        f2 "${e}" ;
    done

    }

    lfor "${1}" "${2}" ;
