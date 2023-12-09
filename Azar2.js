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

function chapiza(){
    alert("Pura cha🍕 y no mmds >:3");
    let chapiza = ["El chelo", "Javavier", "Chico baldao", "Chico casino", "Tilín mayor", "Chico backend", "Macuspana"];
    alert("Los integrantes de la cha🍕 que sí importan (XD) son:")
    for(let i = 0; i < chapiza.length; i++){
        alert(chapiza[i]);
    }
}

function ingendros(){
    alert("Hola papus, saquen Roblox");
    alert("Un the mimic o khe Bv");
    for(let i = 1; i <= 5; i++){
        alert("Saquen Roblox papus");
    }
}

function chelito(){
    alert("Hola Chelo, tqm (*/ω＼*)");
}