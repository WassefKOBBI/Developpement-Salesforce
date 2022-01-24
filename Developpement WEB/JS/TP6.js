let number = prompt("Entrez un nombre entre 1 et 3");
while (isNaN(number) || number < 1 || number > 3) {
  number = prompt("tentez encore un nombre entre 2 et 3");
}
alert("vous avez trouvez la bonne réponse")