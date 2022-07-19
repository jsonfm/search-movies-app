import type { Movie } from "./movies";

export class MoviesService {
    url: string;
    constructor(
        protected urlbase: string = "http://www.omdbapi.com",
        protected key: string = "6efd9b42"
    ){
        this.url = `${this.urlbase}/?apikey=${key}`;
    }

    get getUrl(){
        return this.url;
    }

    async searchMovie(name: string=""){
        const searchUrl = `${this.url}&s=${name}`;
        const response = await fetch(searchUrl).then<Movie[]>(res => res.json()).then(res => res["Search"]);
        return response;
    }
}