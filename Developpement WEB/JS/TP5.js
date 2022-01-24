const email1 = prompt("Email-ID : ");
const MDP1 = prompt("MDP-ID : ");
let i=0;
do{
    let email = prompt("Email : ");
    let MDP = prompt("MDP : ");

    if (email1 === email && MDP1 === MDP) {
      alert("Bienvenu dans votre espace client");
      break;
    } else {
      alert("Identifiants incorrect");
      i++;
    }
    
    alert(`Il vous reste ${5 - i} essaie`);
    if(i>=5) {
        alert(
          `Vous avez saisi des mauvais identifiants 5 fois, votre compte est bloqué`
        );
    }
}
while(i<5);


