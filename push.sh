#!/bin/bash

git add .;
git commit -m "(automatic commit by a script) $1";
statut=$(git push);

if [ $? -eq 0 ]
then
  echo "Push successfully done on '$( git rev-parse --abbrev-ref HEAD)' branch";
else
  git push --set-upstream origin $( git rev-parse --abbrev-ref HEAD);
fi
