let guessNumber = prompt("entrez un nombre");
while (isNaN(guessNumber) || guessNumber < 10 || guessNumber > 20) {
  if (isNaN(guessNumber)) {
    alert("input non valide : veuillez rentrer un nombre (exemple : 50) ");
    guessNumber = prompt("entrez un nombre");
  } else if (guessNumber < 10) {
    alert(`${guessNumber} : trop petit, essaye encore`);
    guessNumber = prompt("entrez un nombre");
  } else {
    alert(`${guessNumber} : trop grand`);
    guessNumber = prompt("entrez un nombre");
  }
}
if (guessNumber >= 10 && guessNumber <= 20) {
  alert(`réussi`);
}
