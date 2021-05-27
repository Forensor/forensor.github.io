'use strict';

const mostrarPagina = (nPagina) => {
    const arrayDePaginas = pagina.split("/");
    for(let pagina1 of arrayDePaginas) {
        let campos = pagina1.split(":");
        if(campos[0] == nPagina && campos[1] == 1 && campos[2] == 1)
            return campos[3];
    }
    return "No hay texto";
};

const formatearTexto = (texto) => {
    let r = "";
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "#")
            r += "<br>";
        else
            r += texto[i];
    }
    return r;
};

const anterior = () => {
    document.getElementById("pagina").innerHTML = formatearTexto(mostrarPagina(1));
}

const siguiente = () => {
    document.getElementById("pagina").innerHTML = formatearTexto(mostrarPagina(2));
}

document.getElementById("pagina").innerHTML = formatearTexto(mostrarPagina(1));