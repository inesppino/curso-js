'use strict';

const peliculas = []

const Film = {
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

function getFields() {
    const newFilm = {...Film};
    newFilm.filmName = filmName.value;
    newFilm.directorName = directorName.value;
    newFilm.idNumber = idNumber.value;
    newFilm.genre = genre.value;
    newFilm.publicationDate = publicationDate.value;
    newFilm.grade = grade.value;
    
    return newFilm;
}

function darDeAlta() {
    const jsonFilm = getFields();
    
    const fila = document.createElement('tr');
    fila.id = jsonFilm.idNumber;

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
    btnModificar.className = 'btn btn-modify';
    btnModificar.type = "button";
    btnModificar.setAttribute('data-name', jsonFilm.filmName);
    btnModificar.setAttribute('data-director', jsonFilm.directorName);
    btnModificar.setAttribute('data-id', jsonFilm.idNumber);
    btnModificar.setAttribute('data-genre', jsonFilm.genre);
    btnModificar.setAttribute('data-date', jsonFilm.publicationDate);
    btnModificar.setAttribute('data-grade', jsonFilm.grade);
    btnModificar.addEventListener('click', modificar);
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className = 'btn btn-eliminar';
    btnEliminar.type = "button";
    btnEliminar.addEventListener('click', eliminarFila);
    btnEliminar.setAttribute('data-id', jsonFilm.idNumber);
    btn.appendChild(btnEliminar);

    fila.appendChild(btn);

    myTable.appendChild(fila);

    peliculas.push(jsonFilm);
    console.log(peliculas);
}

const eliminarFila = (event) => {
    const culpable = event.currentTarget;
    const seleccionado = culpable.getAttribute('data-id');
    const fila = document.getElementById(seleccionado);
    myTable.removeChild(fila);
    for (let i = 0; i < peliculas.length; i++) {
        if (seleccionado === peliculas[i].idNumber) {
           peliculas.splice(i,1);
        }
    } 
}

const modificar = (event) => {
    const culpable = event.currentTarget;
    filmName.value = culpable.getAttribute('data-name');
    directorName.value = culpable.getAttribute('data-director');
    idNumber.value = culpable.getAttribute('data-id');
    genre.value = culpable.getAttribute('data-genre');
    publicationDate.value = culpable.getAttribute('data-date');
    grade.value = culpable.getAttribute('data-grade');
}

const btnM = document.querySelectorAll('.btn-modify');
for (let i = 0; i < btnM.length; i++) {
    btnM[i].addEventListener('click', modificar);
}

const btnE = document.querySelectorAll('.btn-eliminar');
for (let i = 0; i < btnE.length; i++) {
    btnE[i].addEventListener('click', eliminarFila);
}


// const celdaId = document.querySelector('.celdaId');
// const celdaFilm = document.querySelector('.celdaFilm');
// const celdaDirector = document.querySelector('.celdaDirector');
// const celdaGenre = document.querySelector('.celdaGenre');
// const celdaDate = document.querySelector('.celdaDate');
// const celdaBtn = document.querySelector('.celdaBtn');