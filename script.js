function azar(){
    var random, num;
    random = Math.floor(Math.random() * 100) + 1;
    alert("Bienvenido a este increíble juego de adivinar números");
    alert("Tu objetivo será adivinar el número que se ha escogido aleatoramiente en un intervalo del 1 al 100 y, además, solo números enteros");
    alert("Contarás con solo 10 intentos, así que buena suerte Bv");
    let i = 1;
    do{
        num = parseInt(prompt("Ingresa el número que crees que es el correcto (este es tu intento " + i + ")"));
        if(num > random){
            if(i != 10){
                alert("El número ingresado es mayor que el que hay que adivinar");
            }else{
                alert("Lo siento, no has adivinado. El número era: " + random + ". Suerte para la próxima amigo ;)");
            }
        }else if(num < random){
            if(i != 10){
                alert("El número ingresado es menor que el que hay que adivinar");
            }else{
                alert("Lo siento, no has adivinado. El número era: " + random + ". Suerte para la próxima amigo ;)");
            }
        }else if(num == random){
            alert("¡Felicidades, has adivinado el número en un total de " + i + " intentos! :D");
        }else{
            alert("Ingresa un número, no una cadena");
            i--;
        }
        i++;
    }while(i <= 10 && num != random);
    prompt("Presione enter para salir");
}

function zoologico(){
    var cat1 = 0, cat2 = 0, cat3 = 0, i, edad, porce, animal;
    do{
        animal = prompt("Ingrese la categoría del animal (elefante, jirafa o chimpancé)");
        animal = animal.toLowerCase();
        if(animal != "elefante" && animal != "jirafa" && animal != "chimpance"){
            alert("Ingrese un animal válido");
        }
    }while(animal != "elefante" && animal != "jirafa" && animal != "chimpance");
    switch(animal){
        case "elefante":
            for(i = 1; i <= 20; i++){
                do{
                    edad = parseFloat(prompt("Ingrese la edad del " + animal + " número " + i));
                    if(edad < 0){
                        alert("Ingresa un edad válida");
                    }else if(edad >= 0 && edad <= 1){
                        cat1++;
                    }else if(edad > 1 && edad < 3){
                        cat2++;
                    }else if(edad >= 3){
                        cat3++;
                    }else{
                        alert("Ingrese un número, no una cadena");
                        i--;
                    }
                }while(edad < 0);
                if(i == 20){
                    porce = cat1 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 1 es del: " + porce + "%");
                    porce = cat2 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 2 es del: " + porce + "%");
                    porce = cat3 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 3 es del: " + porce + "%");
                }
            }
            break;
        case "jirafa":
            for(i = 1; i <= 15; i++){
                do{
                    edad = parseFloat(prompt("Ingrese la edad de la " + animal + " número " + i));
                    if(edad < 0){
                        alert("Ingresa un edad válida");
                    }else if(edad >= 0 && edad <= 1){
                        cat1++;
                    }else if(edad > 1 && edad < 3){
                        cat2++;
                    }else if(edad >= 3){
                        cat3++;
                    }else{
                        alert("Ingrese un número, no una cadena");
                        i--;
                    }
                }while(edad < 0);
                if(i == 15){
                    porce = cat1 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 1 es del: " + porce + "%");
                    porce = cat2 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 2 es del: " + porce + "%");
                    porce = cat3 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 3 es del: " + porce + "%");
                }
            }
            break;
        case "chimpance":
            for(i = 1; i <= 40; i++){
                do{
                    edad = parseFloat(prompt("Ingrese la edad del " + animal + " número " + i));
                    if(edad < 0){
                        alert("Ingresa un edad válida");
                    }else if(edad >= 0 && edad <= 1){
                        cat1++;
                    }else if(edad > 1 && edad < 3){
                        cat2++;
                    }else if(edad >= 3){
                        cat3++;
                    }else{
                        alert("Ingrese un número, no una cadena");
                        i--;
                    }
                }while(edad < 0);
                if(i == 40){
                    porce = cat1 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 1 es del: " + porce + "%");
                    porce = cat2 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 2 es del: " + porce + "%");
                    porce = cat3 / i * 100;
                    alert("El porcentaje de " + animal + "s que están dentro de la categoría 3 es del: " + porce + "%");
                }
            }
            break;
    }
}

function decimalabinarioyviceversa(){
    var num, op, accion, ok, j, n, long, sum, num2, binario, base, residuo;
    do{
        do{
            alert("¿Qué operación desea hacer?");
            op = parseInt(prompt("1 para convertir de Decimal a Binario \n2 para convertir de Binario a Decimal"));
            switch(op){
            case 1:
                do{
                    num = parseInt(prompt("Ingrese el número que desea convertir a Binario"));
                    if(num < 0){
                        alert("Ingrese un número positivo");
                    }
                }while(num < 0);
                num2 = num;
                binario = 0;
                base = 1;
                while(num2 > 0){
                    residuo = num2 % 2;
                    binario += (residuo * base);
                    num2 = Math.trunc(num2 / 2);
                    base *= 10;
                }
                alert("El número " + num + " en Binario es: " + binario);
                break;
            case 2:
                ok = false;
                do{
                    sum = 0;
                    num = parseInt(prompt("Ingresa el número que desea convertir a Decimal"));
                    long = String(num).length;
                    for(n = 0; n < long; n++){
                        if(parseInt(String(num).substring(n, n + 1)) == 0 || parseInt(String(num).substring(n, n + 1)) == 1){
                            sum++;    
                        }else{
                            alert("Ingrese un número en Binario válido");
                            break;
                        }
                    }
                    if(sum == long){
                        ok = true;
                    }
                }while(!ok);
                sum = 0;
                j = long - 1;
                for(n = 0; n < long; n++){
                    sum += parseInt(String(num).substring(n, n + 1)) * Math.pow(2, (j - n));
                }
                alert("El número "+ num + " en Decimal es: " + sum);
                break;
            default:
                alert("Ingrese una opción válida");
                break;
            }
        }while(op != 1 && op != 2);
        accion = prompt("¿Desea realizar alguna otra operación? S/N");
        accion = accion.toUpperCase();
    }while(accion == "S");
}

function decimalaoctalyviceversa(){
    var num, op, accion, ok, j, n, long, sum, num2, octal, base, residuo;
    do{
        do{
            alert("¿Qué operación desea hacer?");
            op = parseInt(prompt("1 para convertir de Decimal a Octal \n2 para convertir de Octal a Decimal"));
            switch(op){
            case 1:
                do{
                    num = parseInt(prompt("Ingrese el número que desea convertir a Octal"));
                    if(num < 0){
                        alert("Ingrese un número positivo");
                    }
                }while(num < 0);
                num2 = num;
                octal = 0;
                base = 1;
                while(num2 > 0){
                    residuo = num2 % 8;
                    octal += (residuo * base);
                    num2 = Math.trunc(num2 / 8);
                    base *= 10;
                }
                alert("El número " + num + " en Octal es: " + octal);
                break;
            case 2:
                ok = false;
                do{
                    sum = 0;
                    num = parseInt(prompt("Ingresa el número que desea convertir a Decimal"));
                    long = String(num).length;
                    for(n = 0; n < long; n++){
                        if(parseInt(String(num).substring(n, n + 1)) >= 0 && parseInt(String(num).substring(n, n + 1)) <= 7){
                            sum++;
                        }else{
                            alert("Ingrese un número en Octal válido");
                            break;
                        }
                    }
                    if(sum == long){
                        ok = true;
                    }
                }while(!ok);
                sum = 0;
                j = long - 1;
                for(n = 0; n < long; n++){
                    sum += parseInt(String(num).substring(n, n + 1)) * Math.pow(8, (j - n));
                }
                alert("El número "+ num + " en Decimal es: " + sum);
                break;
            default:
                alert("Ingrese una opción válida");
                break;
            }
        }while(op != 1 && op != 2);
        accion = prompt("¿Desea realizar alguna otra operación? S/N");
        accion = accion.toUpperCase();
    }while(accion == "S");
}

function decimalahexadecimalyviceversa(){
    var num, op, accion, ok, j, n, long, sum, num2, hexa;
    do{
        do{
            alert("¿Qué operación desea hacer?");
            op = parseInt(prompt("1 para convertir de Decimal a Hexadecimal \n2 para convertir de Hexadecimal a Decimal"));
            switch(op){
            case 1:
                do{
                    num = parseInt(prompt("Ingrese el número que desea convertir a Hexadecimal"));
                    if(num < 0){
                        alert("Ingrese un número positivo");
                    }
                }while(num < 0);
                num2 = num;
                hexa = "";
                while(num2 > 0){
                    switch(num2 % 16){
                    case 10:
                        hexa = "A" + hexa;
                        break;
                    case 11:
                        hexa = "B" + hexa;
                        break;
                    case 12:
                        hexa = "C" + hexa;
                        break;
                    case 13:
                        hexa = "D" + hexa;
                        break;
                    case 14:
                        hexa = "E" + hexa;
                        break;
                    case 15:
                        hexa = "F" + hexa;
                        break;
                    default:
                        hexa = String(num2 % 16) + hexa;
                        break;
                    }
                    num2 = Math.trunc(num2 / 16);
                }
                alert("El número "+ num + " en Hexadecimal es: " + hexa);
                break;
            case 2:
                ok = false;
                do{
                    sum = 0;
                    num = prompt("Ingresa el número que desea convertir a Decimal");
                    long = num.length;
                    for(n = 0; n < long; n++){
                        if(parseInt(num.substring(n, n + 1)) >= 0 && parseInt(num.substring(n, n + 1)) <= 9 || num.substring(n, n + 1) == "A" || num.substring(n, n + 1) == "B" || num.substring(n, n + 1) == "C" || num.substring(n, n + 1) == "D" || num.substring(n, n + 1) == "E" || num.substring(n, n + 1) == "F"){
                            sum++;
                        }else{
                            alert("Ingrese un número en Hexadecimal válido");
                            break;
                        }
                    }
                    if(sum == long){
                        ok = true;
                    }
                }while(!ok);
                sum = 0;
                j = long - 1;
                for(n = 0; n < long; n++){
                    switch(num.substring(n, n + 1)){
                    case "A":
                        sum += (10 * Math.pow(16, (j - n)));
                        break;
                    case "B":
                        sum += (11 * Math.pow(16, (j - n)));
                        break;
                    case "C":
                        sum += (12 * Math.pow(16, (j - n)));
                        break;
                    case "D":
                        sum += (13 * Math.pow(16, (j - n)));
                        break;
                    case "E":
                        sum += (14 * Math.pow(16, (j - n)));
                        break;
                    case "F":
                        sum += (15 * Math.pow(16, (j - n)));
                        break;
                    default:
                        sum += (parseInt(num.substring(n, n + 1)) * Math.pow(16, (j-n)));
                        break;
                    }
                }
                alert("El número " + num + " en Decimal es: " + sum);
                break;
            default:
                alert("Ingrese una opción válida");
                break;
            }
        }while(op != 1 && op != 2);
        accion = prompt("¿Desea realizar alguna otra operación? S/N");
        accion = accion.toUpperCase();
    }while(accion == "S");
}

function ATM(){
    var dine, depo, reti, accion, op;
    dine = 0;
    do{
        alert("Bienvenido al cajero automático, ¿qué le gustaría hacer?");
        do{
            op= parseInt(prompt("Presione 1 para depositar dinero \nPresione 2 para retirar dinero \nPresione 3 para consultar su saldo"));
            switch(op){
            case 1: 
                do{
                    depo = parseFloat(prompt("¿Cuánto dinero va a depositar"));
                    if(depo <= 0){
                        alert("Ingrese una cantidad de dinero válida");
                    }else{
                        dine += depo;
                        alert("Depósito realizado con éxito");
                    }
                }while(depo <= 0);
                break;
            case 2:
                do{
                    reti = parseFloat(prompt("¿Cuánto dinero va a retirar?"));
                    if(reti <= 0){
                        alert("Ingrese una cantidad de dinero válida")
                    }else if(reti > dine){
                        alert("La cantidad a retirar excede a la disponible, deposite más dinero antes o retire una cantidad menor de dinero");
                    }else{
                        dine -= reti;
                        alert("Dinero retirado con éxito");
                    }
                }while(reti <= 0);
                break;
            case 3:
                alert("Su saldo actual es de: $" + dine);
                break;
            default:
                alert("Opción inválida, ingrese otra opción");
                break;
            }
        }while(!(op >= 1 && op <= 3));
        accion = prompt("¿Deseas realizar alguna otra operación? S/N");
        accion = accion.toUpperCase();
    }while(accion == "S");
    alert("Que tenga un lindo día ;)");
}