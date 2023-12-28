function mostrarFormulario(opci){
    const div = opci.substring(opci.length - 1, opci.length);
    const num = `divOpcion${div}`;
    document.getElementById(num).style.display = "block";
    return;
}

function ocultarFormularios(){
    const select = document.getElementById("select");
    const numOpciones = select.options.length;
    for(let i = 1; i <= numOpciones; i++){
        const divs = `divOpcion${i}`;
        document.getElementById(divs).style.display = "none";
    }
    return;
}

document.getElementById("select").addEventListener("change", () =>{
    ocultarFormularios();
    const opci = document.getElementById("select").value;
    mostrarFormulario(opci);
    return;
})