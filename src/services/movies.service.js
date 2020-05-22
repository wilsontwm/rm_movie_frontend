import { baseService } from './base.service';

export const moviesService = {
    getPopular, getNowPlaying, getTopRated, getUpcoming, getGenres
}

function getPopular(page) {
    let url = `${baseService.constants.apiUrl}/movie/popular`;
    let api_key = baseService.constants.apiKey;
    let params = {api_key, page};
    
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
    url = url + '?' + query;
    
    const requestOption = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(url, requestOption)
            .then(baseService.actions.handleResponse)
            .catch(baseService.actions.handleError);
}

function getNowPlaying(page) {
    let url = `${baseService.constants.apiUrl}/movie/now_playing`;
    let api_key = baseService.constants.apiKey;
    let params = {api_key, page};
    
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
    url = url + '?' + query;
    
    const requestOption = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(url, requestOption)
            .then(baseService.actions.handleResponse)
            .catch(baseService.actions.handleError);
}

function getTopRated(page) {
    let url = `${baseService.constants.apiUrl}/movie/top_rated`;
    let api_key = baseService.constants.apiKey;
    let params = {api_key, page};
    
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
    url = url + '?' + query;
    
    const requestOption = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(url, requestOption)
            .then(baseService.actions.handleResponse)
            .catch(baseService.actions.handleError);
}

function getUpcoming(page) {
    let url = `${baseService.constants.apiUrl}/movie/upcoming`;
    let api_key = baseService.constants.apiKey;
    let params = {api_key, page};
    
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
    url = url + '?' + query;
    
    const requestOption = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(url, requestOption)
            .then(baseService.actions.handleResponse)
            .catch(baseService.actions.handleError);
}

function getGenres() {
    let url = `${baseService.constants.apiUrl}/genre/movie/list`;
    let api_key = baseService.constants.apiKey;
    let params = {api_key};

    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');
    url = url + '?' + query;
    
    const requestOption = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(url, requestOption)
            .then(baseService.actions.handleResponse)
            .catch(baseService.actions.handleError);
}