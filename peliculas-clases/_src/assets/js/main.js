
class modeloPeliculas {

    constructor(){
        this.listaPeliculas = new Array();
    }

    saveMovie(pelicula){
        if(this.showMovies(pelicula.id) !== "undefined"){
            this.listaPeliculas.push(pelicula);
        }
    }

    showMovies(){
        return this.listaPeliculas;
    }

    showMovie(){
        for(let i = 0; i < this.listaPeliculas.length; i++){
            let peliculaElegida = this.listaPeliculas[i];
            if(peliculaElegida.id === id){
                return peliculaElegida;
            }
        }
    }

    editMovie(pelicula){
        for(let i=0; i < this.listaPeliculas.length; i++){
            let peliculaElegida = this.listaPeliculas[i];
            if(peliculaElegida.id === pelicula.id){
                peliculaElegida = pelicula;
                return true;
            }
        }
        return false;
    }

    deleteMovie(id){
        for (let i=0; i< this.listaPeliculas.length; i++){
            let peliculaElegida = this.listaPeliculas[i];
            if(peliculaElegida.id === id){
                return this.listaPeliculas.splice(i,1);
            }
        }
    }
}




// -------------------------------------------------------------




function inicioApp(){
    model = new modeloPeliculas();
    
    model.saveMovie({idNumber:"ABC-12345-AB",filmName:"Pulp Fiction",directorName:"Quentin Tarantino",genre:"Thriller",date:"",grade:8})
    model.saveMovie({idNumber:"CBA-12345-BA",filmName:"Inception",directorName:"Christopher Nolan",genre:"Fantasy",date:2010-01-09 ,grade:8})
    showMoviesTable();
}


function showMoviesTable(){
    var listaPeliculas = model.showMovies();
    //reseteo la tabla siempre
    const bodyTable = document.getElementById('table-body');
    //bodyTable.innerHTML = "";
    for (let i=0; i < listaPeliculas.length; i ++){
        bodyTable.appendChild(createLine(listaPeliculas[i]))
    }
}

function createLine(pelicula){
    console.log('holi');
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
    //btnModificar.addEventListener('click', modificar);
    btn.appendChild(btnModificar);

    const btnEliminar = document.createElement('button');
    const btnTextE = document.createTextNode('Eliminar');
    btnEliminar.appendChild(btnTextE);
    btnEliminar.className = 'btn btn-eliminar';
    btnEliminar.type = "button";
    //btnEliminar.addEventListener('click', eliminarFila);
    btnEliminar.setAttribute('data-id', pelicula.idNumber);
    btn.appendChild(btnEliminar);
    
    fila.appendChild(btn);

    console.log(fila);

    return fila;
}
