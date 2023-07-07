#!/bin/bash
#laço for padrão

    f1 () {

        i=${1} ;
        
        cd "/project/home/gazevedo996/workspace" ;
        mkdir text ;
        
        cp "/project/home/gazevedo996/workspace/src/Slide/componentsSlide/r050723${i}.txt" "/project/home/gazevedo996/workspace/text"; 
        
    }
    
    l () {

    a="${1}";
    f1="${2}";

    for e in ${a[@]}
    do
        f1 "${e}" ;
    done

    }
    
    l "${1}" "${2}" ;

    
    