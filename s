  #!bin/bash

  a=${1};
  arq=${2};
  so=${3};
  sn=${4};
  dir=${5};

 # for e in ${a[@]}
 #       do
 #       done
    cd "${dir}" ;
    sed -i -r "s/${so}/${sn}/g" "${arq}" ;
    cat -n "${arq}" ;
    egrep -H -n "sn" "${arq}" ;

    #a=${1};
    #arq=${2};
    #so=${3};
    #sa=${4};
    #dir=${5};        
    # . "/workspaces/MirrorFashion/s" "" "${arq}" "${so}" "${sn}" "${dir}"
