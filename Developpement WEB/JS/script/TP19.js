function diagonale(matrice){
  let diagonale1 = 0;
  let diagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice.length; j++) {
      
        diagonale1 += parseInt(matrice[i][i]);
      
      if (j === matrice.length - (1 + i)) {
        diagonale2 += parseInt(matrice[i][j]);
      }
    }
  }
  return diagonale1, diagonale2;
  
}