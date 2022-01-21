// Utilisation

let name = "Christian Lisangola";
var voyelle= " ";
var consonne= " ";
name= name.toLowerCase();


for (let i = 0; i < name.length; i++) {
  if (
    name[i] == "a" ||
    name[i] == "e" ||
    name[i] == "i" ||
    name[i] == "o" ||
    name[i] == "u" ||
    name[i] == "y"
  ) {
    voyelle = voyelle + name[i];
  } else {
    consonne = consonne + name[i];
  }
  console.log(consonne);
  console.log(voyelle);
}
