const age = parseInt(prompt("age : "));

if (age >= 7 && age <=9) {
    alert("Poussin");
} else if (age >= 10 && age <= 11) {
  alert("Pupille");
} else if (age >= 12 && age <= 13) {
  alert("Benjamin");
} else if (age >= 14 && age <= 15) {
  alert("Minime");
} else if (age >= 16 && age <= 17) {
  alert("PCadet");
} else {
  alert("Vous n'etez pas dans la liste");
}
