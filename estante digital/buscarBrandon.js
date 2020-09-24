'use strict';

var arrayDeLibros = libro.split("/");

const generarLinkLibro = (titulo) => {
    let r = "";
    for(let i = 0; i < titulo.length; i++) {
        if(titulo[i] == " ")
            r += "-";
        else
            r += titulo[i].toLowerCase();
    }
    return r;
};

const buscarEditorial = (idEditorial) => {
    const arrayDeEditoriales = editorial.split("/");
    for(let editorial1 of arrayDeEditoriales) {
        let campos = editorial1.split(":");
        if(campos[0] == idEditorial)
            return campos[1];
    }
    return "Ninguna";
};

const buscarAutor = (idAutor) => {
    const arrayDeAutores = autor.split("/");
    for(let autor1 of arrayDeAutores) {
        let campos = autor1.split(":");
        if(campos[0] == idAutor)
            return "<a href='buscar-" + campos[1].toLowerCase() + ".html'>" + campos[1] + " " + campos[2] + "</a>";
    }
    return "Desconocido";
};

const buscarGenero = (idGenero) => {
    const arrayDeGeneros = genero.split("/");
    for(let genero1 of arrayDeGeneros) {
        let campos = genero1.split(":");
        if(campos[0] == idGenero)
            return "<a href='buscar-" + campos[1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") + ".html'>" + campos[1] + "</a>";
    }
    return "Desconocido";
};

const buscarTodo = () => {
    let filas = "";
    let impar = true;
    for(libro of arrayDeLibros) {
        let campos = libro.split(":");
        if(campos[3] == 2) {
        if(impar) {
            filas += "<tr style='background-color: #e1e5eb;'>";
            impar = false;
        } else {
            filas += "<tr>";
            impar = true;
        }
        filas += "<td><a href='" + generarLinkLibro(campos[1]) + ".html'>" + campos[1] + "</a>" + "</td>";
        filas += "<td>" + buscarAutor(campos[3]) + "</td>";
        filas += "<td>" + buscarGenero(campos[6]) + "</td>";
        filas += "<td>" + buscarEditorial(campos[2]) + "</td>";
        filas += "</tr>";
    }
    }
    document.getElementById("tablaBusqueda").innerHTML += filas;
};

buscarTodo();