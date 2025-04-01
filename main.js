const kmDaPercorrere = parseInt(prompt("Quanti km vuoi percorrere?"));

console.log(`"Km da percorrere: ${kmDaPercorrere}`);

const anni = parseInt(prompt("Quanti anni hai?"));

console.log(`"Anni: " ${anni}`);

let prezzoBiglietto = kmDaPercorrere * 0.21;

const sconto20 = (prezzoBiglietto / 100) * 20;

if (anni < 18) {
  prezzoBiglietto = prezzoBiglietto - sconto20;
}

const sconto40 = (prezzoBiglietto / 100) * 40;

if (anni > 65) {
  prezzoBiglietto = prezzoBiglietto - sconto40;
}

console.log(`"Prezzo del biglietto: € ${prezzoBiglietto}`);

alert(`Il tuo biglietto costa € ${prezzoBiglietto}`);
