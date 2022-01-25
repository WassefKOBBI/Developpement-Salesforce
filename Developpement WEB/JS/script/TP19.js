function diagonale(matrice) {
  let diagonale1 = 0;
  let diagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    diagonale1 += parseInt(matrice[i][i]);

    diagonale2 += parseInt(matrice[i][matrice.length - (1 + i)]);
  }
  return diagonale1 + diagonale2;
}
