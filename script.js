const random = Math.floor(Math.random() * 100) + 1; //se ejecuta cada que la página se reinicia, por ende, cada vez que se refresque la pagina se cambiará nuevamente el número
let i = 1;

function reiniciarnum(){ //una vez que el usuario haya adivinado el número y el botón se haya desplegado y tocado entonces se reiniciará nuevamente el juego
    const random = Math.floor(Math.random() * 100) + 1;
    let i = 1;
    document.getElementById("reestablecerjuego").style.display = "none"; //oculta el botón para reiniciar el juego
    return;
}

function azar(event){ //función que permite comparar el número ingresado por el usuario con el número elegido aleatoriamente
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p1 = document.getElementById("paragraph1");
    const numAl = parseFloat(document.getElementById("numAl").value);
    if(isNaN(numAl) || numAl < 0 || numAl > 100){ //válida que el "número" ingresado por el usuario no sea menor a 0, ni mayor a 100 ni mucho menos que sea una cadena de texto (isNaN significa 'is Not a Number')
        p1.innerHTML = "Ingrese un valor numérico válido";
        return;
    }
    if(numAl > random){
        i++;
        p1.innerHTML = "El número ingresado excede al que estás adivinando";
        return;
    }
    if(numAl < random){
        i++;
        p1.innerHTML = "El número ingresado es más chico que el que estás adivinado";
        return;
    }
    p1.innerHTML = `¡Felicidades, has adivinado el número en un total de ${i} intentos :D!`;
    document.getElementById("reestablecerjuego").style.display = "block"; //muestra el botón una vez que se haya adivinado el número
    return;
}

//todas estas funciones empiezan a presentar errores cuando son números muy grandes xd

function decimalabinario(event){ //función que convierte un número en base 10 a base 2
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p2_1 = document.getElementById("paragraph2.1");
    const dec = parseInt(document.getElementById("decabin").value);
    if(isNaN(dec)){ //válida que lo que ingrese el usuario sea un número y no una cadena
        p2_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){ //válida que el número sea mayor o igual que 0
        p2_1.innerHTML = "Ingrese un número positivo";
        return;
    }
    let bin = 0, base = 1, residuo, num = dec;
    while(num > 0){ //no hace falta explicar que hace
        residuo = num % 2; 
        bin += residuo * base; 
        base *= 10; 
        num = Math.trunc(num / 2); 
    }
    p2_1.innerHTML = `El número ${dec} en Binario es ${bin}`;
    return;
}

function binarioadecimal(event){ //función que convierte un número base 2 a base 10
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p2_2 = document.getElementById("paragraph2.2");
    const bin = parseInt(document.getElementById("binadec").value);
    if(isNaN(bin)){ //válida que lo que ingrese el usuario no sea una cadena de texto
        p2_2.innerHTML = "Ingrese un número válido";
        return;
    }
    if(bin < 0){
        p2_2.innerHTML = "Ingrese un número positivo";
        return;
    }
    const ok = esBin(bin); //llama a la función que valida si un número es base 2
    if(!ok){ //si el número no es base 2 despliega el siguiente mensaje
        p2_2.innerHTML = `El número ${bin} no es un número Binario, por favor ingrese un número en Binario válido`;
        return;
    }
    let dec = 0;
    const j = String(bin).length - 1;
    for(var i = 0; i <  String(bin).length; i++){ //busca en Youtube
        let val = parseInt(String(bin).substring(i, i + 1));
        dec += val * Math.pow(2, j - i);
    }
    p2_2.innerHTML = `El número ${bin} en Decimal es ${dec}`;
    return;
}

function esBin(bin){ //función que permite determinar si un número es binario o no
    for(var i = 0; i < String(bin).length; i++){
        let val = parseInt(String(bin).substring(i, i + 1));
        if(val < 0 || val > 1){ //si esta condición se cumple entonces el número no es base 2
            return false;
        }
    }
    return true; //de la contrario sí es un número base 2
}

function decimalaoctal(event){ //función que convierte un número base 10 a base 8
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p3_1 = document.getElementById("paragraph3.1");
    const dec = parseInt(document.getElementById("decaoct").value);
    if(isNaN(dec)){ //verifica que lo que ingresó el usuario no sea un texto
        p3_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){ //verifica que el número sea positivo
        p3_1.innerHTML = "Ingrese un número positivo";
        return;
    }
    let num = dec, base = 1, oct = 0, residuo;
    while(num > 0){ //ni en pedo, búscalo por ti mismo
        residuo = num % 8;
        oct += residuo * base;
        base *= 10;
        num = Math.trunc(num / 8);
    }
    p3_1.innerHTML = `El número ${dec} en Octal es ${oct}`;
    return;
}

function octaladecimal(event){ //función que convierte un número base 8 a base 10
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p3_2 = document.getElementById("paragraph3.2");
    const oct = parseInt(document.getElementById("octadec").value);
    if(isNaN(oct)){ //válida que lo que ingresa el usuario no sea una cadena de texto
        p3_2.innerHTML = "Ingrese un número válido";
        return;
    }
    if(oct < 0){ //valida que el número sea positivo
        p3_2.innerHTML = "Ingrese un número positivo";
        return;
    }
    const ok = esOct(oct); //llama a la función que permite validar si un número es base 8
    if(!ok){ //si el número no es base 8 despliega el siguiente mensaje
        p3_2. innerHTML = `El número ${oct} no es un número Octal, por favor ingrese un número en Octal válido`;
        return;
    }
    let dec = 0;
    const j = String(oct).length - 1;
    for(var i = 0; i < String(oct).length; i++){ //no seas huevón
        let val = parseInt(String(oct).substring(i, i + 1));
        dec += val * Math.pow(8, j - i);
    }
    p3_2.innerHTML = `El número ${oct} en Decimal es ${dec}`;
    return;
}

function esOct(oct){ //función que valida si un número es base 8
    for(var i = 0; i < String(oct).length; i++){
        let val = parseInt(String(oct).substring(i, i + 1));
        if(val < 0 || val > 7){ //si esto se cumple entonces el número no es base 8
            return false;
        }
    }
    return true; //de locontrario si es un número base 8
}

function decimalahexadecimal(event){ //función que convierte un número base 10 a base 16
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p4_1 = document.getElementById("paragraph4.1");
    const dec = parseInt(document.getElementById("decahex").value);
    if(isNaN(dec)){ //valida que el usuario no ingrese texto
        p4_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){ //valida que el número sea positivo
        p4_1.innerHTML = "Ingrese un número positivo";
        return;
    }
    let hex = "", num = dec;
    while(num > 0){ //no me voy a matar explicando esto
        let val = num % 16;
        switch(val){
            case 10:
                hex = "A" + hex;
                break;
            case 11:
                hex = "B" + hex;
                break;
            case 12:
                hex = "C" + hex;
                break;
            case 13:
                hex = "D" + hex;
                break;
            case 14:
                hex = "E" + hex;
                break;
            case 15:
                hex = "F" + hex;
                break;
            default:
                hex = String(val) + hex;
                break;
        }
        num = Math.trunc(num / 16);
    }
    p4_1.innerHTML = `El número ${dec} en Hexadecimal es ${hex}`;
    return;
}

function hexadecimaladecimal(event){ //función que convierte un número base 16 a base 10
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p4_2 = document.getElementById("paragraph4.2");
    const hex = document.getElementById("hexadec").value.toUpperCase();
    if(hex === ""){ //válida que el usuario ingrese algo
        p4_2.innerHTML = "Ingrese un número válido";
        return;
    }
    const ok = esHex(hex); //llama a la función que valida si un número es base 16
    if(!ok){ //si el número no es base 16 despliega el siguiente mensaje
        p4_2.innerHTML = `El número ${hex} no es un número Hexadecimal, por favor ingrese un número Hexadecimal válido`;
        return;
    }
    let dec = 0;
    const j = hex.length - 1;
    for(var i = 0; i < hex.length; i++){ //ni en tus sueños
        let val = hex.substring(i, i + 1);
        switch(val){
            case "A":
                dec += 10 * Math.pow(16, j - i);
                break;
            case "B":
                dec += 11 * Math.pow(16, j - i);
                break;
            case "C":
                dec += 12 * Math.pow(16, j - i);
                break;
            case "D":
                dec += 13 * Math.pow(16, j - i);
                break;
            case "E":
                dec += 14 * Math.pow(16, j - i);
                break;
            case "F":
                dec += 15 * Math.pow(16, j - i);
                break;
            default:
                dec += parseInt(val) * Math.pow(16, j - i);
                break;
        }
    }
    p4_2.innerHTML = `El número ${hex} en Decimal es ${dec}`;
    return;
}

function esHex(hex){ //función que valida si un número es base 16
    let sum = 0;
    for(var i = 0; i < hex.length; i++){
        let val = hex.substring(i, i + 1);
        if(!(parseInt(val) >= 0 && parseInt(val) <= 9 || val === "A" || val === "B"|| val === "C" || val === "D" || val === "E"|| val === "F")){ //si la condición se cumple entonces el número no es base 16
            return false;
        }
    }
    return true; //de lo contrario sí lo es
}

document.getElementById("Opciones").addEventListener("change", () => { //acción que oculta los formularios activos y depliega únicamente el que seleccionó el usuario
    ocultarFormularios(); //llama a la función que oculta formularios
    const opciones = document.getElementById("Opciones").value;
    mostrarFormulario(opciones); //lama a la función que muestra el formulario seleccionado
    return;
})

function mostrarFormulario(opciones){ //función que muestra el formulario
    const num = opciones.substring(opciones.length - 1, opciones.length);
    const form = `formularioOpcion${num}`;
    document.getElementById(form).style.display = "block";
    return;
}

function ocultarFormularios(){//función que oculta formularios
    const opci = document.getElementById("Opciones");
    const numOpciones = opci.options.length;
    for(let i = 1; i <= numOpciones; i++){
        const forms = `formularioOpcion${i}`; 
        document.getElementById(forms).style.display = "none";
    }
    return;
}

const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function(event){
    azar(event);
})

const submit2_1 = document.getElementById("submit2.1");
submit2_1.addEventListener("click", function(event){
    decimalabinario(event);
})

const submit2_2 = document.getElementById("submit2.2");
submit2_2.addEventListener("click", function(event){
    binarioadecimal(event);
})

const submit3_1 = document.getElementById("submit3.1");
submit3_1.addEventListener("click", function(event){
    decimalaoctal(event);
})

const submit3_2 = document.getElementById("submit3.2");
submit3_2.addEventListener("click", function(event){
    octaladecimal(event);
})

const submit4_1 = document.getElementById("submit4.1");
submit4_1.addEventListener("click", function(event){
    decimalahexadecimal(event);
})

const submit4_2 = document.getElementById("submit4.2");
submit4_2.addEventListener("click", function(event){
    hexadecimaladecimal(event);
})