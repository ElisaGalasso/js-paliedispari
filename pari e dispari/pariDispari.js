//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt ("Scegli pari o dispari")
    console.log(userChoice);
    
let userNumber = Number (prompt ("Scegli un numero da 1 a 5")) 
    console.log(userNumber);
    

/*Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const randomNumber= Math.floor(Math.random() * 10) + 1;

//Sommiamo i due numeri

const sum = (randomNumber + userNumber)

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    if (sum % 2 === 0) {
        const risultato = "pari"
        
    } else {
        const risultato = "dispari"
        
    }

//Dichiariamo chi ha vinto.

if (risultato == userChoice) {
    console.log("Hai vinto!")

} else {
    console.log("Hai perso")
    
}*/


function pariDispari (userChoice, userNumber) {
    let risultato = ""
    let winOrLose = ""
    let randomNumber= Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        
    const sum = (randomNumber + userNumber)
        console.log(sum);
        

    if (sum % 2 === 0) {
        risultato = "pari"
        console.log(risultato);
        
        
    } else {
        risultato = "dispari"
        console.log(risultato);
        
        
    }


    if (risultato == userChoice) {
        winOrLose= "Hai vinto!"
    //console.log(winOrLose);
    

    }  else {
        winOrLose= "Hai perso"
    //console.log(winOrLose);
    
    }

    return winOrLose
}


const result = pariDispari (userChoice, userNumber)
console.log(result);