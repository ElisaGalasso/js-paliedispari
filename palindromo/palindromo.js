//Palidroma
//Chiedere all’utente di inserire una parola

const parolaUtente = prompt ('Inserici una parola')
const palindroma = ""


//Creare una funzione per capire se la parola inserita è palindroma

function wordPali (parolaUtente) {
    let parolaInvertita = ""
for (let i = parolaUtente.length -1 ; i >= 0; i --) {
    const carattere = parolaUtente[i];
    parolaInvertita += carattere
}
return parolaInvertita
}

const parolaInvertita = wordPali(parolaUtente);
console.log(parolaInvertita);


//verificare se la parola è palindroma

if (parolaUtente == parolaInvertita ) {
    console.log("Parola palindroma")

}else {
    console.log("Parola non palindroma")
    
}



