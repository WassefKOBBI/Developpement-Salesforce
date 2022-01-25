function rotation(table, nombre, sens) {
  let D = 0;
  let i=0;
do{

  if (sens === "droite") {
    D = table.pop();
    table.unshift(D);
    i=i+1
  }else if ((sens === "gauche")) {
    D = table.shift();
    table.push(D);
    i=i+1
  }
  
}while(i<nombre)
return table;
}
