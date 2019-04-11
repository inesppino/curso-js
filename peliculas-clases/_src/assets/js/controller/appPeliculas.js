'use strict';

function inicioApp(){
    model = new modeloPeliculas();
    
    model.saveMovie({id:"ABC-12345-AB",filmName:"Pulp Fiction",directorName:"Quentin Tarantino",genre:"Thriller",date:"1994-01-02",grade:8})

    showMoviesTable();
}
inicioApp();

function showMoviesTable(){
    const listaPeliculas = model.showMovies();
    //reseteo la tabla siempre
    const bodyTable = document.getElementById('table-body');
    bodyTable.innerHTML = "";
    for (let i=0; i < listaPeliculas.lentgh; i ++){
        bodyTable.appendChild(createLine(listaPeliculas[i]))
    }
}

function createLine(pelicula){
    const fila = document.createElement('tr');
    fila.id = pelicula.id;

    const celdafilmName = document.createElement('td');
    const textFilmName = document.createTextNode(pelicula.filmName);
    celdafilmName.appendChild(textFilmName);
    fila.appendChild(celdafilmName);

    const celdaDirectorName = document.createElement('td');
    const textDirectorName = document.createTextNode(pelicula.directorName);
    celdaDirectorName.appendChild(textDirectorName);
    fila.appendChild(celdaDirectorName);

    const idNumber = document.createElement('td');
    const textIdNumber = document.createTextNode(pelicula.idNumber);
    idNumber.appendChild(textIdNumber);
    fila.appendChild(idNumber);

    const genre = document.createElement('td');
    const textgenre = document.createTextNode(pelicula.genre);
    genre.appendChild(textgenre);
    fila.appendChild(genre);

    const publicationDate = document.createElement('td');
    const textPublicationDate = document.createTextNode(pelicula.publicationDate);
    publicationDate.appendChild(textPublicationDate);
    fila.appendChild(publicationDate);

    const grade = document.createElement('td');
    const textGrade = document.createTextNode(pelicula.grade);
    grade.appendChild(textGrade);
    fila.appendChild(grade);

    const btn = document.createElement('td');
    const btnModificar = document.createElement('button');
    const btnTextM = document.createTextNode('Modificar');
    btnModificar.appendChild(btnTextM);
    btnModificar.className = 'btn btn-modify';
    btnModificar.type = "button";
    btnModificar.setAttribute('data-name', pelicula.filmName);
    btnModificar.setAttribute('data-director', pelicula.directorName);
    btnModificar.setAttribute('data-id', pelicula.idNumber);
    btnModificar.setAttribute('data-genre', pelicula.genre);
    btnModificar.setAttribute('data-date', pelicula.publicationDate);
    btnModificar.setAttribute('data-grade', pelicula.grade);
    btnModificar.addEventListener('click', modificar);
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className = 'btn btn-eliminar';
    btnEliminar.type = "button";
    btnEliminar.addEventListener('click', eliminarFila);
    btnEliminar.setAttribute('data-id', pelicula.idNumber);
    btn.appendChild(btnEliminar);
    
    fila.appendChild(btn);

    myTable.appendChild(fila);

    return fila;
}