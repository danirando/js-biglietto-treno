const kmDaPercorrere = parseInt(prompt("Quanti km vuoi percorrere?"));

if (isNaN(kmDaPercorrere)) {
  alert("Inserire un numero per indicare i Km da percorrere");
} else {
  console.log(`"Km da percorrere: ${kmDaPercorrere}`);

  const anni = parseInt(prompt("Quanti anni hai?"));

  if (isNaN(anni)) {
    // Controllo se il mio valore è un numero
    // Se non è un numero
    alert("Inserire un numero per indicare gli anni");
  } else {
    // Se è un numero
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
  }
}
