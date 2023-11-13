/*Descrizione:
Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.1976 € al km)
va applicato uno sconto del 17.65% per i minorenni
va applicato uno sconto del 53.27% per gli over 65.

MILESTONE 1:
 Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.*/

// ? inserire dati del passeggero

// *! PRIMA PROVA SU COME LAVORARE SU UNA FUNZIONE




const buttonElement = document.querySelector("button");




buttonElement.addEventListener("click", 
function () {

  //* valore dei kilometri inseriti nel tag html INPUT con id km(kilomteri)
  
  const kmUser = parseFloat(document.getElementById("km").value);
  console.log(kmUser);

  //* valore dell'età inseriti nel tag html INPUT con id age(età)

  const ageUser = parseInt(document.getElementById("age").value);
  console.log(ageUser);

  //* calcolo del prezzo in base ai km (0.1976 euro al km)

  const calcPriceKm = kmUser * 0.1976;
  console.log(`'calcolo prezzo moltiplicato per 0.1976 euro: ' ${calcPriceKm}`);

  //* una volta avuto il prezzo totale possiamo fare le varie operazioni con IF

                                 // ! prima condizione calcolare lo sconto del 17,65% se sono minorenni

  if (ageUser < 18) {
    const discount = (calcPriceKm * 17.65) / 100;
    const priceTotale = (calcPriceKm - discount).toFixed(2);
    console.log(`'il prezzo con lo sconto del 17.65% è: ' ${priceTotale}`);

                                // ! seconda condizione calcolare lo sconto del 53.27% se sono minorenni
  } else if (ageUser >= 65) {
    const discount = (calcPriceKm * 53.27) / 100;
    const priceTotale = (calcPriceKm - discount).toFixed(2);
    console.log(`'il prezzo con lo sconto del 53.27% è: ' ${priceTotale}`);

                               //!terza condizione se l'età non rientra nello sconto
  } else {
    console.log(`'il prezzo senza sconto è:' ${calcPriceKm}`);
  }
});
