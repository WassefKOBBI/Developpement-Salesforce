function rotation(table, nombre, sens) {
  let D = 0;
  let i=0;
do{

  if ((sens === 1)) {
    D = table.pop();
    table.unshift(D);
    i=i+1
  }else if ((sens === 2)) {
    D = table.shift();
    table.push(D);
    i=i+1
  }
  
}while(i<nombre)
return table;
}
