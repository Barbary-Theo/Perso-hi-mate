git add .;
statut=$(git commit -m "(automatic commit by a script) $1");
echo "sus : $statut";
git push;
