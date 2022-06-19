import {api} from "./api";

const getMovies = async (params) => {
    let url = "";
    const types = ["movie", "series", "episode"];
    if(params.searchText){
        url += `&s=${params.searchText}`
    }
    if(params.year){
        url += `&y=${params.year}`
    }
    if(params.type && types.includes(params.type)){
        url += `&type=${params.type}`
    }
    if(params.id){
        url += `&i=${params.id}`
    }
    return api.get({url: url})
}

export const movieService = {
    getMovies
}
