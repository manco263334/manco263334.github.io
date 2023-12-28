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


function decimalabinario(event){ //función que permite convertir un número en base 10 a base 2
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p2_1 = document.getElementById("paragraph2.1");
    const dec = parseInt(document.getElementById("decabin").value);
    if(isNaN(dec)){ //válida que lo que ingrese el usuario sea un número y no una cadena
        p2_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){ //válida que el número sea mayor o igual que 0
        p2_1.innerHTML = "Ingrese un número positivo";
    }
    let bin = 0, base = 1, residuo, num = dec;
    while(num > 0){
        residuo = num % 2; //el residuo solamente puede ser 0 ó 1
        bin += residuo * base; //bin almacena lo que ya tenía y le suma el resultado de multiplicar el residuo (0 ó 1) por la base
        base *= 10; //la base aumenta su valor por 10
        num = Math.trunc(num / 2); //num guarda la parte entera de dividir entre sí mismo por 2
    }
    p2_1.innerHTML = `El número ${dec} en Binario es ${bin}`;
    return;
}

function binarioadecimal(event){ //función que permite convertir un número base 2 a base 10
    event.preventDefault(); //previene el comportamiento por defecto del formulario
    const p2_2 = document.getElementById("paragraph2.2");
    const bin = parseInt(document.getElementById("binadec").value);
    if(isNaN(bin)){ //válida que lo que ingrese el usuario no sea una cadena de texto
        p2_2.innerHTML = "Ingrese un número válido";
        return;
    }
    const ok = esBin(bin); //llama a la función que permite validar si un número es binario o no
    if(!ok){ //si el número no es binario despliega el siguiente mensaje
        p2_2.innerHTML = `El número ${bin} no es un número Binario, por favor ingrese un número en Binario válido`;
        return;
    }
    let dec = 0;
    const j = bin.toString().length - 1;
    for(var i = 0; i < bin.toString().length; i++){
        dec += parseInt(bin.toString().substring(i, i + 1)) * Math.pow(2, j - i);
    }
    p2_2.innerHTML = `El número ${bin} en Decimal es ${dec}`;
    return;
}

function esBin(bin){ //función que permite si un número es binario o no
    for(var i = 0; i < bin.toString().length; i++){
        if(parseInt(bin.toString().substring(i, i + 1)) !== 0 && parseInt(bin.toString().substring(i, i + 1)) !== 1 || bin.toString().substring(i, i + 1) === "-"){
            return false; //si al menos uno de los valores ingresados por el usuario es distinto de 1 y de 0 entonces el número no es binario
        }
    }
    return true; //de la contrario sí es un número binario
}

function decimalaoctal(event){
    event.preventDefault();
    const p3_1 = document.getElementById("paragraph3.1");
    const dec = parseInt(document.getElementById("decaoct").value);
    if(isNaN(dec)){
        p3_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){
        p3_1.innerHTML = "Ingrese un número positivo";
        return;
    }
    let num = dec, base = 1, oct = 0, residuo;
    while(num > 0){
        residuo = num % 8;
        oct += residuo * base;
        base *= 10;
        num = Math.trunc(num / 8);
    }
    p3_1.innerHTML = `El número ${dec} en Octal es ${oct}`;
    return;
}

function octaladecimal(event){
    event.preventDefault();
    const p3_2 = document.getElementById("paragraph3.2");
    const oct = parseInt(document.getElementById("octadec").value);
    if(isNaN(oct)){
        p3_2.innerHTML = "Ingrese un número válido";
        return;
    }
    const ok = esOct(oct);
    if(!ok){
        p3_2. innerHTML = `El número ${oct} no es un número Octal, por favor ingrese un número en Octal válido`;
        return;
    }
    let dec = 0;
    const j = oct.toString().length - 1;
    for(var i = 0; i < oct.toString().length; i++){
        dec += parseInt(oct.toString().substring(i, i + 1)) * Math.pow(8, j - i);
    }
    p3_2.innerHTML = `El número ${oct} en Decimal es ${dec}`;
    return;
}

function esOct(oct){
    for(var i = 0; i < oct.toString().length; i++){
        if(parseInt(oct.toString().substring(i, i + 1)) < 0 || parseInt(oct.toString().substring(i, i + 1)) > 7 || oct.toString().substring(i, i + 1) === "-"){
            return false;
        }
    }
    return true;
}

function decimalahexadecimal(event){
    event.preventDefault();
    const p4_1 = document.getElementById("paragraph4.1");
    const dec = parseInt(document.getElementById("decahex").value);
    if(isNaN(dec)){
        p4_1.innerHTML = "Ingrese un número válido";
        return;
    }
    if(dec < 0){
        p4_1.innerHTML = "Ingrese un número positivo";
        return;
    }
    let hex = "", num = dec;
    while(num > 0){
        switch(num % 16){
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
                hex = (num % 16).toString() + hex;
                break;
        }
        num = Math.trunc(num / 16);
    }
    p4_1.innerHTML = `El número ${dec} en Hexadecimal es ${hex}`;
    return;
}

function hexadecimaladecimal(event){
    event.preventDefault();
    const p4_2 = document.getElementById("paragraph4.2");
    const hex = document.getElementById("hexadec").value.toUpperCase();
    const ok = esHex(hex);
    if(!ok){
        p4_2.innerHTML = `El número ${hex} no es un número Hexadecimal, por favor ingrese un número Hexadecimal válido`;
        return;
    }
    let dec = 0, j = hex.length - 1;
    for(var i = 0; i < hex.length; i++){
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

function esHex(hex){
    let sum = 0;
    for(var i = 0; i < hex.length; i++){
        let val = hex.substring(i, i + 1);
        if(parseInt(val) >= 0 && parseInt(val) <= 9 || val === "A" || val === "B"|| val === "C" || val === "D" || val === "E"|| val === "F"){
            sum++;
        }
    }
    if(sum == hex.length){
        return true;
    }
    return false;
}

document.getElementById("Opciones").addEventListener("change", () => {
    ocultarFormularios();
    const opciones = document.getElementById("Opciones").value;
    mostrarFormulario(opciones);
    return;
})

function mostrarFormulario(opciones){
    const num = opciones.substring(opciones.length - 1, opciones.length);
    const form = `formularioOpcion${num}`;
    document.getElementById(form).style.display = "block";
    return;
}

function ocultarFormularios(){
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