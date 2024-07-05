function imc_mp() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    let resultado;
    const imc = peso / (estatura * estatura);

    if (imc < 18.5) {
        resultado = "Bajo Peso";

    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Normal";

    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobre Peso";

    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidad I";

    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidad II";

    } else if (imc >= 40 && imc <= 49.9) {
        resultado = "Obesidad III";

    } else if (imc >= 40 && imc <= 49.9) {
        resultado = "Obesidad IV";
    };
    document.getElementById("resultado1").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> EL " + imc + " segun estatura: " + estatura + " y peso " + peso + " es de : " + resultado + "</div> ";

};


function p_ar() {
    const presion = parseFloat(document.getElementById("presion").value);
    let resultadoo;


    if (presion < 90) {
        resultadoo = "BAJA";

    } else if (presion <120) {
        resultadoo = "NORMAL";

    } else if (presion >= 120 && presion <= 139) {
        resultadoo = "PREHIPERTENSION";

    
    } else if (presion >= 140 && presion <= 159) {
        resultadoo = "ALTA: HIPERTENSION FASE I";

    } else if (presion >= 160 ) {
        resultadoo = "ALTA: HIPERTENSION FASE II";

    }
    
    document.getElementById("resultado2").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong> LA "+ "Clasificacion es: "  + resultadoo + "</div> ";
};


function edadd() {
    const edad = parseFloat(document.getElementById("edad").value);
    let resultadooo;


    if (edad <= 12 ) {
        resultadooo = "Eres un niño";

    } else if (edad >=12 && edad<=40) {
        resultadooo = "Eres un joven";

    } else if (edad >40 && edad <= 60) {
        resultadooo = "Eres un adulto";

    
    } else if (edad >60) {
        resultadooo = "Eres un adulto mayor";

   }
    
    document.getElementById("resultado3").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong>  "  + resultadooo + "</div> ";
};


function zapateria() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultadoooo;


    if ( cantidad < 10 ) {
        resultadoooo = cantidad*precio;

    } else if ( cantidad >=10 && cantidad<20) {
        resultadoooo = cantidad*precio * 0.10;

    } else if ( cantidad >20 && cantidad <30) {
        resultadoooo = cantidad*precio * 0.20;

    
    } else if ( cantidad>30) {
        resultadoooo = cantidad*precio * 0.40;

   }
    
    document.getElementById("resultado4").innerHTML = "<div class='alert alert-success' role='alert'> <strong>Respuesta:</strong>  El total de su compra es de :"  + resultadoooo + "</div> ";
};















