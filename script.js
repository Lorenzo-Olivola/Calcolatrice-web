function inserisciNumero(numero) {
    const display = document.getElementById("display");
    display.value += numero;
}

function inserisciOperatore(operatore) {
    const display = document.getElementById("display");
    const ultimoCarattere = display.value.slice(-1);
    if (ultimoCarattere === '+' || ultimoCarattere === '-' || ultimoCarattere === '*' || ultimoCarattere === '/') {
        display.value = display.value.slice(0, -1);
    }
    display.value += operatore;
}

function cancella() {
    const display = document.getElementById("display");
    display.value = "";
}

function calcola() {
    const display = document.getElementById("display");
    let risultato;
    if (display.value.includes('+') || display.value.includes('-') || display.value.includes('*') || display.value.includes('/')) {
        try {
            risultato = eval(display.value);
            display.value = risultato;
        }  catch (error) {
            display.value = "Errore";
        }
    }
}