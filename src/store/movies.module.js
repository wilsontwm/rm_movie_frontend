import { moviesService } from '../services/movies.service';
const state = {genres: [], selectedGenresID: []};

const actions = {
    async getGenres({commit}) {
        const response = await moviesService.getGenres();
        if(response.genres != undefined) {
            commit('setGenres', response.genres);
        }
    },
    selectGenres({commit}, {genres}) {
        commit('selectGenres', genres);
    },
    async getMovies({commit}, {search, page}) {
        var response = null;
        switch(search) {
            case "nowplaying":
                response = await moviesService.getNowPlaying(page);
                break;
            case "upcoming":
                response = await moviesService.getUpcoming(page);
                break;
            case "mostpopular":
                response = await moviesService.getPopular(page);
                break;
            case "toprated":
                response = await moviesService.getTopRated(page);
                break;
            default:
                response = await moviesService.getNowPlaying(page);
                break;
        }

        return response;
    }
}

const mutations = {
    setGenres(state, genres) {
        state.genres = genres;
    },
    selectGenres(state, genresIDs) {        
        state.selectedGenresID = genresIDs;
    }
}

export const moviesModule = {
    namespaced: true,
    state,
    actions,
    mutations
}