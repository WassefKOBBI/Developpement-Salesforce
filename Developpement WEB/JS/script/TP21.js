class Studiant {
  constructor(nom, prenom, age, genre, pays, option, cours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.cours = cours;
  }
  changenom(nouveaunom) {
    this.nom = nouveaunom;
  }
  changeprenom(nouveauprenom) {
    this.prenom = nouveauprenom;
  }
  changeoption(nouveauoption) {
    this.option = nouveauoption;
  }
}
