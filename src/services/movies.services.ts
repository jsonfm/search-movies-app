import type { Movie } from "./movies";

/**
 * A movies service for fetching data from OMDB
 */
export class MoviesService {
    url: string;
    constructor(
        protected urlbase: string = "https://www.omdbapi.com",
        protected key: string = "6efd9b42"
    ){
        this.url = `${this.urlbase}/?apikey=${key}`;
    }

    async searchMovie(name: string=""){
        const searchUrl = `${this.url}&s=${name}`;
        const response = await fetch(searchUrl).then<Movie[]>(res => res.json()).then(res => res["Search"]);
        return response;
    }
}