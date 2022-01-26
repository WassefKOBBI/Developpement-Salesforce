function calculDiagonale(matrice) {
  let sommeDiagonale1 = 0;
  let sommeDiagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommeDiagonale1 += matrice[i][i];
    sommeDiagonale2 = sommeDiagonale2 + matrice[i][matrice.length - i - 1];
  }
  return sommeDiagonale1 + sommeDiagonale2;
}

const calculDiagonale = function (matrice) {
  let sommeDiagonale1 = 0;
  let sommeDiagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommeDiagonale1 += matrice[i][i];
    sommeDiagonale2 = sommeDiagonale2 + matrice[i][matrice.length - i - 1];
  }
  return sommeDiagonale1 + sommeDiagonale2;
};

const calculDiagonale = (matrice) => {
  let sommeDiagonale1 = 0;
  let sommeDiagonale2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommeDiagonale1 += matrice[i][i];
    sommeDiagonale2 = sommeDiagonale2 + matrice[i][matrice.length - i - 1];
  }
  return sommeDiagonale1 + sommeDiagonale2;
};

const matrice = [
  [2, 6, 7],
  [8, 9, 3],
  [4, 1, 5],
];

calculDiagonale(matrice);

const tableau = [1, 2, 3, 4];

function rotateArray(array, n, direction) {
  const rotatedArr = [...array];
}

rotateArray(tableau, 2, "right");
