
function inicioApp() {
    model = new modeloPeliculas();

    
    // model.saveMovie({ idNumber: "ABC-12345-AB", filmName: "Pulp Fiction", directorName: "Quentin Tarantino", genre: "Thriller", date: "2015-01-02", grade: 8 })
    // model.saveMovie({ idNumber: "CBA-12345-BA", filmName: "Inception", directorName: "Christopher Nolan", genre: "Fantasy", date: "2010-01-09", grade: 8 })
    showMoviesTable();
    givedataFilm();
}

function givedataFilm(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","../../json/dataFilm.json");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            let datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
}

function showMoviesTable() {
    var listaPeliculas = model.showMovies();
    //reseteo la tabla siempre
    const bodyTable = document.getElementById('table-body');
    bodyTable.innerHTML = "";
    for (let i = 0; i < listaPeliculas.length; i++) {
        bodyTable.appendChild(createLine(listaPeliculas[i]))
    }
}

function createLine(pelicula) {
    const fila = document.createElement('tr');
    fila.id = pelicula.idNumber;

    const idNumber = document.createElement('td');
    const textIdNumber = document.createTextNode(pelicula.idNumber);
    idNumber.appendChild(textIdNumber);
    fila.appendChild(idNumber);

    const celdafilmName = document.createElement('td');
    const textFilmName = document.createTextNode(pelicula.filmName);
    celdafilmName.appendChild(textFilmName);
    fila.appendChild(celdafilmName);

    const celdaDirectorName = document.createElement('td');
    const textDirectorName = document.createTextNode(pelicula.directorName);
    celdaDirectorName.appendChild(textDirectorName);
    fila.appendChild(celdaDirectorName);

    const genre = document.createElement('td');
    const textgenre = document.createTextNode(pelicula.genre);
    genre.appendChild(textgenre);
    fila.appendChild(genre);

    const publicationDate = document.createElement('td');
    const textPublicationDate = document.createTextNode(pelicula.date);
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
    btnModificar.setAttribute('data-date', pelicula.date);
    btnModificar.setAttribute('data-grade', pelicula.grade);
    btnModificar.addEventListener('click', updateMovie);
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className = 'btn btn-eliminar';
    btnEliminar.type = "button";
    btnEliminar.addEventListener('click', deleteMovieButton);
    btnEliminar.setAttribute('data-id', pelicula.idNumber);
    btn.appendChild(btnEliminar);

    fila.appendChild(btn);

    return fila;
}

function saveMovieButton() {
    peli = new Pelicula();
    peli.filmName = filmName.value;
    peli.directorName = directorName.value;
    peli.idNumber = idNumber.value;
    peli.genre = genre.value;
    peli.date = publicationDate.value;
    peli.grade = grade.value;

    model.saveMovie(peli);

    showMoviesTable();
}

function deleteMovieButton(event) {
    const culpable = event.currentTarget;
    const seleccionado = culpable.getAttribute('data-id');
    model.deleteMovie(seleccionado);
    showMoviesTable();
}

function updateMovie(event) {
    const culpable = event.currentTarget;
    const seleccionado = culpable.getAttribute('data-id');
    reloadForm(model.showMovie(seleccionado));
}

function reloadForm(peli) {
    document.getElementById("idNumber").value = peli.idNumber;
    document.getElementById("filmName").value = peli.filmName;
    document.getElementById("directorName").value = peli.directorName;
    document.getElementById("genre").value = peli.genre;
    document.getElementById("publicationDate").value = peli.date;
    document.getElementById("grade").value = peli.grade;
   
}
