#!/bin/bash
#laço for padrão

    f2 () {

        i=${1} ;
        
        cd "/project/home/gazevedo996/workspace" ;
        mkdir text ;
        
        cp -r "/project/home/gazevedo996/workspace/src/Slide/componentsSlide/r050723${i}.txt" "/project/home/gazevedo996/workspace/text"; 
        
    }
    
    lfor () {

    a="${1}";
    f1="${2}";

    for e in ${a[@]}
    do
        f1 "${e}" ;
    done

    }
    
    lfor "${1}" "${2}" ;

    
    