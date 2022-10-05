function checkData() {
    const fine = document.getElementById("fine").value;
    const tipo = document.getElementById("tipo").value;
    const checkDecimal = (fine - Math.floor(fine)) !== 0;
    const fineInt = parseInt(fine);
    if (Number.isInteger(fineInt) && fineInt >= 1 && !checkDecimal) {
        count(fineInt, tipo);
    } else {
        document.getElementById("result").innerHTML = "Inserisci un numero corretto"
    }
}

function count (fine, tipo) {
    document.getElementById("result").innerHTML = "";
    for (let i = 1; i <= fine; i++) {
        let result;
        if (i % 3 === 0) {
            if(tipo === "D") {
                result = "mar";
            } else {
                result = "dot";
            }
        } else if (i % 5 === 0) {
            if(tipo === "D") {
                result = "print";
            } else {
                result = "cross";
            }
        } else {
            result = i
        }
        document.getElementById("result").innerHTML += result + " ";
    }
}