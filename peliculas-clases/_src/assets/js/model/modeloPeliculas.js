class modeloPeliculas {

    constructor() {
        if (localStorage.getItem("peliculas") == null) {
            localStorage.setItem("peliculas", JSON.stringify([]))
        }
        //this.listaPeliculas = new Array();
    }

    getPeliculasFromLocalStorage() {
        return JSON.parse(localStorage.getItem("peliculas"))
    }

    setPeliculasToLocalStorage(peliculas) {
        localStorage.setItem("peliculas", JSON.stringify(peliculas))
    }

    saveMovie(pelicula) {
        if (typeof this.showMovie(pelicula.codId) === "undefined") {
            //this.listaPeliculas.push(pelicula);
            const listaPeliculas = this.getPeliculasFromLocalStorage();
            pelicula.fecha = new Date(pelicula.fecha);
            listaPeliculas.push(pelicula);
            this.setPeliculasToLocalStorage(listaPeliculas);
        }
    }

    showMovies() {
        //return this.listaPeliculas;
        return this.getPeliculasFromLocalStorage();
    }

    showMovie(id) {
        const listaPeliculas = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPeliculas.length; i++) {
            let peliculaElegida = listaPeliculas[i];
            if (peliculaElegida.codId === id) {
                peliculaElegida.fecha = formatDate(peliculaElegida.fecha);
                return peliculaElegida;
            }
        }
    }

    editMovie(pelicula) {
        const listaPeliculas = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPeliculas.length; i++) {
            let peliculaElegida = listaPeliculas[i];
            if (peliculaElegida.codId == pelicula.codId) {
                pelicula.fecha = new Date(pelicula.fecha);
                listaPeliculas[i] = pelicula;
                this.setPeliculasToLocalStorage(listaPeliculas);
                return true;
            }
        }
        return false;
    }

    deleteMovie(id) {
        const listaPeliculas = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPeliculas.length; i++) {
            let peliculaElegida = listaPeliculas[i];
            if (peliculaElegida.codId === id) {
                const pelicula = listaPeliculas.splice(i, 1);
                this.setPeliculasToLocalStorage(listaPeliculas);
                return pelicula;
            }
        }
    }
}