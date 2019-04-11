
class modeloPeliculas {

    constructor(){
        this.listaPeliculas = new Array();
    }

    saveMovie(pelicula){
        if(this.showMovies(pelicula.id) === "undefined"){
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