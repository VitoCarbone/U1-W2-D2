/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let thor =  20
let topolino = 10
console.log ("Dati i due numeri " + thor + " e " + topolino)
if (thor>topolino){
    console.log ("Questa condizione è falsa")
    }    else if (thor<topolino){
        console.log("Questa condizione è vera");}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let thor = 5
let topolino = 5
console.log ("Dati i due numeri " + thor + " e " + topolino)
if (thor!== topolino){
    console.log ("Not Equal!")
    }    else if (thor===topolino){
        console.log("Equal");} 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" 
  in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let thor = 35
if ((thor%5)!==0 || -0 ){
    console.log ("NON è divisibile per 5")
    }    else {
        console.log("È divisibile per 5");}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*//* SCRIVI QUI LA TUA RISPOSTA */
let thor = 7
let topolino = 7
console.log ("Il numero "+ thor) || ("Il numero " + topolino)
if (thor==8 || topolino ==8){
    console.log ("Il numero fornito è uaguale a 8")
} else console.log ("Il numero fornito non è 8")

let thor = 7;
let topolino = 7;
if (thor + topolino == 8 && thor - topolino == 8) {
  console.log("Addizione o sottrazione è uguale a 8");
} else if (thor + topolino === 8 || thor - topolino === 8) {
  console.log("Addizione o sottrazione non è uguale a 8");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. 
  Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, 
  l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere 
  addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 45
let checkout 
if (totalShoppingCart >= 50){
    console.log("Totale con spedizioni gratis: "+ totalShoppingCart)
} else if (checkout=totalShoppingCart+10) {
console.log ("Il totale con spedizione a pagamento: "+ checkout)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. 
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50
const sconto = totalShoppingCart*20/100
let checkout =totalShoppingCart - (sconto)

if (checkout >=50 ) {
    console.log("Totale con spedizioni gratis: "+ checkout)
} else if (checkout=totalShoppingCart - (sconto) +10) {
console.log ("Il totale con spedizione a pagamento: "+ checkout)
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore,
  dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let qui = 3
let quo = 2
let qua = 1
if (qui>quo && qui>qua){
    console.log(qui,qua,quo)
}if (quo>qua){
    else console.log (qui, quo, qua)
}*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 1
if (typeof x === "string"){
  console.log ("Questa condizione è vera")

}else{
  console.log("Questa codizione è falsa");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nubm = 5
if (nubm%2==0){
    console.log("Il numero è pari")
} else if (nubm%2==1){
    console.log("Il numero è dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto
  in ogni circostanza. */

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10;
if (val <= 5) {
    console.log("Uguale o minore di 5");
} else if (val <= 10) {
    console.log("Meno di 10 o uguale");
} else 
  console.log("Uguale a 10 o maggiore");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
 .me = city: 'Toronto',
 /*Aggiunta questa stringa*/ 




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, 
  scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito,
  scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. 
  Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const mannaggia=[]
console.log(mannaggia);
mannaggia.push(1);
mannaggia.push(2);
mannaggia.push(3);
mannaggia.push(4);
mannaggia.push(5);
mannaggia.push(6);
mannaggia.push(7);
mannaggia.push(8);
mannaggia.push(9);
mannaggia.push(10);
console.log(mannaggia);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array,
   ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
mannaggia[mannaggia.leght-1] =100