/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio A");

let sum = 10 + 20
console.log("La somma tra 10 e 20 è: " + sum);


console.log("____________________________________________________________________");
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("Esercizio B");

let random = Math.floor(Math.random() * 20);
console.log("Numero casuale: " + random);

console.log("____________________________________________________________________");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Esercizio C");

let me = {
  name: "Simone",
  surname: "Di Giorgio",
  age: 25
};
console.log(me);

console.log("____________________________________________________________________");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Esercizio D");

delete me.age;
console.log(me);

console.log("____________________________________________________________________");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Esercizio E");

me.skills = ["HTML", "JS"];       /* Teoricamente solo JS è un linguaggio di programmazione, ma comunque... */
console.log(me)

console.log("____________________________________________________________________");
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio F");

me.skills.push("CSS");
console.log(me);

console.log("____________________________________________________________________");
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio G");

me.skills.pop()
console.log(me);

console.log("____________________________________________________________________");
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Esercizio 1");

function dice(x) {
  let ranNum = Math.floor(Math.random() * x) + 1
  return ranNum
};

dice();
console.log("Dado: " + dice(6));

console.log("____________________________________________________________________");
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Esercizio 2");

function whoIsBigger(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    if (x > y) {
      return x
    } else if (y > x) {
      return y
    } else {
      return "I due numeri sono uguali"
    }
  } else {
    return "Errore"
  }
};

whoIsBigger();
console.log("Il numero maggiore è: " + whoIsBigger(32, 43));

console.log("____________________________________________________________________");
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Esercizio 3");

function splitMe(str) {
  let string = str
  let stringSplit = string.split(" ")
  return stringSplit
};
console.log(splitMe("I love coding"));

console.log("____________________________________________________________________");
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Esercizio 4");

function deleteOne(str, bool) {
  let string = str
  if (typeof str === "string" && typeof bool === "boolean") {
    if (bool === true) {
      return string.slice(1)
    } else {
      return string.slice(0, -1)
    }
  } else {
    return "Errore"
  }
};

deleteOne();
console.log(deleteOne("Ciao", true));

console.log("____________________________________________________________________");
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("Esercizio 5");

function onlyLetters(str) {
  if (typeof str === "string") {
    return str.split(" ").filter(char => isNaN(char)).join(" ")
  }
};

onlyLetters();
console.log(onlyLetters("I have 4 dogs"));

console.log("____________________________________________________________________");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Esercizio 6");

function isThisAnEmail(str) {
  if (typeof str === "string") {
    if ((str.includes("@") && str.indexOf("@") >= 1) && (str.endsWith(".it") || str.endsWith(".com"))) {
      return true
    } else {
      return false
    }
  }
}

isThisAnEmail()
console.log(isThisAnEmail("pippo@gmail.com"))

console.log("____________________________________________________________________");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Esercizio 7");

function whatDayIsIt() {
  let weekDays = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  let now = new Date()
  let weekDay = now.getDay()

  return weekDays[weekDay - 1]
};

whatDayIsIt();
console.log("Oggi è " + whatDayIsIt());

console.log("____________________________________________________________________");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Esercizio 8");

function rollTheDices(numThrow, numDice) {
  let total = {
    sum: 0,
    values: []
  }
  for (let i = 0; i < numThrow; i++) {
    let diceVar = dice(numDice)
    total.values.push(diceVar)
    total.sum += diceVar
  }
  return total
};

rollTheDices();
console.log(rollTheDices(6, 6));


console.log("____________________________________________________________________");
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Esercizio 9");

function howManyDays(date) {
  let now = new Date()
  let days = now - date
  return Math.abs(Math.floor(days * (1.1574 * (10 ** -8))))
};

howManyDays();
console.log(howManyDays(new Date("2024/11/13")));

console.log("____________________________________________________________________");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Esercizio 10");

function isTodayMyBirthday(day, month) {
  let now = new Date()
  if (now.getDate() === day && now.getMonth() + 1 === month) {
    return true
  } else {
    return false
  }
};

isTodayMyBirthday();
console.log(isTodayMyBirthday(22, 8));

console.log("____________________________________________________________________");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Esercizio 11");

function deleteProp(obj, str) {
  delete obj[str]
};

deleteProp(me, "age");
console.log(me);

console.log("____________________________________________________________________");


//////////////////MOVIES
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("Esercizio 12");

function newestMovie(...args) {
  let newFilm = args[0];
  args.forEach(element => {
    if (element.Year > newFilm.Year) {
      newFilm = element
    }
  })
  return newFilm
};

newestMovie();
console.log(newestMovie(...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 13");

function countMovies(...args) {
  return args.length
};

countMovies();
console.log(countMovies(...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 14");

function onlyTheYears(...args) {
  let years = []
  for (let i = 0; i < args.length; i++) {
    years.push(args[i].Year)
  }
  return years
}

onlyTheYears();
console.log(onlyTheYears(...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 15");

function onlyInLastMillennium(...args) {
  let movies2000 = []
  for (let i = 0; i < args.length; i++) {
    if (args[i].Year <= 2000) {
      movies2000.push(args[i])
    }
  }
  return movies2000
};

onlyInLastMillennium();
console.log(onlyInLastMillennium(...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 16");

function sumAllTheYears(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += parseInt(args[i].Year)
  }
  return sum
};

sumAllTheYears();
console.log(sumAllTheYears(...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("Esercizio 17");

function searchByTitle(str) {
  let moviesTitle = []
  movies.forEach(element => {
    let title = element.Title
    if (title.includes(str)) {
      moviesTitle.push(element)
    }
  })
  return moviesTitle
};

searchByTitle();
console.log(searchByTitle("Avengers"));

console.log("____________________________________________________________________");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("Esercizio 18");

function searchAndDivide(str, ...args) {
  let obj = {
    match: [],
    unmatch: []
  }
  args.forEach(element => {
    let title = element.Title
    if (title.includes(str)) {
      obj.match.push(element)
    } else {
      obj.unmatch.push(element)
    }
  })
  return obj
};

searchAndDivide()
console.log(searchAndDivide("Avengers", ...movies));

console.log("____________________________________________________________________");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("Esercizio 19");

function removeIndex(num, ...args) {
  let newMovies = []
  for (let i = 0; i < args.length; i++) {
    if (num !== i) {
      newMovies.push(args[i])
    }
  }
  return newMovies
};

removeIndex();
console.log(movies);
console.log(removeIndex(3, ...movies));

console.log("____________________________________________________________________");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("Esercizio 20");

function selectId() {
  return document.querySelector("#container");
}

console.log(selectId());

console.log("____________________________________________________________________");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 21");

function selectTd() {
  return document.querySelectorAll("td");
}

console.log(selectTd());

console.log("____________________________________________________________________");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 21");

function textTd() {
  let td = document.querySelectorAll("td")
  td.forEach(element => {
    console.log(element.innerText)
  });
};

textTd();

console.log("____________________________________________________________________");
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("Esercizio 23");

function redBack() {
  let link = document.querySelectorAll("a")
  link.forEach(element => {
    element.style.backgroundColor = "red"
  });
};

redBack();

console.log("____________________________________________________________________");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("Esercizio 24");

function addLi() {
  let ul = document.querySelector("#myList")
  let li = document.createElement("li")
  li.innerText = "Prova lista"
  ul.appendChild(li)
};

addLi();
addLi();

console.log("____________________________________________________________________");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("Esercizio 25");

function removeLi() {
  let ul = document.querySelector("#myList")
  ul.innerText = ""
};

removeLi();

console.log("____________________________________________________________________");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("Esercizio 26");

function classTr() {
  let tr = document.querySelectorAll("tr")
  tr.forEach(element => {
    element.className = "test"
  })
};

classTr();

console.log("____________________________________________________________________");
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("Esercizio 27");

function halfTree(num) {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i))
  }
};

// Esempio di utilizzo
halfTree(3);

console.log("____________________________________________________________________");
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("Esercizio 28");

/* function tree(num) {
  for (let i = 1; i <= num; i++) {
    console.log((" ".repeat(i -)) + "*".repeat(i))
  }
};

tree(4) */

console.log("____________________________________________________________________");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Esercizio 29");

function isItPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    } else {
      return true
    }
  }
};

isItPrime();
console.log(isItPrime(13));
