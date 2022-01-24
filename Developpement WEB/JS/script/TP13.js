const tab = [1, 2, 3, 4];
let sum = 0;
let moy=0

for (let i = 0; i < tab.length; i++) {
  sum += tab[i];
}
console.log(sum);
moy=sum/tab.length;
alert(`La somme des elelments du tableau est S=${sum}, La moyenne est M=${moy}`);
