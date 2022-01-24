let longeur = prompt("Donner la longeur des 2 listes");
const liste1 = [];
const liste2 = [];
const liste3=[];
var i=0;
for (i = 0; i < longeur; i++) {
  liste1[i] = prompt("Donner un element de la liste 1");
}

for (i = 0; i < longeur; i++) {
  liste2[i] = prompt("Donner un element de la liste 2");
}
for (i = 0; i < longeur; i++) {
  liste3[i] = parseInt(liste1[i])+parseInt(liste2[i]);
}
alert(liste3)