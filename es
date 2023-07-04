#!/bin/bash

l=${1};
arq=${2};
ln=${3};

sed -i "${l} s/$(sed -n ${l}p "${arq}")/${ln}/" "${arq}"  ;