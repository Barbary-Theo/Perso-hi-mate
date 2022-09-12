git add .;
git commit -m "(automatic commit by a script) $1";
statut=$(git push);
echo "sus : $?";
