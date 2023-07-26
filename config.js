import axios from "axios";

let API_URL = 'https://api.thedogapi.com/v1';

const token = 'live_eEOOlQDczniSFGAKesfVN6nvXeyKkJztfsqTyD7ju4UVSnNYBdoGy8aZ6iBE1lyV';

axios.defaults.headers.common['x-api-key'] = token;

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getDogs = () => {
    return axios.get(`${API_URL}/breeds/`)
}

export const getDogDetailsByID = (id) => {
    return axios.get(`${API_URL}/breeds/${id}`)
}