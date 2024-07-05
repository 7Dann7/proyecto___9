document.getElementById('Form_pesoIdeal').addEventListener('submit', function (event) {
    event.preventDefault();
    const sexo = document.getElementById("sexoo").value;
    const edad = document.getElementById("edadd").value;
    const peso = document.getElementById("pesoo").value;
    const estatura = document.getElementById("estaturaa").value;

  
    let imc = peso * (10000) / (estatura * estatura)
    let pesoIdeal;
    let pesoAperder;

    if (sexo == "Hombre") {
        if (imc < 18.5) {
            pesoIdeal = (estatura - 100) - (estatura - 150 / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso}<br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal} Kg</span>  ${imc}<br>
            Imc es: <span class="badge text-bg-primary">Bajo peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
              Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura}<br>
            Peso: ${peso}<br> 
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Normal</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
                
            </div>`
        } else if (imc >= 25 && imc <= 29.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
           Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Sobre peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`

        } else if (imc >= 30 && imc <= 34.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
           Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura}<br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Obesidad I</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`

        } else if (imc >= 35 && imc <= 39.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
           Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Obesidad II</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`

        } else if (imc >= 40 && imc <= 49.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Obesidad III</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`

        } else if (imc >= 50) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}Kg</span> <br>
            Imc es: <span class="badge text-bg-primary">Obesidad IV</span> <br>
            Deberias perder:${pesoAperder} 
        </div>`
        } else {
            document.getElementById("resultadoo").innerHTML =
                "<div class='alert alert-light' role='alert'>Error</div>"
        }
    } else if (sexo === "Mujer") {
        if (imc < 18.5) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Imc es: <span class="badge text-bg-primary">Bajo peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad: ${edad} <br>
            Sexo: ${sexo} <br>
            Estatura: ${estatura} <br>
            Peso: ${peso} <br>
            Peso ideal :<span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Imc es: <span class="badge text-bg-primary">Bajo peso</span> <br>
            Deberias perder: <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
                
            </div>`
        } else if (imc >= 25 && imc <= 29.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Edad e ${edad} <br>
            Sexo ${sexo} <br>
            Estatura  ${estatura} <br>
            Peso  ${peso} <br>
            Peso ideal: <span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Sobre Peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 30 && imc <= 34.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            edad ${edad} <br>
            Eres un ${sexo} <br>
            Tu estatura es de ${estatura} <br>
            Tu peso atual es de ${peso} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad I</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 35 && imc <= 39.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultado").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Tu edad es ${edad} <br>
            Eres un ${sexo} <br>
            Tu estatura es de ${estatura} <br>
            Tu peso atual es de ${peso} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad II</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 40 && imc <= 49.9) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Tu edad es ${edad} <br>
            Eres un ${sexo} <br>
            Tu estatura es de ${estatura} <br>
            Tu peso atual es de ${peso} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad III</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 50) {
            pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
            pesoAperder = peso - pesoIdeal;
            document.getElementById("resultadoo").innerHTML =
                `<div class='alert alert-light' role='alert'>
            Tu edad es ${edad} <br>
            Eres un ${sexo} <br>
            Tu estatura es de ${estatura} <br>
            Tu peso atual es de ${peso} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad IV</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoAperder} Kg</span> <br>
        </div>`
        } else {
            document.getElementById("resultadoo").innerHTML = "<div class='alert alert-light' role='alert'>Error</div>"
        }
    }
});