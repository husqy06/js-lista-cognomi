// Creo il mio array

var myList = [
    "Bianchi",
    "Neri",
    "Rossi",
    "Gialli",
    "Verdi",
]

console.log(myList);

// Chiedo all'utente il cognome
var cognomeUser;

do {
    cognomeUser = prompt("Inserisci il tuo cognome");
} while (cognomeUser == 0)

console.log(cognomeUser);

// Inserisco il cognome nell' array

myList.push(cognomeUser);

console.log(myList);

//stampo l'array ordinato

for(var i = 0; i < myList.length; i++) {
    myList.sort();
    console.log(myList[i]);
    if(cognomeUser == myList[i]) {
        var position = i + 1;
    }
}

console.log("sei alla posizione:",position);

// Stampo il posto dell'utente



// Stampo l'array sulla pagina
  
for (var i = 0; i < myList.length; i++) {
    var itemList = document.createElement ("li");
    itemList.innerHTML = myList[i];
    document.getElementById("list").appendChild(itemList);
}



