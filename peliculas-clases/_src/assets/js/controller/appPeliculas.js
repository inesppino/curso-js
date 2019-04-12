
function inicioApp() {
    model = new modeloPeliculas();
    
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            let datos = JSON.parse(ajax.response);
            for (let i = 0; i < datos.length; i++){
                model.saveMovie(datos[i]);
                console.log(datos[i]);
            }
            showMoviesTable();
        }
    
    }
    
    ajax.send();
    
    // model.saveMovie({ idNumber: "ABC-12345-AB", filmName: "Pulp Fiction", directorName: "Quentin Tarantino", genre: "Thriller", date: "2015-01-02", grade: 8 })
    // model.saveMovie({ idNumber: "CBA-12345-BA", filmName: "Inception", directorName: "Christopher Nolan", genre: "Fantasy", date: "2010-01-09", grade: 8 })
    
    
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
    fila.id = pelicula.codId;

    const idNumber = document.createElement('td');
    const textIdNumber = document.createTextNode(pelicula.codId);
    idNumber.appendChild(textIdNumber);
    fila.appendChild(idNumber);

    const celdafilmName = document.createElement('td');
    const textFilmName = document.createTextNode(pelicula.titulo);
    celdafilmName.appendChild(textFilmName);
    fila.appendChild(celdafilmName);

    const celdaDirectorName = document.createElement('td');
    const textDirectorName = document.createTextNode(pelicula.director);
    celdaDirectorName.appendChild(textDirectorName);
    fila.appendChild(celdaDirectorName);

    const genre = document.createElement('td');
    const textgenre = document.createTextNode(pelicula.genero);
    genre.appendChild(textgenre);
    fila.appendChild(genre);

    const publicationDate = document.createElement('td');
    const textPublicationDate = document.createTextNode(pelicula.fecha);
    publicationDate.appendChild(textPublicationDate);
    fila.appendChild(publicationDate);

    const grade = document.createElement('td');
    const textGrade = document.createTextNode(pelicula.valoracion);
    grade.appendChild(textGrade);
    fila.appendChild(grade);

    const btn = document.createElement('td');
    const btnModificar = document.createElement('button');
    const btnTextM = document.createTextNode('Modificar');
    btnModificar.appendChild(btnTextM);
    btnModificar.className = 'btn btn-modify';
    btnModificar.type = "button";
    btnModificar.setAttribute('data-name', pelicula.titulo);
    btnModificar.setAttribute('data-director', pelicula.director);
    btnModificar.setAttribute('data-id', pelicula.codId);
    btnModificar.setAttribute('data-genre', pelicula.genero);
    btnModificar.setAttribute('data-date', pelicula.fecha);
    btnModificar.setAttribute('data-grade', pelicula.valoracion);
    btnModificar.addEventListener('click', updateMovie);
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className = 'btn btn-eliminar';
    btnEliminar.type = "button";
    btnEliminar.addEventListener('click', deleteMovieButton);
    btnEliminar.setAttribute('data-id', pelicula.codId);
    btn.appendChild(btnEliminar);

    fila.appendChild(btn);

    return fila;
}

function saveMovieButton() {
    peli = new Pelicula();
    peli.titulo = filmName.value;
    peli.director = directorName.value;
    peli.codId = idNumber.value;
    peli.genero = genre.value;
    peli.fecha = publicationDate.value;
    peli.valoracion = grade.value;

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
    document.getElementById("idNumber").value = peli.codId;
    document.getElementById("filmName").value = peli.titulo;
    document.getElementById("directorName").value = peli.director;
    document.getElementById("genre").value = peli.genero;
    document.getElementById("publicationDate").value = peli.fecha;
    document.getElementById("grade").value = peli.valoracion;
   
}
