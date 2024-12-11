let word; 

do {
    word = prompt("inserisci una parola che abbia almeno 5 caratteri");
    
} while(word.length <= 5);

console.log(word);