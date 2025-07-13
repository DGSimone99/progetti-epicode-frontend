/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log("Esercizio 1")

for (const element of pets) {
    console.log(element)
}

console.log("__________________________________________________________________")
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2")

pets.sort()
console.log(pets)

console.log("__________________________________________________________________")
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3")

pets.reverse()

for (const element of pets) {
    console.log(element)
}

console.log("__________________________________________________________________")
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4")

pets.push(pets.shift())
console.log(pets)

console.log("__________________________________________________________________")
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("Esercizio 5")

let numberPlate = 5000

cars.forEach(element => {
    element.licensePlate = "AB" + numberPlate ++
});

console.log(cars)

console.log("__________________________________________________________________")
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6")

cars.push({
    brand: 'Audi',
    model: 'R8',
    color: 'white',
    trims: ['RWD', 'performance'],
})

console.log(cars)

cars.forEach(element => {
    element.trims.pop()
});

console.log(cars)

console.log("__________________________________________________________________")
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7")

const justTrims = []

cars.forEach(element => {
    justTrims.push(element.trims[0])
});

console.log(justTrims)

console.log("__________________________________________________________________")
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8")

cars.forEach(element => {
    if (element.color[0] === "b") {
        console.log("Fizz")
    } else {
        console.log("Buzz")
    }
});

console.log("__________________________________________________________________")
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9")

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while(numericArray[i] !== 32) {
    console.log(numericArray[i])
    i++
}
    console.log(numericArray[i])

console.log("__________________________________________________________________")
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Esercizio 10")

const charactersArray = ['g', 'n', 'u', 'z', 'd']

let charNumbers = []

charactersArray.forEach(element => {
    let number;
    switch (element) {
        case "a":
          number = 1;
          break;
        case "b":
          number = 2;
          break;
        case "c":
          number = 3;
          break;
        case "d":
          number = 4;
          break;
        case "e":
          number = 5;
          break;
        case "f":
          number = 6;
          break;
        case "g":
          number = 7;
          break;
        case "h":
          number = 8;
          break;
        case "i":
          number = 9;
          break;
        case "j": 
          number = 10;
          break;
        case "k": 
          number = 11;
          break;
        case "l": 
          number = 12;
          break;
        case "m": 
          number = 13;
          break;
        case "n": 
          number = 14;
          break;
        case "o": 
          number = 15;
          break;
        case "p": 
          number = 16;
          break;
        case "q": 
          number = 17;
          break;
        case "r": 
          number = 18;
          break;
        case "s": 
          number = 19;
          break;
        case "t": 
          number = 20;
          break;
        case "u": 
          number = 21;
          break;
        case "v": 
          number = 22;
          break;
        case "w": 
          number = 23;
          break;
        case "x": 
          number = 24;
          break;
        case "y": 
          number = 25;
          break;
        case "z": 
          number = 26;
          break;
    }
    charNumbers.push(number)}
)

console.log(charNumbers)

