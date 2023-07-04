#!/bin/bash

l=${1};
arq=${2};
c=${3};

sed -i "${l} s/$(sed -n "${l}p" "${arq}")/$(sed -n "${l}p" "${arq}")${c}/" "${arq}"  ;