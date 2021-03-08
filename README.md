RUTA TRABAJO GIT
1.- Abrimos VS 
2.- Abro rama y entro en ella: git checkout -b (nombre) DEV
	2.1.- Solo crear rama: git branch 
  2.2.- Para cambiar de rama a main: git checkout main
3.- Trabajar y pushear con frecuencia haciendo commits muy descriptivos 
	3.1.- git add -A, git commit -m “xxxxx”, git push origin (nombre de rama (sprint-DEV) NUNCA A MAIN, solo se hará un push a MAIN cuando haya que entregar a cliente
4.- Antes de unir mi rama a DEV SIEMPRE hacer un pull request (es mucho más fácil solucionar conflicto en un pull request que es un push ya subido a DEV) 
5.- Hacemos pull request, si se aceptan los cambios se fusiona directamente a DEV remoto. SIEMPRE borrar la rama mergeada en el repo y en local: git branch -d 
    (nombre de la rama) 
6.- git checkout DEV
7.- git pull origin DEV 
    merge upstream/dev
8.- git merge sprint X (desde la rama DEV)
    solucionar conflictos
9.- git add -A
10.- git commit -m "solución conflictos # que se correspondan con el sprint X"
11.- git push origin DEV


MARIOLA
pull request a Lucia si acepta, Mariola se pasa a DEV 
git checkout DEV 
git fetch upstream 
git merge upstream/DEV 
git push origin DEV 
git checkout a rama (client o server) 
git merge DEV
