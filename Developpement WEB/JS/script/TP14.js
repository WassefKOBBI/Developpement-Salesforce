const tab=[];
let n=prompt("Donner la longeur du tableau")

for(i=0;i<n;i++){
    tab[i]=prompt("Donner un element")
}
console.log(tab)
var max = tab[0];
var min = tab[0];
for(i=0;i<=n;i++){
if(min>tab[i]){
min = tab[i];
}
if (max < tab[i]) {
  max = tab[i];
}
}
alert(`Tableau= ${tab}, Maximum= ${max}, Minimum= ${min}`);