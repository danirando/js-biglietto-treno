const kmDaPercorrere = prompt("Quanti km vuoi percorrere?");

if (isNaN(kmDaPercorrere)) {
  alert("Inserire un numero per indicare i Km da percorrere");
}

console.log(`"Km da percorrere: ${kmDaPercorrere}`);

const anni = prompt("Quanti anni hai?");

if (isNaN(anni)) {
  alert("Inserire un numero per indicare gli anni");
}

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

console.log(`"Prezzo del biglietto: € ${prezzoBiglietto.toFixed(2)}`);

alert(`Il tuo biglietto costa € ${prezzoBiglietto.toFixed(2)}`);
