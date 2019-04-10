'use strict';

const jsonFilm = {
    "filmName": "",
    "directorName":"",
    "idNumber": "",
    "genre": "",
    "publicationDate":"",
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
    
    myTable.appendChild(fila);
}


