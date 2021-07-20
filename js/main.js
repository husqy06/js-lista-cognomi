// Creo il mio array
var i = 0;
var myList = [
    "Bianchi",
    "Neri",
    "Rossi",
    "Gialli",
    "Verdi",
]
console.log(myList);

// Chiedo all'utente il cognome

do {
    var cognomeUser = prompt("Inserisci il tuo cognome");
} while (cognomeUser == null || cognomeUser == 0)

console.log(cognomeUser);

// Inserisco il cognome nell' array

myList.push(cognomeUser);

//stampo l'array ordinato e la posizione

while (i < myList.length) {
    myList[i] = myList[i].charAt(0).toUpperCase() + myList[i].slice(1);       // per tutte le prime lettere maiuscole
    cognomeUser = cognomeUser.charAt(0).toUpperCase() + cognomeUser.slice(1);
    i++;
}

myList.sort();

console.log(myList);

for(i = 0; i < myList.length; i++) { 

    if(cognomeUser == myList[i]) {
        var position = i + 1;
    }
}

console.log("Sei alla posizione:",position);

// Stampo il posto dell'utente


// Parte bonus
  
for (i = 0; i < myList.length; i++) {
    var itemList = document.createElement ("li");
    itemList.innerHTML = myList[i];
    document.getElementById("list").appendChild(itemList);
}

document.getElementById("userPosition").innerHTML = position;


