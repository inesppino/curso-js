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
            const peliculas = this.getPeliculasFromLocalStorage();
            peliculas.push(pelicula);
            this.setPeliculasToLocalStorage(peliculas);
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
                //peliculaActual.fecha = new Date(peliculaActual.fecha);
                return peliculaElegida;
            }
        }
    }

    editMovie(pelicula) {
        const listaPeliculas = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPeliculas.length; i++) {
            let peliculaElegida = this.listaPeliculas[i];
            if (peliculaElegida.codId === pelicula.id) {
                pelicula.fecha = pelicula.fecha.toJSON()
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