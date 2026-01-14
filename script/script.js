function Cliccato() {
    let output="";
    let numeri=[];
    let num = document.getElementById("numero").value;

    if(isNaN(num)) {
        output="Errore, non è stato inserito un numero, riaggiornare la pagina"
        document.getElementById("output").innerHTML = output;
        document.getElementById("bottone").disabled = true;
    }
    else{

        numeri.push(num);

    }
}

function Calcola() {

let somma;
let prodotto;

somma = SommaPari(numeri);
prodotto = ProdottoDispari(numeri);

}

function SommaPari(numeri) {
    for (let index of numeri)
}

function ProdottoDispari(numeri) {

}