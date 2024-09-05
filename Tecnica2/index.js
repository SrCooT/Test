
const inputString ="MelanciA"//"Exemplo de string com algumas letras A e a";

//  altera de miusculo para minusculo para poder contar 
const lowerCaseString = inputString.toLowerCase();

let count = 0;

for (let char of lowerCaseString) {
  if (char === 'a') {
    count++;
  }
}

if (count > 0) {
  console.log(`A letra 'a' ocorre ${count} vez(es) na string.`);
} else {
  console.log("A letra 'a' não foi encontrada na string.");
}
