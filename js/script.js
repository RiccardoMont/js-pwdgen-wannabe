


const nome = prompt(`Ciao! Come ti chiami?`);
const lastname = prompt(`Mi diresti anche il tuo cognome?`);
const color = prompt(`Ultima domanda: il tuo colore preferito?`);

console.log(nome + lastname + color + `23`);

let password = ``;
password = document.getElementById(`password`);
password.innerHTML = `${nome}${lastname}${color}23`; 