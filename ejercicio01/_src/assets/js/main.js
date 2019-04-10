'use strict';

const Peliculas =[]

const jsonFilm = {
    "filmName": "",
    "directorName": "",
    "idNumber": "",
    "genre": "",
    "publicationDate": "",
    "grade": 5
};

const filmName = document.querySelector('#filmName');
const directorName = document.querySelector('#directorName');
const idNumber = document.querySelector('#idNumber');
const genre = document.querySelector('#genre');
const publicationDate = document.querySelector('#publicationDate');
const grade = document.querySelector('#grade');
const submitBtn = document.querySelector('.btn-submit');
const myTable = document.getElementById("table-body");

function getFields (){
    jsonFilm.filmName = filmName.value;
    jsonFilm.directorName = directorName.value;
    jsonFilm.idNumber = idNumber.value;
    jsonFilm.genre = genre.value;
    jsonFilm.publicationDate = publicationDate.value;
    jsonFilm.grade = grade.value;
}

function darDeAlta (){
    const fila = document.createElement('tr');
    fila.className = jsonFilm.idNumber;

    const celdafilmName = document.createElement('td');
    const textFilmName = document.createTextNode(jsonFilm.filmName);
    celdafilmName.appendChild(textFilmName);
    fila.appendChild(celdafilmName);

    const celdaDirectorName = document.createElement('td');
    const textDirectorName = document.createTextNode(jsonFilm.directorName);
    celdaDirectorName.appendChild(textDirectorName);
    fila.appendChild(celdaDirectorName);

    const idNumber = document.createElement('td');
    const textIdNumber = document.createTextNode(jsonFilm.idNumber);
    idNumber.appendChild(textIdNumber);
    fila.appendChild(idNumber);

    const genre = document.createElement('td');
    const textgenre = document.createTextNode(jsonFilm.genre);
    genre.appendChild(textgenre);
    fila.appendChild(genre);

    const publicationDate = document.createElement('td');
    const textPublicationDate = document.createTextNode(jsonFilm.publicationDate);
    publicationDate.appendChild(textPublicationDate);
    fila.appendChild(publicationDate);

    const grade = document.createElement('td');
    const textGrade = document.createTextNode(jsonFilm.grade);
    grade.appendChild(textGrade);
    fila.appendChild(grade);

    const btn = document.createElement('td');
    const btnModificar = document.createElement('button');
    const btnTextM = document.createTextNode('Modificar');
    btnModificar.appendChild(btnTextM);
    btnModificar.className='btn btn-modify';
    btnModificar.type="button";
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className='btn btn-eliminar';
    btnEliminar.type="button";
    btnEliminar.setAttribute('dataId', jsonFilm.idNumber);
    btn.appendChild(btnEliminar);

    fila.appendChild(btn);

    myTable.appendChild(fila);

    Peliculas.push(jsonFilm);
    console.log(Peliculas);
}

function eliminarFila(){
    //const seleccionado = document.querySelector(".ABC-12539-BA");
    var guilty = document.querySelector('.btn-eliminar');
    var seleccionado = guilty.getAttribute('data-id');
    //myTable.removeChild(seleccionado);
    console.log(guilty);
    console.log(seleccionado);
}


// const celdaId = document.querySelector('.celdaId');
// const celdaFilm = document.querySelector('.celdaFilm');
// const celdaDirector = document.querySelector('.celdaId');
// const celdaGenre = document.querySelector('.celdaId');
// const celdaDate = document.querySelector('.celdaId');
// const celdaBtn = document.querySelector('.celdaBtn');