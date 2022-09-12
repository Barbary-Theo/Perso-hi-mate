#!/bin/bash

git add .;
git commit -m "(automatic commit by a script) $1";
statut=$(git push);

if [ $? -eq 0 ]
then
  echo "sus : $?";
fi
