let numeri=[];
let output="";

function Cliccato() {
    document.getElementById("output").innerHTML = "";
    let num = document.getElementById("numero").value;
    num = parseInt(num);

    if(isNaN(num)) {
        output="Errore, non è stato inserito un numero, riaggiornare la pagina"
        document.getElementById("output").innerHTML = output;
    }
    else{
        numeri.push(num);
        console.log(numeri);
    }
}

function Calcola() {

let somma;
let prodotto;

somma = SommaPari();
prodotto = ProdottoDispari();

output = "La somma dei numeri pari è: " + somma + "<br>" + "Il prodotto dei numeri dispari è: " + prodotto;
document.getElementById("output").innerHTML = output;
}

function SommaPari() {
    let s=0;
    for (let index of numeri) {
        if (index % 2 == 0) {
            s+=index;
        }
    }
    return s;
}

function ProdottoDispari() {
    let p=1;

    for (let index in numeri) {
        if (index % 2 == 0) {
            p*=numeri[index];
        }
    }
    return p;
}
